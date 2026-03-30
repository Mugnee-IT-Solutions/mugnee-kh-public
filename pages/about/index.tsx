import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import AboutClient from "../../app/about/AboutClient";
import { SITE_URL } from "../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "About Mugnee Cambodia | Mission, Vision & Company Story";
const description =
  "Learn about Mugnee Cambodia, our mission, values, and experience delivering LED display and business technology solutions across Cambodia.";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/about/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/about/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/about/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/about/`} />
        <meta property="og:title" content="About Mugnee Cambodia" />
        <meta
          property="og:description"
          content="Learn about Mugnee Cambodia, our mission, values, and service capability for LED display and business technology solutions."
        />
        <meta property="og:url" content={`${SITE_URL}/about/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="About Mugnee Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Mugnee Cambodia" />
        <meta
          name="twitter:description"
          content="Learn about Mugnee Cambodia, our mission, values, and service capability for LED display and business technology solutions."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
        >
          <AboutClient lang="en" />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

