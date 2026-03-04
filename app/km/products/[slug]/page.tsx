import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "../../../products/catalog/[slug]/ProductDetailClient";
import {
  getAllProducts,
  getCategoryById,
  getProductBySlug,
} from "../../../data/products";
import { SITE_URL } from "../../../lib/site";
import { getCatalogMetaOverride } from "../../../lib/seoCtrOverrides";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const KHMER_RE = /[\u1780-\u17FF]/;

function hasKhmer(text: string | null | undefined) {
  return Boolean(text && KHMER_RE.test(text));
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
  const seoTitleRaw = override?.title || product.seoTitleKm || product.titleKm;
  const seoDescRaw = override?.description || product.seoDescKm;
  const seoTitle = hasKhmer(seoTitleRaw) ? seoTitleRaw : `${productName} | Mugnee Cambodia`;
  const seoDesc = hasKhmer(seoDescRaw)
    ? seoDescRaw
    : `ព័ត៌មានអំពី ${productName} នៅកម្ពុជា រួមមានលក្ខណៈបច្ចេកទេស ការប្រើប្រាស់ និងសេវាគាំទ្រពីក្រុម Mugnee Cambodia។`;

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

  return (
    <main className="bg-white">
      <ProductDetailClient product={product} relatedProducts={relatedProducts.slice(0, 8)} />
    </main>
  );
}

