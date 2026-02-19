import type { Metadata } from "next";
import { getProductBySlug } from "../../data/products";
import { SITE_URL } from "../../lib/site";

export function buildCatalogProductMetadata(slug: string): Metadata {
  const product = getProductBySlug(slug);
  if (!product) return {};

  const productUrl = `${SITE_URL}/products/catalog/${product.slug}`;
  const imageUrl = product.heroImage.startsWith("http")
    ? product.heroImage
    : `${SITE_URL}${product.heroImage}`;

  return {
    title: product.seoTitleEn,
    description: product.seoDescEn,
    alternates: { canonical: productUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: product.seoTitleEn,
      description: product.seoDescEn,
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
      title: product.seoTitleEn,
      description: product.seoDescEn,
      images: [imageUrl],
    },
  };
}
