import type { Metadata } from "next";
import TurnstileGatePage from "../../turnstile-gate/page";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/turnstile-gate/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Turnstile Gate នៅកម្ពុជា | តម្លៃ ផ្គត់ផ្គង់ និងដំឡើងដោយអ្នកជំនាញ",
  description:
    "ដំណោះស្រាយ Turnstile Gate សម្រាប់អគារការិយាល័យ រោងចក្រ សាលារៀន និងតំបន់គ្រប់គ្រងសុវត្ថិភាពនៅកម្ពុជា ជាមួយសេវាវាស់វែង តម្លៃគម្រោង និងដំឡើង។",
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
