import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import SolutionsClient from "../../app/solutions/SolutionsClient";
import { SITE_URL } from "../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Cambodia Solutions | LED Display & Access Control";
const description =
  "Cambodia-ready solutions for LED display, digital signage, smart classrooms, access control, PA systems, and turnstile gates.";

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/solutions/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/solutions/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/solutions/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/solutions/`} />
        <meta
          property="og:title"
          content="Solutions in Cambodia | LED Display, Digital Signage, Access Control"
        />
        <meta
          property="og:description"
          content="Local Cambodia solutions for LED display, digital signage, smart classrooms, access control, PA systems, and turnstile gates with end-to-end delivery."
        />
        <meta property="og:url" content={`${SITE_URL}/solutions/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Solutions in Cambodia by Mugnee Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Solutions in Cambodia | LED Display, Digital Signage, Access Control"
        />
        <meta
          name="twitter:description"
          content="Local Cambodia solutions for LED display, digital signage, smart classrooms, access control, PA systems, and turnstile gates with end-to-end delivery."
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
          <SolutionsClient forcedLang="en" />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

