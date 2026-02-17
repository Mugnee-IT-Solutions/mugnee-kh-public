import type { Metadata } from "next";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/led-display/outdoor-led-display";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Outdoor LED Display in Cambodia | Billboard & Digital Signage Solutions",
  description:
    "Outdoor LED display solutions in Cambodia for roadside billboards, facade screens, and public signage with IP-rated panels, structure planning, installation, and local support.",
  keywords: [
    "outdoor LED display Cambodia",
    "LED billboard Cambodia",
    "outdoor digital signage Cambodia",
    "IP65 LED screen Cambodia",
    "roadside LED billboard Phnom Penh",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Outdoor LED Display in Cambodia | Billboard & Digital Signage Solutions",
    description:
      "High-brightness outdoor LED billboard and signage solutions in Cambodia with structure design, commissioning, and after-sales support.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`,
        width: 1200,
        height: 630,
        alt: "Outdoor LED display and billboard in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outdoor LED Display in Cambodia | Mugnee Cambodia",
    description:
      "Outdoor LED billboard and digital signage solutions in Cambodia with local installation and support.",
    images: [`${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`],
  },
};

export default function OutdoorLedDisplayPage() {
  const outdoorProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("outdoor_led_display")
  ).slice(0, 8);
  const outdoorSchemaProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("outdoor_led_display")
  ).slice(0, 9);

  const productQuickChips = outdoorProducts.map((p) => ({
    label: p.titleEn,
    href: `/products/catalog/${p.slug}`,
  }));
  const outdoorItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Outdoor LED Display Products in Cambodia",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: outdoorSchemaProducts.length,
    itemListElement: outdoorSchemaProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/products/catalog/${product.slug}`,
      name: product.titleEn,
      image: `${SITE_URL}${product.heroImage}`,
    })),
  };

  const outdoorFaq = [
    {
      q: "What brightness is recommended for outdoor LED billboards in Cambodia?",
      a: "Outdoor LED screens commonly require high brightness for daylight visibility. Final brightness depends on sunlight direction, mounting height, and viewing distance.",
    },
    {
      q: "Which pixel pitch is suitable for outdoor LED display?",
      a: "For city roads, P4-P6 is common. For longer distances such as highways, larger pitch like P8-P10 may be more practical.",
    },
    {
      q: "Why is IP rating important for outdoor LED in Cambodia?",
      a: "Outdoor screens are exposed to rain, dust, and heat. Proper IP-rated protection, cabinet design, and sealing improve long-term reliability.",
    },
    {
      q: "Do you provide structure and installation for outdoor LED projects?",
      a: "Yes. We support survey, structure concept, safe mounting, wiring, grounding, controller setup, and commissioning.",
    },
    {
      q: "How is outdoor LED quotation prepared?",
      a: "Outdoor quotation is project-based and includes screen size, pixel pitch, brightness, structure complexity, electrical scope, and support coverage.",
    },
  ];

  const outdoorCluster = [
    { title: "Parent LED Display Page", href: "/led-display" },
    { title: "Indoor LED Display in Cambodia", href: "/led-display/indoor-led-display" },
    { title: "Outdoor LED Product Catalog", href: "/products/catalog/outdoor-led-display" },
    { title: "LED Video Processor Guide", href: "/led-display/video-processor" },
    { title: "Installation & Service Support", href: "/service" },
    { title: "Cambodia Industry Solutions", href: "/solutions" },
    { title: "Project References", href: "/projects" },
    { title: "Request Outdoor LED Quotation", href: "/contact" },
  ];
  const outdoorClusterKm = [
    { title: "ទំព័រ LED Display មេ", href: "/led-display" },
    { title: "អេក្រង់ LED ក្នុងអគារ នៅកម្ពុជា", href: "/led-display/indoor-led-display" },
    { title: "កាតាឡុកផលិតផល LED ខាងក្រៅ", href: "/products/catalog/outdoor-led-display" },
    { title: "មគ្គុទ្ទេសក៍ LED Video Processor", href: "/led-display/video-processor" },
    { title: "សេវាដំឡើង និងគាំទ្របច្ចេកទេស", href: "/service" },
    { title: "ដំណោះស្រាយតាមវិស័យនៅកម្ពុជា", href: "/solutions" },
    { title: "គម្រោងយោង", href: "/projects" },
    { title: "ស្នើសុំតម្លៃអេក្រង់ LED ខាងក្រៅ", href: "/contact" },
  ];

  const outdoorTrustSignals = [
    "Outdoor-specific FAQ structured data and entity signals applied",
    "IP protection, brightness, and structure safety planning workflow",
    "Local commissioning and support coverage across key Cambodia cities",
    "Roadside billboard, facade, and public-display deployment focus",
  ];
  const outdoorTrustSignalsKm = [
    "បានអនុវត្តទិន្នន័យ FAQ សម្រាប់ outdoor និងសញ្ញា entity",
    "លំហូរការងាររៀបចំ IP protection, brightness និងសុវត្ថិភាពរចនាសម្ព័ន្ធ",
    "គ្របដណ្តប់ commissioning និងការគាំទ្រក្នុងស្រុកតាមទីក្រុងសំខាន់ៗនៅកម្ពុជា",
    "ផ្តោតលើការដំឡើងប៊ីលបត្រតាមដងផ្លូវ អេក្រង់ facade និងផ្ទាំងបង្ហាញសាធារណៈ",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(outdoorItemListJsonLd) }}
      />
      <LedDisplayClient
      productQuickChips={productQuickChips}
      faqItemsOverride={outdoorFaq}
      internalLinkClusterOverride={outdoorCluster}
      internalLinkClusterOverrideKm={outdoorClusterKm}
      trustSignalsOverride={outdoorTrustSignals}
      trustSignalsOverrideKm={outdoorTrustSignalsKm}
      trustTitleOverride="Trust & Delivery Signals for Outdoor LED Projects in Cambodia"
      trustTitleOverrideKm="សញ្ញានៃភាពទុកចិត្ត និងការផ្តល់ជូនសម្រាប់គម្រោង Outdoor LED នៅកម្ពុជា"
      trustDescOverride="This outdoor LED page is optimized for billboard and facade deployment intent with structured FAQ, local support proof, and clear parent-child internal linking."
      trustDescOverrideKm="ទំព័រ outdoor LED នេះត្រូវបានបង្កើនប្រសិទ្ធភាពសម្រាប់ប៊ីលបត្រ និងការដំឡើងលើ facade ដោយមាន FAQ រៀបចំរចនាសម្ព័ន្ធ ភស្តុតាងគាំទ្រក្នុងស្រុក និងតំណភ្ជាប់ parent-child ច្បាស់លាស់។"
      internalLinkTitleOverride="Outdoor LED Internal Linking Cluster"
      internalLinkTitleOverrideKm="តំណភ្ជាប់ខាងក្នុងសម្រាប់ Outdoor LED"
      internalLinkDescOverride="Navigate outdoor buying paths by billboard type, technical components, related pages, and quotation routes."
      internalLinkDescOverrideKm="សូមរុករកផ្លូវសម្រេចចិត្តទិញអេក្រង់ LED ខាងក្រៅ តាមប្រភេទប៊ីលបត្រ ផ្នែកបច្ចេកទេស ទំព័រពាក់ព័ន្ធ និងការស្នើសុំតម្លៃ។"
      schemaPathOverride="/led-display/outdoor-led-display"
      schemaNameOverride="Outdoor LED Display"
      schemaServiceNameOverride="Outdoor LED Display in Cambodia"
      schemaServiceDescOverride="Outdoor LED billboard and digital signage solutions in Cambodia with structure design, installation, commissioning, and after-sales support."
      breadcrumbOverride="Outdoor LED Display"
      heroTitleOverride="Outdoor LED Display in Cambodia"
      heroTitleOverrideKm="អេក្រង់ LED ខាងក្រៅ នៅកម្ពុជា"
      heroIntroOverride="Mugnee delivers outdoor LED display solutions in Cambodia for roadside billboards, facade screens, and public digital signage. We handle site survey, brightness and pixel-pitch planning, structure safety, installation, commissioning, and local support."
      heroIntroOverrideKm="Mugnee ផ្តល់ដំណោះស្រាយអេក្រង់ LED ខាងក្រៅនៅកម្ពុជា សម្រាប់ប៊ីលបត្រ​តាមដងផ្លូវ អេក្រង់ facade និងផ្ទាំងផ្សព្វផ្សាយឌីជីថលសាធារណៈ។ យើងផ្តល់សេវា site survey ការរៀបចំ brightness និង pixel pitch សុវត្ថិភាពរចនាសម្ព័ន្ធ ការដំឡើង ការធ្វើ commissioning និងការគាំទ្រក្នុងស្រុក។"
      afterSpecsContent={
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Outdoor LED Display Types
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Outdoor LED displays are selected based on brightness, IP protection,
              viewing distance, and structural safety. These types are the most common
              outdoor panel categories used across Cambodia highways, rooftops, and
              public information sites.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "Fixed Outdoor Billboard LED",
                  "High-brightness, weatherproof panels built for 24/7 operation on roadside and rooftop billboards. Strong cabinets and stable cooling ensure long service life.",
                  ["P6 to P10", "IP65+", "High nits"],
                ],
                [
                  "Fine-Pitch Outdoor LED",
                  "Outdoor fine-pitch panels deliver sharper visuals for closer viewing in plazas, storefronts, and transit hubs. They require higher brightness and precise calibration.",
                  ["P2.5 to P5", "Close viewing", "High clarity"],
                ],
                [
                  "Front-Service Outdoor LED",
                  "Front-service cabinets simplify maintenance for wall-mounted or hard-to-access installations. Ideal for façade screens and constrained spaces.",
                  ["Front access", "Facade installs", "Low downtime"],
                ],
                [
                  "Rental Outdoor LED",
                  "Weather-ready rental panels for outdoor events and stages, designed for fast setup, modular splicing, and safe cabling.",
                  ["Fast setup", "Rugged", "Event ready"],
                ],
              ].map((item, idx) => {
                const [t, d, chips] = item as [string, string, string[]];
                return (
                <div
                  key={`${t}-${idx}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                    {chips.map((c, chipIdx) => (
                      <span
                        key={`${t}-${c}-${chipIdx}`}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>
      }
      afterSpecsContentKm={
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              ប្រភេទអេក្រង់ LED ខាងក្រៅ
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              អេក្រង់ LED ខាងក្រៅត្រូវបានជ្រើសរើសតាមកម្រិតពន្លឺ ការការពារ IP ចម្ងាយមើល និងសុវត្ថិភាពរចនាសម្ព័ន្ធ។
              ប្រភេទខាងក្រោមគឺជាប្រភេទបន្ទះ outdoor ដែលពេញនិយមបំផុត សម្រាប់ផ្លូវធំ ដំបូលអគារ និងកន្លែងព័ត៌មានសាធារណៈនៅកម្ពុជា។
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "Fixed Outdoor Billboard LED",
                  "បន្ទះដែលមានកម្រិតពន្លឺខ្ពស់ និងការពារអាកាសធាតុ សម្រាប់ដំណើរការ 24/7 លើប៊ីលបត្រតាមដងផ្លូវ និងលើដំបូល។ Cabinet រឹងមាំ និងប្រព័ន្ធត្រជាក់ស្ថិរភាព ជួយបង្កើនអាយុកាលប្រើប្រាស់។",
                  ["P6 ដល់ P10", "IP65+", "ពន្លឺខ្ពស់"],
                ],
                [
                  "Fine-Pitch Outdoor LED",
                  "បន្ទះ outdoor fine-pitch ផ្តល់រូបភាពច្បាស់សម្រាប់ការមើលជិតនៅទីលានមុខហាង និងមជ្ឈមណ្ឌលធ្វើដំណើរ។ វាត្រូវការកម្រិតពន្លឺខ្ពស់ និងការកែតម្រូវត្រឹមត្រូវ។",
                  ["P2.5 ដល់ P5", "មើលជិត", "ភាពច្បាស់ខ្ពស់"],
                ],
                [
                  "Front-Service Outdoor LED",
                  "Cabinet ប្រភេទ front-service ងាយស្រួលថែទាំ សម្រាប់ការដំឡើងជាប់ជញ្ជាំង ឬទីតាំងពិបាកចូលដល់។ សមស្របសម្រាប់អេក្រង់ facade និងកន្លែងតូចចង្អៀត។",
                  ["ថែទាំពីមុខ", "ដំឡើងលើ facade", "ពេលឈប់ដំណើរការតិច"],
                ],
                [
                  "Rental Outdoor LED",
                  "បន្ទះ rental ដែលត្រៀមរួចសម្រាប់អាកាសធាតុខាងក្រៅ សម្រាប់កម្មវិធី និងឆាកក្រៅអគារ ដោយផ្តោតលើការដំឡើងលឿន ការភ្ជាប់ម៉ូឌុល និងសុវត្ថិភាពខ្សែភ្លើង។",
                  ["ដំឡើងលឿន", "រឹងមាំ", "សមស្របសម្រាប់កម្មវិធី"],
                ],
              ].map((item, idx) => {
                const [t, d, chips] = item as [string, string, string[]];
                return (
                <div
                  key={`${t}-${idx}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                    {chips.map((c, chipIdx) => (
                      <span
                        key={`${t}-${c}-${chipIdx}`}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>
      }
      pixelPitchIntroOverride="Outdoor LED screens must match viewing distance, sunlight level, and IP protection. Use this outdoor-focused guide for Cambodia installations."
      pixelPitchRowsOverride={[
        [
          "P2.5-P3.9 (Outdoor fine-pitch)",
          "3-8 m",
          "Storefronts, plazas, transport hubs",
        ],
        [
          "P4-P6 (Mainstream outdoor)",
          "6-15 m",
          "Roadside ads, city signage",
        ],
        [
          "P8-P10 (Long-distance)",
          "12-30 m",
          "Highway billboards, large rooftops",
        ],
        [
          "P10+ (Ultra long-distance)",
          "20 m+",
          "Large-format roadside and open areas",
        ],
      ]}
      pixelPitchSectionOverrideKm={
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              មគ្គុទ្ទេសក៍ Pixel Pitch និងចម្ងាយមើល
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              អេក្រង់ LED ខាងក្រៅត្រូវតែសមស្របនឹងចម្ងាយមើល កម្រិតពន្លឺថ្ងៃ
              និងការការពារ IP។ សូមប្រើមគ្គុទ្ទេសក៍នេះ
              ជាចំណុចចាប់ផ្តើមសម្រាប់ការដំឡើងនៅកម្ពុជា។
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
                <div className="p-3">Pixel Pitch</div>
                <div className="p-3">ចម្ងាយមើលល្អបំផុត</div>
                <div className="p-3">ការប្រើប្រាស់ទូទៅ</div>
              </div>
              {[
                [
                  "P2.5-P3.9 (Outdoor fine-pitch)",
                  "3-8 m",
                  "មុខហាង ទីលានសាធារណៈ និងមជ្ឈមណ្ឌលដឹកជញ្ជូន",
                ],
                [
                  "P4-P6 (Mainstream outdoor)",
                  "6-15 m",
                  "ប៊ីលបត្រតាមដងផ្លូវ និងផ្ទាំងផ្សព្វផ្សាយក្នុងទីក្រុង",
                ],
                [
                  "P8-P10 (Long-distance)",
                  "12-30 m",
                  "ប៊ីលបត្រផ្លូវល្បឿនលឿន និងដំបូលអគារធំ",
                ],
                [
                  "P10+ (Ultra long-distance)",
                  "20 m+",
                  "ផ្ទាំងទ្រង់ទ្រាយធំតាមដងផ្លូវ និងតំបន់បើកចំហ",
                ],
              ].map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-1 border-t border-slate-200 text-sm text-slate-700 sm:grid-cols-3"
                >
                  <div className="p-3 font-semibold text-slate-900">{row[0]}</div>
                  <div className="p-3">{row[1]}</div>
                  <div className="p-3">{row[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
      productGridOverride={{
        columns: 3,
        pageSize: 9,
        allowedCategoryIds: ["outdoor_led_display"],
        filterCategoryIds: ["outdoor_led_display"],
        categoryOrderIds: ["outdoor_led_display"],
        showCategoryFilters: false,
      }}
      />
    </>
  );
}
