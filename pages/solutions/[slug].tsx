import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import IndustrySolutionPage from "../../app/solutions/_components/IndustrySolutionPage";
import {
  INDUSTRY_SOLUTIONS,
  INDUSTRY_SOLUTIONS_BY_SLUG,
  type IndustrySolution,
} from "../../app/solutions/_data/industrySolutions";
import { SITE_URL } from "../../app/lib/site";
import { getSolutionMetaOverride } from "../../app/lib/seoCtrOverrides";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

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

  const canonicalPath = `/solutions/${solution.slug}/`;
  const override = getSolutionMetaOverride(solution.slug, "en");
  const title = override?.title ?? `${solution.title} | Mugnee Cambodia`;
  const description = override?.description ?? solution.description;

  return {
    props: {
      solution,
      title,
      description,
      canonicalPath,
    },
  };
};

export default function SolutionDetailPage({
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
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/solutions/${solution.slug}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${canonicalPath}`} />

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
          <IndustrySolutionPage solution={solution} forcedLang="en" />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

