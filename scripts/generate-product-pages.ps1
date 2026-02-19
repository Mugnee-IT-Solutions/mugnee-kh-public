$ErrorActionPreference = "Stop"

$productsPath = "app\data\products.ts"
$catalogBase = "app\products\catalog"

if (!(Test-Path -LiteralPath $productsPath)) {
  throw "Missing products data file: $productsPath"
}

$text = Get-Content -Raw -LiteralPath $productsPath
$slugs = [regex]::Matches($text, 'slug:\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique

foreach ($slug in $slugs) {
  $dir = Join-Path $catalogBase $slug
  if (!(Test-Path -LiteralPath $dir)) {
    New-Item -ItemType Directory -Path $dir | Out-Null
  }

  $page = Join-Path $dir 'page.tsx'
  $content = @"
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetailClient from "../[slug]/ProductDetailClient";
import { getProductBySlug } from "../../../data/products";
import { buildCatalogProductMetadata } from "../_sharedMetadata";

export const dynamic = "force-static";

const SLUG = "${slug}";

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
"@

  Set-Content -LiteralPath $page -Value $content
}

Write-Host "Generated $($slugs.Count) product pages under $catalogBase."
