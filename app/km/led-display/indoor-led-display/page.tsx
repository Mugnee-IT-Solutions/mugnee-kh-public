import type { Metadata } from "next";
import IndoorLedDisplayPage from "../../../led-display/indoor-led-display/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/indoor-led-display/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Indoor LED Display នៅកម្ពុជា | តម្លៃ ទិញ និងដំឡើង",
  description:
    "ទិញអេក្រង់ LED ក្នុងអគារ សម្រាប់ហាង បន្ទប់ប្រជុំ Showroom និងសាលារៀន នៅកម្ពុជា ជាមួយការស្ទង់ទីតាំង តម្លៃ BOQ ដំឡើង និងកែតម្រូវដោយអ្នកជំនាញ។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/indoor-led-display/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/indoor-led-display/",
    },
  },
  robots: { index: true, follow: true },
};

export default IndoorLedDisplayPage;
