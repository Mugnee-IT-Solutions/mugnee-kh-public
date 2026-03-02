import type { Metadata } from "next";
import IndoorLedDisplayPage from "../../../led-display/indoor-led-display/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/indoor-led-display/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "អេក្រង់ LED ក្នុងអគារ នៅកម្ពុជា | តម្លៃ និងដំឡើង",
  description:
    "ដំណោះស្រាយ Indoor LED Display នៅកម្ពុជា សម្រាប់បន្ទប់ប្រជុំ Showroom Retail និង Hospitality ជាមួយ fine-pitch planning ដំឡើង calibration និងសេវាគាំទ្រ។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: "/led-display/indoor-led-display/",
      km: PAGE_PATH,
      "x-default": "/led-display/indoor-led-display/",
    },
  },
  robots: { index: true, follow: true },
};

export default IndoorLedDisplayPage;
