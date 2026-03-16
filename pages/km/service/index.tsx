import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import ServiceClient from "../../../app/service/ServiceClient";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "សេវា និងការគាំទ្រអតិថិជននៅកម្ពុជា | ដំឡើង AMC ថែទាំ និងធានា";
const description =
  "Mugnee Cambodia ផ្តល់សេវាដំឡើង បើកប្រើប្រាស់ បណ្តុះបណ្តាលប្រើប្រាស់ AMC ថែទាំ និងសេវាធានាទូទាំងកម្ពុជា សម្រាប់ LED Display និងប្រព័ន្ធបច្ចេកវិទ្យាអាជីវកម្ម។";

export default function KmServicePage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/service/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/service/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/service/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/service/`} />

        <meta
          property="og:title"
          content="សេវា និងការគាំទ្រអតិថិជននៅកម្ពុជា | ដំឡើង ថែទាំ និងធានា"
        />
        <meta
          property="og:description"
          content="សេវាដំឡើង បើកប្រើប្រាស់ AMC ថែទាំ និងការគាំទ្របច្ចេកទេសសម្រាប់ LED Display និងប្រព័ន្ធអាជីវកម្មនៅកម្ពុជា។"
        />
        <meta property="og:url" content={`${SITE_URL}/km/service/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mugnee Cambodia service and support" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="សេវា និងការគាំទ្រអតិថិជននៅកម្ពុជា | Mugnee Cambodia" />
        <meta name="twitter:description" content="សេវាដំឡើង ថែទាំ និងការគាំទ្របច្ចេកទេសទូទាំងកម្ពុជា។" />
        <meta name="twitter:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
        >
          <ServiceClient forcedLang="km" />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

