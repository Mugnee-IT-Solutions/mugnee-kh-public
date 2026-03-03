import type { Metadata } from "next";
import TurnstileGatePage from "../../turnstile-gate/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/turnstile-gate/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Turnstile Gate នៅកម្ពុជា | ផ្គត់ផ្គង់ និងដំឡើង",
  description:
    "ដំណោះស្រាយ Turnstile Gate នៅកម្ពុជា ជាមួយការបញ្ចូលប្រព័ន្ធ និងសេវាដំឡើងក្នុងតំបន់។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/turnstile-gate/",
      "km-kh": PAGE_PATH,
      "x-default": "/turnstile-gate/",
    },
  },
  robots: { index: true, follow: true },
};

export default TurnstileGatePage;
