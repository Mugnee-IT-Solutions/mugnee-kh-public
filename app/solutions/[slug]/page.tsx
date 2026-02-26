/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "../../lib/site";
import IndustrySolutionPage from "../_components/IndustrySolutionPage";
import { INDUSTRY_SOLUTIONS, INDUSTRY_SOLUTIONS_BY_SLUG } from "../_data/industrySolutions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRY_SOLUTIONS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = INDUSTRY_SOLUTIONS_BY_SLUG[slug];
  if (!solution) return {};

  const pageUrl = `${SITE_URL}/solutions/${solution.slug}`;
  const ogImage = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;
  return {
    title: `${solution.title} | Mugnee Cambodia`,
    description: solution.description,
    alternates: { canonical: pageUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${solution.title} | Mugnee Cambodia`,
      description: solution.description,
      url: pageUrl,
      siteName: "Mugnee Cambodia",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${solution.title} | Mugnee Cambodia`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.title} | Mugnee Cambodia`,
      description: solution.description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const solution = INDUSTRY_SOLUTIONS_BY_SLUG[slug];
  if (!solution) notFound();
  return <IndustrySolutionPage solution={solution} />;
}
