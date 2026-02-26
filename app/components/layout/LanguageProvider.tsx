"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Lang = "en" | "km";

type LangCtx = {
  lang: Lang;
  setLang: (v: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Keep first client render equal to SSR to avoid hydration mismatch.
  const [lang, setLangState] = useState<Lang>("en");
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
        const queryLang = searchParams.get("lang");
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
  }, [pathname, searchParams]);

  // Persist and keep <html lang=""> in sync.
  useEffect(() => {
    try {
      window.localStorage.setItem("site_lang", lang);
    } catch {}

    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "km" ? "km" : "en";
    }
  }, [lang]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (lang !== "km") return;
    const current = new URL(window.location.href);
    if (current.searchParams.get("lang") === "km") return;
    current.searchParams.set("lang", "km");
    window.history.replaceState({}, "", `${current.pathname}${current.search}${current.hash}`);
  }, [lang]);

  const setLang = (v: Lang) => setLangState(v);
  const toggleLang = () => setLangState((p) => (p === "en" ? "km" : "en"));

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Shared language hook used by client components. */
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
