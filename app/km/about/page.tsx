import type { Metadata } from "next";
import AboutClient from "../../about/AboutClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/about/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "អំពី Mugnee Cambodia | LED Display និងដំណោះស្រាយបច្ចេកវិទ្យា",
  description:
    "ស្គាល់ Mugnee Cambodia និងបទពិសោធន៍គម្រោង LED Display, Digital Signage, PA System និងដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/about/",
      "km-kh": PAGE_PATH,
      "x-default": "/about/",
    },
  },
  openGraph: {
    title: "អំពី Mugnee Cambodia | អ្នកផ្គត់ផ្គង់ LED Display និងដំណោះស្រាយបច្ចេកវិទ្យា",
    description:
      "ស្គាល់ក្រុមហ៊ុន Mugnee Cambodia, បទពិសោធន៍គម្រោង និងសេវាបច្ចេកទេសសម្រាប់ LED Display និងដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "About Mugnee Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "អំពី Mugnee Cambodia | អ្នកផ្គត់ផ្គង់ LED Display និងដំណោះស្រាយបច្ចេកវិទ្យា",
    description: "បទពិសោធន៍គម្រោង និងសេវាបច្ចេកទេសរបស់ Mugnee Cambodia នៅកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function KmAboutPage() {
  return <AboutClient lang="km" />;
}
