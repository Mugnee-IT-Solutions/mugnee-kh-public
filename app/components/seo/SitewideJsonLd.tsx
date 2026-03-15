import JsonLd from "./JsonLd";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_PHONE_E164,
  BUSINESS_SAME_AS,
} from "../../lib/nap";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

export default function SitewideJsonLd() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@id": `${SITE_URL}#organization`,
    "@type": "Organization",
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/logo.png`,
    email: BUSINESS_EMAIL,
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: BUSINESS_EMAIL,
        telephone: BUSINESS_PHONE_E164,
        availableLanguage: ["English", "Khmer"],
      },
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@id": `${SITE_URL}#localbusiness`,
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/logo.png`,
    email: BUSINESS_EMAIL,
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
    parentOrganization: {
      "@id": `${SITE_URL}#organization`,
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
      <JsonLd id="site-org-jsonld" data={organizationJsonLd} />
      <JsonLd id="site-localbusiness-jsonld" data={localBusinessJsonLd} />
      <JsonLd id="site-website-jsonld" data={websiteJsonLd} />
    </>
  );
}



