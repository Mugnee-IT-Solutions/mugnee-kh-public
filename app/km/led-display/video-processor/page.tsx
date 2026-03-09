import type { Metadata } from "next";
import VideoProcessorPage from "../../../led-display/video-processor/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/video-processor/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Video Processor សម្រាប់ LED នៅកម្ពុជា | តម្លៃ ជ្រើសរើស និងដំឡើង",
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
  robots: { index: true, follow: true },
};

export default VideoProcessorPage;
