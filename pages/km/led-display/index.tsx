import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import LedDisplayClient from "../../../app/products/led-display/LedDisplayClient";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "អេក្រង់ LED នៅកម្ពុជា: តម្លៃ, LED Signage និងអេក្រង់ក្នុង/ក្រៅអគារ";
const description =
  "ស្វែងរកអេក្រង់ LED នៅកម្ពុជា (LED signage, indoor/outdoor) ជាមួយការណែនាំតម្លៃ, BOQ, ស្ទង់ទីតាំង, ដំឡើង, commissioning និងសេវាបន្ទាប់ពីលក់ពី Mugnee Cambodia។";
const ogDescription =
  "ស្វែងរកដំណោះស្រាយអេក្រង់ LED នៅកម្ពុជា រួមមាន LED signage, BOQ, ការដំឡើង និងសេវាគាំទ្របន្ទាប់ពីលក់។";
const twitterDescription =
  "អេក្រង់ LED នៅកម្ពុជា: តម្លៃ, LED signage, BOQ, ការដំឡើង និងសេវាបន្ទាប់ពីលក់ពី Mugnee Cambodia។";

export default function KmLedDisplayPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/led-display/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/led-display/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/led-display/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/led-display/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={`${SITE_URL}/km/led-display/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="អេក្រង់ LED នៅកម្ពុជា - Mugnee Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={twitterDescription} />
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
          <LedDisplayClient
            forcedLang="km"
            schemaPathOverride="/km/led-display"
            schemaNameOverride="អេក្រង់ LED"
            schemaServiceNameOverride="សេវាអេក្រង់ LED នៅកម្ពុជា"
            schemaServiceDescOverride="សេវាអេក្រង់ LED ក្នុងអគារ និងខាងក្រៅនៅកម្ពុជា រួមមានការស្ទង់ទីតាំង BOQ ការដំឡើង បើកប្រើប្រាស់ និងសេវាគាំទ្របន្ទាប់ពីលក់។"
            breadcrumbOverrideKm="អេក្រង់ LED"
          />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
