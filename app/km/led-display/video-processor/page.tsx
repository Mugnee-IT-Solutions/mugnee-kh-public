import type { Metadata } from "next";
import VideoProcessorPage from "../../../led-display/video-processor/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/video-processor/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ឧបករណ៍កែច្នៃវីដេអូសម្រាប់ LED នៅកម្ពុជា | ជ្រើសរើស និងដំឡើង",
  description:
    "សេវាជ្រើសរើសឧបករណ៍កែច្នៃវីដេអូ កំណត់រចនាសម្ព័ន្ធ និងបើកប្រើប្រាស់នៅកម្ពុជា សម្រាប់គម្រោងអេក្រង់ LED ក្នុងអគារ និងក្រៅអគារ។",
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
