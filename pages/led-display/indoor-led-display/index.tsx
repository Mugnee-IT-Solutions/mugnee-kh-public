import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import IndoorLedDisplayView from "../../../app/led-display/indoor-led-display/View";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Indoor LED Display Cambodia | Fine-Pitch LED Video Wall & LED Screen";
const description =
  "Indoor LED display in Cambodia for fine-pitch LED video walls and LED screens in boardrooms, showrooms, retail, and control rooms. Get pixel-pitch planning, BOQ support, installation, calibration, and quotation guidance.";
const ogImage = `${SITE_URL}/images/cambodia/indoor-led-hero.webp`;

export default function IndoorLedDisplayPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/led-display/indoor-led-display/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/led-display/indoor-led-display/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/led-display/indoor-led-display/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/led-display/indoor-led-display/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Indoor LED display in Cambodia for fine-pitch LED video walls with pixel-pitch planning, BOQ support, installation, calibration, and after-sales service."
        />
        <meta property="og:url" content={`${SITE_URL}/led-display/indoor-led-display/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Indoor LED display in Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Indoor LED display in Cambodia for fine-pitch LED video walls with planning, BOQ support, installation, calibration, and quotation guidance."
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
          <IndoorLedDisplayView />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
