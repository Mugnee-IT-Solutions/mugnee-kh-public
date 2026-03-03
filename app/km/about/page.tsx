import type { Metadata } from "next";
import AboutClient from "../../about/AboutClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/about/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "អំពី Mugnee Cambodia | បេសកកម្ម ចក្ខុវិស័យ និងរឿងរ៉ាវក្រុមហ៊ុន",
  description:
    "Mugnee Cambodia ផ្តល់ដំណោះស្រាយ LED Display, Digital Signage, Smart Classroom, PA System និង Access Control ជាមួយសេវាពេញលេញទូទាំងកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/about/",
      "km-kh": PAGE_PATH,
      "x-default": "/about/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmAboutPage() {
  return <AboutClient forcedLang="km" />;
}
