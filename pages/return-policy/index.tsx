import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import ReturnPolicyView from "../../app/return-policy/View";
import { SITE_URL } from "../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Return Policy Cambodia | Mugnee Cambodia";
const description =
  "Mugnee Cambodia no return and no refund policy for supplied products, with clear after-sales support guidance.";

export default function ReturnPolicyPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/return-policy/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/return-policy/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/return-policy/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/return-policy/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="No return and no refund policy in Cambodia with issue reporting and technical support process."
        />
        <meta property="og:url" content={`${SITE_URL}/return-policy/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Return policy of Mugnee Cambodia" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="No return and no refund policy for company-supplied products in Cambodia."
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
          <ReturnPolicyView />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

