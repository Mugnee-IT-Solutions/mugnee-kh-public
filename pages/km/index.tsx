import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import HomeClient from "../../app/components/home/HomeClient";
import {
  BUSINESS_BRAND_NAME,
  BUSINESS_LEGAL_NAME,
} from "../../app/lib/nap";
import { SITE_URL } from "../../app/lib/site";
import { HOME_CATEGORY_TILES, HOME_FAQ } from "../../lib/homeData";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Digital Signage និង Smart Board នៅកម្ពុជា | Mugnee Cambodia (KM)";
const description =
  "Mugnee Cambodia ផ្គត់ផ្គង់ Digital Signage, Smart Board, PA System និង Access Control នៅកម្ពុជា ជាមួយសេវាស្ទង់ទីតាំង ដំឡើង និងគាំទ្រក្នុងស្រុក។";

const PAGE_URL = `${SITE_URL}/km/`;
const ORG_ID = `${SITE_URL}#organization`;
const WEBSITE_ID = `${SITE_URL}#website`;
const FAQ_PAGE_ID = `${PAGE_URL}#faq`;

export default function KmHomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@id": FAQ_PAGE_ID,
    "@type": "FAQPage",
    url: PAGE_URL,
    name: "Mugnee Cambodia Company FAQ KM",
    inLanguage: ["km", "en"],
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    about: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: BUSINESS_LEGAL_NAME,
      alternateName: BUSINESS_BRAND_NAME,
    },
    spatialCoverage: { "@type": "Country", name: "Cambodia" },
    mainEntity: HOME_FAQ.map((f) => ({
      "@type": "Question",
      name: f.qEn,
      inLanguage: "en",
      acceptedAnswer: { "@type": "Answer", text: f.aEn, inLanguage: "en" },
    })),
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/km/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mugnee Cambodia company homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <script
          id="km-home-faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
        >
          <HomeClient categoryTiles={HOME_CATEGORY_TILES} faq={HOME_FAQ} />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
