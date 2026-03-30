import type { Metadata } from "next";
import LedDisplayClient from "../../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../../data/products";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/video-processor/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Video Processor សម្រាប់ LED | តម្លៃ និងដំឡើង",
  description:
    "Mugnee Cambodia ផ្តល់ Video Processor សម្រាប់ LED Display ជាមួយសេវាប្រឹក្សាជ្រើសម៉ូដែល កំណត់រចនាសម្ព័ន្ធ និងដំឡើងសម្រាប់គម្រោងក្នុងអគារ និងខាងក្រៅ។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-KH": "/led-display/video-processor/",
      "km-KH": PAGE_PATH,
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
    description: "ជ្រើសរើស Video Processor កំណត់ការបង្ហាញ និងគាំទ្រការដំឡើងនៅកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function KhmerVideoProcessorPage() {
  const accessoryProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("video_processor")
  ).slice(0, 8);

  const productQuickChips = accessoryProducts.map((p) => ({
    label: p.titleEn,
    labelKm: p.titleKm || p.titleEn,
    href: `/km/products/${p.slug}`,
  }));

  const faqItemsKm = [
    {
      q: "ហេតុអ្វីបានជា Video Processor សំខាន់សម្រាប់គុណភាពអេក្រង់ LED?",
      a: "វាជួយ scale និង map មាតិកាប្រភពទៅ resolution របស់ LED wall ដើម្បីបង្កើនស្ថិរភាព ភាពច្បាស់ និងការប្ដូរសញ្ញាឱ្យរលូន។",
    },
    {
      q: "តើត្រូវជ្រើសម៉ូដែល Video Processor យ៉ាងដូចម្តេច?",
      a: "គួរជ្រើសតាមប្រភេទ input ដែលត្រូវការ កម្រិត pixel load តម្រូវការ multi-window និងភាពសមស្របជាមួយ sending/receiving system។",
    },
    {
      q: "តើ Mugnee អាចកំណត់ Video Processor នៅទីតាំងក្នុងកម្ពុជាបានទេ?",
      a: "មាន។ យើងគាំទ្រការកំណត់ configuration ការធ្វើ mapping ការបង្កើនប្រសិទ្ធភាព និងសេវាគាំទ្របន្ទាប់ពីដំឡើង។",
    },
  ];

  return (
    <LedDisplayClient
      forcedLang="km"
      productQuickChips={productQuickChips}
      faqItemsOverrideKm={faqItemsKm}
      schemaPathOverride="/km/led-display/video-processor"
      schemaNameOverride="Video Processor សម្រាប់អេក្រង់ LED"
      schemaServiceNameOverride="សេវា Video Processor សម្រាប់ LED នៅកម្ពុជា"
      schemaServiceDescOverride="សេវាជ្រើសរើស Video Processor ការកំណត់រចនាសម្ព័ន្ធ និងការគាំទ្រការដំឡើងសម្រាប់គម្រោង LED នៅកម្ពុជា។"
      breadcrumbOverrideKm="Video Processor សម្រាប់អេក្រង់ LED"
      heroTitleOverrideKm="Video Processor សម្រាប់អេក្រង់ LED នៅកម្ពុជា"
      heroIntroOverrideKm="Video Processor ជួយប្ដូរ input scale មាតិកា និងបញ្ជូន output ទៅប្រព័ន្ធ LED ឱ្យត្រឹមត្រូវ។ Mugnee Cambodia គាំទ្រការជ្រើសម៉ូដែលសមស្រប ការកំណត់ multi-input និងការដំឡើងសម្រាប់គម្រោង LED ក្នុងអគារ ខាងក្រៅ និង video wall នៅកម្ពុជា។"
      pixelPitchSectionOverrideKm={
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              មូលដ្ឋានសំខាន់ៗអំពី Video Processor
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Video Processor គឺជាមជ្ឈមណ្ឌលគ្រប់គ្រងសញ្ញាសម្រាប់ LED Display ដែលជួយការប្ដូរ input
              ការធ្វើ scaling និងការរៀបចំ output ទៅ cabinet ឱ្យបានសមរម្យ។ វាសំខាន់សម្រាប់គម្រោង
              LED wall ដែលត្រូវការភាពរលូន និងការបង្ហាញច្បាស់។
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                [
                  "ការប្ដូរ Multi-Input",
                  "អាចគ្រប់គ្រងប្រភព HDMI, DVI, VGA, USB និង input ផ្សេងៗ ដើម្បីប្ដូរការបង្ហាញបានរលូន។",
                ],
                [
                  "Scaling និងការរៀបចំរូបភាព",
                  "ជួយឱ្យមាតិកាត្រូវនឹង resolution របស់ LED wall ហើយរក្សាទ្រង់ទ្រាយរូបភាពឱ្យច្បាស់ត្រឹមត្រូវ។",
                ],
                [
                  "Output និងស្ថិរភាព",
                  "គាំទ្រ Gigabit output និង scene preset សម្រាប់គម្រោងដែលត្រូវការការបង្ហាញបន្ត និងការគ្រប់គ្រងងាយស្រួល។",
                ],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">{title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
