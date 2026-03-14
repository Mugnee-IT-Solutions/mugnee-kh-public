import type { Metadata } from "next";
import TurnstileGatePage from "../../turnstile-gate/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/turnstile-gate/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "តម្លៃ Turnstile Gate នៅកម្ពុជា | ដំឡើង និងគ្រប់គ្រងចូលចេញ",
  description:
    "Turnstile Gate នៅកម្ពុជា ជាមួយ speed gate flap barrier RFID biometric integration ការដំឡើង និងសម្រង់តម្លៃគម្រោង។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/turnstile-gate/",
      "km-kh": PAGE_PATH,
      "x-default": "/turnstile-gate/",
    },
  },
  openGraph: {
    title: "តម្លៃ Turnstile Gate នៅកម្ពុជា | ដំឡើង និងគ្រប់គ្រងចូលចេញ",
    description:
      "ដំណោះស្រាយ Turnstile Gate និង access control នៅកម្ពុជា ជាមួយ RFID biometric integration និងការដំឡើងក្នុងស្រុក។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Turnstile Gate in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "តម្លៃ Turnstile Gate នៅកម្ពុជា | Mugnee Cambodia",
    description: "Turnstile Gate នៅកម្ពុជា ជាមួយ speed gate RFID biometric integration និងការដំឡើង។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default TurnstileGatePage;
