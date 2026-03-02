import type { Metadata } from "next";
import VideoProcessorPage from "../../../led-display/video-processor/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/video-processor/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Video Processor សម្រាប់ LED នៅកម្ពុជា | ជ្រើសរើស និង Setup",
  description:
    "សេវាជ្រើសរើស LED video processor, setup និង commissioning នៅកម្ពុជា សម្រាប់គម្រោង indoor និង outdoor LED display។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: "/led-display/video-processor/",
      km: PAGE_PATH,
      "x-default": "/led-display/video-processor/",
    },
  },
  robots: { index: true, follow: true },
};

export default VideoProcessorPage;
