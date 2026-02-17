"use client";

import { useEffect, useState } from "react";

const CONTACT_LINKS = {
  whatsapp: "https://wa.me/855171927446",
  messenger: "https://m.me/mugneemultiple",
  call: "tel:+855171927446",
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
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M20.5 3.5A11.9 11.9 0 0 0 1.6 17.8L0 24l6.4-1.7A11.9 11.9 0 1 0 20.5 3.5zm-8.6 18.3c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.8 4.8zm5.4-7.4c-.3-.2-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a8 8 0 0 1-2.4-1.5 8.8 8.8 0 0 1-1.6-2c-.1-.2 0-.4 0-.5l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2c-.2-.3-.4-.3-.6-.3h-.5a1 1 0 0 0-.8.4c-.3.4-1 1.2-1 2.9s1.2 3.4 1.4 3.7c.1.2 2.3 3.5 5.5 4.9 3.3 1.4 3.3.9 3.9.9.6 0 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4z" />
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

export default function FloatingContactChat() {
  const [open, setOpen] = useState(false);

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
      <div className="pointer-events-auto relative flex flex-col items-end gap-3">
        <div
          className={`flex flex-col items-end gap-2 transition-all duration-200 ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 no-underline shadow-lg transition hover:-translate-y-0.5 hover:no-underline"
            aria-label="Chat on WhatsApp"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon />
            </span>
            WhatsApp
          </a>

          <a
            href={CONTACT_LINKS.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 no-underline shadow-lg transition hover:-translate-y-0.5 hover:no-underline"
            aria-label="Chat on Messenger"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#00B2FF] to-[#006AFF] text-white">
              <MessengerIcon />
            </span>
            Messenger
          </a>

          <a
            href={CONTACT_LINKS.call}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 no-underline shadow-lg transition hover:-translate-y-0.5 hover:no-underline"
            aria-label="Call now"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
              <PhoneIcon />
            </span>
            Call Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-xl transition hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
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
