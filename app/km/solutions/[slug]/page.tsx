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

const KHMER_RE = /[\u1780-\u17FF]/;

function hasKhmer(text: string | null | undefined) {
  return Boolean(text && KHMER_RE.test(text));
}

function trimMetaTitle(title: string, maxLength = 56) {
  if (title.length <= maxLength) return title;
  const sliced = title.slice(0, maxLength + 1);
  const boundary = Math.max(sliced.lastIndexOf("|"), sliced.lastIndexOf(" "), sliced.lastIndexOf("៖"));
  return (boundary > 20 ? sliced.slice(0, boundary) : title.slice(0, maxLength)).replace(/[|៖\s]+$/g, "").trim();
}

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
  const kmTitle = hasKhmer(override?.title)
    ? override!.title
    : "ដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា សម្រាប់ LED Display និងប្រព័ន្ធឆ្លាតវៃ";
  const description = hasKhmer(override?.description)
    ? override!.description
    : "ទំព័រដំណោះស្រាយនេះផ្តល់ព័ត៌មានសម្រាប់ទីផ្សារកម្ពុជា អំពីតម្លៃគម្រោង ការរៀបចំ BOQ ការដំឡើង និងសេវាគាំទ្របន្ទាប់ពីលក់ សម្រាប់អាជីវកម្ម។";

  const seoTitle = trimMetaTitle(kmTitle);
  return {
    title: seoTitle,
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
      title: seoTitle,
      description,
      url: pageUrl,
      siteName: "Mugnee Cambodia",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
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
