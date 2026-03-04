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
  const seoTitle = override?.title || product.seoTitleEn;
  const seoDesc = override?.description || product.seoDescEn;

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
    <main className="bg-white">
      <ProductDetailClient product={product} relatedProducts={relatedProducts.slice(0, 8)} />
    </main>
  );
}
