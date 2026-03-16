import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import HomeClient from "../../app/components/home/HomeClient";
import { SITE_URL } from "../../app/lib/site";
import { HOME_CATEGORY_TILES, HOME_FAQ } from "../../lib/homeData";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

// Keep KM page metadata ASCII-safe to avoid mojibake issues.
const title = "Digital Signage & Smart Board Cambodia | Mugnee Cambodia (KM)";
const description =
  "Mugnee Cambodia supplies digital signage, smart boards, PA systems, and access control in Cambodia with site survey, installation, and local support.";

export default function KmHomePage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/km/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mugnee Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
          <HomeClient categoryTiles={HOME_CATEGORY_TILES} faq={HOME_FAQ} />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

