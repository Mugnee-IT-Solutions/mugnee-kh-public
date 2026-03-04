import { permanentRedirect } from "next/navigation";
import { getAllProducts, getProductBySlug } from "../../../../data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProducts()
    .filter((product) => Boolean(product.slug))
    .map((product) => ({ slug: product.slug }));
}

export default async function LegacyKmCatalogProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    permanentRedirect("/km/products/");
  }
  permanentRedirect(`/km/products/${product.slug}/`);
}
