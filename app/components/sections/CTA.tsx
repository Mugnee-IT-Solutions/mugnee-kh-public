"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopOnRoute() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const scrollTop = () => {
      const scrollingEl = document.scrollingElement || document.documentElement;
      scrollingEl.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    scrollTop();
    const raf1 = window.requestAnimationFrame(scrollTop);
    const raf2 = window.requestAnimationFrame(() => window.requestAnimationFrame(scrollTop));
    const t1 = window.setTimeout(scrollTop, 0);
    const t2 = window.setTimeout(scrollTop, 80);
    const t3 = window.setTimeout(scrollTop, 180);
    const t4 = window.setTimeout(scrollTop, 320);
    const i1 = window.setInterval(scrollTop, 120);
    const iStop = window.setTimeout(() => window.clearInterval(i1), 650);

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
      window.clearInterval(i1);
      window.clearTimeout(iStop);
    };
  }, [pathname]);

  return null;
}

