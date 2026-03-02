import type { Metadata } from "next";
import PaSystemPage from "../../pa-system/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/pa-system/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "PA System នៅកម្ពុជា | រចនា ផ្គត់ផ្គង់ និងដំឡើង",
  description:
    "ដំណោះស្រាយ PA System នៅកម្ពុជា ជាមួយការរចនា ផ្គត់ផ្គង់ ដំឡើង commissioning និងសេវាគាំទ្រក្នុងតំបន់។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: "/pa-system/",
      km: PAGE_PATH,
      "x-default": "/pa-system/",
    },
  },
  robots: { index: true, follow: true },
};

export default PaSystemPage;
