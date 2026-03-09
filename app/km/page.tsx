import type { Metadata } from "next";
import HomePage from "../page";
import { SITE_URL } from "../lib/site";

const PAGE_PATH = "/km/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Mugnee Cambodia | អេក្រង់ LED និងដំណោះស្រាយបច្ចេកវិទ្យាសម្រាប់អាជីវកម្មនៅកម្ពុជា",
  description:
    "Mugnee Cambodia ជាអ្នកផ្គត់ផ្គង់អេក្រង់ LED, Digital Signage, Interactive Flat Panel, PA System និង Turnstile Gate នៅកម្ពុជា ជាមួយតម្លៃប្រកួតប្រជែង សេវាដំឡើង និងសេវាបន្ទាប់ពីលក់។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/",
      "km-kh": PAGE_PATH,
      "x-default": "/",
    },
  },
  robots: { index: true, follow: true },
};

export default HomePage;
