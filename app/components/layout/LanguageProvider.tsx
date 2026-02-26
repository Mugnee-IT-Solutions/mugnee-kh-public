"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "km";

type LangCtx = {
  lang: Lang;
  setLang: (v: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    try {
      const path = window.location.pathname;
      if (path.startsWith("/km")) return "km";
      if (path.startsWith("/en")) return "en";
      const queryLang = new URLSearchParams(window.location.search).get("lang");
      if (queryLang === "km" || queryLang === "en") return queryLang;
      const saved = window.localStorage.getItem("site_lang") as Lang | null;
      if (saved === "en" || saved === "km") return saved;
    } catch {}
    return "en";
  });

  // persist + set <html lang="">
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

/** ✅ Header/HomeClient এ এটা ব্যবহার করবে */
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
