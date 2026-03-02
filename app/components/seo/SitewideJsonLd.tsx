import JsonLd from "./JsonLd";
import {
  BUSINESS_ADDRESS,
  BUSINESS_NAME,
  BUSINESS_PHONE_E164,
  BUSINESS_SAME_AS,
} from "../../lib/nap";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

export default function SitewideJsonLd() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/logo.png`,
    telephone: BUSINESS_PHONE_E164,
    sameAs: BUSINESS_SAME_AS,
    areaServed: {
      "@type": "Country",
      name: "Cambodia",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS.streetAddress,
      addressLocality: BUSINESS_ADDRESS.addressLocality,
      addressCountry: BUSINESS_ADDRESS.addressCountry,
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    inLanguage: ["en", "km"],
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/products/?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <JsonLd id="site-org-jsonld" data={orgJsonLd} />
      <JsonLd id="site-website-jsonld" data={websiteJsonLd} />
    </>
  );
}



