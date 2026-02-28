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

type FieldErrors = Partial<Record<keyof ValidContactData, string>>;

type ValidationResult =
  | { ok: false; message: string; fieldErrors: FieldErrors }
  | { ok: true; data: ValidContactData };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[\d\s().-]{7,20}$/;

function clean(value: unknown, max = 1000) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, max);
}

function countDigits(value: string) {
  return (value.match(/\d/g) || []).length;
}

function validate(body: ContactPayload): ValidationResult {
  const name = clean(body.name, 120);
  const email = clean(body.email, 180).toLowerCase();
  const phone = clean(body.phone, 50);
  const subject = clean(body.subject, 180);
  const message = clean(body.message, 4000);

  const fieldErrors: FieldErrors = {};

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
    const json = (await req.json()) as ContactPayload;
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
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
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
