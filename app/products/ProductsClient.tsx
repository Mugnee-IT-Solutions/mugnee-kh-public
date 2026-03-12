"use client";

import ProductGrid from "../components/sections/ProductGrid";
import { useLang } from "../components/layout/LanguageProvider";
import { useEffect, useState } from "react";

export default function ProductsClient({ forcedLang }: { forcedLang?: "en" | "km" }) {
  const { lang: contextLang } = useLang();
  const lang = forcedLang ?? contextLang;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const readSearchTerm = () => {
      const next = new URLSearchParams(window.location.search).get("search") ?? "";
      setSearchTerm((prev) => (prev === next ? prev : next));
    };

    readSearchTerm();
    window.addEventListener("popstate", readSearchTerm);
    return () => window.removeEventListener("popstate", readSearchTerm);
  }, []);

  return (
    <div className="bg-white text-slate-900">
      <section className="border-b border-slate-100 py-10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {lang === "en" ? "Products" : "ផលិតផល"}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {lang === "en"
              ? "Cambodia LED Display & Smart Systems Catalog"
              : "កាតាឡុកអេក្រង់ LED និងប្រព័ន្ធឆ្លាតវៃនៅកម្ពុជា"}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            {lang === "en"
              ? "Browse all products by category. Use filters to quickly find indoor, outdoor, smart board, PA system, turnstile and more."
              : "រុករក SKU ទាំងអស់តាមប្រភេទ។ ប្រើតម្រងដើម្បីស្វែងរកបានលឿនដូចជា ក្នុងអគារ ខាងក្រៅ smart board ប្រព័ន្ធ PA turnstile និងផលិតផលផ្សេងៗទៀត។"}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            {lang === "en"
              ? "This catalog includes LED display modules, indoor and outdoor screens, interactive flat panels, PA system equipment, turnstile gates, and project accessories for installations across Cambodia."
              : "កាតាឡុកនេះរួមមានម៉ូឌុលអេក្រង់ LED អេក្រង់ក្នុងអគារ និងខាងក្រៅ ស្មាតបូដអន្តរកម្ម ប្រព័ន្ធ PA ទ្វារត្រួតពិនិត្យចូលចេញ និងគ្រឿងបន្លាស់សម្រាប់ការដំឡើងគម្រោងនៅកម្ពុជា។"}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            {lang === "en"
              ? "Open any product page to compare specifications, application fit, and quotation options before selecting the right model for your office, retail, education, or commercial project."
              : "អ្នកអាចចូលទៅទំព័រផលិតផលនីមួយៗ ដើម្បីប្រៀបធៀបលក្ខណៈបច្ចេកទេស ការប្រើប្រាស់សមស្រប និងជម្រើសស្នើសុំតម្លៃ មុនពេលជ្រើសរើសម៉ូឌែលត្រឹមត្រូវសម្រាប់គម្រោងរបស់អ្នក។"}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProductGrid columns={3} searchTerm={searchTerm} forcedLang={lang} />
        </div>
      </section>
    </div>
  );
}
