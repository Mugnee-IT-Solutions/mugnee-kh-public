"use client";

import ProductGrid from "../components/sections/ProductGrid";
import { useLang } from "../components/layout/LanguageProvider";
import { useSearchParams } from "next/navigation";

export default function ProductsClient() {
  const { lang } = useLang();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") ?? "";

  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-100 py-10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {lang === "en" ? "Products" : "áž•áž›áž·ážáž•áž›"}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {lang === "en"
              ? "Cambodia LED Display & Smart Systems Catalog"
              : "áž€áž¶ážáž¶áž¡áž»áž€áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED áž“áž·áž„áž”áŸ’ážšáž–áŸáž“áŸ’áž’áž†áŸ’áž›áž¶ážážœáŸƒáž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶"}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            {lang === "en"
              ? "Browse all SKUs by category. Use filters to quickly find indoor, outdoor, smart board, PA system, turnstile and more."
              : "ážŸáž¼áž˜ážšáž€áž˜áž¾áž› SKU áž‘áž¶áŸ†áž„áž¢ážŸáŸ‹ážáž¶áž˜áž”áŸ’ážšáž—áŸáž‘áŸ” áž”áŸ’ážšáž¾ážáž˜áŸ’ážšáž„ážŠáž¾áž˜áŸ’áž”áž¸ážŸáŸ’ážœáŸ‚áž„ážšáž€áž¢áŸáž€áŸ’ážšáž„áŸ‹áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš áž¢áŸáž€áŸ’ážšáž„áŸ‹áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš Smart Board áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA áž…áŸ’ážšáž€ Turnstile áž“áž·áž„áž•áž›áž·ážáž•áž›áž•áŸ’ážŸáŸáž„áŸ—áž”áž¶áž“áž›áž¿áž“áŸ”"}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProductGrid columns={3} searchTerm={searchTerm} />
        </div>
      </section>
    </main>
  );
}
