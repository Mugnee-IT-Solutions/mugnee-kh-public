"use client";

import { useLang } from "../components/layout/LanguageProvider";

export default function ProjectsClient({ forcedLang }: { forcedLang?: "en" | "km" }) {
  const { lang: contextLang } = useLang();
  const lang = forcedLang ?? contextLang;

  return (
    <main className="bg-slate-50">
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-slate-600">
          {lang === "en" ? "Projects" : "គម្រោង"}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          {lang === "en" ? "Cambodia Project References" : "គម្រោងយោងនៅកម្ពុជា"}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
          {lang === "en"
            ? "This page is being prepared with live project highlights. For immediate references and case details, contact our team."
            : "ទំព័រនេះកំពុងត្រូវបានរៀបចំជាមួយគម្រោងជាក់ស្តែង។ សម្រាប់ព័ត៌មានយោងភ្លាមៗ និងព័ត៌មានលម្អិតនៃគម្រោង សូមទំនាក់ទំនងក្រុមការងាររបស់យើង។"}
        </p>
      </section>
    </main>
  );
}
