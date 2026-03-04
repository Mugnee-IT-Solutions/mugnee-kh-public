import type { Metadata } from "next";
import InteractiveFlatPanelPage from "../../interactive-flat-panel/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/interactive-flat-panel/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "អេក្រង់អន្តរកម្មនៅកម្ពុជា | បន្ទះឆ្លាតវៃសម្រាប់សាលា និងការិយាល័យ",
  description:
    "ដំណោះស្រាយអេក្រង់អន្តរកម្មនៅកម្ពុជា សម្រាប់ថ្នាក់រៀន បន្ទប់ប្រជុំ និងមជ្ឈមណ្ឌលបណ្តុះបណ្តាល ជាមួយសេវាដំឡើង និងគាំទ្រក្នុងស្រុក។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/interactive-flat-panel/",
      "km-kh": PAGE_PATH,
      "x-default": "/interactive-flat-panel/",
    },
  },
  robots: { index: true, follow: true },
};

export default InteractiveFlatPanelPage;
