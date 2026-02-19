import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetailClient from "../[slug]/ProductDetailClient";
import { getProductBySlug } from "../../../data/products";
import { buildCatalogProductMetadata } from "../_sharedMetadata";

export const dynamic = "force-static";

const SLUG = "quantum-speed-gate-ds-q60";

export function generateMetadata(): Metadata {
  return buildCatalogProductMetadata(SLUG);
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
