import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import TermsAndConditionsView from "../../app/terms-and-conditions/View";
import { SITE_URL } from "../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Terms and Conditions Cambodia 2026 | Mugnee Cambodia";
const description =
  "Read Mugnee Cambodia terms for LED display, PA system, smart board, and access control projects, including payment, warranty, and legal terms.";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/terms-and-conditions/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/terms-and-conditions/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/terms-and-conditions/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/terms-and-conditions/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Company terms and conditions for supply, installation, warranty, and support services in Cambodia."
        />
        <meta property="og:url" content={`${SITE_URL}/terms-and-conditions/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Terms and conditions of Mugnee Cambodia" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Commercial, legal, and warranty terms for Mugnee Cambodia projects and product supply."
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
          <TermsAndConditionsView />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

