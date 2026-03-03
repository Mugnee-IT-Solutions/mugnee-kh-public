import type { Metadata } from "next";
import ReceivingCardPage from "../../../led-display/receiving-card/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/receiving-card/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Receiving Card អេក្រង់ LED នៅកម្ពុជា | កំណត់រចនា និងគាំទ្រ",
  description:
    "ដំណោះស្រាយ LED receiving card នៅកម្ពុជា ជាមួយការណែនាំ configuration, integration support និងអនុសាសន៍ដំឡើងជាក់ស្តែង។",
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
