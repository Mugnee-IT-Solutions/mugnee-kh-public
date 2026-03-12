import type { Metadata } from "next";
import ReceivingCardPage from "../../../led-display/receiving-card/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/receiving-card/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Receiving Card សម្រាប់អេក្រង់ LED | ជ្រើសរើស និងដំឡើង",
  description:
    "សេវា Receiving Card សម្រាប់ LED Display នៅកម្ពុជា ជាមួយការប្រឹក្សាតម្លៃ កំណត់រចនាសម្ព័ន្ធ Mapping និងការដំឡើងសម្រាប់គម្រោង Indoor/Outdoor។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/receiving-card/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/receiving-card/",
    },
  },
  openGraph: {
    title: "Receiving Card សម្រាប់អេក្រង់ LED នៅកម្ពុជា | ជ្រើសរើស និងដំឡើង",
    description:
      "Receiving Card សម្រាប់ LED Display នៅកម្ពុជា ជាមួយការប្រឹក្សាតម្លៃ Mapping និងការដំឡើងសម្រាប់គម្រោង indoor និង outdoor។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "LED receiving card in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Receiving Card សម្រាប់អេក្រង់ LED នៅកម្ពុជា | Mugnee Cambodia",
    description: "LED receiving card configuration, mapping, and installation support in Cambodia.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default ReceivingCardPage;
