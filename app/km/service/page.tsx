import type { Metadata } from "next";
import ServiceClient from "../../service/ServiceClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/service/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "សេវា និងការគាំទ្រអតិថិជននៅកម្ពុជា | ដំឡើង AMC ថែទាំ និងធានា",
  description:
    "Mugnee Cambodia ផ្តល់សេវាដំឡើង បើកប្រើប្រាស់ បណ្តុះបណ្តាលប្រើប្រាស់ AMC ថែទាំ និងសេវាធានាទូទាំងកម្ពុជា សម្រាប់ LED Display និងប្រព័ន្ធបច្ចេកវិទ្យាអាជីវកម្ម។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/service/",
      "km-kh": PAGE_PATH,
      "x-default": "/service/",
    },
  },
  openGraph: {
    title: "សេវា និងការគាំទ្រអតិថិជននៅកម្ពុជា | ដំឡើង ថែទាំ និងធានា",
    description:
      "សេវាដំឡើង បើកប្រើប្រាស់ AMC ថែទាំ និងការគាំទ្របច្ចេកទេសសម្រាប់ LED Display និងប្រព័ន្ធអាជីវកម្មនៅកម្ពុជា។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Mugnee Cambodia service and support" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "សេវា និងការគាំទ្រអតិថិជននៅកម្ពុជា | Mugnee Cambodia",
    description: "សេវាដំឡើង ថែទាំ និងការគាំទ្របច្ចេកទេសទូទាំងកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function KmServicePage() {
  return <ServiceClient forcedLang="km" />;
}
