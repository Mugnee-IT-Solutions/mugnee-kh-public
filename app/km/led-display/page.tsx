import type { Metadata } from "next";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/led-display/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "តម្លៃអេក្រង់ LED នៅកម្ពុជា | ទិញ ដំឡើង និងសេវាបន្ទាប់ពីលក់",
  description:
    "ស្វែងរកអេក្រង់ LED សម្រាប់ Indoor, Outdoor, Billboard និង Video Wall នៅកម្ពុជា ជាមួយតម្លៃច្បាស់លាស់ BOQ ដំឡើងតាមស្តង់ដារ និងសេវាបន្ទាប់ពីលក់ពី Mugnee Cambodia។",
  keywords: [
    "តម្លៃអេក្រង់ LED នៅកម្ពុជា",
    "អេក្រង់ LED កម្ពុជា",
    "អេក្រង់ LED ភ្នំពេញ",
    "អេក្រង់វីដេអូជញ្ជាំង",
    "ប៊ីលបត LED ខាងក្រៅ",
    "ទិញអេក្រង់ LED កម្ពុជា",
    "ដំឡើងអេក្រង់ LED ភ្នំពេញ",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/",
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "តម្លៃអេក្រង់ LED នៅកម្ពុជា | ទិញ ដំឡើង និងសេវាបន្ទាប់ពីលក់",
    description:
      "អេក្រង់ LED ក្នុងអគារ និងក្រៅអគារនៅកម្ពុជា ជាមួយ BOQ តម្លៃ ដំឡើងតាមស្តង់ដារ និងសេវាគាំទ្របន្ទាប់ពីលក់។",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "អេក្រង់ LED នៅកម្ពុជា - Mugnee Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "តម្លៃអេក្រង់ LED នៅកម្ពុជា | ទិញ ដំឡើង និងសេវាបន្ទាប់ពីលក់",
    description:
      "ស្នើសុំតម្លៃអេក្រង់ LED នៅកម្ពុជា ជាមួយ BOQ តម្លាភាព ការដំឡើង និងសេវាគាំទ្រក្នុងស្រុក។",
    images: [OG_IMAGE],
  },
};

export default function KmLedDisplayPage() {
  return (
    <LedDisplayClient
      forcedLang="km"
      schemaPathOverride={PAGE_PATH}
      schemaNameOverride="អេក្រង់ LED"
      schemaServiceNameOverride="សេវាអេក្រង់ LED នៅកម្ពុជា"
      schemaServiceDescOverride="សេវាអេក្រង់ LED ក្នុងអគារ និងក្រៅអគារនៅកម្ពុជា រួមមានការស្ទង់ទីតាំង BOQ ការដំឡើង បើកប្រើប្រាស់ និងសេវាគាំទ្របន្ទាប់ពីលក់។"
      breadcrumbOverrideKm="អេក្រង់ LED"
    />
  );
}
