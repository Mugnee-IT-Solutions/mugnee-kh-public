import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import ProjectsClient from "../../app/projects/ProjectsClient";
import { SITE_URL } from "../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Projects in Cambodia | Mugnee Cambodia";
const description =
  "Explore Mugnee Cambodia project references for LED display, digital signage, PA systems, and access control implementations.";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/projects/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/projects/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/projects/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/projects/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="See completed and ongoing technology projects by Mugnee Cambodia across LED display, PA, signage, and access control."
        />
        <meta property="og:url" content={`${SITE_URL}/projects/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mugnee Cambodia project portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Project references for LED display, digital signage, PA systems, and access control in Cambodia."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`}
        />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
        >
          <ProjectsClient lang="en" />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
