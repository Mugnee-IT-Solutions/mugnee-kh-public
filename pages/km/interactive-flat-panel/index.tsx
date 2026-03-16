import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import InteractiveFlatPanelClient from "../../../app/products/interactive-flat-panel/InteractiveFlatPanelClient";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Interactive Flat Panel នៅកម្ពុជា | តម្លៃ និងដំឡើង";
const description =
  "Interactive Flat Panel សម្រាប់ Smart Classroom និង Meeting Room នៅកម្ពុជា ជាមួយសេវាប្រឹក្សា តម្លៃ និងដំឡើង។";

export default function KmInteractiveFlatPanelPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/interactive-flat-panel/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/interactive-flat-panel/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/interactive-flat-panel/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/interactive-flat-panel/`} />

        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Interactive Flat Panel និង Smart Board សម្រាប់សាលា និងការិយាល័យនៅកម្ពុជា ជាមួយសេវាប្រឹក្សា តម្លៃ និងដំឡើង។"
        />
        <meta property="og:url" content={`${SITE_URL}/km/interactive-flat-panel/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Interactive Flat Panel in Cambodia" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interactive Flat Panel នៅកម្ពុជា | Mugnee Cambodia" />
        <meta name="twitter:description" content="Smart Board និង Interactive Flat Panel សម្រាប់សាលា និងការិយាល័យនៅកម្ពុជា។" />
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
          <InteractiveFlatPanelClient />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

