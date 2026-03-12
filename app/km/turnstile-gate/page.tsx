import type { Metadata } from "next";
import TurnstileGatePage from "../../turnstile-gate/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/turnstile-gate/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Turnstile Gate នៅកម្ពុជា | តម្លៃ និងដំឡើង",
  description:
    "ដំណោះស្រាយ Turnstile Gate សម្រាប់អគារការិយាល័យ រោងចក្រ សាលារៀន និងតំបន់គ្រប់គ្រងសុវត្ថិភាពនៅកម្ពុជា ជាមួយសេវាវាស់វែង តម្លៃគម្រោង និងដំឡើង។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/turnstile-gate/",
      "km-kh": PAGE_PATH,
      "x-default": "/turnstile-gate/",
    },
  },
  openGraph: {
    title: "Turnstile Gate នៅកម្ពុជា | តម្លៃ ផ្គត់ផ្គង់ និងដំឡើង",
    description:
      "Turnstile Gate សម្រាប់អគារ រោងចក្រ និងតំបន់សុវត្ថិភាពនៅកម្ពុជា ជាមួយសេវាវាស់វែង តម្លៃគម្រោង និងដំឡើង។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Turnstile Gate in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnstile Gate នៅកម្ពុជា | Mugnee Cambodia",
    description: "Turnstile Gate, speed gate និងច្រកគ្រប់គ្រងសុវត្ថិភាពនៅកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default TurnstileGatePage;
