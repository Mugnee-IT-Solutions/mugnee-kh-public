import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import SolutionsClient from "../../../app/solutions/SolutionsClient";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "ដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា | LED និង Access Control";
const description =
  "ស្វែងរកដំណោះស្រាយសម្រាប់ហាងលក់ សាលារៀន ក្រុមហ៊ុន និងរោងចក្រ នៅកម្ពុជា ពី Mugnee Cambodia ជាមួយសេវាប្រឹក្សា តម្លៃគម្រោង ដំឡើង និងគាំទ្របន្ទាប់ពីលក់។";

export default function KmSolutionsPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/solutions/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/solutions/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/solutions/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/solutions/`} />

        <meta
          property="og:title"
          content="ដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា | LED Display និង Access Control"
        />
        <meta
          property="og:description"
          content="ដំណោះស្រាយសម្រាប់ហាង សាលារៀន ក្រុមហ៊ុន និងរោងចក្រ នៅកម្ពុជា ជាមួយការប្រឹក្សា តម្លៃគម្រោង និងដំឡើង។"
        />
        <meta property="og:url" content={`${SITE_URL}/km/solutions/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Business solutions in Cambodia by Mugnee" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា | Mugnee Cambodia" />
        <meta
          name="twitter:description"
          content="LED Display, Digital Signage, Access Control និងដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា។"
        />
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
          <SolutionsClient forcedLang="km" />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

