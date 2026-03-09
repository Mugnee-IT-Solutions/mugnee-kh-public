import type { Metadata } from "next";
import ContactClient from "../../contact/ContactClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/contact/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ទាក់ទង Mugnee Cambodia | ស្នើសុំតម្លៃ និងប្រឹក្សាដំណោះស្រាយនៅកម្ពុជា",
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
  robots: { index: true, follow: true },
};

export default function KmContactPage() {
  return <ContactClient forcedLang="km" />;
}
