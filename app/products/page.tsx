"use client";

import ProductGrid from "../components/sections/ProductGrid";
import { useLang } from "../components/layout/LanguageProvider";

export default function ProductsPage() {
  const { lang } = useLang();

  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-100 py-10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {lang === "en" ? "Products" : "ផលិតផល"}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {lang === "en"
              ? "Cambodia LED Display & Smart Systems Catalog"
              : "កាតាឡុក អេក្រង់ LED និងប្រព័ន្ធឆ្លាតវៃ នៅកម្ពុជា"}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            {lang === "en"
              ? "Browse all SKUs by category. Use filters to quickly find indoor, outdoor, smart board, PA system, turnstile and more."
              : "មើល SKU ទាំងអស់តាមប្រភេទ ហើយប្រើ Filter ដើម្បីរក Indoor, Outdoor, Smart Board, PA System, Turnstile និងផ្សេងៗ។"}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProductGrid columns={3} />
        </div>
      </section>
    </main>
  );
}
