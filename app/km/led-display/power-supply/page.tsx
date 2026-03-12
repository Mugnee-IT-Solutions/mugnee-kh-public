import type { Metadata } from "next";
import PowerSupplyPage from "../../../led-display/power-supply/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/power-supply/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Power Supply សម្រាប់អេក្រង់ LED | តម្លៃ និងគាំទ្រ",
  description:
    "ជ្រើសរើស Power Supply ត្រឹមត្រូវសម្រាប់ LED Module នៅកម្ពុជា ដើម្បីធានាស្ថិរភាព ប្រសិទ្ធភាពថាមពល និងអាយុកាលប្រព័ន្ធ ជាមួយសេវាបច្ចេកទេសពី Mugnee Cambodia។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/power-supply/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/power-supply/",
    },
  },
  openGraph: {
    title: "Power Supply សម្រាប់អេក្រង់ LED នៅកម្ពុជា | តម្លៃ និងជ្រើសរើស",
    description:
      "Power Supply សម្រាប់ LED Module នៅកម្ពុជា ដើម្បីធានាស្ថិរភាព ប្រសិទ្ធភាពថាមពល និងការគាំទ្របច្ចេកទេស។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "LED power supply in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Supply សម្រាប់អេក្រង់ LED នៅកម្ពុជា | Mugnee Cambodia",
    description: "LED power supply selection, pricing, and technical support in Cambodia.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default PowerSupplyPage;
