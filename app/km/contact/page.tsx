import type { Metadata } from "next";
import ContactClient from "../../contact/ContactClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/contact/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ទាក់ទង Mugnee Cambodia | លក់ និងគាំទ្របច្ចេកទេស",
  description:
    "ទាក់ទង Mugnee Cambodia សម្រាប់ដំណោះស្រាយ LED Display, Digital Signage, Smart Classroom, PA System និង Access Control នៅកម្ពុជា។",
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
