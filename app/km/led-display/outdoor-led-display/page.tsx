import type { Metadata } from "next";
import OutdoorLedDisplayPage from "../../../led-display/outdoor-led-display/page";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/outdoor-led-display/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Outdoor LED Display នៅកម្ពុជា | តម្លៃប៊ីលបត ផ្គត់ផ្គង់ និងដំឡើង",
  description:
    "សេវា Outdoor LED Display និងប៊ីលបតផ្សព្វផ្សាយនៅកម្ពុជា សម្រាប់ផ្លូវធំ ផ្សារ និងអាជីវកម្ម ដោយមានតម្លៃគម្រោង សំណង់ដំឡើង និងសេវាបន្ទាប់ពីលក់។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/outdoor-led-display/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/outdoor-led-display/",
    },
  },
  robots: { index: true, follow: true },
};

export default OutdoorLedDisplayPage;
