import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import ContactClient from "../../../app/contact/ContactClient";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "ទាក់ទង Mugnee Cambodia | ស្នើសុំតម្លៃ និងប្រឹក្សា";
const description =
  "ទាក់ទងក្រុមលក់ Mugnee Cambodia ដើម្បីស្នើសុំតម្លៃអេក្រង់ LED, Digital Signage, IFP, PA System និង Turnstile Gate នៅកម្ពុជា ជាមួយសេវាវាស់វែងគម្រោង និងដំឡើង។";

export default function KmContactPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/contact/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/contact/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/contact/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/contact/`} />

        <meta
          property="og:title"
          content="ទាក់ទង Mugnee Cambodia | ស្នើសុំតម្លៃ និងប្រឹក្សាដំណោះស្រាយ"
        />
        <meta
          property="og:description"
          content="ទាក់ទងក្រុមលក់ Mugnee Cambodia ដើម្បីស្នើសុំតម្លៃ និងប្រឹក្សាគម្រោងសម្រាប់ LED Display និងដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា។"
        />
        <meta property="og:url" content={`${SITE_URL}/km/contact/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Mugnee Cambodia" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="ស្នើសុំតម្លៃ និងប្រឹក្សាគម្រោងពី Mugnee Cambodia នៅកម្ពុជា។"
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
          <ContactClient lang="km" />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

