import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

type ValidContactData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ValidationResult =
  | { ok: false; error: string }
  | { ok: true; data: ValidContactData };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 1000) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, max);
}

function validate(body: ContactPayload): ValidationResult {
  const name = clean(body.name, 120);
  const email = clean(body.email, 180).toLowerCase();
  const phone = clean(body.phone, 50);
  const subject = clean(body.subject, 180);
  const message = clean(body.message, 4000);

  if (!name || name.length < 2) return { ok: false, error: "Invalid name." };
  if (!email || !emailRegex.test(email)) return { ok: false, error: "Invalid email." };
  if (!phone || phone.length < 6) return { ok: false, error: "Invalid phone number." };
  if (!subject || subject.length < 2) return { ok: false, error: "Invalid subject." };
  if (!message || message.length < 10) return { ok: false, error: "Message is too short." };

  return { ok: true, data: { name, email, phone, subject, message } };
}

export async function POST(req: Request) {
  try {
    const json = (await req.json()) as ContactPayload;
    const parsed = validate(json);
    if (!parsed.ok) {
      return NextResponse.json({ ok: false, message: parsed.error }, { status: 400 });
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
    });

    return NextResponse.json({ ok: true, message: "Message sent successfully." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to send message right now." },
      { status: 500 }
    );
  }
}
