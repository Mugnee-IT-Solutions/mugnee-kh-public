"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useLang } from "../layout/LanguageProvider";
import {
  PRODUCT_CATEGORIES,
  PRODUCTS,
  Product,
  getCategoryById,
} from "../../data/products";

type ProductGridProps = {
  categoryId?: string;
  showCategoryFilters?: boolean;
  showSort?: boolean;
  columns?: 2 | 3 | 4;
  limit?: number;
  detailBasePath?: string;
};

function getGridCols(columns: number) {
  if (columns === 2) return "sm:grid-cols-2";
  if (columns === 4) return "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  return "sm:grid-cols-2 lg:grid-cols-3";
}

function getProductTitle(product: Product, lang: "en" | "km") {
  return lang === "en" ? product.titleEn : product.titleKm;
}

function getProductDesc(product: Product, lang: "en" | "km") {
  return lang === "en" ? product.shortDescEn : product.shortDescKm;
}

function getTags(product: Product, lang: "en" | "km") {
  return lang === "en" ? product.tagsEn : product.tagsKm;
}

export default function ProductGrid({
  categoryId,
  showCategoryFilters = true,
  showSort = true,
  columns = 3,
  limit,
  detailBasePath = "/products/catalog",
}: ProductGridProps) {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState(categoryId || "all");
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");

  const availableCategories = useMemo(() => {
    const ids = new Set(
      PRODUCTS.flatMap((p) => p.categoryIds).filter((id) => id !== "led_display")
    );
    const list = PRODUCT_CATEGORIES.filter((c) => ids.has(c.id));
    return list;
  }, []);

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (activeCategory !== "all") {
      list = PRODUCTS.filter((p) => p.categoryIds.includes(activeCategory));
    }
    const sorted = [...list].sort((a, b) => {
      const aTitle = getProductTitle(a, "en").toLowerCase();
      const bTitle = getProductTitle(b, "en").toLowerCase();
      return sortOrder === "az"
        ? aTitle.localeCompare(bTitle)
        : bTitle.localeCompare(aTitle);
    });
    return limit ? sorted.slice(0, limit) : sorted;
  }, [activeCategory, sortOrder, limit]);

  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {showCategoryFilters ? (
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={[
                "rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                activeCategory === "all"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
              ].join(" ")}
            >
              {lang === "en" ? "All Products" : "ផលិតផលទាំងអស់"}
            </button>
            {availableCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={[
                  "rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                  activeCategory === cat.id
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                ].join(" ")}
              >
                {lang === "en" ? cat.labelEn : cat.labelKm}
              </button>
            ))}
          </div>
        ) : (
          <div />
        )}

        {showSort ? (
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setSortOrder("az")}
              className={[
                "rounded-full px-3 py-1 text-xs font-semibold transition",
                sortOrder === "az"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900",
              ].join(" ")}
            >
              A–Z
            </button>
            <button
              type="button"
              onClick={() => setSortOrder("za")}
              className={[
                "rounded-full px-3 py-1 text-xs font-semibold transition",
                sortOrder === "za"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900",
              ].join(" ")}
            >
              Z–A
            </button>
          </div>
        ) : null}
      </div>

      <div className={`mt-6 grid gap-4 ${getGridCols(columns)}`}>
        {filtered.map((product) => {
          const detailHref = `${detailBasePath}/${product.slug}`;
          const primaryCategory = getCategoryById(product.primaryCategoryId);
          const primaryLabel = primaryCategory
            ? lang === "en"
              ? primaryCategory.labelEn
              : primaryCategory.labelKm
            : lang === "en"
              ? "Product"
              : "ផលិតផល";

          return (
            <div
              key={product.id}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <Link
                href={detailHref}
                className="relative block aspect-[4/3] overflow-hidden rounded-t-2xl border-b border-slate-200 bg-slate-100 no-underline"
              >
                <Image
                  src={product.heroImage}
                  alt={getProductTitle(product, lang)}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  {primaryLabel}
                </span>
              </Link>

              <div className="p-4">
                <Link href={detailHref} className="no-underline">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {getProductTitle(product, lang)}
                  </h3>
                </Link>
                <p className="mt-1 text-xs text-slate-600">
                  {getProductDesc(product, lang)}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {getTags(product, lang).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href="/contact"
                    className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white no-underline hover:bg-slate-800"
                  >
                    {lang === "en" ? "Get Quote" : "ស្នើសុំតម្លៃ"}
                  </Link>
                  <Link
                    href={detailHref}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-300"
                  >
                    {lang === "en" ? "View details" : "មើលព័ត៌មាន"}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
