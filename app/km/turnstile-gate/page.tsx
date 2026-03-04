import type { Metadata } from "next";
import TurnstileGatePage from "../../turnstile-gate/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/turnstile-gate/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ច្រកសុវត្ថិភាពនៅកម្ពុជា | ផ្គត់ផ្គង់ និងដំឡើង",
  description:
    "ដំណោះស្រាយច្រកសុវត្ថិភាពនៅកម្ពុជា ជាមួយការរួមបញ្ចូលប្រព័ន្ធ និងសេវាដំឡើងដោយក្រុមបច្ចេកទេសក្នុងស្រុក។",
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
