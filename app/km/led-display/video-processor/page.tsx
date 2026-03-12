import type { Metadata } from "next";
import VideoProcessorPage from "../../../led-display/video-processor/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/video-processor/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Video Processor សម្រាប់ LED | តម្លៃ និងដំឡើង",
  description:
    "Mugnee Cambodia ផ្តល់ Video Processor សម្រាប់ LED Display ជាមួយសេវាប្រឹក្សាជ្រើសម៉ូដែល កំណត់រចនាសម្ព័ន្ធ និងដំឡើងសម្រាប់គម្រោងក្នុងអគារ និងក្រៅអគារ។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/video-processor/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/video-processor/",
    },
  },
  openGraph: {
    title: "Video Processor សម្រាប់ LED នៅកម្ពុជា | តម្លៃ និងដំឡើង",
    description:
      "Video Processor សម្រាប់ LED Display នៅកម្ពុជា ជាមួយសេវាប្រឹក្សាជ្រើសម៉ូដែល កំណត់រចនាសម្ព័ន្ធ និងដំឡើង។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "LED video processor in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Processor សម្រាប់ LED នៅកម្ពុជា | Mugnee Cambodia",
    description: "LED video processor selection, setup, and installation support in Cambodia.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default VideoProcessorPage;
