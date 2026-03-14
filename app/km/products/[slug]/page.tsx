import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "../../../products/catalog/[slug]/ProductDetailClient";
import {
  getAllProducts,
  getCategoryById,
  getProductBySlug,
} from "../../../data/products";
import type { Product } from "../../../data/products";
import { SITE_URL } from "../../../lib/site";
import { getCatalogMetaOverride } from "../../../lib/seoCtrOverrides";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const KHMER_RE = /[\u1780-\u17FF]/;

function hasKhmer(text: string | null | undefined) {
  return Boolean(text && KHMER_RE.test(text));
}

function isWeakDescription(text: string | null | undefined) {
  if (!text) return true;
  const normalized = text.trim().toLowerCase();
  return normalized.length < 40 || normalized === "key features";
}

function normalizeWhitespace(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function trimMetaText(text: string, maxLength: number) {
  const normalized = normalizeWhitespace(text);
  if (normalized.length <= maxLength) return normalized;

  const sliced = normalized.slice(0, maxLength + 1);
  const boundary = Math.max(sliced.lastIndexOf("។"), sliced.lastIndexOf(" "), sliced.lastIndexOf(", "));
  const trimmed = boundary > 80 ? sliced.slice(0, boundary) : normalized.slice(0, maxLength);
  return trimmed.replace(/[,\s]+$/, "").trim();
}

function normalizeMetaTitle(title: string, fallbackTitle: string) {
  const normalized = normalizeWhitespace(title || fallbackTitle);
  const enriched =
    normalized.length < 30 ? `${fallbackTitle} តម្លៃ និងព័ត៌មាន` : normalized.length < 20 ? `${fallbackTitle} | Mugnee Cambodia` : normalized;
  return trimMetaText(enriched, 58);
}

function normalizeMetaDescription(text: string, fallbackText: string) {
  const base = normalizeWhitespace(text || fallbackText);
  const enriched =
    base.length < 90
      ? `${base} មានសេវាប្រឹក្សាតម្លៃ ការដំឡើង និងការគាំទ្រក្នុងស្រុកពី Mugnee Cambodia។`
      : base;
  return trimMetaText(enriched, 158);
}

function buildKhmerProductDescription(slug: string) {
  const product = getProductBySlug(slug);
  if (!product) return "";

  const categoryName = hasKhmer(getCategoryById(product.primaryCategoryId)?.labelKm)
    ? getCategoryById(product.primaryCategoryId)?.labelKm
    : product.titleKm || product.titleEn;
  const applications = (product.applicationsKm || []).slice(0, 2).join(" និង ");
  const features = (product.featuresKm || []).slice(0, 2).join(" និង ");

  return [
    `ព័ត៌មានអំពី ${product.titleKm || product.titleEn} នៅកម្ពុជា ពី Mugnee Cambodia។`,
    categoryName ? `សមស្របសម្រាប់ប្រភេទ ${categoryName}។` : "",
    features ? `ចំណុចសំខាន់រួមមាន ${features}។` : "",
    applications ? `អាចប្រើបានសម្រាប់ ${applications}។` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function buildKhmerClientProduct(product: Product): Product {
  return {
    ...product,
    titleEn: hasKhmer(product.titleKm) ? product.titleKm : product.titleEn,
    shortDescEn: hasKhmer(product.shortDescKm) ? product.shortDescKm : product.shortDescEn,
    descriptionEn: hasKhmer(product.descriptionKm) ? product.descriptionKm : product.descriptionEn,
    tagsEn: product.tagsKm.map((item, i) => (hasKhmer(item) ? item : product.tagsEn[i] || item)),
    featuresEn: product.featuresKm.map((item, i) =>
      hasKhmer(item) ? item : product.featuresEn[i] || item,
    ),
    applicationsEn: product.applicationsKm.map((item, i) =>
      hasKhmer(item) ? item : product.applicationsEn[i] || item,
    ),
    specs: product.specs.map((spec) => ({
      ...spec,
      labelEn: hasKhmer(spec.labelKm) ? spec.labelKm : spec.labelEn,
      valueEn: hasKhmer(spec.valueKm) ? spec.valueKm : spec.valueEn,
    })),
  };
}

export function generateStaticParams() {
  return getAllProducts()
    .filter((product) => Boolean(product.slug))
    .map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const kmUrl = `${SITE_URL}/km/products/${product.slug}/`;
  const defaultImageUrl = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;
  const imageUrl = product.heroImage
    ? product.heroImage.startsWith("http")
      ? product.heroImage
      : `${SITE_URL}${product.heroImage}`
    : defaultImageUrl;
  const override = getCatalogMetaOverride(product.slug, "km");
  const productName = hasKhmer(product.titleKm) ? product.titleKm : product.titleEn;
  const categoryLabelKm = getCategoryById(product.primaryCategoryId)?.labelKm;
  const fallbackTitle = hasKhmer(categoryLabelKm)
    ? `${productName} ${categoryLabelKm} នៅកម្ពុជា`
    : `${productName} នៅកម្ពុជា`;
  const seoTitleRaw = override?.title || product.seoTitleKm || product.titleKm;
  const seoDescRaw = override?.description || product.seoDescKm;
  const seoTitle = normalizeMetaTitle(
    hasKhmer(seoTitleRaw) ? seoTitleRaw : fallbackTitle,
    fallbackTitle,
  );
  const seoDesc = normalizeMetaDescription(
    hasKhmer(seoDescRaw) && !isWeakDescription(seoDescRaw)
      ? seoDescRaw
      : buildKhmerProductDescription(product.slug),
    buildKhmerProductDescription(product.slug),
  );

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: {
      canonical: kmUrl,
      languages: {
        "en-kh": `/products/${product.slug}/`,
        "km-kh": `/km/products/${product.slug}/`,
        "x-default": `/products/${product.slug}/`,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      url: kmUrl,
      type: "website",
      siteName: "Mugnee Cambodia",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: productName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDesc,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const allProducts = getAllProducts();
  const parentCategoryId = getCategoryById(product.primaryCategoryId)?.parentId ?? null;

  const samePrimary = allProducts.filter((item) => {
    if (item.slug === product.slug) return false;
    return item.primaryCategoryId === product.primaryCategoryId;
  });

  let relatedProducts = samePrimary;
  if (relatedProducts.length < 8 && parentCategoryId) {
    const sameParent = allProducts.filter((item) => {
      if (item.slug === product.slug) return false;
      return getCategoryById(item.primaryCategoryId)?.parentId === parentCategoryId;
    });
    const merged = [...samePrimary];
    for (const item of sameParent) {
      if (!merged.some((p) => p.slug === item.slug)) {
        merged.push(item);
      }
      if (merged.length >= 8) break;
    }
    relatedProducts = merged;
  }

  const localizedProduct = buildKhmerClientProduct(product);
  const localizedRelatedProducts = relatedProducts
    .slice(0, 8)
    .map((item) => buildKhmerClientProduct(item));

  return (
    <div className="bg-white">
      <ProductDetailClient
        product={localizedProduct}
        relatedProducts={localizedRelatedProducts}
        forcedLang="km"
      />
    </div>
  );
}

