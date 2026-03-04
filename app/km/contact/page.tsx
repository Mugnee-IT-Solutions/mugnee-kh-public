import type { Metadata } from "next";
import ContactClient from "../../contact/ContactClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/contact/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ទាក់ទង Mugnee Cambodia | ក្រុមលក់ និងគាំទ្របច្ចេកទេស",
  description:
    "ទាក់ទង Mugnee Cambodia សម្រាប់ដំណោះស្រាយអេក្រង់ LED ស្លាកឌីជីថល ថ្នាក់រៀនឆ្លាតវៃ ប្រព័ន្ធសំឡេង និងគ្រប់គ្រងចូលចេញនៅកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/contact/",
      "km-kh": PAGE_PATH,
      "x-default": "/contact/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmContactPage() {
  return <ContactClient forcedLang="km" />;
}
