import type { Metadata } from "next";
import MessageFromCeoClient from "../../../about/message-from-ceo/MessageFromCeoClient";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/about/message-from-ceo/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "សារពីអគ្គនាយក | Mugnee Cambodia",
  description:
    "អានសារពីអគ្គនាយករបស់ Mugnee Cambodia អំពីចក្ខុវិស័យ ការប្តេជ្ញាចិត្ត និងទិសដៅអភិវឌ្ឍបច្ចេកវិទ្យារយៈពេលវែងនៅកម្ពុជា។",
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
