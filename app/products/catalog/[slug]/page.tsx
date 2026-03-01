/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";
import {
  getAllProducts,
  getCategoryById,
  getProductBySlug,
} from "../../../data/products";
import { SITE_URL } from "../../../lib/site";

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
  const productUrl = `${SITE_URL}/products/catalog/${product.slug}/`;
  const defaultImageUrl = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;
  const imageUrl = product.heroImage
    ? product.heroImage.startsWith("http")
      ? product.heroImage
      : `${SITE_URL}${product.heroImage}`
    : defaultImageUrl;

  return {
    title: product.seoTitleEn,
    description: product.seoDescEn,
    alternates: {
      canonical: productUrl,
      languages: {
        en: `/products/catalog/${product.slug}/`,
        km: `/products/catalog/${product.slug}/?lang=km`,
        "x-default": `/products/catalog/${product.slug}/`,
      },
    },
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

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const productUrl = `${SITE_URL}/products/catalog/${product.slug}/`;
  const productsUrl = `${SITE_URL}/products/`;
  const categoryLabel =
    getCategoryById(product.primaryCategoryId)?.labelEn ?? product.primaryCategoryId;
  const defaultImageUrl = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;
  const imageUrl = product.heroImage
    ? product.heroImage.startsWith("http")
      ? product.heroImage
      : `${SITE_URL}${product.heroImage}`
    : defaultImageUrl;
  const description = product.seoDescEn || product.shortDescEn || product.titleEn;
  const additionalProperty = (product.specs || [])
    .filter((spec) => spec.labelEn?.trim() && spec.valueEn?.trim())
    .map((spec) => ({
      "@type": "PropertyValue",
      name: spec.labelEn,
      value: spec.valueEn,
    }));

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.titleEn,
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
    category: categoryLabel,
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
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: productsUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.titleEn,
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
