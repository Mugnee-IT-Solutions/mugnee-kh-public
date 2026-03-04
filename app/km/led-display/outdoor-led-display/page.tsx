import type { Metadata } from "next";
import OutdoorLedDisplayPage from "../../../led-display/outdoor-led-display/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/outdoor-led-display/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "អេក្រង់ LED ខាងក្រៅ នៅកម្ពុជា | តម្លៃប៊ីលបត និងដំឡើង",
  description:
    "ដំណោះស្រាយអេក្រង់ LED ខាងក្រៅ និងប៊ីលបតផ្សព្វផ្សាយនៅកម្ពុជា ជាមួយការរៀបចំពន្លឺ រចនាសំណង់ ដំឡើង និងសេវាបន្ទាប់ពីលក់។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/outdoor-led-display/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/outdoor-led-display/",
    },
  },
  robots: { index: true, follow: true },
};

export default OutdoorLedDisplayPage;
