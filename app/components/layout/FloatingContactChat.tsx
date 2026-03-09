"use client";

import { useEffect, useState } from "react";

const CONTACT_LINKS = {
  whatsapp: "https://wa.me/85581580802",
  messenger: "https://m.me/mugneemultiple",
  telegram: "https://t.me/mugneemultiple",
  call: "tel:+85581580802",
};

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M12 3C7 3 3 6.6 3 11.1c0 2.3 1.1 4.3 2.9 5.8l-.8 3.5 3.8-1.9c1 .3 2 .5 3.1.5 5 0 9-3.6 9-8.1S17 3 12 3zm-4 7.5a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm4 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm4 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7a1 1 0 0 0-1.4 1.4l4.9 4.9-4.9 4.9a1 1 0 1 0 1.4 1.4l4.9-4.9 4.9 4.9a1 1 0 1 0 1.4-1.4l-4.9-4.9 4.9-4.9a1 1 0 0 0 0-1.4z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 448 512" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 2 131.5 2 253.9c0 39.1 10.2 77.3 29.6 111L0 480l118.7-31.2c32.7 17.9 69.6 27.3 107.4 27.3h.1c122.3 0 221.9-99.6 221.9-221.9 0-59.3-23.1-115-65.2-157.1zM223.9 438.7h-.1c-33.1 0-65.5-8.9-93.7-25.7l-6.7-4-70.4 18.5 18.8-68.6-4.4-7.1c-18.7-29.7-28.6-64-28.6-99.2C38.8 154 125 67.8 223.9 67.8c48 0 93.1 18.7 127 52.6 33.9 33.9 52.6 79 52.6 127 0 98.9-86.2 191.3-179.6 191.3zm101.8-138.2c-5.5-2.7-32.8-16.1-37.9-18-5.1-1.9-8.8-2.7-12.5 2.7-3.7 5.5-14.3 18-17.6 21.7-3.2 3.7-6.5 4.1-12 1.4-32.6-16.3-54-29.1-75.5-65.9-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.6-1.4-2.7-12.5-30-17.1-41-4.5-10.8-9.1-9.4-12.5-9.6-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.6 1.4-14.6 6.9-5.1 5.5-19.3 18.8-19.3 45.7 0 26.9 19.8 52.9 22.5 56.6 2.7 3.7 39 59.5 94.4 83.4 35 15.1 48.7 16.4 66.2 14 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.4z" />
    </svg>
  );
}

function MessengerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.2 2 11.4c0 2.9 1.4 5.6 3.6 7.4V22l3.1-1.7c1 .3 2.1.5 3.3.5 5.5 0 10-4.2 10-9.4S17.5 2 12 2zm1.1 12.7-2.5-2.6-4.8 2.6 5.3-5.7 2.5 2.6 4.8-2.6-5.3 5.7z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3 1.1.4 2.2.6 3.4.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4.2 3 3.6 3.4 3 4 3h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.4.1.4 0 .8-.3 1l-2.2 2.4z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M9.6 15.5 9.2 20c.6 0 .9-.3 1.3-.6l3.1-3 6.5 4.8c1.2.6 2 .3 2.3-1.1L24 3.2v-.1c.4-1.7-.6-2.3-1.8-1.9L1.2 9.3c-1.7.6-1.7 1.5-.3 2l5.4 1.7L19 5.1c.6-.4 1.1-.2.6.2" />
    </svg>
  );
}

export default function FloatingContactChat() {
  const [open, setOpen] = useState(false);
  const contactItems = [
    {
      label: "WhatsApp",
      href: CONTACT_LINKS.whatsapp,
      aria: "Chat on WhatsApp",
      icon: <WhatsAppIcon />,
      iconBg: "bg-[#25D366]",
      border: "border-emerald-200",
      hover: "hover:border-emerald-300 hover:bg-emerald-50/70",
      external: true,
    },
    {
      label: "Messenger",
      href: CONTACT_LINKS.messenger,
      aria: "Chat on Messenger",
      icon: <MessengerIcon />,
      iconBg: "bg-gradient-to-br from-[#00B2FF] to-[#006AFF]",
      border: "border-blue-200",
      hover: "hover:border-blue-300 hover:bg-blue-50/70",
      external: true,
    },
    {
      label: "Telegram",
      href: CONTACT_LINKS.telegram,
      aria: "Chat on Telegram",
      icon: <TelegramIcon />,
      iconBg: "bg-[#229ED9]",
      border: "border-sky-200",
      hover: "hover:border-sky-300 hover:bg-sky-50/70",
      external: true,
    },
    {
      label: "Call Now",
      href: CONTACT_LINKS.call,
      aria: "Call now",
      icon: <PhoneIcon />,
      iconBg: "bg-slate-900",
      border: "border-slate-200",
      hover: "hover:border-slate-300 hover:bg-slate-100/70",
      external: false,
    },
  ] as const;

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-chat-open", open ? "true" : "false");
    window.dispatchEvent(new Event("mugnee-chat-toggle"));
    return () => {
      document.documentElement.setAttribute("data-chat-open", "false");
      window.dispatchEvent(new Event("mugnee-chat-toggle"));
    };
  }, [open]);

  return (
    <div className="pointer-events-none fixed bottom-6 right-4 z-[70] sm:bottom-7 sm:right-6">
      <div className="pointer-events-auto relative inline-flex flex-col items-end">
        <div
          className={`pointer-events-none absolute bottom-[calc(100%+0.75rem)] right-0 origin-bottom-right transition-all duration-200 ${
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "translate-y-2 scale-95 opacity-0"
          }`}
        >
          <div className="relative w-[min(82vw,15rem)]">
            <div className="absolute -inset-1 rounded-[28px_14px_28px_14px] bg-gradient-to-br from-sky-400/40 via-blue-500/25 to-indigo-600/35 blur-md" />
            <div className="relative overflow-hidden rounded-[26px_12px_26px_12px] border border-white/70 bg-white/90 p-2 shadow-[0_18px_48px_rgba(2,6,23,0.34)] backdrop-blur-xl">
              <div className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 rounded-full bg-sky-300/65 blur-[1px]" />
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-10 w-10 rounded-full bg-indigo-300/55 blur-[2px]" />
              <div className="mb-1.5 flex items-center justify-between px-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Quick Contact
                </p>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-700">
                  Live
                </span>
              </div>
              <div className="grid gap-1.5">
              {contactItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  aria-label={item.aria}
                  className={[
                    "group flex h-12 items-center justify-between rounded-[18px_8px_18px_8px] border px-2.5",
                    "text-sm font-semibold text-slate-800 no-underline",
                    "bg-gradient-to-r from-white via-white to-slate-50/90",
                    "transition-all duration-200 hover:-translate-y-0.5 hover:translate-x-0.5 hover:no-underline",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70",
                    item.border,
                    item.hover,
                  ].join(" ")}
                  style={{ transitionDelay: `${idx * 24}ms` }}
                >
                  <span className="inline-flex items-center gap-2.5">
                    <span
                      className={[
                        "inline-flex h-7 w-7 items-center justify-center rounded-[999px_999px_999px_6px] text-white shadow-sm",
                        item.iconBg,
                      ].join(" ")}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-1.5 py-0.5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:border-slate-300 group-hover:text-slate-600">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white shadow-[0_14px_28px_rgba(2,6,23,0.35)] transition hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label={open ? "Close quick contact menu" : "Open quick contact menu"}
          aria-expanded={open}
        >
          <span className="relative">
            {!open && (
              <span className="absolute -inset-3 animate-ping rounded-full bg-sky-400/35" />
            )}
            <span className="relative inline-flex">{open ? <CloseIcon /> : <ChatIcon />}</span>
          </span>
        </button>

      </div>
    </div>
  );
}
