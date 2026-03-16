"use client";

import { FormEvent, useState } from "react";

type ContactFormLabels = {
  title: string;
  desc: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submit: string;
  sending: string;
  sendError: string;
  serverError: string;
  success: string;
};

export default function ContactForm({ labels }: { labels: ContactFormLabels }) {
  type FormState = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    website: string;
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; text: string }>({
    type: "idle",
    text: "",
  });

  const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setStatus({ type: "idle", text: "" });
    setFieldErrors({});
    setSending(true);

    try {
      const fallbackEndpoint = contactEndpoint === "/contact-submit.php" ? "/api/contact" : "/contact-submit.php";
      const endpoints = [contactEndpoint, fallbackEndpoint].filter((v, i, arr) => arr.indexOf(v) === i);

      let lastErrorMessage = labels.serverError;
      for (const endpoint of endpoints) {
        try {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });

          const data = (await res.json()) as {
            ok?: boolean;
            message?: string;
            fieldErrors?: Partial<Record<keyof FormState, string>>;
          };

          if (!res.ok || !data.ok) {
            if (data.fieldErrors) setFieldErrors(data.fieldErrors);
            lastErrorMessage = data.message || labels.sendError;
            // If the endpoint responded but rejected the payload, don't retry another endpoint.
            setStatus({ type: "error", text: lastErrorMessage });
            return;
          }

          // Success: stop trying endpoints.
          lastErrorMessage = "";
          setStatus({ type: "success", text: labels.success });
          setForm({ name: "", email: "", phone: "", subject: "", message: "", website: "" });
          return;
        } catch {
          // Try the next endpoint (e.g. static export has no /api/contact).
          lastErrorMessage = labels.serverError;
        }
      }

      setStatus({ type: "error", text: lastErrorMessage });
    } catch {
      setStatus({
        type: "error",
        text: labels.serverError,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{labels.title}</h2>
      <p className="mt-2 text-sm text-slate-600">{labels.desc}</p>
      <form className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={onSubmit}>
        {/* Honeypot: keep hidden; bots often fill it. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
          className="hidden"
          aria-hidden="true"
        />
        <div className="sm:col-span-1">
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => {
              const value = e.target.value;
              setForm((prev) => ({ ...prev, name: value }));
              if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }));
            }}
            placeholder={labels.name}
            required
            minLength={2}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:ring-2 sm:col-span-1 ${
              fieldErrors.name
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-slate-200 focus:border-sky-400 focus:ring-sky-100"
            }`}
          />
          {fieldErrors.name ? (
            <p id="contact-name-error" className="mt-1 text-xs text-red-600">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => {
              const value = e.target.value;
              setForm((prev) => ({ ...prev, email: value }));
              if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder={labels.email}
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:ring-2 sm:col-span-1 ${
              fieldErrors.email
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-slate-200 focus:border-sky-400 focus:ring-sky-100"
            }`}
          />
          {fieldErrors.email ? (
            <p id="contact-email-error" className="mt-1 text-xs text-red-600">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => {
              const value = e.target.value;
              setForm((prev) => ({ ...prev, phone: value }));
              if (fieldErrors.phone) setFieldErrors((prev) => ({ ...prev, phone: undefined }));
            }}
            placeholder={labels.phone}
            required
            minLength={7}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined}
            className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:ring-2 sm:col-span-1 ${
              fieldErrors.phone
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-slate-200 focus:border-sky-400 focus:ring-sky-100"
            }`}
          />
          {fieldErrors.phone ? (
            <p id="contact-phone-error" className="mt-1 text-xs text-red-600">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <input
            id="contact-subject"
            type="text"
            name="subject"
            autoComplete="off"
            value={form.subject}
            onChange={(e) => {
              const value = e.target.value;
              setForm((prev) => ({ ...prev, subject: value }));
              if (fieldErrors.subject) setFieldErrors((prev) => ({ ...prev, subject: undefined }));
            }}
            placeholder={labels.subject}
            required
            minLength={3}
            aria-invalid={Boolean(fieldErrors.subject)}
            aria-describedby={fieldErrors.subject ? "contact-subject-error" : undefined}
            className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:ring-2 sm:col-span-1 ${
              fieldErrors.subject
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-slate-200 focus:border-sky-400 focus:ring-sky-100"
            }`}
          />
          {fieldErrors.subject ? (
            <p id="contact-subject-error" className="mt-1 text-xs text-red-600">
              {fieldErrors.subject}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <textarea
            id="contact-message"
            name="message"
            autoComplete="off"
            rows={5}
            value={form.message}
            onChange={(e) => {
              const value = e.target.value;
              setForm((prev) => ({ ...prev, message: value }));
              if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: undefined }));
            }}
            placeholder={labels.message}
            required
            minLength={10}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
            className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:ring-2 sm:col-span-2 ${
              fieldErrors.message
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-slate-200 focus:border-sky-400 focus:ring-sky-100"
            }`}
          />
          {fieldErrors.message ? (
            <p id="contact-message-error" className="mt-1 text-xs text-red-600">
              {fieldErrors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={sending}
          className="mt-1 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
        >
          {sending ? labels.sending : labels.submit}
        </button>
        {status.type !== "idle" ? (
          <p
            className={`text-sm sm:col-span-2 ${
              status.type === "success" ? "text-emerald-700" : "text-red-600"
            }`}
          >
            {status.text}
          </p>
        ) : null}
      </form>
    </div>
  );
}
