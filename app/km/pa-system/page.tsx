import type { Metadata } from "next";
import PaSystemPage from "../../pa-system/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/pa-system/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ប្រព័ន្ធសំឡេងសាធារណៈនៅកម្ពុជា | រចនា ផ្គត់ផ្គង់ និងដំឡើង",
  description:
    "ដំណោះស្រាយប្រព័ន្ធសំឡេងសាធារណៈនៅកម្ពុជា ជាមួយការរចនា ផ្គត់ផ្គង់ ដំឡើង បើកប្រើប្រាស់ និងគាំទ្របច្ចេកទេស។",
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
