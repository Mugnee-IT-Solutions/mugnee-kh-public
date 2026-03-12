import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import LedDisplayClient from "../../app/products/led-display/LedDisplayClient";
import { SITE_URL } from "../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const currentYear = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  timeZone: "Asia/Phnom_Penh",
}).format(new Date());

const title = "LED Display Price in Cambodia - Indoor & Outdoor LED Screen";
const description =
  "LED display supplier in Cambodia for indoor video walls, outdoor billboards, installation, maintenance, and quotation support in Phnom Penh.";

export default function LedDisplayPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/led-display/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/led-display/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/led-display/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/led-display/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Explore indoor LED video walls, outdoor LED billboards, BOQ planning, installation, and after-sales support from Mugnee Cambodia."
        />
        <meta property="og:url" content={`${SITE_URL}/led-display/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="LED display solutions in Cambodia by Mugnee Cambodia"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Indoor and outdoor LED display solutions in Cambodia with planning, installation, commissioning, and quotation support."
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
          <LedDisplayClient currentYearEn={currentYear} />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
