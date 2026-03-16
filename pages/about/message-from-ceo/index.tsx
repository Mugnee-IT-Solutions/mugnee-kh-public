import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import MessageFromCeoClient from "../../../app/about/message-from-ceo/MessageFromCeoClient";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Message from CEO | Mugnee Cambodia";
const description =
  "Read the CEO message from Mugnee Cambodia about vision, innovation, customer commitment, and long-term technology partnership.";
const ogImage = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export default function MessageFromCeoPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/about/message-from-ceo/`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}/about/message-from-ceo/`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/about/message-from-ceo/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/about/message-from-ceo/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="A leadership message on innovation, integrity, and building reliable LED, signage, PA, and access control solutions in Cambodia."
        />
        <meta property="og:url" content={`${SITE_URL}/about/message-from-ceo/`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Message from CEO - Mugnee Cambodia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="A leadership message on innovation, integrity, and building reliable LED, signage, PA, and access control solutions in Cambodia."
        />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
        >
          <MessageFromCeoClient lang="en" />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}

