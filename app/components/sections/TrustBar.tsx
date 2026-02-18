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
  searchTerm?: string;
};

function getGridCols(columns: number) {
  if (columns === 2) return "sm:grid-cols-2";
  if (columns === 4) return "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  return "sm:grid-cols-2 lg:grid-cols-3";
}

const KHMER_RE = /[\u1780-\u17FF]/;
const MOJIBAKE_RE = /\u00C3|\u00C2|\u00E2|\u0192|\uFFFD|\u00E1\u017E/;

const CATEGORY_LABEL_KM_FALLBACK: Record<string, string> = {
  indoor_led_display: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážáž¶áž„áž€áŸ’áž“áž»áž„",
  outdoor_led_display: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážáž¶áž„áž€áŸ’ážšáŸ…",
  rental_led_display: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‡áž½áž›",
  led_accessories: "áž‚áŸ’ážšáž¿áž„áž”áž“áŸ’áž›áž¶ážŸáŸ‹ LED",
  power_supply: "áž•áŸ’áž‚ážáŸ‹áž•áŸ’áž‚áž„áŸ‹ážáž¶áž˜áž–áž›",
  video_processor: "ážœáž¸ážŠáŸáž¢áž¼áž”áŸ’ážšáž¼ážŸáŸážŸáŸážš",
  interactive_panel: "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž¢áž“áŸ’ážážšáž€áž˜áŸ’áž˜",
  pa_speakers: "áž§áž”áž€ážšážŽáŸáž”áŸ†áž–áž„ážŸáŸ†áž¡áŸáž„ PA",
  pa_microphones: "áž˜áž¸áž€áŸ’ážšáž¼áž áŸ’ážœáž¼áž“ PA",
  pa_amplifiers: "áž¢áŸ†áž–áŸ’áž›áž¸áž áŸ’ážœáž¶áž™áž¢áŸážš PA",
  pa_controllers: "áž§áž”áž€ážšážŽáŸáž”áž‰áŸ’áž‡áž¶ PA",
  pa_network: "áž¢áž¼ážŒáž¸áž™áŸ‰áž¼áž”ážŽáŸ’ážáž¶áž‰",
  pa_software: "áž€áž˜áŸ’áž˜ážœáž·áž’áž¸ PA",
  pa_accessories: "áž‚áŸ’ážšáž¿áž„áž”áž“áŸ’áž›áž¶ážŸáŸ‹ PA",
  turnstile_tripod: "áž…áŸ’ážšáž€ Tripod Turnstile",
  turnstile_flap_barrier: "áž…áŸ’ážšáž€ Flap Barrier",
  turnstile_speed_gate: "áž…áŸ’ážšáž€ Speed Gate",
  turnstile_full_height: "áž…áŸ’ážšáž€áž€áž˜áŸ’áž–ážŸáŸ‹áž–áŸáž‰",
};

const DEFAULT_ALL_PRODUCTS_ORDER = [
  "indoor_led_display",
  "outdoor_led_display",
  "rental_led_display",
  "led_accessories",
  "power_supply",
  "video_processor",
  "smart_board",
  "interactive_panel",
  "pa_system",
  "pa_speakers",
  "pa_microphones",
  "pa_amplifiers",
  "pa_controllers",
  "pa_network",
  "pa_software",
  "pa_accessories",
  "turnstile_gate",
  "turnstile_tripod",
  "turnstile_flap_barrier",
  "turnstile_speed_gate",
  "turnstile_full_height",
];

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

function hasKhmer(value: string) {
  return KHMER_RE.test(value);
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function autoTranslateToKhmer(input: string) {
  const text = input?.trim();
  if (!text || hasKhmer(text)) return text;

  const map: Array<[string, string]> = [
    ["Interactive Flat Panel", "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž¢áž“áŸ’ážážšáž€áž˜áŸ’áž˜"],
    ["Indoor LED Display", "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážáž¶áž„áž€áŸ’áž“áž»áž„"],
    ["Outdoor LED Display", "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážáž¶áž„áž€áŸ’ážšáŸ…"],
    ["Rental LED Display", "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‡áž½áž›"],
    ["LED Display Module", "áž˜áŸ‰áž¼ážŒáž»áž›áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED"],
    ["LED Screen Panel", "áž”áž“áŸ’áž‘áŸ‡áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED"],
    ["LED Display", "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED"],
    ["Video Processor", "ážœáž¸ážŠáŸáž¢áž¼áž”áŸ’ážšáž¼ážŸáŸážŸáŸážš"],
    ["Power Supply", "áž•áŸ’áž‚ážáŸ‹áž•áŸ’áž‚áž„áŸ‹ážáž¶áž˜áž–áž›"],
    ["PA System", "áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA"],
    ["PA Speakers", "áž§áž”áž€ážšážŽáŸáž”áŸ†áž–áž„ážŸáŸ†áž¡áŸáž„ PA"],
    ["PA Microphones", "áž˜áž¸áž€áŸ’ážšáž¼áž áŸ’ážœáž¼áž“ PA"],
    ["PA Amplifiers", "áž¢áŸ†áž–áŸ’áž›áž¸áž áŸ’ážœáž¶áž™áž¢áŸážš PA"],
    ["PA Controllers", "áž§áž”áž€ážšážŽáŸáž”áž‰áŸ’áž‡áž¶ PA"],
    ["Network Audio", "áž¢áž¼ážŒáž¸áž™áŸ‰áž¼áž”ážŽáŸ’ážáž¶áž‰"],
    ["PA Software", "áž€áž˜áŸ’áž˜ážœáž·áž’áž¸ PA"],
    ["PA Accessories", "áž‚áŸ’ážšáž¿áž„áž”áž“áŸ’áž›áž¶ážŸáŸ‹ PA"],
    ["Interactive Panel", "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž¢áž“áŸ’ážážšáž€áž˜áŸ’áž˜"],
    ["Smart Board", "ážŸáŸ’áž˜áž¶ážáž”áž¼ážŠ"],
    ["Turnstile Gate", "áž…áŸ’ážšáž€ Turnstile"],
    ["Tripod Turnstile", "áž…áŸ’ážšáž€ Tripod Turnstile"],
    ["Flap Barrier", "áž…áŸ’ážšáž€ Flap Barrier"],
    ["Speed Gate", "áž…áŸ’ážšáž€ Speed Gate"],
    ["Full Height", "áž€áž˜áŸ’áž–ážŸáŸ‹áž–áŸáž‰"],
    ["Ceiling Speakers", "áž§áž”áž€ážšážŽáŸáž”áŸ†áž–áž„ážŸáŸ†áž¡áŸáž„áž–áž·ážŠáž¶áž“"],
    ["All-in-one", "ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›áž‚áŸ’áž“áž¶"],
    ["high resolution", "áž‚áž»ážŽáž—áž¶áž–áž”áž„áŸ’áž áž¶áž‰ážáŸ’áž–ážŸáŸ‹"],
    ["high clarity", "áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹ážáŸ’áž–ážŸáŸ‹"],
    ["close-view", "áž˜áž¾áž›áž‡áž·áž"],
    ["close viewing", "áž€áž¶ážšáž˜áž¾áž›áž‡áž·áž"],
    ["for", "ážŸáž˜áŸ’ážšáž¶áž”áŸ‹"],
    ["with", "áž‡áž¶áž˜áž½áž™"],
    ["and", "áž“áž·áž„"],
    ["in", "áž“áŸ…áž€áŸ’áž“áž»áž„"],
    ["to", "áž‘áŸ…"],
    ["from", "áž–áž¸"],
  ];

  let out = text;
  for (const [en, km] of map) {
    out = out.replace(new RegExp(escapeRegExp(en), "gi"), km);
  }

  if (hasKhmer(out)) return out;
  return `áž•áž›áž·ážáž•áž› ${text}`;
}

function localizedKhmer(valueKm: string, fallbackEn: string) {
  const cleaned = sanitizeKhmer(valueKm, fallbackEn);
  if (hasKhmer(cleaned)) return cleaned;
  return autoTranslateToKhmer(cleaned);
}

function getProductTitle(product: Product, lang: "en" | "km") {
  if (lang === "en") return product.titleEn;
  return localizedKhmer(product.titleKm, product.titleEn);
}

function getProductDesc(product: Product, lang: "en" | "km") {
  if (lang === "en") return product.shortDescEn;
  return localizedKhmer(product.shortDescKm, product.shortDescEn);
}

function getTags(product: Product, lang: "en" | "km") {
  if (lang === "en") return product.tagsEn;
  return product.tagsKm.map((tag, i) => localizedKhmer(tag, product.tagsEn[i] || tag));
}

function getCategoryLabel(
  category: { id: string; labelEn: string; labelKm: string },
  lang: "en" | "km"
) {
  if (lang === "en") return category.labelEn;
  const repaired = localizedKhmer(category.labelKm, category.labelEn);
  if (hasKhmer(repaired)) return repaired;
  return CATEGORY_LABEL_KM_FALLBACK[category.id] || repaired;
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
  searchTerm,
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
    const normalizedQuery = (searchTerm || "").trim().toLowerCase();

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

    if (normalizedQuery) {
      const scoreProduct = (p: Product) => {
        const titleEn = p.titleEn.toLowerCase();
        const titleKm = localizedKhmer(p.titleKm, p.titleEn).toLowerCase();
        const descEn = p.shortDescEn.toLowerCase();
        const descKm = localizedKhmer(p.shortDescKm, p.shortDescEn).toLowerCase();
        const tagsEn = p.tagsEn.join(" ").toLowerCase();
        const tagsKm = p.tagsKm
          .map((tag, i) => localizedKhmer(tag, p.tagsEn[i] || tag))
          .join(" ")
          .toLowerCase();
        const categories = p.categoryIds
          .map((id) => {
            const cat = PRODUCT_CATEGORIES.find((c) => c.id === id);
            if (!cat) return "";
            return `${cat.labelEn} ${localizedKhmer(cat.labelKm, cat.labelEn)}`;
          })
          .join(" ")
          .toLowerCase();

        let score = 0;
        if (titleEn.includes(normalizedQuery) || titleKm.includes(normalizedQuery)) score += 10;
        if (descEn.includes(normalizedQuery) || descKm.includes(normalizedQuery)) score += 6;
        if (tagsEn.includes(normalizedQuery) || tagsKm.includes(normalizedQuery)) score += 5;
        if (categories.includes(normalizedQuery)) score += 4;

        const words = normalizedQuery.split(/\s+/).filter(Boolean);
        for (const w of words) {
          if (titleEn.includes(w) || titleKm.includes(w)) score += 3;
          if (descEn.includes(w) || descKm.includes(w)) score += 2;
          if (tagsEn.includes(w) || tagsKm.includes(w)) score += 2;
          if (categories.includes(w)) score += 1;
        }
        return score;
      };

      list = list
        .map((p) => ({ p, score: scoreProduct(p) }))
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((x) => x.p);
    }

    const sorted = [...list].sort((a, b) => {
      if (normalizedQuery) return 0;

      if (!categoryOrderIds?.length && effectiveCategory === "all") {
        const aRank = DEFAULT_ALL_PRODUCTS_ORDER.indexOf(a.primaryCategoryId);
        const bRank = DEFAULT_ALL_PRODUCTS_ORDER.indexOf(b.primaryCategoryId);
        const aPriority = aRank === -1 ? Number.MAX_SAFE_INTEGER : aRank;
        const bPriority = bRank === -1 ? Number.MAX_SAFE_INTEGER : bRank;
        if (aPriority !== bPriority) return aPriority - bPriority;
      }

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
  }, [
    effectiveCategory,
    sortOrder,
    limit,
    allowedCategoryIds,
    categoryOrderIds,
    excludeSlugs,
    searchTerm,
  ]);

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
              {lang === "en" ? "All Products" : "áž•áž›áž·ážáž•áž›áž‘áž¶áŸ†áž„áž¢ážŸáŸ‹"}
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
        {paginated.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            {lang === "en"
              ? `No results found${searchTerm?.trim() ? ` for "${searchTerm.trim()}"` : ""}.`
              : `ážšáž€áž˜áž·áž“ážƒáž¾áž‰áž›áž‘áŸ’áž’áž•áž›${searchTerm?.trim() ? ` ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ "${searchTerm.trim()}"` : ""}áŸ”`}
          </div>
        ) : null}
        {paginated.map((product) => {
          const detailHref = `${detailBasePath}/${product.slug}`;
          const primaryCategory = getCategoryById(product.primaryCategoryId);
          const primaryLabel = primaryCategory
            ? lang === "en"
              ? primaryCategory.labelEn
              : getCategoryLabel(primaryCategory, "km")
            : lang === "en"
              ? "Product"
              : "áž•áž›áž·ážáž•áž›";

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
                <p className="mt-1 text-xs text-slate-600">{getProductDesc(product, lang)}</p>

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
                    {lang === "en" ? "Get Quotation" : "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ"}
                  </Link>
                  <Link
                    href={detailHref}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-300"
                  >
                    {lang === "en" ? "View details" : "áž˜áž¾áž›áž›áž˜áŸ’áž¢áž·áž"}
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

