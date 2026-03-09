import type { Metadata } from "next";
import PaSystemPage from "../../pa-system/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/pa-system/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "PA System នៅកម្ពុជា | រចនា តម្លៃ និងដំឡើងប្រព័ន្ធសំឡេងសាធារណៈ",
  description:
    "Mugnee Cambodia ផ្តល់ PA System សម្រាប់សាលារៀន អគារការិយាល័យ ហាង និងរោងចក្រ នៅកម្ពុជា ជាមួយការរចនា BOQ ផ្គត់ផ្គង់ ដំឡើង និងថែទាំប្រព័ន្ធ។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/pa-system/",
      "km-kh": PAGE_PATH,
      "x-default": "/pa-system/",
    },
  },
  robots: { index: true, follow: true },
};

export default PaSystemPage;
