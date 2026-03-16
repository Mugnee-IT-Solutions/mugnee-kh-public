import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import TurnstileGateClient from "../../../app/products/turnstile-gate/TurnstileGateClient";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "តម្លៃ Turnstile Gate នៅកម្ពុជា | ដំឡើង និងគ្រប់គ្រងចូលចេញ";
const description =
  "Turnstile Gate នៅកម្ពុជា ជាមួយ speed gate flap barrier RFID biometric integration ការដំឡើង និងសម្រង់តម្លៃគម្រោង។";

export default function KmTurnstileGatePage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/turnstile-gate/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/turnstile-gate/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/turnstile-gate/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/turnstile-gate/`} />

        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="ដំណោះស្រាយ Turnstile Gate និង access control នៅកម្ពុជា ជាមួយ RFID biometric integration និងការដំឡើងក្នុងស្រុក។"
        />
        <meta property="og:url" content={`${SITE_URL}/km/turnstile-gate/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Turnstile Gate in Cambodia" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="តម្លៃ Turnstile Gate នៅកម្ពុជា | Mugnee Cambodia" />
        <meta
          name="twitter:description"
          content="Turnstile Gate នៅកម្ពុជា ជាមួយ speed gate RFID biometric integration និងការដំឡើង។"
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
          <TurnstileGateClient />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

