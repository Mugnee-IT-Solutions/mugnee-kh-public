import type { Metadata } from "next";
import PowerSupplyPage from "../../../led-display/power-supply/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/power-supply/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ផ្គត់ផ្គង់ថាមពលសម្រាប់អេក្រង់ LED នៅកម្ពុជា | ជ្រើសរើស និងគាំទ្រ",
  description:
    "ការជ្រើសរើស និងកំណត់ប្រព័ន្ធផ្គត់ផ្គង់ថាមពលសម្រាប់អេក្រង់ LED នៅកម្ពុជា ដើម្បីរក្សាស្ថិរភាព និងអាយុកាលប្រព័ន្ធ។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/power-supply/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/power-supply/",
    },
  },
  robots: { index: true, follow: true },
};

export default PowerSupplyPage;
