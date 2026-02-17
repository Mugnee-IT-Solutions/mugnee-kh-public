"use client";

import { useEffect, useState } from "react";

function getScrollY() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    document.scrollingElement?.scrollTop ||
    0
  );
}

export default function GlobalBackToTop() {
  const [show, setShow] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      setShow(getScrollY() > 140);
      setChatOpen(document.documentElement.getAttribute("data-chat-open") === "true");
    };

    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("mugnee-chat-toggle", update);
    const timer = window.setInterval(update, 250);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("mugnee-chat-toggle", update);
      window.clearInterval(timer);
    };
  }, []);

  const scrollToTop = () => {
    const forceTop = () => {
      const scrollingEl = document.scrollingElement || document.documentElement;
      scrollingEl.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    // Smooth attempt first for UX, then hard-force to guarantee top reach.
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const raf = window.requestAnimationFrame(forceTop);
    const t1 = window.setTimeout(forceTop, 80);
    const t2 = window.setTimeout(forceTop, 180);

    window.setTimeout(() => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    }, 240);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed z-[80] h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all hover:-translate-y-0.5 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
        show
          ? chatOpen
            ? "bottom-24 right-44 inline-flex opacity-100 sm:bottom-28 sm:right-48"
            : "bottom-24 right-5 inline-flex opacity-100 sm:bottom-28 sm:right-7"
          : "pointer-events-none bottom-20 right-5 inline-flex opacity-0 sm:right-7"
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 5.6 5.7 11.9a1 1 0 1 0 1.4 1.4l4-4V19a1 1 0 1 0 2 0V9.3l4 4a1 1 0 1 0 1.4-1.4L12 5.6z" />
      </svg>
    </button>
  );
}
