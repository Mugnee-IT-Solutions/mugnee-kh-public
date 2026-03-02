import type { Metadata } from "next";
import { getProductBySlug } from "../../data/products";
import { SITE_URL } from "../../lib/site";
import { getCatalogMetaOverride } from "../../lib/seoCtrOverrides";

export function buildCatalogProductMetadata(slug: string): Metadata {
  const product = getProductBySlug(slug);
  if (!product) return {};

  const productUrl = `${SITE_URL}/products/catalog/${product.slug}/`;
  const defaultImageUrl = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;
  const imageUrl = product.heroImage
    ? product.heroImage.startsWith("http")
      ? product.heroImage
      : `${SITE_URL}${product.heroImage}`
    : defaultImageUrl;
  const override = getCatalogMetaOverride(product.slug, "en");
  const title = override?.title ?? product.seoTitleEn;
  const description = override?.description ?? product.seoDescEn;

  return {
    title,
    description,
    alternates: {
      canonical: productUrl,
      languages: {
        en: `/products/catalog/${product.slug}/`,
        km: `/km/products/catalog/${product.slug}/`,
        "x-default": `/products/catalog/${product.slug}/`,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
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
      title,
      description,
      images: [imageUrl],
    },
  };
}
