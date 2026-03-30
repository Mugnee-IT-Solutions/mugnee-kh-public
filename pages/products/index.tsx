import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import ProductsClient from "../../app/products/ProductsClient";
import { SITE_URL } from "../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Products in Cambodia | Mugnee Cambodia";
const description =
  "Browse Mugnee Cambodia product catalog for LED display, interactive flat panel, PA system, turnstile gate, and related components.";

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/products/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/products/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/products/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/products/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Browse LED display, interactive flat panels, PA systems, turnstile gates, and related components from Mugnee Cambodia."
        />
        <meta property="og:url" content={`${SITE_URL}/products/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mugnee Cambodia product catalog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Explore Mugnee Cambodia product categories for LED display, PA, IFP, and access solutions."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/images/hero/cambodia-led-hero.webp`}
        />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
        >
          <ProductsClient />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
