"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import productGridIndex from "../../../public/data/products-grid-index.json";
import { useLang } from "../layout/LanguageProvider";

type ProductLite = {
  id: string;
  slug: string;
  categoryIds: string[];
  primaryCategoryId: string;
  titleEn: string;
  titleKm: string;
  shortDescEn: string;
  shortDescKm: string;
  heroImage: string;
  tagsEn: string[];
  tagsKm: string[];
};

type ProductCategoryLite = {
  id: string;
  parentId?: string;
  labelEn: string;
  labelKm: string;
  slug: string;
  descriptionEn: string;
  descriptionKm: string;
};

type ProductGridIndex = {
  categories: ProductCategoryLite[];
  products: ProductLite[];
};

type ProductGridProps = {
  forcedLang?: "en" | "km";
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
  indoor_led_display: "អេក្រង់ LED ខាងក្នុង",
  outdoor_led_display: "អេក្រង់ LED ខាងក្រៅ",
  rental_led_display: "អេក្រង់ LED សម្រាប់ជួល",
  led_accessories: "គ្រឿងបន្លាស់ LED",
  power_supply: "ផ្គត់ផ្គង់ថាមពល",
  video_processor: "វីដេអូប្រូសេស័រ",
  interactive_panel: "អេក្រង់អន្តរកម្ម",
  pa_speakers: "ឧបករណ៍បំពងសំឡេង PA",
  pa_microphones: "មីក្រូហ្វូន PA",
  pa_amplifiers: "អំព្លីហ្វាយអ័រ PA",
  pa_controllers: "ឧបករណ៍បញ្ជា PA",
  pa_network: "អូឌីយ៉ូបណ្តាញ",
  pa_software: "កម្មវិធី PA",
  pa_accessories: "គ្រឿងបន្លាស់ PA",
  turnstile_tripod: "ច្រក Tripod Turnstile",
  turnstile_flap_barrier: "ច្រក Flap Barrier",
  turnstile_speed_gate: "ច្រក Speed Gate",
  turnstile_full_height: "ច្រកកម្ពស់ពេញ",
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
    ["Interactive Flat Panel", "អេក្រង់អន្តរកម្ម"],
    ["Indoor LED Display", "អេក្រង់ LED ខាងក្នុង"],
    ["Outdoor LED Display", "អេក្រង់ LED ខាងក្រៅ"],
    ["Rental LED Display", "អេក្រង់ LED សម្រាប់ជួល"],
    ["LED Display Module", "ម៉ូឌុលអេក្រង់ LED"],
    ["LED Screen Panel", "បន្ទះអេក្រង់ LED"],
    ["LED Display", "អេក្រង់ LED"],
    ["Video Processor", "វីដេអូប្រូសេស័រ"],
    ["Power Supply", "ផ្គត់ផ្គង់ថាមពល"],
    ["PA System", "ប្រព័ន្ធ PA"],
    ["PA Speakers", "ឧបករណ៍បំពងសំឡេង PA"],
    ["PA Microphones", "មីក្រូហ្វូន PA"],
    ["PA Amplifiers", "អំព្លីហ្វាយអ័រ PA"],
    ["PA Controllers", "ឧបករណ៍បញ្ជា PA"],
    ["Network Audio", "អូឌីយ៉ូបណ្តាញ"],
    ["PA Software", "កម្មវិធី PA"],
    ["PA Accessories", "គ្រឿងបន្លាស់ PA"],
    ["Interactive Panel", "អេក្រង់អន្តរកម្ម"],
    ["Smart Board", "ស្មាតបូដ"],
    ["Turnstile Gate", "ច្រក Turnstile"],
    ["Tripod Turnstile", "ច្រក Tripod Turnstile"],
    ["Flap Barrier", "ច្រក Flap Barrier"],
    ["Speed Gate", "ច្រក Speed Gate"],
    ["Full Height", "កម្ពស់ពេញ"],
    ["Ceiling Speakers", "ឧបករណ៍បំពងសំឡេងពិដាន"],
    ["All-in-one", "រួមបញ្ចូលគ្នា"],
    ["high resolution", "គុណភាពបង្ហាញខ្ពស់"],
    ["high clarity", "ភាពច្បាស់ខ្ពស់"],
    ["close-view", "មើលជិត"],
    ["close viewing", "ការមើលជិត"],
    ["for", "សម្រាប់"],
    ["with", "ជាមួយ"],
    ["and", "និង"],
    ["in", "នៅក្នុង"],
    ["to", "ទៅ"],
    ["from", "ពី"],
  ];

  let out = text;
  for (const [en, km] of map) {
    out = out.replace(new RegExp(escapeRegExp(en), "gi"), km);
  }

  if (hasKhmer(out)) return out;
  return `ផលិតផល ${text}`;
}

function localizedKhmer(valueKm: string, fallbackEn: string) {
  const cleaned = sanitizeKhmer(valueKm, fallbackEn);
  if (hasKhmer(cleaned)) return cleaned;
  return autoTranslateToKhmer(cleaned);
}

function getProductTitle(product: ProductLite, lang: "en" | "km") {
  if (lang === "en") return product.titleEn;
  return localizedKhmer(product.titleKm, product.titleEn);
}

function getProductDesc(product: ProductLite, lang: "en" | "km") {
  if (lang === "en") return product.shortDescEn;
  return localizedKhmer(product.shortDescKm, product.shortDescEn);
}

function getTags(product: ProductLite, lang: "en" | "km") {
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

function toLocalizedHref(href: string, lang: "en" | "km") {
  if (!href.startsWith("/")) return href;
  const normalized = href === "/" ? href : href.endsWith("/") ? href : `${href}/`;
  if (lang === "km" && !normalized.startsWith("/km/")) return `/km${normalized}`;
  if (lang === "en" && normalized.startsWith("/km/")) return normalized.slice(3);
  return normalized;
}

export default function ProductGrid({
  forcedLang,
  categoryId,
  showCategoryFilters = true,
  showSort = true,
  columns = 3,
  limit,
  pageSize = 12,
  showPagination = true,
  detailBasePath = "/products",
  allowedCategoryIds,
  filterCategoryIds,
  categoryOrderIds,
  excludeSlugs,
  topLeftContent,
  searchTerm,
}: ProductGridProps) {
  const { lang: contextLang } = useLang();
  const lang = forcedLang ?? contextLang;
  const [indexData] = useState<ProductGridIndex>(productGridIndex as ProductGridIndex);
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
    const products = indexData?.products ?? [];
    const categories = indexData?.categories ?? [];
    const ids = new Set(products.flatMap((p) => p.categoryIds));
    let list = categories.filter((c) => ids.has(c.id));

    if (filterCategoryIds?.length) {
      const filterSet = new Set(filterCategoryIds);
      list = list.filter((c) => filterSet.has(c.id));
    } else {
      list = list.filter((c) => c.id !== "led_display");
    }

    return list;
  }, [filterCategoryIds, indexData]);

  const filtered = useMemo(() => {
    let list = indexData?.products ?? [];
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
      const scoreProduct = (p: ProductLite) => {
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
            const cat = indexData?.categories.find((c) => c.id === id);
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
    indexData,
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

  const showControlsRow = showCategoryFilters || showSort || Boolean(topLeftContent);
  const isLoading = false;

  return (
    <div>
      {showControlsRow ? (
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
        ) : topLeftContent ? (
          <div>{topLeftContent}</div>
        ) : (
          <div />
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
      ) : null}

      <div className={`mt-6 grid gap-4 ${getGridCols(columns)}`}>
        {isLoading ? (
          Array.from({ length: Math.max(3, Math.min(pageSize, 6)) }).map((_, i) => (
            <div
              key={`product-skeleton-${i}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] w-full animate-pulse bg-slate-100" />
              <div className="space-y-2 p-4">
                <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100" />
                <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
                <div className="h-3 w-5/6 animate-pulse rounded bg-slate-100" />
              </div>
            </div>
          ))
        ) : null}
        {!isLoading && paginated.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            {lang === "en"
              ? `No results found${searchTerm?.trim() ? ` for "${searchTerm.trim()}"` : ""}.`
              : `រកមិនឃើញលទ្ធផល${searchTerm?.trim() ? ` សម្រាប់ "${searchTerm.trim()}"` : ""}។`}
          </div>
        ) : null}
        {!isLoading && paginated.map((product) => {
          const detailHref = toLocalizedHref(`${detailBasePath}/${product.slug}`, lang);
          const primaryCategory =
            indexData?.categories.find((category) => category.id === product.primaryCategoryId) ??
            null;
          const primaryLabel = primaryCategory
            ? lang === "en"
              ? primaryCategory.labelEn
              : getCategoryLabel(primaryCategory, "km")
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
                    href={toLocalizedHref("/contact", lang)}
                    className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white no-underline hover:bg-slate-800"
                  >
                    {lang === "en" ? "Get Quotation" : "ស្នើសុំតម្លៃ"}
                  </Link>
                  <Link
                    href={detailHref}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-300"
                  >
                    {lang === "en" ? "View details" : "មើលលម្អិត"}
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
