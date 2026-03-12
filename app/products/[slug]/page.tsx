import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetailClient from "../catalog/[slug]/ProductDetailClient";
import {
  getAllProducts,
  getCategoryById,
  getProductBySlug,
} from "../../data/products";
import { SITE_URL } from "../../lib/site";
import { getCatalogMetaOverride } from "../../lib/seoCtrOverrides";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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
  const boundary = Math.max(sliced.lastIndexOf(". "), sliced.lastIndexOf(", "), sliced.lastIndexOf(" "));
  const trimmed = boundary > 80 ? sliced.slice(0, boundary) : normalized.slice(0, maxLength);
  return trimmed.replace(/[,\s]+$/, "").trim();
}

function normalizeMetaTitle(title: string, fallbackTitle: string) {
  const normalized = normalizeWhitespace(title || fallbackTitle);
  const enriched = normalized.length < 32 ? `${fallbackTitle} | Mugnee Cambodia` : normalized;
  return trimMetaText(enriched, 60);
}

function normalizeMetaDescription(text: string, fallbackText: string) {
  const base = normalizeWhitespace(text || fallbackText);
  const enriched =
    base.length < 110
      ? `${base} Available with price guidance, installation, and local support from Mugnee Cambodia.`
      : base;
  return trimMetaText(enriched, 158);
}

function buildProductDescription(slug: string) {
  const product = getProductBySlug(slug);
  if (!product) return "";

  const candidates = [
    product.seoDescEn,
    product.shortDescEn,
    product.descriptionEn,
  ].filter(Boolean) as string[];

  const strongCandidate = candidates.find((item) => !isWeakDescription(item));
  if (strongCandidate) return strongCandidate;

  const categoryName = getCategoryById(product.primaryCategoryId)?.labelEn || "product";
  const features = (product.featuresEn || []).slice(0, 2).join(", ");
  const applications = (product.applicationsEn || []).slice(0, 2).join(", ");

  const parts = [
    `${product.titleEn} in Cambodia with ${categoryName.toLowerCase()} support from Mugnee Cambodia.`,
    features ? `Key features include ${features}.` : "",
    applications ? `Suitable for ${applications}.` : "",
  ].filter(Boolean);

  return parts.join(" ");
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

  const productUrl = `${SITE_URL}/products/${product.slug}/`;
  const defaultImageUrl = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;
  const imageUrl = product.heroImage
    ? product.heroImage.startsWith("http")
      ? product.heroImage
      : `${SITE_URL}${product.heroImage}`
    : defaultImageUrl;
  const override = getCatalogMetaOverride(product.slug, "en");
  const baseTitle = override?.title || product.seoTitleEn || product.titleEn;
  const baseDesc = isWeakDescription(override?.description)
    ? buildProductDescription(product.slug)
    : override?.description || buildProductDescription(product.slug);
  const seoTitle = normalizeMetaTitle(baseTitle, `${product.titleEn} Price in Cambodia`);
  const seoDesc = normalizeMetaDescription(baseDesc, buildProductDescription(product.slug));

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: {
      canonical: productUrl,
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
      url: productUrl,
      type: "website",
      siteName: "Mugnee Cambodia",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.titleEn,
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

  return (
    <div className="bg-white">
      <ProductDetailClient product={product} relatedProducts={relatedProducts.slice(0, 8)} />
    </div>
  );
}
