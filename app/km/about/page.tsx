import type { Metadata } from "next";
import AboutClient from "../../about/AboutClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/about/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "អំពី Mugnee Cambodia | អ្នកផ្គត់ផ្គង់ LED Display និងដំណោះស្រាយបច្ចេកវិទ្យានៅកម្ពុជា",
  description:
    "ស្គាល់ Mugnee Cambodia ដែលផ្តល់ដំណោះស្រាយ LED Display, Digital Signage, PA System, Interactive Flat Panel និង Turnstile Gate នៅកម្ពុជា ជាមួយបទពិសោធន៍គម្រោងពិត និងសេវាបច្ចេកទេសជំនាញ។",
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
