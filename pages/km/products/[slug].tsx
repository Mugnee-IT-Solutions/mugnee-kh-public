import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import ProductDetailClient from "../../../app/products/catalog/[slug]/ProductDetailClient";
import {
  getAllProducts,
  getCategoryById,
  getProductBySlug,
  type Product,
} from "../../../app/data/products";
import { SITE_URL } from "../../../app/lib/site";
import { getCatalogMetaOverride } from "../../../app/lib/seoCtrOverrides";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

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
    normalized.length < 30
      ? `${fallbackTitle} តម្លៃ និងព័ត៌មាន`
      : normalized.length < 20
        ? `${fallbackTitle} | Mugnee Cambodia`
        : normalized;
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
    featuresEn: product.featuresKm.map((item, i) => (hasKhmer(item) ? item : product.featuresEn[i] || item)),
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
  productName: string;
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

  const canonicalPath = `/km/products/${product.slug}/`;
  const kmUrl = `${SITE_URL}${canonicalPath}`;

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

  const seoTitle = normalizeMetaTitle(hasKhmer(seoTitleRaw) ? seoTitleRaw : fallbackTitle, fallbackTitle);
  const seoDesc = normalizeMetaDescription(
    hasKhmer(seoDescRaw) && !isWeakDescription(seoDescRaw) ? seoDescRaw : buildKhmerProductDescription(product.slug),
    buildKhmerProductDescription(product.slug),
  );

  const relatedProducts = getRelatedProducts(product).map(buildKhmerClientProduct);
  const localizedProduct = buildKhmerClientProduct(product);

  return {
    props: {
      product: localizedProduct,
      relatedProducts,
      seoTitle,
      seoDesc,
      imageUrl,
      canonicalPath,
      productName,
    },
  };
};

export default function KmProductDetailPage({
  product,
  relatedProducts,
  seoTitle,
  seoDesc,
  imageUrl,
  canonicalPath,
  productName,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/products/${product.slug}/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/products/${product.slug}/`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:url" content={`${SITE_URL}${canonicalPath}`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={productName} />
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
            <ProductDetailClient product={product} relatedProducts={relatedProducts} forcedLang="km" />
          </div>
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

