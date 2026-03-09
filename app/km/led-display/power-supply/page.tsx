import type { Metadata } from "next";
import PowerSupplyPage from "../../../led-display/power-supply/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/power-supply/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Power Supply សម្រាប់អេក្រង់ LED នៅកម្ពុជា | ជ្រើសរើស តម្លៃ និងគាំទ្រ",
  description:
    "ជ្រើសរើស Power Supply ត្រឹមត្រូវសម្រាប់ LED Module នៅកម្ពុជា ដើម្បីធានាស្ថិរភាព ប្រសិទ្ធភាពថាមពល និងអាយុកាលប្រព័ន្ធ ជាមួយសេវាបច្ចេកទេសពី Mugnee Cambodia។",
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
