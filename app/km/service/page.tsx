import type { Metadata } from "next";
import ServiceClient from "../../service/ServiceClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/service/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "សេវា និងការគាំទ្រនៅកម្ពុជា | ដំឡើង AMC និងធានា",
  description:
    "Mugnee Cambodia ផ្តល់សេវាដំឡើង បើកប្រើប្រាស់ AMC ដោះស្រាយបញ្ហា និងសេវាធានាទូទាំងកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/service/",
      "km-kh": PAGE_PATH,
      "x-default": "/service/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmServicePage() {
  return <ServiceClient forcedLang="km" />;
}
