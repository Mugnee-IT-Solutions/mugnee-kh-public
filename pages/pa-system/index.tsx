import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import PaSystemClient from "../../app/products/pa-system/PaSystemClient";
import { SITE_URL } from "../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "PA System Cambodia | Price, Design & Installation";
const description =
  "PA system Cambodia with amplifiers, speakers, paging microphones, zone planning, installation, and quotation support for schools, factories, malls, and offices.";

export default function PaSystemPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/pa-system/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/pa-system/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/pa-system/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/pa-system/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Public address system solutions in Cambodia with speakers, amplifiers, paging, zone design, installation, and local support by Mugnee Cambodia."
        />
        <meta property="og:url" content={`${SITE_URL}/pa-system/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="PA System Solutions in Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Public address system solutions in Cambodia with speakers, amplifiers, paging, installation, and quotation support."
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
          <PaSystemClient />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

