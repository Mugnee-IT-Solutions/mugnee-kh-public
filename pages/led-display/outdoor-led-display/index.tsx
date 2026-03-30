import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import OutdoorLedDisplayView from "../../../app/led-display/outdoor-led-display/View";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Outdoor LED Display Cambodia | LED Billboard, LED Signage & Digital Screen";
const description =
  "Outdoor LED display in Cambodia for LED billboards, facade screens, and LED signage. Get structure planning, BOQ support, installation, commissioning, and local after-sales service for reliable campaigns.";
const ogImage = `${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`;

export default function OutdoorLedDisplayPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/led-display/outdoor-led-display/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/led-display/outdoor-led-display/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/led-display/outdoor-led-display/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/led-display/outdoor-led-display/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Outdoor LED display in Cambodia for LED billboards and LED signage with structure design, BOQ planning, installation, commissioning, and after-sales support."
        />
        <meta property="og:url" content={`${SITE_URL}/led-display/outdoor-led-display/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Outdoor LED display and billboard in Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Outdoor LED display in Cambodia for LED billboards and LED signage with structure planning, BOQ support, installation, commissioning, and after-sales service."
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
          <OutdoorLedDisplayView />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
