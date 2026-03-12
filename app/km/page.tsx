import type { Metadata } from "next";
import HomePage from "../page";
import { SITE_URL } from "../lib/site";

const PAGE_PATH = "/km/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Mugnee Cambodia | ដំណោះស្រាយ LED និងបច្ចេកវិទ្យា",
  description:
    "Mugnee Cambodia ផ្គត់ផ្គង់អេក្រង់ LED, Digital Signage, Smart Board, PA System និង Turnstile Gate នៅកម្ពុជា ជាមួយសេវាដំឡើង និងគាំទ្រក្នុងស្រុក។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/",
      "km-kh": PAGE_PATH,
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Mugnee Cambodia | អេក្រង់ LED និងដំណោះស្រាយបច្ចេកវិទ្យានៅកម្ពុជា",
    description:
      "អេក្រង់ LED, Digital Signage, Smart Board, PA System និង Turnstile Gate នៅកម្ពុជា ជាមួយសេវាដំឡើង និងគាំទ្រក្នុងស្រុក។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Mugnee Cambodia technology solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mugnee Cambodia | អេក្រង់ LED និងដំណោះស្រាយបច្ចេកវិទ្យានៅកម្ពុជា",
    description: "ដំណោះស្រាយអាជីវកម្មបច្ចេកវិទ្យា និងសេវាដំឡើងក្នុងស្រុកពី Mugnee Cambodia។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default HomePage;
