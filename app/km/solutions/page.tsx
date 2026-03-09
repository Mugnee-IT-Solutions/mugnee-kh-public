import type { Metadata } from "next";
import SolutionsClient from "../../solutions/SolutionsClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/solutions/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា | LED Display, Digital Signage និង Access Control",
  description:
    "ស្វែងរកដំណោះស្រាយសម្រាប់ហាងលក់ សាលារៀន ក្រុមហ៊ុន និងរោងចក្រ នៅកម្ពុជា ពី Mugnee Cambodia ជាមួយសេវាប្រឹក្សា តម្លៃគម្រោង ដំឡើង និងគាំទ្របន្ទាប់ពីលក់។",
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
