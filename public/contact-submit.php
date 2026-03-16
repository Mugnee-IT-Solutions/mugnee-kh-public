<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store, max-age=0');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode([
    'ok' => false,
    'message' => 'Method not allowed. Use POST for contact submissions.',
  ]);
  exit;
}

function json_response(int $status, array $payload): void {
  http_response_code($status);
  echo json_encode($payload);
  exit;
}

function clean($value, int $maxLen = 1000): string {
  $s = trim((string)($value ?? ''));
  $s = preg_replace('/\s+/', ' ', $s) ?? $s;
  if (strlen($s) > $maxLen) $s = substr($s, 0, $maxLen);
  return $s;
}

function count_digits(string $s): int {
  preg_match_all('/\d/', $s, $m);
  return count($m[0] ?? []);
}

function client_ip(): string {
  $h = function($k) { return isset($_SERVER[$k]) ? trim((string)$_SERVER[$k]) : ''; };
  $xff = $h('HTTP_X_FORWARDED_FOR');
  if ($xff !== '') {
    $parts = explode(',', $xff);
    $ip = trim($parts[0] ?? '');
    if ($ip !== '') return $ip;
  }
  foreach (['HTTP_CF_CONNECTING_IP','HTTP_X_REAL_IP','REMOTE_ADDR'] as $k) {
    $v = $h($k);
    if ($v !== '') return $v;
  }
  return 'unknown';
}

function request_host(): string {
  $host = isset($_SERVER['HTTP_HOST']) ? trim((string)$_SERVER['HTTP_HOST']) : '';
  $host = strtolower($host);
  $host = preg_replace('/:\d+$/', '', $host) ?? $host;
  return $host;
}

function parse_host_from_url(string $url): string {
  $u = @parse_url($url);
  $host = is_array($u) && isset($u['host']) ? (string)$u['host'] : '';
  $host = strtolower(trim($host));
  $host = preg_replace('/:\d+$/', '', $host) ?? $host;
  return $host;
}

function is_allowed_host(string $host, array $allowedHosts): bool {
  if ($host === '') return false;
  foreach ($allowedHosts as $h) {
    $h = strtolower(trim((string)$h));
    if ($h === '') continue;
    if ($host === $h) return true;
  }
  return false;
}

function rate_limited(string $key, int $windowMs, int $maxRequests): bool {
  $dir = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'mugnee_contact_rate';
  if (!is_dir($dir)) @mkdir($dir, 0700, true);

  $file = $dir . DIRECTORY_SEPARATOR . hash('sha256', $key) . '.json';
  $now = (int)(microtime(true) * 1000);
  $windowStart = $now - $windowMs;

  $fh = @fopen($file, 'c+');
  if ($fh === false) return false; // fail-open

  $limited = false;
  if (@flock($fh, LOCK_EX)) {
    $raw = stream_get_contents($fh);
    $data = is_string($raw) && $raw !== '' ? json_decode($raw, true) : null;
    if (!is_array($data)) $data = ['hits' => []];
    $hits = is_array($data['hits'] ?? null) ? $data['hits'] : [];

    $newHits = [];
    foreach ($hits as $t) {
      $ti = (int)$t;
      if ($ti >= $windowStart) $newHits[] = $ti;
    }
    $newHits[] = $now;
    if (count($newHits) > $maxRequests) $limited = true;

    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode(['hits' => $newHits]));
    fflush($fh);
    @flock($fh, LOCK_UN);
  }
  fclose($fh);

  return $limited;
}

function smtp_read($fp): string {
  $data = '';
  while (!feof($fp)) {
    $line = fgets($fp, 515);
    if ($line === false) break;
    $data .= $line;
    // Multi-line replies have a hyphen after the status code.
    if (preg_match('/^\d{3} /', $line)) break;
  }
  return $data;
}

function smtp_cmd($fp, string $cmd, array $expectCodes): string {
  fwrite($fp, $cmd . "\r\n");
  $resp = smtp_read($fp);
  $code = (int)substr($resp, 0, 3);
  if (!in_array($code, $expectCodes, true)) {
    throw new Exception('SMTP error ' . $code . ': ' . trim($resp));
  }
  return $resp;
}

function smtp_send_mail(array $cfg, array $mail): void {
  $host = $cfg['SMTP_HOST'] ?? '';
  $port = (int)($cfg['SMTP_PORT'] ?? 465);
  $secure = (string)($cfg['SMTP_SECURE'] ?? 'true') === 'true';
  $user = $cfg['SMTP_USER'] ?? '';
  $pass = $cfg['SMTP_PASS'] ?? '';

  if ($host === '' || $user === '' || $pass === '') {
    throw new Exception('Mail server is not configured.');
  }

  $transport = $secure ? 'ssl' : 'tcp';
  $remote = $transport . '://' . $host . ':' . $port;
  $ctx = stream_context_create([
    'ssl' => [
      'verify_peer' => false,
      'verify_peer_name' => false,
      'allow_self_signed' => true,
    ],
  ]);
  $fp = @stream_socket_client($remote, $errno, $errstr, 12, STREAM_CLIENT_CONNECT, $ctx);
  if ($fp === false) {
    throw new Exception('SMTP connect failed: ' . $errstr . ' (' . $errno . ')');
  }
  stream_set_timeout($fp, 12);

  $greet = smtp_read($fp);
  if ((int)substr($greet, 0, 3) !== 220) {
    fclose($fp);
    throw new Exception('SMTP greeting failed.');
  }

  smtp_cmd($fp, 'EHLO mugneekh.com', [250]);

  // AUTH LOGIN
  smtp_cmd($fp, 'AUTH LOGIN', [334]);
  smtp_cmd($fp, base64_encode($user), [334]);
  smtp_cmd($fp, base64_encode($pass), [235]);

  $from = $mail['from'];
  $to = $mail['to'];
  $replyTo = $mail['replyTo'];

  smtp_cmd($fp, 'MAIL FROM:<' . $from . '>', [250]);
  smtp_cmd($fp, 'RCPT TO:<' . $to . '>', [250, 251]);
  smtp_cmd($fp, 'DATA', [354]);

  $subject = $mail['subject'];
  $body = $mail['body'];

  $headers = [];
  $headers[] = 'From: <' . $from . '>';
  $headers[] = 'To: <' . $to . '>';
  $headers[] = 'Reply-To: <' . $replyTo . '>';
  $headers[] = 'Subject: ' . $subject;
  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-Type: text/plain; charset=UTF-8';
  $headers[] = 'Content-Transfer-Encoding: 8bit';
  $headers[] = 'Date: ' . gmdate('D, d M Y H:i:s') . ' +0000';

  $data = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n";
  // End DATA with <CRLF>.<CRLF>
  fwrite($fp, $data . "\r\n.\r\n");
  $resp = smtp_read($fp);
  $code = (int)substr($resp, 0, 3);
  if ($code !== 250) {
    fclose($fp);
    throw new Exception('SMTP send failed: ' . trim($resp));
  }

  // Quit politely
  try { smtp_cmd($fp, 'QUIT', [221]); } catch (Exception $e) {}
  fclose($fp);
}

// Load optional external config (recommended: outside docroot).
$cfg = [];
$cfgPath = getenv('CONTACT_CONFIG_PATH');
if (!$cfgPath) {
  // If docroot is .../public_html/, put config at .../.contact-config.php
  $cfgPath = realpath(__DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '.contact-config.php') ?: '';
}
if ($cfgPath && is_file($cfgPath)) {
  $loaded = include $cfgPath;
  if (is_array($loaded)) $cfg = $loaded;
}

// Env overrides (if your panel supports them)
foreach (['SMTP_HOST','SMTP_PORT','SMTP_SECURE','SMTP_USER','SMTP_PASS','CONTACT_TO_EMAIL','CONTACT_FROM_EMAIL'] as $k) {
  $v = getenv($k);
  if ($v !== false && $v !== '') $cfg[$k] = $v;
}

$allowedHostsRaw = (string)($cfg['CONTACT_ALLOWED_HOSTS'] ?? '');
$allowedHosts = array_values(array_filter(array_map('trim', explode(',', $allowedHostsRaw))));
if (count($allowedHosts) === 0) {
  // Safe defaults for local testing; set CONTACT_ALLOWED_HOSTS in production.
  $allowedHosts = ['mugneekh.com', 'www.mugneekh.com', 'localhost', '127.0.0.1'];
}
$enforceOrigin = (string)($cfg['CONTACT_ENFORCE_ORIGIN'] ?? 'false') === 'true';

if ($enforceOrigin) {
  $origin = isset($_SERVER['HTTP_ORIGIN']) ? (string)$_SERVER['HTTP_ORIGIN'] : '';
  $referer = isset($_SERVER['HTTP_REFERER']) ? (string)$_SERVER['HTTP_REFERER'] : '';

  $originHost = $origin !== '' ? parse_host_from_url($origin) : '';
  $refererHost = $referer !== '' ? parse_host_from_url($referer) : '';
  $host = request_host();

  $ok =
    ($originHost !== '' && is_allowed_host($originHost, $allowedHosts)) ||
    ($refererHost !== '' && is_allowed_host($refererHost, $allowedHosts)) ||
    ($host !== '' && is_allowed_host($host, $allowedHosts));

  if (!$ok) {
    json_response(403, [
      'ok' => false,
      'message' => 'Forbidden.',
    ]);
  }
}

$raw = file_get_contents('php://input');
$rawLen = is_string($raw) ? strlen($raw) : 0;
if ($rawLen > 25_000) {
  json_response(413, [
    'ok' => false,
    'message' => 'Payload too large.',
  ]);
}
$json = json_decode(is_string($raw) ? $raw : '', true);
if (!is_array($json)) $json = $_POST;

$name = clean($json['name'] ?? '', 120);
$email = strtolower(clean($json['email'] ?? '', 180));
$phone = clean($json['phone'] ?? '', 50);
$subject = clean($json['subject'] ?? '', 180);
$message = clean($json['message'] ?? '', 4000);
$website = clean($json['website'] ?? '', 180);

// Hidden honeypot: bots often fill this.
if ($website !== '') {
  json_response(400, [
    'ok' => false,
    'message' => 'Unable to process submission.',
    'fieldErrors' => (object)[],
  ]);
}

$fieldErrors = [];
if (strlen($name) < 2) $fieldErrors['name'] = 'Name must be at least 2 characters.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $fieldErrors['email'] = 'Enter a valid email address.';
if ($phone === '' || !preg_match('/^[+]?[\d\s().-]{7,20}$/', $phone) || count_digits($phone) < 7) {
  $fieldErrors['phone'] = 'Enter a valid phone number.';
}
if (strlen($subject) < 3) $fieldErrors['subject'] = 'Subject must be at least 3 characters.';
if (strlen($message) < 10) $fieldErrors['message'] = 'Message must be at least 10 characters.';

if (count($fieldErrors) > 0) {
  json_response(400, [
    'ok' => false,
    'message' => 'Please correct the highlighted fields and try again.',
    'fieldErrors' => $fieldErrors,
  ]);
}

// Basic rate limit (fail-open). Tune via config/env.
$windowMs = (int)($cfg['CONTACT_RATE_LIMIT_WINDOW_MS'] ?? (10 * 60 * 1000));
$maxReq = (int)($cfg['CONTACT_RATE_LIMIT_MAX'] ?? 5);
$ua = isset($_SERVER['HTTP_USER_AGENT']) ? (string)$_SERVER['HTTP_USER_AGENT'] : 'unknown';
$rateKey = client_ip() . '|' . substr($ua, 0, 120);
if (rate_limited($rateKey, $windowMs, $maxReq)) {
  json_response(429, [
    'ok' => false,
    'message' => 'Too many requests. Please try again later.',
  ]);
}

$toEmail = $cfg['CONTACT_TO_EMAIL'] ?? ($cfg['SMTP_USER'] ?? '');
$fromEmail = $cfg['CONTACT_FROM_EMAIL'] ?? ($cfg['SMTP_USER'] ?? '');

$body =
  "New contact form submission\n\n" .
  "Name: {$name}\n" .
  "Email: {$email}\n" .
  "Phone: {$phone}\n" .
  "Subject: {$subject}\n\n" .
  "Message:\n{$message}\n";

try {
  smtp_send_mail($cfg, [
    'from' => $fromEmail,
    'to' => $toEmail,
    'replyTo' => $email,
    'subject' => "[Contact Form] {$subject}",
    'body' => $body,
  ]);

  json_response(200, ['ok' => true, 'message' => 'Message sent successfully.']);
} catch (Exception $e) {
  json_response(500, ['ok' => false, 'message' => 'Unable to send message right now.']);
}
