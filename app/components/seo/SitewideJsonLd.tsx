"use client";

import JsonLd from "./JsonLd";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const sameAs = [
  "https://www.facebook.com/mugneemultiple",
  "https://www.linkedin.com/company/mugnee",
];

export default function SitewideJsonLd() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}#organization`,
    name: "Mugnee Cambodia",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/logo.png`,
    telephone: "+8558001711927445",
    sameAs,
    areaServed: {
      "@type": "Country",
      name: "Cambodia",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "KH",
      addressLocality: "Phnom Penh",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: "Mugnee Cambodia",
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


