"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type Lang = "en" | "km";

type LangCtx = {
  lang: Lang;
  setLang: (v: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const initialLang: Lang = pathname?.startsWith("/km") ? "km" : "en";
  // Keep first client render equal to SSR to avoid hydration mismatch.
  const [lang, setLangState] = useState<Lang>(initialLang);

  // Resolve preferred language from URL (or saved preference) when route changes.
  useEffect(() => {
    if (typeof window === "undefined") return;

    let nextLang: Lang | null = null;
    try {
      const path = pathname ?? window.location.pathname;
      if (path.startsWith("/km")) {
        nextLang = "km";
      } else if (path.startsWith("/en")) {
        nextLang = "en";
      } else {
        const queryLang = new URLSearchParams(window.location.search).get("lang");
        if (queryLang === "km" || queryLang === "en") {
          nextLang = queryLang;
        } else {
          const saved = window.localStorage.getItem("site_lang") as Lang | null;
          if (saved === "en" || saved === "km") nextLang = saved;
        }
      }
    } catch {}

    if (!nextLang) return;
    const id = window.setTimeout(() => {
      setLangState((prev) => (prev === nextLang ? prev : nextLang));
    }, 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  // Persist and keep <html lang=""> in sync.
  useEffect(() => {
    try {
      window.localStorage.setItem("site_lang", lang);
    } catch {}

    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "km" ? "km" : "en";
    }
  }, [lang]);

  const setLang = (v: Lang) => setLangState(v);
  const toggleLang = () => setLangState((p) => (p === "en" ? "km" : "en"));

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Shared language hook used by client components. */
export function useLang() {
  const ctx = useContext(LanguageContext);
  const pathname = usePathname();
  const initialLang: Lang = pathname?.startsWith("/km") ? "km" : "en";
  const [fallbackLang, setFallbackLang] = useState<Lang>(initialLang);

  useEffect(() => {
    if (ctx) return;

    let nextLang: Lang = initialLang;
    try {
      const path = pathname ?? window.location.pathname;
      if (path.startsWith("/km")) {
        nextLang = "km";
      } else if (path.startsWith("/en")) {
        nextLang = "en";
      } else {
        const queryLang = new URLSearchParams(window.location.search).get("lang");
        if (queryLang === "km" || queryLang === "en") {
          nextLang = queryLang;
        } else {
          const saved = window.localStorage.getItem("site_lang") as Lang | null;
          if (saved === "en" || saved === "km") nextLang = saved;
        }
      }
    } catch {}

    setFallbackLang((prev) => (prev === nextLang ? prev : nextLang));
  }, [ctx, initialLang, pathname]);

  useEffect(() => {
    if (ctx || typeof window === "undefined") return;
    try {
      window.localStorage.setItem("site_lang", fallbackLang);
    } catch {}

    if (typeof document !== "undefined") {
      document.documentElement.lang = fallbackLang === "km" ? "km" : "en";
    }
  }, [ctx, fallbackLang]);

  if (ctx) return ctx;

  return {
    lang: fallbackLang,
    setLang: (v: Lang) => setFallbackLang(v),
    toggleLang: () => setFallbackLang((prev) => (prev === "en" ? "km" : "en")),
  };
}
