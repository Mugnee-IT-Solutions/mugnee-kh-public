import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import PowerSupplyView from "../../../app/led-display/power-supply/View";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "LED Power Supply Cambodia | Best Price & Installation";
const description =
  "LED power supplies in Cambodia for indoor and outdoor displays with stable voltage, safety protection, and setup guidance.";
const ogImage = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export default function PowerSupplyPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/led-display/power-supply/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/led-display/power-supply/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/led-display/power-supply/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/led-display/power-supply/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Reliable LED power supplies for video walls and signage with stable output, safety protections, and professional support."
        />
        <meta property="og:url" content={`${SITE_URL}/led-display/power-supply/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="LED Power Supply in Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Reliable LED power supplies for video walls and signage with stable output, safety protections, and professional support."
        />
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
          <PowerSupplyView />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

