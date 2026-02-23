"use client";

import { useEffect, useState } from "react";

function getScrollTarget() {
  const root = document.getElementById("app-scroll-root");
  if (root instanceof HTMLElement) return root;
  return document.scrollingElement || document.documentElement;
}

function getScrollY() {
  const root = document.getElementById("app-scroll-root");
  if (root instanceof HTMLElement) return root.scrollTop || 0;

  // Some pages can report scroll position from different roots (window/html/body).
  // Take the maximum so visibility logic works reliably across routes/browsers.
  return Math.max(
    window.scrollY || 0,
    document.documentElement.scrollTop || 0,
    document.body.scrollTop || 0,
    document.scrollingElement?.scrollTop || 0,
  );
}

function getEventTargetScrollY(target: EventTarget | null) {
  if (!target) return 0;
  if (target instanceof Document) return getScrollY();
  if (target instanceof HTMLElement) return target.scrollTop || 0;
  return 0;
}

export default function GlobalBackToTop() {
  const [show, setShow] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    let rafId = 0;
    let pendingHint = 0;

    const update = () => {
      const y = Math.max(getScrollY(), pendingHint);
      pendingHint = 0;
      setShow(y > 140);
      setChatOpen(document.documentElement.getAttribute("data-chat-open") === "true");
    };

    const scheduleUpdate = (hint = 0) => {
      pendingHint = Math.max(pendingHint, hint);
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    const root = document.getElementById("app-scroll-root");
    const onWindowScroll = () => scheduleUpdate();
    const onRootScroll = () => scheduleUpdate(root instanceof HTMLElement ? root.scrollTop : 0);
    const onAnyScroll = (event: Event) => {
      scheduleUpdate(getEventTargetScrollY(event.target));
    };

    if (root instanceof HTMLElement) {
      root.addEventListener("scroll", onRootScroll, { passive: true });
    }
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    document.addEventListener("scroll", onAnyScroll, { passive: true, capture: true });
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("mugnee-chat-toggle", update);
    update();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      if (root instanceof HTMLElement) {
        root.removeEventListener("scroll", onRootScroll);
      }
      window.removeEventListener("scroll", onWindowScroll);
      document.removeEventListener("scroll", onAnyScroll, true);
      window.removeEventListener("resize", update);
      window.removeEventListener("mugnee-chat-toggle", update);
    };
  }, []);

  const scrollToTop = () => {
    const target = getScrollTarget();
    const forceTop = () => {
      target.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    // Smooth attempt first for UX, then force to guarantee reaching absolute top.
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    forceTop();
    const raf1 = window.requestAnimationFrame(forceTop);
    const raf2 = window.requestAnimationFrame(() => window.requestAnimationFrame(forceTop));
    const t1 = window.setTimeout(forceTop, 80);
    const t2 = window.setTimeout(forceTop, 180);
    const t3 = window.setTimeout(forceTop, 320);
    const t4 = window.setTimeout(forceTop, 480);

    window.setTimeout(() => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
    }, 560);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed z-[80] h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all hover:-translate-y-0.5 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
        show
          ? chatOpen
            ? "bottom-24 right-64 inline-flex opacity-100 sm:bottom-28 sm:right-72"
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
