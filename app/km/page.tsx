import type { Metadata } from "next";
import HomePage from "../page";
import {
  BUSINESS_ADDRESS,
  BUSINESS_PHONE_E164,
  BUSINESS_SAME_AS,
} from "../lib/nap";
import { SITE_URL } from "../lib/site";

const PAGE_PATH = "/km/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Mugnee Cambodia – ដំណោះស្រាយ Digital Signage និង Smart AV នៅកម្ពុជា",
  description:
    "Mugnee Cambodia ផ្តល់ដំណោះស្រាយ Digital Signage, Interactive Panel, Smart Classroom, ប្រព័ន្ធសម្លេង (PA System) និង Access Control នៅភ្នំពេញ និងទូទាំងប្រទេសកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": `${SITE_URL}/`,
      "km-kh": `${SITE_URL}/km/`,
      "x-default": `${SITE_URL}/`,
    },
  },
  robots: { index: true, follow: true },
};

export default function KhmerHomePage() {
  const orgLocalJsonLdKm = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Mugnee Cambodia",
    url: `${SITE_URL}/km/`,
    inLanguage: "km",
    areaServed: "Cambodia",
    telephone: BUSINESS_PHONE_E164,
    sameAs: [...BUSINESS_SAME_AS],
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS.streetAddress,
      addressLocality: BUSINESS_ADDRESS.addressLocality,
      addressCountry: "Cambodia",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLocalJsonLdKm) }}
      />
      <HomePage />
    </>
  );
}
