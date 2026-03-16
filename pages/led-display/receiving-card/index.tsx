import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import ReceivingCardView from "../../../app/led-display/receiving-card/View";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "LED Receiving Card Cambodia | Best Price & Installation";
const description =
  "LED receiving cards in Cambodia with stable data transfer, IC compatibility, flexible scan modes, and setup support.";
const ogImage = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export default function ReceivingCardPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/led-display/receiving-card/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/led-display/receiving-card/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/led-display/receiving-card/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/led-display/receiving-card/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Reliable receiving cards for LED video walls with stable data transfer, wide module compatibility, and expert configuration support."
        />
        <meta property="og:url" content={`${SITE_URL}/led-display/receiving-card/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="LED Receiving Card in Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Reliable receiving cards for LED video walls with stable data transfer, wide module compatibility, and expert configuration support."
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
          <ReceivingCardView />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

