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
    const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const raf = window.requestAnimationFrame(scrollTop);

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
