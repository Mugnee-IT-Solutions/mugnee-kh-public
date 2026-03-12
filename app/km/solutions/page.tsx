import type { Metadata } from "next";
import SolutionsClient from "../../solutions/SolutionsClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/solutions/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "ដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា | LED និង Access Control",
  description:
    "ស្វែងរកដំណោះស្រាយសម្រាប់ហាងលក់ សាលារៀន ក្រុមហ៊ុន និងរោងចក្រ នៅកម្ពុជា ពី Mugnee Cambodia ជាមួយសេវាប្រឹក្សា តម្លៃគម្រោង ដំឡើង និងគាំទ្របន្ទាប់ពីលក់។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/solutions/",
      "km-kh": PAGE_PATH,
      "x-default": "/solutions/",
    },
  },
  openGraph: {
    title: "ដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា | LED Display និង Access Control",
    description:
      "ដំណោះស្រាយសម្រាប់ហាង សាលារៀន ក្រុមហ៊ុន និងរោងចក្រ នៅកម្ពុជា ជាមួយការប្រឹក្សា តម្លៃគម្រោង និងដំឡើង។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Business solutions in Cambodia by Mugnee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា | Mugnee Cambodia",
    description: "LED Display, Digital Signage, Access Control និងដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function KmSolutionsPage() {
  return <SolutionsClient forcedLang="km" />;
}
