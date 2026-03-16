import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../../app/components/layout/Header";
import SiteFooter from "../../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../../app/components/seo/SitewideJsonLd";
import KmIndoorLedDisplayView from "../../../../app/km/led-display/indoor-led-display/View";
import { SITE_URL } from "../../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Indoor LED Display នៅកម្ពុជា | តម្លៃ ទិញ និងដំឡើង";
const description =
  "ទិញអេក្រង់ LED ក្នុងអគារ សម្រាប់ហាង បន្ទប់ប្រជុំ Showroom និងសាលារៀន នៅកម្ពុជា ជាមួយការស្ទង់ទីតាំង តម្លៃ BOQ ដំឡើង និងកែតម្រូវដោយអ្នកជំនាញ។";
const ogImage = `${SITE_URL}/images/cambodia/indoor-led-hero.webp`;

export default function KmIndoorLedDisplayPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/led-display/indoor-led-display/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/led-display/indoor-led-display/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/led-display/indoor-led-display/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/led-display/indoor-led-display/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="អេក្រង់ LED ក្នុងអគារ សម្រាប់ហាង បន្ទប់ប្រជុំ និង showroom នៅកម្ពុជា ជាមួយតម្លៃ BOQ និងដំឡើង។"
        />
        <meta property="og:url" content={`${SITE_URL}/km/led-display/indoor-led-display/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Indoor LED display in Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indoor LED Display នៅកម្ពុជា | Mugnee Cambodia" />
        <meta name="twitter:description" content="អេក្រង់ LED ក្នុងអគារ ជាមួយតម្លៃ និងដំឡើងនៅកម្ពុជា។" />
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
          <KmIndoorLedDisplayView />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

