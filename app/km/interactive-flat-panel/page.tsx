import type { Metadata } from "next";
import InteractiveFlatPanelPage from "../../interactive-flat-panel/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/interactive-flat-panel/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Interactive Flat Panel នៅកម្ពុជា | តម្លៃ និងដំឡើង",
  description:
    "Interactive Flat Panel សម្រាប់ Smart Classroom និង Meeting Room នៅកម្ពុជា ជាមួយសេវាប្រឹក្សា តម្លៃ និងដំឡើង។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/interactive-flat-panel/",
      "km-kh": PAGE_PATH,
      "x-default": "/interactive-flat-panel/",
    },
  },
  openGraph: {
    title: "Interactive Flat Panel នៅកម្ពុជា | តម្លៃ និងដំឡើង",
    description:
      "Interactive Flat Panel និង Smart Board សម្រាប់សាលា និងការិយាល័យនៅកម្ពុជា ជាមួយសេវាប្រឹក្សា តម្លៃ និងដំឡើង។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Interactive Flat Panel in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Flat Panel នៅកម្ពុជា | Mugnee Cambodia",
    description: "Smart Board និង Interactive Flat Panel សម្រាប់សាលា និងការិយាល័យនៅកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default InteractiveFlatPanelPage;
