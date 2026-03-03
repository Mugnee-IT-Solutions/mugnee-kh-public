import type { Metadata } from "next";
import InteractiveFlatPanelPage from "../../interactive-flat-panel/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/interactive-flat-panel/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Interactive Flat Panel នៅកម្ពុជា | Smart Board សម្រាប់សាលា និងការិយាល័យ",
  description:
    "Interactive Flat Panel (IFP) នៅកម្ពុជា សម្រាប់ថ្នាក់រៀន បន្ទប់ប្រជុំ និងមជ្ឈមណ្ឌលបណ្ដុះបណ្ដាល ជាមួយការដំឡើង និងគាំទ្រក្នុងតំបន់។",
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
