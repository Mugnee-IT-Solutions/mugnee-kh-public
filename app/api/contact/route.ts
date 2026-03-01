import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-static";
export const revalidate = false;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  website?: string;
  turnstileToken?: string;
};

type ValidContactData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof ValidContactData, string>>;

type ValidationResult =
  | { ok: false; message: string; fieldErrors: FieldErrors }
  | { ok: true; data: ValidContactData };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[\d\s().-]{7,20}$/;
const RATE_WINDOW_MS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS || 10 * 60 * 1000);
const RATE_MAX_REQUESTS = Number(process.env.CONTACT_RATE_LIMIT_MAX || 5);

type RateBucket = { count: number; resetAt: number };
const rateBuckets = new Map<string, RateBucket>();
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

function clean(value: unknown, max = 1000) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, max);
}

function countDigits(value: string) {
  return (value.match(/\d/g) || []).length;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return (
    req.headers.get("x-real-ip") ||
    req.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function getRateKey(req: Request) {
  const ip = getClientIp(req);
  const ua = req.headers.get("user-agent") || "unknown";
  return `${ip}|${ua.slice(0, 120)}`;
}

function isRateLimited(key: string, now = Date.now()) {
  const current = rateBuckets.get(key);
  if (!current || now > current.resetAt) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (current.count >= RATE_MAX_REQUESTS) return true;
  current.count += 1;
  rateBuckets.set(key, current);
  return false;
}

async function isRateLimitedUpstash(key: string) {
  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) return null;

  const redisKey = `contact-rate:${key}`;
  const ttlSeconds = Math.max(1, Math.floor(RATE_WINDOW_MS / 1000));

  const body = JSON.stringify([
    ["INCR", redisKey],
    ["EXPIRE", redisKey, ttlSeconds, "NX"],
  ]);

  const res = await fetch(`${UPSTASH_REDIS_REST_URL}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body,
    cache: "no-store",
  });

  if (!res.ok) return null;

  const json = (await res.json()) as Array<{ result?: number }>;
  const count = Number(json?.[0]?.result ?? 0);
  if (!Number.isFinite(count) || count <= 0) return null;
  return count > RATE_MAX_REQUESTS;
}

async function isRateLimitedSafe(key: string) {
  try {
    const upstashLimited = await isRateLimitedUpstash(key);
    if (upstashLimited !== null) return upstashLimited;
  } catch {}
  return isRateLimited(key);
}

async function verifyTurnstileToken(req: Request, token: string) {
  const formData = new URLSearchParams();
  formData.set("secret", TURNSTILE_SECRET_KEY as string);
  formData.set("response", token);
  const ip = getClientIp(req);
  if (ip && ip !== "unknown") formData.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
    cache: "no-store",
  });

  if (!res.ok) return false;
  const result = (await res.json()) as { success?: boolean };
  return Boolean(result.success);
}

function validate(body: ContactPayload): ValidationResult {
  const name = clean(body.name, 120);
  const email = clean(body.email, 180).toLowerCase();
  const phone = clean(body.phone, 50);
  const subject = clean(body.subject, 180);
  const message = clean(body.message, 4000);
  const website = clean(body.website, 180);

  const fieldErrors: FieldErrors = {};

  // Hidden honeypot field: bots often fill this.
  if (website) {
    return {
      ok: false,
      message: "Unable to process submission.",
      fieldErrors,
    };
  }

  if (!name || name.length < 2) fieldErrors.name = "Name must be at least 2 characters.";
  if (!email || !emailRegex.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (!phone || !phoneRegex.test(phone) || countDigits(phone) < 7) {
    fieldErrors.phone = "Enter a valid phone number.";
  }
  if (!subject || subject.length < 3) {
    fieldErrors.subject = "Subject must be at least 3 characters.";
  }
  if (!message || message.length < 10) {
    fieldErrors.message = "Message must be at least 10 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  return { ok: true, data: { name, email, phone, subject, message } };
}

export async function POST(req: Request) {
  try {
    const rateKey = getRateKey(req);
    if (await isRateLimitedSafe(rateKey)) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const json = (await req.json()) as ContactPayload;

    if (TURNSTILE_SECRET_KEY) {
      const token = clean(json.turnstileToken, 2048);
      if (!token) {
        return NextResponse.json(
          { ok: false, message: "Captcha verification required." },
          { status: 400 }
        );
      }

      const isValidCaptcha = await verifyTurnstileToken(req, token);
      if (!isValidCaptcha) {
        return NextResponse.json(
          { ok: false, message: "Captcha verification failed." },
          { status: 400 }
        );
      }
    }

    const parsed = validate(json);
    if (!parsed.ok) {
      return NextResponse.json(
        { ok: false, message: parsed.message, fieldErrors: parsed.fieldErrors },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || process.env.MAIL_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || process.env.MAIL_PORT || 465);
    const smtpSecure =
      String(process.env.SMTP_SECURE || process.env.MAIL_SECURE || "true") === "true";
    const smtpUser =
      process.env.SMTP_USER || process.env.MAIL_USER || process.env.GMAIL_USER;
    const smtpPass =
      process.env.SMTP_PASS || process.env.MAIL_PASS || process.env.GMAIL_APP_PASSWORD;
    const toEmail = process.env.CONTACT_TO_EMAIL || "info.mugnee@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

    if (!smtpUser || !smtpPass || !fromEmail) {
      const missing: string[] = [];
      if (!smtpUser) missing.push("SMTP_USER");
      if (!smtpPass) missing.push("SMTP_PASS");
      if (!fromEmail) missing.push("CONTACT_FROM_EMAIL");
      return NextResponse.json(
        {
          ok: false,
          message: `Mail server is not configured. Missing: ${missing.join(", ")}.`,
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const { name, email, phone, subject, message } = parsed.data;
    const textBody =
      `New contact form submission\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Subject: ${subject}\n\n` +
      `Message:\n${message}\n`;

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      text: textBody,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true, message: "Message sent successfully." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to send message right now." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: false, message: "Method not allowed. Use POST for contact submissions." },
    { status: 405, headers: { Allow: "POST, OPTIONS" } }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
