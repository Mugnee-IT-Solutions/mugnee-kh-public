import type { Metadata } from "next";
import MessageFromCeoClient from "../../../about/message-from-ceo/MessageFromCeoClient";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/about/message-from-ceo/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "សារពីអគ្គនាយក Mugnee Cambodia | គុណភាព និងសេវាកម្ម",
  description:
    "អានសារពីអគ្គនាយកអំពីគុណភាព សេវាកម្ម និងការប្តេជ្ញាចិត្តរបស់ Mugnee Cambodia ចំពោះអតិថិជននៅកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-KH": "/about/message-from-ceo/",
      "km-KH": PAGE_PATH,
      "x-default": "/about/message-from-ceo/",
    },
  },
  openGraph: {
    title: "សារពីអគ្គនាយក Mugnee Cambodia | គុណភាព សេវា និងទិសដៅទីផ្សារ",
    description:
      "អានសារពីអគ្គនាយក Mugnee Cambodia អំពីគុណភាព សេវាកម្ម និងការប្តេជ្ញាចិត្តចំពោះអតិថិជននៅកម្ពុជា។",
    url: PAGE_URL,
    type: "article",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Message from CEO Mugnee Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "សារពីអគ្គនាយក Mugnee Cambodia",
    description: "គុណភាព សេវាកម្ម និងទិសដៅទីផ្សាររបស់ Mugnee Cambodia នៅកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function KmMessageFromCeoPage() {
  return <MessageFromCeoClient lang="km" />;
}
