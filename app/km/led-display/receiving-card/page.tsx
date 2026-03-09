import type { Metadata } from "next";
import ReceivingCardPage from "../../../led-display/receiving-card/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/receiving-card/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Receiving Card សម្រាប់អេក្រង់ LED នៅកម្ពុជា | ជ្រើសរើស និងដំឡើង",
  description:
    "សេវា Receiving Card សម្រាប់ LED Display នៅកម្ពុជា ជាមួយការប្រឹក្សាតម្លៃ កំណត់រចនាសម្ព័ន្ធ Mapping និងការដំឡើងសម្រាប់គម្រោង Indoor/Outdoor។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/receiving-card/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/receiving-card/",
    },
  },
  robots: { index: true, follow: true },
};

export default ReceivingCardPage;
