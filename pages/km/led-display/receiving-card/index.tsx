import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../../app/components/layout/Header";
import SiteFooter from "../../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../../app/components/seo/SitewideJsonLd";
import KmReceivingCardView from "../../../../app/km/led-display/receiving-card/View";
import { SITE_URL } from "../../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Receiving Card សម្រាប់អេក្រង់ LED | ជ្រើសរើស និងដំឡើង";
const description =
  "សេវា Receiving Card សម្រាប់ LED Display នៅកម្ពុជា ជាមួយការប្រឹក្សាតម្លៃ កំណត់រចនាសម្ព័ន្ធ Mapping និងការដំឡើងសម្រាប់គម្រោង Indoor និង Outdoor។";
const ogImage = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export default function KmReceivingCardPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/led-display/receiving-card/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/led-display/receiving-card/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/led-display/receiving-card/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/led-display/receiving-card/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/km/led-display/receiving-card/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="LED receiving card in Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
          <KmReceivingCardView />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

