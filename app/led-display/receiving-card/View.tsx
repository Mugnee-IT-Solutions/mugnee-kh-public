/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/led-display/receiving-card/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "LED Receiving Card Cambodia | Best Price & Installation",
  description:
    "LED receiving cards in Cambodia with stable data transfer, IC compatibility, flexible scan modes, and setup support.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/receiving-card/",
      "km-kh": "/km/led-display/receiving-card/",
      "x-default": "/led-display/receiving-card/",
    },
  },
  openGraph: {
    title: "LED Receiving Card Cambodia | Best Price & Installation",
    description:
      "Reliable receiving cards for LED video walls with stable data transfer, wide module compatibility, and expert configuration support.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LED Receiving Card in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Receiving Card Cambodia | Best Price & Installation",
    description:
      "Reliable receiving cards for LED video walls with stable data transfer, wide module compatibility, and expert configuration support.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function ReceivingCardPage() {
  const accessoryProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("led_accessories")
  ).slice(0, 8);

  const productQuickChips = accessoryProducts.map((p) => ({
    label: p.titleEn,
    href: `/products/${p.slug}`,
  }));
  const receivingCardFaq = [
    {
      q: "What does a receiving card do in an LED display system?",
      a: "It receives video data from the sender and maps it to LED modules for stable output, grayscale control, and synchronized playback.",
    },
    {
      q: "How do I choose the right receiving card for my project?",
      a: "Match card capacity, scan mode support, driver IC compatibility, and redundancy requirements with your cabinet design.",
    },
    {
      q: "Do you provide setup and after-sales support in Cambodia?",
      a: "Yes. We support configuration, commissioning, troubleshooting, and local maintenance planning.",
    },
  ];

  return (
    <LedDisplayClient
      productQuickChips={productQuickChips}
      faqItemsOverride={receivingCardFaq}
      schemaPathOverride="/led-display/receiving-card"
      schemaNameOverride="LED Receiving Card"
      schemaServiceNameOverride="LED Receiving Card Solutions in Cambodia"
      schemaServiceDescOverride="LED receiving card selection, setup, and support services in Cambodia for stable and reliable LED display operation."
      breadcrumbOverride="LED Receiving Card"
      heroTitleOverride="LED Receiving Card in Cambodia"
      pixelPitchSectionOverride={
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Receiving Card Essentials for LED Displays in Cambodia
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              An LED receiving card is the cabinet-level controller that takes data from the
              sending system, maps it to the LED modules, and keeps every pixel synchronized
              for smooth, flicker-free visuals. Choosing the right receiving card improves
              image stability, grayscale performance, and long-term reliability for LED
              screens across Cambodia.
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                [
                  "Signal Processing & Mapping",
                  "The receiving card converts video data into signals that match the driver ICs of each LED module and keeps pixel mapping accurate across the cabinet.",
                ],
                [
                  "Grayscale & Refresh Control",
                  "High-bit grayscale handling and refresh control produce smoother gradients and reduce flicker, which is critical for camera use and premium displays.",
                ],
                [
                  "Monitoring & Stability",
                  "Modern cards report cabinet status such as signal quality, temperature, and voltage so technicians can diagnose issues quickly.",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  What to Check Before Buying a Receiving Card
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {[
                    "Module interface (HUB75/HUB75E) and supported scan modes",
                    "Pixel loading capacity per card and cabinet resolution",
                    "Driver IC compatibility and grayscale/refresh requirements",
                    "Redundancy options (loop or dual-card backup) for critical screens",
                    "Monitoring features for signal, voltage, and temperature status",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Reliability Features That Matter
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  For large LED screens and public installations, redundancy protects
                  against signal drops. Look for cards that support loop redundancy and
                  backup receiving cards so the screen can keep running if a cable or card
                  fails.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {["Loop redundancy", "Dual-card backup", "Firmware backup", "Status monitoring"].map(
                    (c) => (
                      <span
                        key={c}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-1"
                      >
                        {c}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              Tip: Match your receiving card to the LED module scan ratio and driver IC.
              This prevents image distortion, improves grayscale performance, and reduces
              maintenance issues over time.
            </div>
          </div>
        </section>
      }
      pixelPitchSectionOverrideKm={
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              មូលដ្ឋានសំខាន់ៗអំពី Receiving Card សម្រាប់ LED Display នៅកម្ពុជា
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              LED receiving card គឺជា controller កម្រិត cabinet ដែលទទួលទិន្នន័យពី
              sending system បន្ទាប់មក map ទៅ LED module និងរក្សា pixel ទាំងអស់ឱ្យ
              synchronized ដើម្បីបង្ហាញរូបភាពរលូន និងកាត់បន្ថយ flicker។ ការជ្រើស
              receiving card ត្រឹមត្រូវ ជួយបង្កើនស្ថិរភាពរូបភាព ប្រសិទ្ធភាព grayscale
              និងភាពទុកចិត្តបានរយៈពេលវែងសម្រាប់អេក្រង់ LED នៅកម្ពុជា។
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                [
                  "ការដំណើរការសញ្ញា និងការធ្វើ Mapping",
                  "Receiving card បម្លែងទិន្នន័យវីដេអូទៅជាសញ្ញាដែលសមនឹង driver IC របស់ LED module នីមួយៗ និងរក្សា pixel mapping ឱ្យត្រឹមត្រូវទូទាំង cabinet។",
                ],
                [
                  "ការគ្រប់គ្រង Grayscale និង Refresh",
                  "ការគាំទ្រ grayscale កម្រិតខ្ពស់ និងការគ្រប់គ្រង refresh ជួយឱ្យ gradient រលូន កាត់បន្ថយ flicker ដែលសំខាន់សម្រាប់ការថតកាមេរ៉ា និងអេក្រង់កម្រិតខ្ពស់។",
                ],
                [
                  "ការតាមដាន និងស្ថិរភាព",
                  "Card សម័យថ្មីអាចរាយការណ៍ស្ថានភាព cabinet ដូចជា signal quality, temperature និង voltage ដើម្បីឱ្យបច្ចេកទេសអាចវិនិច្ឆ័យបញ្ហាបានលឿន។",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  ចំណុចត្រូវពិនិត្យមុនពេលទិញ Receiving Card
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {[
                    "ប្រភេទ module interface (HUB75/HUB75E) និង scan mode ដែលគាំទ្រ",
                    "សមត្ថភាពផ្ទុក pixel ក្នុងមួយ card និងកម្រិត resolution របស់ cabinet",
                    "ភាពសមស្របជាមួយ driver IC និងតម្រូវការ grayscale/refresh",
                    "ជម្រើស redundancy (loop ឬ dual-card backup) សម្រាប់អេក្រង់សំខាន់",
                    "មុខងារ monitoring សម្រាប់ signal, voltage និងស្ថានភាពសីតុណ្ហភាព",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  មុខងារភាពទុកចិត្តបានដែលសំខាន់
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  សម្រាប់អេក្រង់ LED ទំហំធំ និងការដំឡើងសាធារណៈ ការមាន redundancy
                  ជួយការពារការធ្លាក់សញ្ញា។ គួរជ្រើស card ដែលគាំទ្រ loop redundancy និង
                  backup receiving card ដើម្បីឱ្យអេក្រង់បន្តដំណើរការបាន ទោះខ្សែឬ card
                  មួយមានបញ្ហាក៏ដោយ។
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {["Loop redundancy", "Dual-card backup", "Firmware backup", "Status monitoring"].map(
                    (c) => (
                      <span
                        key={c}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-1"
                      >
                        {c}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              គន្លឹះ: ត្រូវផ្គូផ្គង receiving card ឱ្យសមនឹង scan ratio និង driver IC របស់
              LED module។ វាជួយកាត់បន្ថយបញ្ហារូបភាពខូច ធ្វើឱ្យ grayscale ល្អ និងកាត់បន្ថយ
             បញ្ហាថែទាំក្នុងរយៈពេលវែង។
            </div>
          </div>
        </section>
      }
      productGridOverride={{
        columns: 3,
        pageSize: 9,
        allowedCategoryIds: ["led_accessories"],
        filterCategoryIds: ["led_accessories"],
        categoryOrderIds: ["led_accessories"],
        showCategoryFilters: false,
      }}
    />
  );
}

