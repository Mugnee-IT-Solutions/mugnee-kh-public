import type { Metadata } from "next";
import PowerSupplyPage from "../../../led-display/power-supply/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/power-supply/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Power Supply សម្រាប់ LED នៅកម្ពុជា | SMPS ជ្រើសរើស និងគាំទ្រ",
  description:
    "ការជ្រើសរើស និងបញ្ចូល power supply សម្រាប់ LED display នៅកម្ពុជា ដើម្បីរក្សាស្ថិរភាព និងភាពជឿជាក់រយៈពេលវែង។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: "/led-display/power-supply/",
      km: PAGE_PATH,
      "x-default": "/led-display/power-supply/",
    },
  },
  robots: { index: true, follow: true },
};

export default PowerSupplyPage;
