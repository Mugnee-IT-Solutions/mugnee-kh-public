import type { Metadata } from "next";
import InteractiveFlatPanelPage from "../../interactive-flat-panel/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/interactive-flat-panel/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Interactive Flat Panel នៅកម្ពុជា | តម្លៃ និងដំឡើងសម្រាប់សាលា ការិយាល័យ",
  description:
    "ទិញ Interactive Flat Panel (IFP) សម្រាប់ Smart Classroom និង Meeting Room នៅកម្ពុជា ជាមួយសេវាប្រឹក្សា ជ្រើសម៉ូដែល smart board price in Cambodia និងដំឡើងដោយ Mugnee Cambodia។",
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
