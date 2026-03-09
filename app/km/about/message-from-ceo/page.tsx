import type { Metadata } from "next";
import MessageFromCeoClient from "../../../about/message-from-ceo/MessageFromCeoClient";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/about/message-from-ceo/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "សារពីអគ្គនាយក Mugnee Cambodia | គុណភាព សេវា និងទិសដៅទីផ្សារកម្ពុជា",
  description:
    "អានសារពីអគ្គនាយកអំពីការប្តេជ្ញាចិត្តរបស់ Mugnee Cambodia ក្នុងការផ្គត់ផ្គង់ផលិតផលបច្ចេកវិទ្យាគុណភាព តម្លៃសមរម្យ និងសេវាបន្ទាប់ពីលក់ដ៏ជឿទុកចិត្តបានសម្រាប់អតិថិជននៅកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/about/message-from-ceo/",
      "km-kh": PAGE_PATH,
      "x-default": "/about/message-from-ceo/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmMessageFromCeoPage() {
  return <MessageFromCeoClient forcedLang="km" />;
}
