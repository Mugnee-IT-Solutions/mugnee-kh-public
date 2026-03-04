import type { Metadata } from "next";
import SolutionsClient from "../../solutions/SolutionsClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/solutions/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ដំណោះស្រាយនៅកម្ពុជា | អេក្រង់ LED ស្លាកឌីជីថល និងគ្រប់គ្រងចូលចេញ",
  description:
    "ស្វែងរកដំណោះស្រាយសមស្របទីផ្សារកម្ពុជា ពី Mugnee Cambodia ជាមួយសេវារចនា ដំឡើង និងគាំទ្ររយៈពេលវែង។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/solutions/",
      "km-kh": PAGE_PATH,
      "x-default": "/solutions/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmSolutionsPage() {
  return <SolutionsClient forcedLang="km" />;
}
