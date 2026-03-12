import type { Metadata } from "next";
import ContactClient from "../../contact/ContactClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/contact/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "ទាក់ទង Mugnee Cambodia | ស្នើសុំតម្លៃ និងប្រឹក្សា",
  description:
    "ទាក់ទងក្រុមលក់ Mugnee Cambodia ដើម្បីស្នើសុំតម្លៃអេក្រង់ LED, Digital Signage, IFP, PA System និង Turnstile Gate នៅកម្ពុជា ជាមួយសេវាវាស់វែងគម្រោង និងដំឡើង។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/contact/",
      "km-kh": PAGE_PATH,
      "x-default": "/contact/",
    },
  },
  openGraph: {
    title: "ទាក់ទង Mugnee Cambodia | ស្នើសុំតម្លៃ និងប្រឹក្សាដំណោះស្រាយ",
    description:
      "ទាក់ទងក្រុមលក់ Mugnee Cambodia ដើម្បីស្នើសុំតម្លៃ និងប្រឹក្សាគម្រោងសម្រាប់ LED Display និងដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Contact Mugnee Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ទាក់ទង Mugnee Cambodia | ស្នើសុំតម្លៃ និងប្រឹក្សា",
    description: "ស្នើសុំតម្លៃ និងប្រឹក្សាគម្រោងពី Mugnee Cambodia នៅកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function KmContactPage() {
  return <ContactClient lang="km" />;
}
