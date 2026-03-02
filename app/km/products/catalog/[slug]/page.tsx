import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "../../../../products/catalog/[slug]/ProductDetailClient";
import {
  getAllProducts,
  getCategoryById,
  getProductBySlug,
} from "../../../../data/products";
import { SITE_URL } from "../../../../lib/site";
import { getCatalogMetaOverride } from "../../../../lib/seoCtrOverrides";

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

  const kmUrl = `${SITE_URL}/km/products/catalog/${product.slug}/`;
  const defaultImageUrl = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;
  const imageUrl = product.heroImage
    ? product.heroImage.startsWith("http")
      ? product.heroImage
      : `${SITE_URL}${product.heroImage}`
    : defaultImageUrl;
  const override = getCatalogMetaOverride(product.slug, "km");
  const seoTitle = override?.title || product.seoTitleKm || product.seoTitleEn;
  const seoDesc = override?.description || product.seoDescKm || product.seoDescEn;
  const productName = product.titleKm || product.titleEn;

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: {
      canonical: kmUrl,
      languages: {
        en: `/products/catalog/${product.slug}/`,
        km: `/km/products/catalog/${product.slug}/`,
        "x-default": `/products/catalog/${product.slug}/`,
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

  const productUrl = `${SITE_URL}/km/products/catalog/${product.slug}/`;
  const productsUrl = `${SITE_URL}/km/products/`;
  const categoryLabel =
    getCategoryById(product.primaryCategoryId)?.labelEn ?? product.primaryCategoryId;
  const defaultImageUrl = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;
  const imageUrl = product.heroImage
    ? product.heroImage.startsWith("http")
      ? product.heroImage
      : `${SITE_URL}${product.heroImage}`
    : defaultImageUrl;
  const description =
    product.seoDescKm || product.shortDescKm || product.seoDescEn || product.shortDescEn || product.titleEn;
  const additionalProperty = (product.specs || [])
    .filter((spec) => spec.labelEn?.trim() && spec.valueEn?.trim())
    .map((spec) => ({
      "@type": "PropertyValue",
      name: spec.labelKm || spec.labelEn,
      value: spec.valueKm || spec.valueEn,
    }));

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.titleKm || product.titleEn,
    url: productUrl,
    mainEntityOfPage: productUrl,
    image: [imageUrl],
    description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Mugnee Cambodia",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Mugnee Cambodia",
      url: SITE_URL,
    },
    category: getCategoryById(product.primaryCategoryId)?.labelKm || categoryLabel,
    itemCondition: "https://schema.org/NewCondition",
    additionalProperty,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/km/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "ផលិតផល",
        item: productsUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.titleKm || product.titleEn,
        item: productUrl,
      },
    ],
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetailClient product={product} />
    </main>
  );
}
