import type { Metadata } from "next";
import PaSystemPage from "../../pa-system/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/pa-system/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "តម្លៃ PA System នៅកម្ពុជា | រចនា និងដំឡើង",
  description:
    "PA System នៅកម្ពុជា សម្រាប់សាលារៀន ការិយាល័យ ហាង និងរោងចក្រ ជាមួយការរៀបចំ BOQ រចនា ដំឡើង និងសម្រង់តម្លៃគម្រោង។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/pa-system/",
      "km-kh": PAGE_PATH,
      "x-default": "/pa-system/",
    },
  },
  openGraph: {
    title: "តម្លៃ PA System នៅកម្ពុជា | រចនា និងដំឡើង",
    description:
      "ដំណោះស្រាយ PA System នៅកម្ពុជា ជាមួយ speaker amplifier paging BOQ ការរចនា និងការដំឡើងក្នុងស្រុក។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "PA System in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "តម្លៃ PA System នៅកម្ពុជា | Mugnee Cambodia",
    description: "PA System នៅកម្ពុជា ជាមួយ BOQ ការរចនា ដំឡើង និងសម្រង់តម្លៃគម្រោង។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default PaSystemPage;
