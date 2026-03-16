import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import IndustrySolutionPage from "../../../app/solutions/_components/IndustrySolutionPage";
import {
  INDUSTRY_SOLUTIONS,
  INDUSTRY_SOLUTIONS_BY_SLUG,
  type IndustrySolution,
} from "../../../app/solutions/_data/industrySolutions";
import { SITE_URL } from "../../../app/lib/site";
import { getSolutionMetaOverride } from "../../../app/lib/seoCtrOverrides";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const KHMER_RE = /[\u1780-\u17FF]/;

function hasKhmer(text: string | null | undefined) {
  return Boolean(text && KHMER_RE.test(text));
}

function trimMetaTitle(title: string, maxLength = 56) {
  if (title.length <= maxLength) return title;
  const sliced = title.slice(0, maxLength + 1);
  const boundary = Math.max(sliced.lastIndexOf("|"), sliced.lastIndexOf(" "), sliced.lastIndexOf("៖"));
  return (boundary > 20 ? sliced.slice(0, boundary) : title.slice(0, maxLength))
    .replace(/[|៖\s]+$/g, "")
    .trim();
}

type PageProps = {
  solution: IndustrySolution;
  title: string;
  description: string;
  canonicalPath: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: INDUSTRY_SOLUTIONS.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  const solution = INDUSTRY_SOLUTIONS_BY_SLUG[slug];
  if (!solution) return { notFound: true };

  const canonicalPath = `/km/solutions/${solution.slug}/`;
  const override = getSolutionMetaOverride(solution.slug, "km");

  const rawTitle = hasKhmer(override?.title)
    ? override!.title
    : "ដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា សម្រាប់ LED Display និងប្រព័ន្ធឆ្លាតវៃ";
  const rawDescription = hasKhmer(override?.description)
    ? override!.description
    : "ទំព័រដំណោះស្រាយនេះផ្តល់ព័ត៌មានសម្រាប់ទីផ្សារកម្ពុជា អំពីតម្លៃគម្រោង ការរៀបចំ BOQ ការដំឡើង និងសេវាគាំទ្របន្ទាប់ពីលក់ សម្រាប់អាជីវកម្ម។";

  return {
    props: {
      solution,
      title: trimMetaTitle(rawTitle),
      description: rawDescription,
      canonicalPath,
    },
  };
};

export default function KmSolutionDetailPage({
  solution,
  title,
  description,
  canonicalPath,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const ogImage = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/solutions/${solution.slug}/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/solutions/${solution.slug}/`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}${canonicalPath}`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
        >
          <IndustrySolutionPage solution={solution} forcedLang="km" />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

