# Static Contact Form (PHP Endpoint)

This project supports static export (`out/`) while keeping the contact form working via a small PHP endpoint.

## What Gets Deployed

- Static site: contents of `out/`
- Contact endpoint: `out/contact-submit.php`

The browser form will automatically fall back to `/contact-submit.php` if `/api/contact` is not available.

## Secure Config (Recommended)

1. On your server, identify your web docroot:
   - Example: `/home/<user>/public_html/`
2. Create a file *outside* docroot:
   - Example: `/home/<user>/.contact-config.php`
3. Use this template:
   - Copy `.contact-config.php.example` and set real values.

This keeps SMTP credentials out of the public web root and out of git.

## Optional Hardening

- Set `"CONTACT_ALLOWED_HOSTS"` to your real domain(s).
- Set `"CONTACT_ENFORCE_ORIGIN" => "true"` to block off-site POSTs.

