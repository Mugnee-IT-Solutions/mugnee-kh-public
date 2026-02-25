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
  params: { slug: string };
};

export function generateStaticParams() {
  const params = new Set<string>();
  for (const product of getAllProducts()) {
    if (product.slug) params.add(product.slug);
    if (product.id) params.add(product.id);
    if (product.id?.startsWith("pa-")) params.add(product.id.replace(/^pa-/, ""));
  }
  return Array.from(params).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug);
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

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const productUrl = `${SITE_URL}/products/catalog/${product.slug}`;
  const categoryLabel =
    getCategoryById(product.primaryCategoryId)?.labelEn ?? product.primaryCategoryId;
  const imageUrl = product.heroImage.startsWith("http")
    ? product.heroImage
    : `${SITE_URL}${product.heroImage}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.titleEn,
    url: productUrl,
    mainEntityOfPage: productUrl,
    image: imageUrl,
    description: product.seoDescEn,
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
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.labelEn,
      value: spec.valueEn,
    })),
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient product={product} />
    </main>
  );
}
