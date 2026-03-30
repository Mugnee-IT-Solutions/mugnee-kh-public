import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import ProjectsClient from "../../../app/projects/ProjectsClient";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "គម្រោងបច្ចេកវិទ្យានៅកម្ពុជា | Mugnee Cambodia";
const description =
  "មើលគម្រោង LED Display, Digital Signage, PA System និង Turnstile Gate ដែល Mugnee Cambodia បានដំឡើងនៅកម្ពុជា។";

export default function KmProjectsPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/projects/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/projects/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/projects/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/projects/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/km/projects/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="គម្រោង Mugnee Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
          <ProjectsClient lang="km" />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
