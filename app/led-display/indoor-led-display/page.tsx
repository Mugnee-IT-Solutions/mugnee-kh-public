import type { Metadata } from "next";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/led-display/indoor-led-display";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Indoor LED Display in Cambodia | Fine-Pitch Video Wall Solutions",
  description:
    "Indoor LED display solutions in Cambodia for boardrooms, control rooms, showrooms, retail, and hospitality with fine-pitch planning, installation, calibration, and local support.",
  keywords: [
    "indoor LED display Cambodia",
    "fine pitch LED Cambodia",
    "indoor LED video wall Phnom Penh",
    "conference room LED display Cambodia",
    "control room LED display Cambodia",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Indoor LED Display in Cambodia | Fine-Pitch Video Wall Solutions",
    description:
      "Fine-pitch indoor LED display in Cambodia for corporate, retail, and control-room environments with local installation and after-sales support.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/cambodia/indoor-led-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Indoor LED display in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indoor LED Display in Cambodia | Mugnee Cambodia",
    description:
      "Fine-pitch indoor LED solutions in Cambodia with local installation, calibration, and support.",
    images: [`${SITE_URL}/images/cambodia/indoor-led-hero.webp`],
  },
};

export default function IndoorLedDisplayPage() {
  const indoorProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("indoor_led_display")
  ).slice(0, 8);
  const indoorSchemaProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("indoor_led_display")
  ).slice(0, 9);

  const productQuickChips = indoorProducts.map((p) => ({
    label: p.titleEn,
    href: `/products/catalog/${p.slug}`,
  }));
  const indoorItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Indoor LED Display Products in Cambodia",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: indoorSchemaProducts.length,
    itemListElement: indoorSchemaProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/products/catalog/${product.slug}`,
      name: product.titleEn,
      image: `${SITE_URL}${product.heroImage}`,
    })),
  };

  const indoorFaq = [
    {
      q: "Which pixel pitch is best for indoor LED display in Cambodia?",
      a: "For close viewing, P1.25-P1.86 is common. For meeting rooms and showrooms, P2-P2.5 is often practical. Final selection depends on viewing distance, content type, and budget.",
    },
    {
      q: "Do indoor LED screens need high brightness like outdoor billboards?",
      a: "No. Indoor LED displays generally use lower brightness than outdoor screens to avoid glare and improve visual comfort in enclosed spaces.",
    },
    {
      q: "What are common indoor LED use cases in Cambodia?",
      a: "Boardrooms, control rooms, showrooms, malls, hotel lobbies, education halls, and indoor stage backdrops are common deployment use cases.",
    },
    {
      q: "Can you provide indoor LED installation and calibration locally?",
      a: "Yes. We provide site survey, mounting, cabling, controller setup, color calibration, and after-sales support in Cambodia.",
    },
    {
      q: "How is indoor LED quotation prepared?",
      a: "Quotation is project-based and depends on pixel pitch, total screen size, cabinet type, controller, installation method, and support scope.",
    },
  ];

  const indoorCluster = [
    { title: "Parent LED Display Page", href: "/led-display" },
    { title: "Outdoor LED Display in Cambodia", href: "/led-display/outdoor-led-display" },
    { title: "Indoor LED Product Catalog", href: "/products/catalog/indoor-led-display" },
    { title: "Pixel Pitch Buying Guide", href: "/led-display" },
    { title: "Installation & Service Support", href: "/service" },
    { title: "Cambodia Industry Solutions", href: "/solutions" },
    { title: "Project References", href: "/projects" },
    { title: "Request Indoor LED Quotation", href: "/contact" },
  ];
  const indoorClusterKm = [
    { title: "ទំព័រ LED Display មេ", href: "/led-display" },
    { title: "អេក្រង់ LED ខាងក្រៅ នៅកម្ពុជា", href: "/led-display/outdoor-led-display" },
    { title: "កាតាឡុកផលិតផល LED ក្នុងអគារ", href: "/products/catalog/indoor-led-display" },
    { title: "មគ្គុទ្ទេសក៍ទិញ Pixel Pitch", href: "/led-display" },
    { title: "សេវាដំឡើង និងគាំទ្របច្ចេកទេស", href: "/service" },
    { title: "ដំណោះស្រាយតាមវិស័យនៅកម្ពុជា", href: "/solutions" },
    { title: "គម្រោងយោង", href: "/projects" },
    { title: "ស្នើសុំតម្លៃអេក្រង់ LED ក្នុងអគារ", href: "/contact" },
  ];

  const indoorTrustSignals = [
    "Indoor-specific FAQ structured data and page entity signals applied",
    "Fine-pitch planning by viewing distance and room lighting conditions",
    "Local installation, calibration, and after-sales support in Cambodia",
    "Boardroom, showroom, control-room, and retail indoor deployment experience",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indoorItemListJsonLd) }}
      />
      <LedDisplayClient
        productQuickChips={productQuickChips}
        faqItemsOverride={indoorFaq}
        internalLinkClusterOverride={indoorCluster}
        internalLinkClusterOverrideKm={indoorClusterKm}
        trustSignalsOverride={indoorTrustSignals}
        trustTitleOverride="Trust & Delivery Signals for Indoor LED Projects in Cambodia"
        trustDescOverride="This indoor LED page is optimized for close-viewing commercial use cases with structured FAQ, local service evidence, and clear parent-child internal linking."
        internalLinkTitleOverride="Indoor LED Internal Linking Cluster"
        internalLinkTitleOverrideKm="តំណភ្ជាប់ខាងក្នុងសម្រាប់ Indoor LED"
        internalLinkDescOverride="Navigate indoor buying paths by product type, technical guidance, related pages, and direct quotation routes."
        internalLinkDescOverrideKm="សូមរុករកផ្លូវសម្រេចចិត្តទិញអេក្រង់ LED ក្នុងអគារ តាមប្រភេទផលិតផល មគ្គុទ្ទេសក៍បច្ចេកទេស ទំព័រពាក់ព័ន្ធ និងការស្នើសុំតម្លៃដោយផ្ទាល់។"
        schemaPathOverride="/led-display/indoor-led-display"
        schemaNameOverride="Indoor LED Display"
        schemaServiceNameOverride="Indoor LED Display in Cambodia"
        schemaServiceDescOverride="Fine-pitch indoor LED display solutions in Cambodia with survey, design, installation, calibration, and local after-sales support."
        breadcrumbOverride="Indoor LED Display"
        heroTitleOverride="Indoor LED Display in Cambodia"
        heroIntroOverride="Mugnee provides indoor LED display solutions in Cambodia for boardrooms, retail, showrooms, control rooms, and hospitality spaces. We support fine-pitch planning, installation, calibration, and local after-sales service with project-based quotation."
        heroIntroOverrideKm="Mugnee ផ្តល់ដំណោះស្រាយអេក្រង់ LED ក្នុងអគារនៅកម្ពុជា សម្រាប់បន្ទប់ប្រជុំ ហាងលក់រាយ បន្ទប់តាំងបង្ហាញ បន្ទប់បញ្ជា និងវិស័យបដិសណ្ឋារកិច្ច។ យើងគាំទ្រការរៀបចំ fine-pitch ការដំឡើង ការកែតម្រូវពណ៌ និងសេវាកម្មបន្ទាប់ពីលក់ក្នុងស្រុក ជាមួយការដកស្រង់តម្លៃតាមគម្រោង។"
        afterSpecsContent={
          <section className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Indoor LED Display Types
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Indoor LED displays are selected by pixel pitch, viewing distance, and
                durability needs. The types below explain the most common indoor panel
                technologies used in Cambodia, so buyers can choose the right solution
                for clarity, budget, and long-term reliability.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  [
                    "Fine-Pitch SMD Indoor LED",
                    "Fine-pitch SMD panels deliver sharp detail for close-viewing spaces like meeting rooms, broadcast studios, and control centers. They balance performance and cost for premium indoor video walls.",
                    ["P1.25 to P1.9", "Close viewing", "High detail"],
                  ],
                  [
                    "COB Ultra-Fine Indoor LED",
                    "COB (chip-on-board) uses a matte surface to reduce reflection and boost contrast. It is ideal for close-range viewing in command centers, studios, and premium indoor walls.",
                    ["P0.7 to P1.8", "Low reflection", "High contrast"],
                  ],
                  [
                    "GOB Protected Indoor LED",
                    "GOB (glue-on-board) adds a protective coating that improves impact, dust, and moisture resistance. It suits high-traffic indoor spaces and public-facing screens.",
                    ["Protected surface", "Impact resistant", "Low maintenance"],
                  ],
                  [
                    "Standard Indoor SMD LED",
                    "Standard indoor SMD panels are cost-efficient and versatile for general indoor screens, signage, and mid-distance viewing where budget matters.",
                    ["P1.5 to P3.9", "Budget friendly", "General indoor use"],
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
                      {chips.map((c) => (
                        <span
                          key={c}
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
                ប្រភេទអេក្រង់ LED ក្នុងអគារ
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                អេក្រង់ LED ក្នុងអគារ ត្រូវបានជ្រើសរើសតាម pixel pitch, ចម្ងាយមើល និងតម្រូវការភាពធន់។
                ប្រភេទខាងក្រោមពន្យល់អំពីបច្ចេកវិទ្យាបន្ទះ indoor ដែលគេប្រើញឹកញាប់នៅកម្ពុជា
                ដើម្បីឱ្យអ្នកទិញអាចជ្រើសដំណោះស្រាយត្រឹមត្រូវសម្រាប់ភាពច្បាស់ ថវិកា
                និងភាពទុកចិត្តបានរយៈពេលវែង។
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  [
                    "Fine-Pitch SMD LED ក្នុងអគារ",
                    "បន្ទះ Fine-pitch SMD ផ្តល់រូបភាពច្បាស់សម្រាប់ការមើលជិត ដូចជា​បន្ទប់ប្រជុំ ស្ទូឌីយោផ្សាយ និងបន្ទប់បញ្ជា។ វាសមតុល្យទាំងសមត្ថភាព និងថ្លៃដើម សម្រាប់វីដេអូវ៉ល indoor កម្រិតខ្ពស់។",
                    ["P1.25 ដល់ P1.9", "មើលជិត", "ភាពច្បាស់ខ្ពស់"],
                  ],
                  [
                    "COB Ultra-Fine LED ក្នុងអគារ",
                    "COB (chip-on-board) ប្រើផ្ទៃម៉ាត់ ដើម្បីកាត់បន្ថយការឆ្លុះបញ្ចាំង និងបង្កើនកម្រិត contrast។ វាសមស្របសម្រាប់ការមើលជិតនៅ command center ស្ទូឌីយោ និងជញ្ជាំង indoor កម្រិត premium។",
                    ["P0.7 ដល់ P1.8", "ឆ្លុះតិច", "Contrast ខ្ពស់"],
                  ],
                  [
                    "GOB Protected LED ក្នុងអគារ",
                    "GOB (glue-on-board) មានស្រទាប់ការពារ ដែលជួយបង្កើនភាពធន់នឹងការប៉ះទង្គិច ធូលី និងសំណើម។ វាសមស្របសម្រាប់ទីតាំង indoor ដែលមានមនុស្សច្រើន និងអេក្រង់បង្ហាញសាធារណៈ។",
                    ["ផ្ទៃការពារ", "ធន់នឹងការប៉ះទង្គិច", "ថែទាំងាយ"],
                  ],
                  [
                    "Standard Indoor SMD LED",
                    "បន្ទះ Standard indoor SMD មានតម្លៃសមរម្យ និងប្រើបានទូលំទូលាយ សម្រាប់អេក្រង់ក្នុងអគារ signage និងការមើលចម្ងាយមធ្យម ដែលត្រូវការគ្រប់គ្រងថវិកា។",
                    ["P1.5 ដល់ P3.9", "សមរម្យតាមថវិកា", "ប្រើទូទៅក្នុងអគារ"],
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
                      {chips.map((c) => (
                        <span
                          key={c}
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
        pixelPitchIntroOverride="Choosing the right pixel pitch is the #1 factor for visual clarity and budget efficiency. Use this indoor-focused guide as a starting point for Cambodia installations."
        pixelPitchRowsOverride={[
          [
            "P1.25-P1.86 (COB / Fine-pitch SMD)",
            "2.5-5.6 m",
            "Control rooms, studios, premium boardrooms",
          ],
          [
            "P2-P2.5 (Fine-pitch SMD)",
            "4-7.5 m",
            "Meeting rooms, retail, corporate lobbies",
          ],
          [
            "P3-P4 (Standard indoor SMD)",
            "6-12 m",
            "Hotel lobbies, indoor stages, auditoriums",
          ],
          [
            "P5 (Large-venue indoor)",
            "10-15 m",
            "Large halls, long-view indoor signage",
          ],
        ]}
        pixelPitchSectionOverrideKm={
          <section className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                មគ្គុទ្ទេសក៍ Pixel Pitch និងចម្ងាយមើល
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                ការជ្រើសរើស pixel pitch ឱ្យត្រឹមត្រូវ គឺជាកត្តាសំខាន់បំផុតសម្រាប់ភាពច្បាស់នៃរូបភាព និងប្រសិទ្ធភាពថវិកា។ សូមប្រើមគ្គុទ្ទេសក៍សម្រាប់អេក្រង់ក្នុងអគារនេះ ជាចំណុចចាប់ផ្តើមសម្រាប់ការដំឡើងនៅកម្ពុជា។
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
                  <div className="p-3">Pixel Pitch</div>
                  <div className="p-3">ចម្ងាយមើលល្អបំផុត</div>
                  <div className="p-3">ការប្រើប្រាស់ទូទៅ</div>
                </div>
                {[
                  [
                    "P1.25-P1.86 (COB / Fine-pitch SMD)",
                    "2.5-5.6 m",
                    "បន្ទប់បញ្ជា ស្ទូឌីយោ និងបន្ទប់ប្រជុំកម្រិតខ្ពស់",
                  ],
                  [
                    "P2-P2.5 (Fine-pitch SMD)",
                    "4-7.5 m",
                    "បន្ទប់ប្រជុំ ហាងលក់រាយ និងឡប់ប៊ីក្រុមហ៊ុន",
                  ],
                  [
                    "P3-P4 (Standard indoor SMD)",
                    "6-12 m",
                    "ឡប់ប៊ីសណ្ឋាគារ ឆាកក្នុងអគារ និងសាលប្រជុំធំ",
                  ],
                  [
                    "P5 (Large-venue indoor)",
                    "10-15 m",
                    "សាលធំ និងផ្ទាំងបង្ហាញក្នុងអគារសម្រាប់មើលចម្ងាយឆ្ងាយ",
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
          allowedCategoryIds: ["indoor_led_display"],
          filterCategoryIds: ["indoor_led_display"],
          categoryOrderIds: ["indoor_led_display"],
          showCategoryFilters: false,
        }}
      />
    </>
  );
}
