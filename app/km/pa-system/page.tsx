import type { Metadata } from "next";
import PaSystemPage from "../../pa-system/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/pa-system/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "PA System នៅកម្ពុជា | រចនា តម្លៃ និងដំឡើង",
  description:
    "Mugnee Cambodia ផ្តល់ PA System សម្រាប់សាលារៀន អគារការិយាល័យ ហាង និងរោងចក្រ នៅកម្ពុជា ជាមួយការរចនា BOQ ផ្គត់ផ្គង់ ដំឡើង និងថែទាំប្រព័ន្ធ។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/pa-system/",
      "km-kh": PAGE_PATH,
      "x-default": "/pa-system/",
    },
  },
  openGraph: {
    title: "PA System នៅកម្ពុជា | រចនា តម្លៃ និងដំឡើង",
    description:
      "PA System សម្រាប់សាលារៀន អគារ ហាង និងរោងចក្រ នៅកម្ពុជា ជាមួយការរចនា BOQ ផ្គត់ផ្គង់ និងដំឡើង។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "PA System in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PA System នៅកម្ពុជា | Mugnee Cambodia",
    description: "រចនា ផ្គត់ផ្គង់ និងដំឡើងប្រព័ន្ធ PA System នៅកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default PaSystemPage;
