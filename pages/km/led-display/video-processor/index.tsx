import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../../app/components/layout/Header";
import SiteFooter from "../../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../../app/components/seo/SitewideJsonLd";
import KmVideoProcessorView from "../../../../app/km/led-display/video-processor/View";
import { SITE_URL } from "../../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Video Processor សម្រាប់ LED | តម្លៃ និងដំឡើង";
const description =
  "Mugnee Cambodia ផ្តល់ Video Processor សម្រាប់ LED Display ជាមួយសេវាប្រឹក្សា ជ្រើសម៉ូដែល កំណត់រចនាសម្ព័ន្ធ និងដំឡើងសម្រាប់គម្រោងក្នុងអគារ និងខាងក្រៅ។";
const ogImage = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export default function KmVideoProcessorPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/led-display/video-processor/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/led-display/video-processor/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/led-display/video-processor/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/led-display/video-processor/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/km/led-display/video-processor/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="LED video processor in Cambodia" />
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
          <KmVideoProcessorView />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

