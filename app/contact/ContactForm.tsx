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
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; text: string }>({
    type: "idle",
    text: "",
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setStatus({ type: "idle", text: "" });
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !data.ok) {
        setStatus({
          type: "error",
          text: data.message || labels.sendError,
        });
        return;
      }

      setStatus({
        type: "success",
        text: labels.success,
      });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
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
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          placeholder={labels.name}
          required
          minLength={2}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 sm:col-span-1"
        />
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          placeholder={labels.email}
          required
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 sm:col-span-1"
        />
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
          placeholder={labels.phone}
          required
          minLength={6}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 sm:col-span-1"
        />
        <input
          type="text"
          name="subject"
          autoComplete="off"
          value={form.subject}
          onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
          placeholder={labels.subject}
          required
          minLength={2}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 sm:col-span-1"
        />
        <textarea
          name="message"
          autoComplete="off"
          rows={5}
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          placeholder={labels.message}
          required
          minLength={10}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 sm:col-span-2"
        />
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
