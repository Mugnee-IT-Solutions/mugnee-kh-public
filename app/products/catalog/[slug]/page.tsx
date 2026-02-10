import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";
import { getAllProducts, getProductBySlug } from "../../../data/products";

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

  return {
    title: product.seoTitleEn,
    description: product.seoDescEn,
    openGraph: {
      title: product.seoTitleEn,
      description: product.seoDescEn,
      images: [product.heroImage],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.titleEn,
    image: product.heroImage,
    description: product.seoDescEn,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Mugnee Cambodia",
    },
    category: product.primaryCategoryId,
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
