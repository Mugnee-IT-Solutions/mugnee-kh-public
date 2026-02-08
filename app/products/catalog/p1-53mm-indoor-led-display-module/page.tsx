import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetailClient from "../[slug]/ProductDetailClient";
import { getProductBySlug } from "../../../data/products";

export const dynamic = "force-static";

const SLUG = "p1-53mm-indoor-led-display-module";

export function generateMetadata(): Metadata {
  const product = getProductBySlug(SLUG);
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

export default function ProductDetailPage() {
  const product = getProductBySlug(SLUG);
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
