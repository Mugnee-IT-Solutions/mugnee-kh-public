import type { Metadata } from "next";
import LedDisplayClient from "../../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../../data/products";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/receiving-card/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Receiving Card សម្រាប់អេក្រង់ LED | ជ្រើសរើស និងដំឡើង",
  description:
    "សេវា Receiving Card សម្រាប់ LED Display នៅកម្ពុជា ជាមួយការប្រឹក្សាតម្លៃ កំណត់រចនាសម្ព័ន្ធ Mapping និងការដំឡើងសម្រាប់គម្រោង Indoor និង Outdoor។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/receiving-card/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/receiving-card/",
    },
  },
  openGraph: {
    title: "Receiving Card សម្រាប់អេក្រង់ LED នៅកម្ពុជា | ជ្រើសរើស និងដំឡើង",
    description:
      "Receiving Card សម្រាប់ LED Display នៅកម្ពុជា ជាមួយការប្រឹក្សាតម្លៃ Mapping និងការដំឡើងសម្រាប់គម្រោងក្នុងអគារ និងខាងក្រៅ។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "LED receiving card in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Receiving Card សម្រាប់អេក្រង់ LED នៅកម្ពុជា | Mugnee Cambodia",
    description: "ជ្រើសរើស Receiving Card កំណត់ Mapping និងគាំទ្រការដំឡើងនៅកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function KhmerReceivingCardPage() {
  const accessoryProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("led_accessories")
  ).slice(0, 8);

  const productQuickChips = accessoryProducts.map((p) => ({
    label: p.titleEn,
    labelKm: p.titleKm || p.titleEn,
    href: `/km/products/${p.slug}`,
  }));

  const faqItemsKm = [
    {
      q: "តើ Receiving Card មានតួនាទីអ្វីក្នុងប្រព័ន្ធអេក្រង់ LED?",
      a: "វាទទួលទិន្នន័យវីដេអូពី sender ហើយ map ទៅ LED module ដើម្បីឱ្យការបង្ហាញមានស្ថិរភាព ការគ្រប់គ្រង grayscale ល្អ និងការចាក់បង្ហាញសមកាលកម្ម។",
    },
    {
      q: "តើគួរជ្រើស Receiving Card យ៉ាងដូចម្តេចសម្រាប់គម្រោងរបស់ខ្ញុំ?",
      a: "គួរពិនិត្យសមត្ថភាព pixel load ការគាំទ្រ scan mode ភាពសមស្របជាមួយ driver IC និងតម្រូវការ redundancy ឱ្យសមនឹង cabinet design របស់អ្នក។",
    },
    {
      q: "តើមានសេវាកំណត់រចនាសម្ព័ន្ធ និងគាំទ្របន្ទាប់ពីលក់នៅកម្ពុជាទេ?",
      a: "មាន។ យើងគាំទ្រការកំណត់ configuration ការត្រួតពិនិត្យដំណើរការ ការដោះស្រាយបញ្ហា និងផែនការថែទាំក្នុងស្រុក។",
    },
  ];

  return (
    <LedDisplayClient
      forcedLang="km"
      productQuickChips={productQuickChips}
      faqItemsOverrideKm={faqItemsKm}
      schemaPathOverride="/km/led-display/receiving-card"
      schemaNameOverride="Receiving Card សម្រាប់អេក្រង់ LED"
      schemaServiceNameOverride="សេវា Receiving Card សម្រាប់ LED នៅកម្ពុជា"
      schemaServiceDescOverride="សេវាជ្រើសរើស Receiving Card ការកំណត់ Mapping និងការគាំទ្របច្ចេកទេសសម្រាប់អេក្រង់ LED នៅកម្ពុជា។"
      breadcrumbOverrideKm="Receiving Card សម្រាប់អេក្រង់ LED"
      heroTitleOverrideKm="Receiving Card សម្រាប់អេក្រង់ LED នៅកម្ពុជា"
      heroIntroOverrideKm="Receiving Card គឺជាផ្នែកស្នូលសម្រាប់ការទទួលទិន្នន័យ និងបញ្ជូនរូបភាពទៅ LED Module ឱ្យបានត្រឹមត្រូវ។ Mugnee Cambodia គាំទ្រការជ្រើសរើស Receiving Card សមស្រប ការកំណត់ Mapping ការត្រួតពិនិត្យភាពសមស្របជាមួយ Driver IC និងការគាំទ្រការដំឡើងសម្រាប់គម្រោង LED ក្នុងអគារ និងខាងក្រៅនៅកម្ពុជា។"
      pixelPitchSectionOverrideKm={
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              ចំណុចសំខាន់ៗអំពី Receiving Card
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Receiving Card ត្រឹមត្រូវជួយឱ្យអេក្រង់ LED បង្ហាញរូបភាពមានស្ថិរភាព កាត់បន្ថយបញ្ហាសញ្ញា
              និងធ្វើឱ្យការកែតម្រូវ module ងាយស្រួលជាងមុន។ វាសំខាន់សម្រាប់គម្រោងដែលត្រូវការភាពច្បាស់
              និងការដំណើរការបន្តរយៈពេលវែង។
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                [
                  "ការធ្វើ Mapping ត្រឹមត្រូវ",
                  "ការកំណត់ Mapping ត្រឹមត្រូវជួយឱ្យ pixel និង module បង្ហាញរូបភាពតាម layout ដែលបានរចនា។",
                ],
                [
                  "ភាពសមស្របជាមួយ Driver IC",
                  "Receiving Card ត្រូវតែសមនឹង Driver IC និង Scan Mode របស់ LED Module ដើម្បីជៀសវាងបញ្ហាភ្លឺមិនស្មើ ឬរូបភាពខូច។",
                ],
                [
                  "Monitoring និងភាពទុកចិត្តបាន",
                  "Card សម័យថ្មីអាចជួយតាមដាន signal voltage និងស្ថានភាព cabinet ដើម្បីឱ្យបច្ចេកទេសដោះស្រាយបញ្ហាបានលឿន។",
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
