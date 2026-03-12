import type { Metadata } from "next";
import OutdoorLedDisplayPage from "../../../led-display/outdoor-led-display/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/outdoor-led-display/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Outdoor LED Display នៅកម្ពុជា | តម្លៃ និងដំឡើង",
  description:
    "សេវា Outdoor LED Display និងប៊ីលបតផ្សព្វផ្សាយនៅកម្ពុជា សម្រាប់ផ្លូវធំ ផ្សារ និងអាជីវកម្ម ដោយមានតម្លៃគម្រោង សំណង់ដំឡើង និងសេវាបន្ទាប់ពីលក់។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/outdoor-led-display/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/outdoor-led-display/",
    },
  },
  openGraph: {
    title: "Outdoor LED Display នៅកម្ពុជា | តម្លៃប៊ីលបត និងដំឡើង",
    description:
      "Outdoor LED Display និងប៊ីលបតផ្សព្វផ្សាយនៅកម្ពុជា សម្រាប់ផ្លូវធំ ផ្សារ និងអាជីវកម្ម ជាមួយសេវាដំឡើង។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Outdoor LED Display in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outdoor LED Display នៅកម្ពុជា | Mugnee Cambodia",
    description: "Outdoor billboard LED display, project price, and installation support in Cambodia.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default OutdoorLedDisplayPage;
