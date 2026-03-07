import type { Metadata } from "next";
import HomePage from "../page";
import { SITE_URL } from "../lib/site";

const PAGE_PATH = "/km/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Mugnee Cambodia | ក្រុមហ៊ុនដំណោះស្រាយបច្ចេកវិទ្យានៅកម្ពុជា",
  description:
    "Mugnee Cambodia ផ្តល់ដំណោះស្រាយបច្ចេកវិទ្យា និងសេវារួមបញ្ចូលប្រព័ន្ធនៅកម្ពុជា ជាមួយសេវាវិភាគគម្រោង ដំឡើង និងគាំទ្របន្ទាប់ពីលក់។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/",
      "km-kh": PAGE_PATH,
      "x-default": "/",
    },
  },
  robots: { index: true, follow: true },
};

export default HomePage;
