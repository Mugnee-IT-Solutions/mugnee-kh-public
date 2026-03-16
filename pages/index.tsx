import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../app/components/layout/Header";
import SiteFooter from "../app/components/layout/Footer";
import SitewideJsonLd from "../app/components/seo/SitewideJsonLd";
import HomeClient from "../app/components/home/HomeClient";
import { BUSINESS_PHONE_E164 } from "../app/lib/nap";
import { SITE_URL } from "../app/lib/site";
import { HOME_CATEGORY_TILES, HOME_FAQ } from "../lib/homeData";

const ClientEnhancements = dynamic(
  () => import("../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Digital Signage & Smart Board Cambodia | Mugnee Cambodia";
const description =
  "Mugnee Cambodia supplies digital signage, smart boards, PA systems, and access control in Cambodia with site survey, installation, and local support.";

const PAGE_URL = `${SITE_URL}/`;
const ORG_ID = `${SITE_URL}#organization`;
const WEBSITE_ID = `${SITE_URL}#website`;
const FAQ_PAGE_ID = `${PAGE_URL}#faq`;

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@id": FAQ_PAGE_ID,
    "@type": "FAQPage",
    url: PAGE_URL,
    name: "Mugnee Cambodia Homepage FAQ",
    inLanguage: ["en", "km"],
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    about: { "@type": "Country", name: "Cambodia" },
    spatialCoverage: { "@type": "Country", name: "Cambodia" },
    mainEntity: HOME_FAQ.flatMap((f) => {
      const entities = [
        {
          "@type": "Question",
          name: f.qEn,
          inLanguage: "en",
          acceptedAnswer: { "@type": "Answer", text: f.aEn, inLanguage: "en" },
        },
      ];
      if (f.qKm !== f.qEn || f.aKm !== f.aEn) {
        entities.push({
          "@type": "Question",
          name: f.qKm,
          inLanguage: "km",
          acceptedAnswer: { "@type": "Answer", text: f.aKm, inLanguage: "km" },
        });
      }
      return entities;
    }),
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Digital signage, smart board, PA system, and access control solutions in Cambodia with local installation and support."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mugnee Cambodia LED display and smart technology solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Digital signage, smart boards, PA systems, and access control solutions in Cambodia."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta name="telephone" content={BUSINESS_PHONE_E164} />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <script
          id="home-faq-jsonld"
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
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
