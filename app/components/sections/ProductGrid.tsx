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
  pageSize?: number;
  showPagination?: boolean;
  detailBasePath?: string;
  allowedCategoryIds?: string[];
  filterCategoryIds?: string[];
  categoryOrderIds?: string[];
  excludeSlugs?: string[];
  topLeftContent?: React.ReactNode;
};

function getGridCols(columns: number) {
  if (columns === 2) return "sm:grid-cols-2";
  if (columns === 4) return "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  return "sm:grid-cols-2 lg:grid-cols-3";
}

function getProductTitle(product: Product, lang: "en" | "km") {
  if (lang === "en") return product.titleEn;
  return sanitizeKhmer(product.titleKm, product.titleEn);
}

function getProductDesc(product: Product, lang: "en" | "km") {
  if (lang === "en") return product.shortDescEn;
  return sanitizeKhmer(product.shortDescKm, product.shortDescEn);
}

function getTags(product: Product, lang: "en" | "km") {
  if (lang === "en") return product.tagsEn;
  return product.tagsKm.map((tag, i) => sanitizeKhmer(tag, product.tagsEn[i] || tag));
}

const CATEGORY_LABEL_KM_FALLBACK: Record<string, string> = {
  indoor_led_display: "អេក្រង់ LED ក្នុងអគារ",
  outdoor_led_display: "ប៊ីលបត្រ LED ខាងក្រៅ",
  rental_led_display: "ជញ្ជាំង LED សម្រាប់ជួល",
  led_accessories: "គ្រឿងបន្លាស់ LED និងផ្នែក",
};

const MOJIBAKE_RE = /Ã|Â|â|ƒ|\uFFFD/;

function decodeLatin1AsUtf8(str: string) {
  const bytes = Uint8Array.from(Array.from(str).map((ch) => ch.charCodeAt(0) & 0xff));
  return new TextDecoder("utf-8").decode(bytes);
}

function repairMojibake(input: string) {
  let out = input;
  for (let i = 0; i < 3; i += 1) {
    if (!MOJIBAKE_RE.test(out)) break;
    try {
      const decoded = decodeLatin1AsUtf8(out);
      if (!decoded || decoded === out) break;
      out = decoded;
    } catch {
      break;
    }
  }
  return out;
}

function sanitizeKhmer(value: string, fallback: string) {
  if (!value?.trim()) return fallback;
  if (!MOJIBAKE_RE.test(value)) return value;
  const repaired = repairMojibake(value).trim();
  if (!repaired) return fallback;
  if (MOJIBAKE_RE.test(repaired)) return fallback;
  return repaired;
}

function getCategoryLabel(
  category: { id: string; labelEn: string; labelKm: string },
  lang: "en" | "km"
) {
  if (lang === "en") return category.labelEn;
  const repaired = sanitizeKhmer(category.labelKm, category.labelEn);
  if (repaired !== category.labelEn) return repaired;
  return CATEGORY_LABEL_KM_FALLBACK[category.id] || category.labelEn;
}

export default function ProductGrid({
  categoryId,
  showCategoryFilters = true,
  showSort = true,
  columns = 3,
  limit,
  pageSize = 12,
  showPagination = true,
  detailBasePath = "/products/catalog",
  allowedCategoryIds,
  filterCategoryIds,
  categoryOrderIds,
  excludeSlugs,
  topLeftContent,
}: ProductGridProps) {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState(categoryId || "all");
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");
  const [page, setPage] = useState(1);

  const effectiveCategory = useMemo(() => {
    if (activeCategory === "all") return "all";
    if (filterCategoryIds?.length && filterCategoryIds.includes(activeCategory)) {
      return activeCategory;
    }
    if (allowedCategoryIds?.length && allowedCategoryIds.includes(activeCategory)) {
      return activeCategory;
    }
    if (filterCategoryIds?.length || allowedCategoryIds?.length) {
      return "all";
    }
    return activeCategory;
  }, [activeCategory, allowedCategoryIds, filterCategoryIds]);

  const availableCategories = useMemo(() => {
    const ids = new Set(PRODUCTS.flatMap((p) => p.categoryIds));
    let list = PRODUCT_CATEGORIES.filter((c) => ids.has(c.id));

    if (filterCategoryIds?.length) {
      const filterSet = new Set(filterCategoryIds);
      list = list.filter((c) => filterSet.has(c.id));
    } else {
      list = list.filter((c) => c.id !== "led_display");
    }

    return list;
  }, [filterCategoryIds]);

  const filtered = useMemo(() => {
    let list = PRODUCTS;

    if (excludeSlugs?.length) {
      const excludeSet = new Set(excludeSlugs);
      list = list.filter((p) => !excludeSet.has(p.slug));
    }

    if (allowedCategoryIds?.length) {
      const allowSet = new Set(allowedCategoryIds);
      list = list.filter((p) => p.categoryIds.some((id) => allowSet.has(id)));
    }

    if (effectiveCategory !== "all") {
      list = list.filter((p) => p.categoryIds.includes(effectiveCategory));
    }
    const sorted = [...list].sort((a, b) => {
      if (categoryOrderIds?.length) {
        const order = categoryOrderIds;
        const aIndex = order.indexOf(a.primaryCategoryId);
        const bIndex = order.indexOf(b.primaryCategoryId);
        const aRank = aIndex === -1 ? order.length : aIndex;
        const bRank = bIndex === -1 ? order.length : bIndex;
        if (aRank !== bRank) return aRank - bRank;
      }
      const aTitle = getProductTitle(a, "en").toLowerCase();
      const bTitle = getProductTitle(b, "en").toLowerCase();
      return sortOrder === "az"
        ? aTitle.localeCompare(bTitle)
        : bTitle.localeCompare(aTitle);
    });
    return limit ? sorted.slice(0, limit) : sorted;
  }, [effectiveCategory, sortOrder, limit, allowedCategoryIds, categoryOrderIds, excludeSlugs]);

  const totalPages = useMemo(() => {
    if (limit || !showPagination) return 1;
    return Math.max(1, Math.ceil(filtered.length / pageSize));
  }, [filtered.length, limit, pageSize, showPagination]);

  const currentPage = page > totalPages ? 1 : page;

  const paginated = useMemo(() => {
    if (limit || !showPagination) return filtered;
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage, pageSize, limit, showPagination]);

  const pages = useMemo(() => {
    if (totalPages <= 1) return [1];
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {showCategoryFilters ? (
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setPage(1);
              }}
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
                onClick={() => {
                  setActiveCategory(cat.id);
                  setPage(1);
                }}
                className={[
                  "rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                  activeCategory === cat.id
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                ].join(" ")}
              >
                {getCategoryLabel(cat, lang)}
              </button>
            ))}
          </div>
        ) : (
          <div>{topLeftContent || <div />}</div>
        )}

        {showSort ? (
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1">
            <button
              type="button"
              onClick={() => {
                setSortOrder("az");
                setPage(1);
              }}
              className={[
                "flex h-9 w-12 items-center justify-center rounded-full text-[11px] font-semibold leading-none tracking-wide transition",
                sortOrder === "az"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900",
              ].join(" ")}
              aria-label="Sort A to Z"
            >
              A-Z
            </button>
            <button
              type="button"
              onClick={() => {
                setSortOrder("za");
                setPage(1);
              }}
              className={[
                "flex h-9 w-12 items-center justify-center rounded-full text-[11px] font-semibold leading-none tracking-wide transition",
                sortOrder === "za"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900",
              ].join(" ")}
              aria-label="Sort Z to A"
            >
              Z-A
            </button>
          </div>
        ) : null}
      </div>

      <div className={`mt-6 grid gap-4 ${getGridCols(columns)}`}>
        {paginated.map((product) => {
          const detailHref = `${detailBasePath}/${product.slug}`;
          const primaryCategory = getCategoryById(product.primaryCategoryId);
          const primaryLabel = primaryCategory
            ? lang === "en"
              ? primaryCategory.labelEn
              : sanitizeKhmer(primaryCategory.labelKm, primaryCategory.labelEn)
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
                    {lang === "en" ? "Get Quotation" : "ស្នើសុំតម្លៃ"}
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

      {showPagination && !limit && totalPages > 1 ? (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {pages.map((p) => (
            <button
              key={`page-${p}`}
              type="button"
              onClick={() => setPage(p)}
              className={[
                "h-9 w-9 rounded-md border text-sm font-semibold transition",
                currentPage === p
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
              ].join(" ")}
            >
              {p}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
