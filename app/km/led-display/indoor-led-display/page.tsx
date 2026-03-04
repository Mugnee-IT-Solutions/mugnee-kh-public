import type { Metadata } from "next";
import IndoorLedDisplayPage from "../../../led-display/indoor-led-display/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/indoor-led-display/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "អេក្រង់ LED ក្នុងអគារ នៅកម្ពុជា | តម្លៃ និងដំឡើង",
  description:
    "ដំណោះស្រាយអេក្រង់ LED ក្នុងអគារនៅកម្ពុជា សម្រាប់បន្ទប់ប្រជុំ បន្ទប់បង្ហាញ និងហាងលក់ ជាមួយការរៀបចំផែនការ ដំឡើង និងកែតម្រូវប្រព័ន្ធ។",
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
