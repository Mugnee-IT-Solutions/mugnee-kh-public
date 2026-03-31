import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../../app/components/layout/Header";
import SiteFooter from "../../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../../app/components/seo/SitewideJsonLd";
import KmOutdoorLedDisplayView from "../../../../app/km/led-display/outdoor-led-display/View";
import { SITE_URL } from "../../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "អេក្រង់ LED ខាងក្រៅ នៅកម្ពុជា | LED Billboard & Signage";
const description =
  "អេក្រង់ LED ខាងក្រៅ នៅកម្ពុជា សម្រាប់ LED billboard និង LED signage។ មាន BOQ, structure planning, ដំឡើង, commissioning និងសេវាបន្ទាប់ពីលក់។";
const ogImage = `${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`;

export default function KmOutdoorLedDisplayPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/led-display/outdoor-led-display/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/led-display/outdoor-led-display/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/led-display/outdoor-led-display/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/led-display/outdoor-led-display/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="អេក្រង់ LED ខាងក្រៅ នៅកម្ពុជា សម្រាប់ LED billboard និង LED signage ជាមួយ structure design, BOQ, ដំឡើង, commissioning និងសេវាបន្ទាប់ពីលក់។"
        />
        <meta property="og:url" content={`${SITE_URL}/km/led-display/outdoor-led-display/`} />
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
          content="អេក្រង់ LED ខាងក្រៅ នៅកម្ពុជា សម្រាប់ LED billboard និង LED signage ជាមួយ BOQ, ដំឡើង, commissioning និងសេវាបន្ទាប់ពីលក់។"
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
          <KmOutdoorLedDisplayView />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
