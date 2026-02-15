"use client";

import { useLang } from "./LanguageProvider";

export default function LangText({
  en,
  km,
}: {
  en: string;
  km: string;
}) {
  const { lang } = useLang();
  return <>{lang === "km" ? km : en}</>;
}

