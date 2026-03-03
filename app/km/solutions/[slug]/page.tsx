import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "../../../lib/site";
import { getSolutionMetaOverride } from "../../../lib/seoCtrOverrides";
import IndustrySolutionPage from "../../../solutions/_components/IndustrySolutionPage";
import {
  INDUSTRY_SOLUTIONS,
  INDUSTRY_SOLUTIONS_BY_SLUG,
} from "../../../solutions/_data/industrySolutions";

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

  const pageUrl = `${SITE_URL}/km/solutions/${solution.slug}/`;
  const ogImage = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;
  const override = getSolutionMetaOverride(solution.slug, "km");
  const kmTitle = override?.title ?? `ដំណោះស្រាយ: ${solution.title}`;
  const description = override?.description ?? solution.description;

  return {
    title: `${kmTitle} | Mugnee Cambodia`,
    description,
    alternates: {
      canonical: pageUrl,
      languages: {
        "en-kh": `/solutions/${solution.slug}/`,
        "km-kh": `/km/solutions/${solution.slug}/`,
        "x-default": `/solutions/${solution.slug}/`,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${kmTitle} | Mugnee Cambodia`,
      description,
      url: pageUrl,
      siteName: "Mugnee Cambodia",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${kmTitle} | Mugnee Cambodia`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${kmTitle} | Mugnee Cambodia`,
      description,
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
