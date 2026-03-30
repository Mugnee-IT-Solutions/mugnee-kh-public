import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import ProductDetailClient from "../../app/products/catalog/[slug]/ProductDetailClient";
import { getAllProducts, getCategoryById, getProductBySlug, type Product } from "../../app/data/products";
import { SITE_URL } from "../../app/lib/site";
import { getCatalogMetaOverride } from "../../app/lib/seoCtrOverrides";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

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

  const candidates = [product.seoDescEn, product.shortDescEn, product.descriptionEn].filter(Boolean) as string[];
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

function getRelatedProducts(product: Product) {
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

  return relatedProducts.slice(0, 8);
}

type PageProps = {
  product: Product;
  relatedProducts: Product[];
  seoTitle: string;
  seoDesc: string;
  imageUrl: string;
  canonicalPath: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProducts()
    .filter((product) => Boolean(product.slug))
    .map((product) => ({ params: { slug: product.slug } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  const product = getProductBySlug(slug);
  if (!product) return { notFound: true };

  const canonicalPath = `/products/${product.slug}/`;
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

  const relatedProducts = getRelatedProducts(product);

  return {
    props: {
      product,
      relatedProducts,
      seoTitle,
      seoDesc,
      imageUrl,
      canonicalPath,
    },
  };
};

export default function ProductDetailPage({
  product,
  relatedProducts,
  seoTitle,
  seoDesc,
  imageUrl,
  canonicalPath,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/products/${product.slug}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${canonicalPath}`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:url" content={`${SITE_URL}${canonicalPath}`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={product.titleEn} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
        >
          <div className="bg-white">
            <ProductDetailClient product={product} relatedProducts={relatedProducts} />
          </div>
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

