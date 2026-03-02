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

const PAGE_PATH = "/led-display/indoor-led-display/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Indoor LED Display Cambodia | Best Price & Installation",
  description:
    "Indoor LED display solutions in Cambodia for boardrooms, control rooms, showrooms, retail, and hospitality with fine-pitch planning, installation, calibration, and local support.",
  keywords: [
    "indoor LED display Cambodia",
    "fine pitch LED Cambodia",
    "indoor LED video wall Phnom Penh",
    "conference room LED display Cambodia",
    "control room LED display Cambodia",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: "/led-display/indoor-led-display/",
      km: "/km/led-display/indoor-led-display/",
      "x-default": "/led-display/indoor-led-display/",
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Indoor LED Display Cambodia | Best Price & Installation",
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
    title: "Indoor LED Display Cambodia | Best Price & Installation",
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
    labelKm: p.titleKm || p.titleEn,
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
  const indoorFaqKm = [
    {
      q: "តើ Pixel Pitch មួយណាសមស្របបំផុតសម្រាប់អេក្រង់ LED ក្នុងអគារនៅកម្ពុជា?",
      a: "សម្រាប់ការមើលជិត គេប្រើ P1.25-P1.86 ជាញឹកញាប់។ សម្រាប់បន្ទប់ប្រជុំ និងបន្ទប់បង្ហាញ P2-P2.5 ជាជម្រើសអនុវត្តបានល្អ។ ជម្រើសចុងក្រោយអាស្រ័យលើចម្ងាយមើល មាតិកាបង្ហាញ និងថវិកា។",
    },
    {
      q: "តើអេក្រង់ LED ក្នុងអគារត្រូវការពន្លឺខ្ពស់ដូចប៊ីលបត្រ LED ខាងក្រៅទេ?",
      a: "មិនចាំបាច់ទេ។ អេក្រង់ LED ក្នុងអគារជាទូទៅប្រើកម្រិតពន្លឺទាបជាងខាងក្រៅ ដើម្បីកាត់បន្ថយភ្លឺចាំង និងបង្កើនភាពស្រួលក្នុងការមើល។",
    },
    {
      q: "ការប្រើប្រាស់អេក្រង់ LED ក្នុងអគារណាខ្លះដែលពេញនិយមនៅកម្ពុជា?",
      a: "បន្ទប់ប្រជុំ បន្ទប់បញ្ជា បន្ទប់បង្ហាញ ផ្សារទំនើប ឡប់ប៊ីសណ្ឋាគារ សាលាសិក្សា និងផ្ទៃខាងក្រោយឆាកក្នុងអគារ ជាករណីប្រើប្រាស់ពេញនិយម។",
    },
    {
      q: "តើមានសេវាដំឡើង និងកែតម្រូវពណ៌អេក្រង់ LED ក្នុងអគារ នៅក្នុងស្រុកទេ?",
      a: "មាន។ យើងផ្តល់សេវាស្ទង់ទីតាំង ដំឡើង គ្រប់គ្រងខ្សែ កំណត់ Controller កែតម្រូវពណ៌ និងសេវាគាំទ្របន្ទាប់ពីលក់នៅកម្ពុជា។",
    },
    {
      q: "តើតម្លៃសម្រង់អេក្រង់ LED ក្នុងអគារគណនាយ៉ាងដូចម្តេច?",
      a: "តម្លៃសម្រង់គឺផ្អែកលើគម្រោង ហើយអាស្រ័យលើ Pixel Pitch ទំហំអេក្រង់សរុប ប្រភេទកាប៊ីណេត Controller វិធីដំឡើង និងវិសាលភាពសេវាគាំទ្រ។",
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
    { title: "ទំព័រមេអេក្រង់ LED", href: "/led-display" },
    { title: "អេក្រង់ LED ខាងក្រៅនៅកម្ពុជា", href: "/led-display/outdoor-led-display" },
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
  const indoorTrustSignalsKm = [
    "បានអនុវត្ត Structured FAQ និងសញ្ញា Entity សម្រាប់ Indoor LED ជាក់លាក់",
    "រៀបចំផែនការ Fine-pitch តាមចម្ងាយមើល និងលក្ខខណ្ឌពន្លឺក្នុងបន្ទប់",
    "មានសេវាដំឡើង កែតម្រូវ និងគាំទ្របន្ទាប់ពីលក់ក្នុងស្រុកនៅកម្ពុជា",
    "មានបទពិសោធន៍អនុវត្តគម្រោងក្នុងបន្ទប់ប្រជុំ បន្ទប់បង្ហាញ បន្ទប់បញ្ជា និងពាណិជ្ជកម្មក្នុងអគារ",
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
        faqItemsOverrideKm={indoorFaqKm}
        internalLinkClusterOverride={indoorCluster}
        internalLinkClusterOverrideKm={indoorClusterKm}
        trustSignalsOverride={indoorTrustSignals}
        trustSignalsOverrideKm={indoorTrustSignalsKm}
        trustTitleOverride="Trust & Delivery Signals for Indoor LED Projects in Cambodia"
        trustTitleOverrideKm="សញ្ញានៃភាពទុកចិត្ត និងសមត្ថភាពអនុវត្តសម្រាប់គម្រោង LED ក្នុងអគារនៅកម្ពុជា"
        trustDescOverride="This indoor LED page is optimized for close-viewing commercial use cases with structured FAQ, local service evidence, and clear parent-child internal linking."
        trustDescOverrideKm="ទំព័រ Indoor LED នេះត្រូវបានរៀបចំសម្រាប់ការប្រើប្រាស់ពាណិជ្ជកម្មដែលត្រូវការមើលជិត ដោយមាន FAQ តាមរចនាសម្ព័ន្ធ ភស្តុតាងសេវាកម្មក្នុងស្រុក និង internal linking មេ-កូនច្បាស់លាស់។"
        internalLinkTitleOverride="Indoor LED Internal Linking Cluster"
        internalLinkTitleOverrideKm="ក្រុមតំណភ្ជាប់ខាងក្នុងសម្រាប់ LED ក្នុងអគារ"
        internalLinkDescOverride="Navigate indoor buying paths by product type, technical guidance, related pages, and direct quotation routes."
        internalLinkDescOverrideKm="រុករកផ្លូវសម្រេចចិត្តទិញក្នុងអគារតាមប្រភេទផលិតផល មគ្គុទ្ទេសក៍បច្ចេកទេស ទំព័រពាក់ព័ន្ធ និងផ្លូវស្នើសុំតម្លៃដោយផ្ទាល់។"
        schemaPathOverride="/led-display/indoor-led-display"
        schemaNameOverride="Indoor LED Display"
        schemaServiceNameOverride="Indoor LED Display in Cambodia"
        schemaServiceDescOverride="Fine-pitch indoor LED display solutions in Cambodia with survey, design, installation, calibration, and local after-sales support."
        breadcrumbOverride="Indoor LED Display"
        breadcrumbOverrideKm="អេក្រង់ LED ក្នុងអគារ"
        heroTitleOverride="Indoor LED Display in Cambodia"
        heroTitleOverrideKm="អេក្រង់ LED ក្នុងអគារនៅកម្ពុជា"
        heroIntroOverride="Mugnee provides indoor LED display solutions in Cambodia for boardrooms, retail shops, showrooms, control rooms, corporate offices, and hospitality venues. We deliver fine-pitch indoor LED video wall systems with high brightness, seamless visuals, custom screen size planning, controller and power integration, professional installation, calibration, and local after-sales support. From P1.25 to P4 indoor LED display options, our team supports project-based design, BOQ preparation, and quotation for reliable long-term performance."
        heroIntroOverrideKm="Mugnee ផ្តល់ដំណោះស្រាយអេក្រង់ LED ក្នុងអគារនៅកម្ពុជា សម្រាប់បន្ទប់ប្រជុំ ហាងលក់រាយ បន្ទប់បង្ហាញ បន្ទប់បញ្ជា ការិយាល័យ និងទីតាំងបដិសណ្ឋារកិច្ច។ យើងផ្គត់ផ្គង់ប្រព័ន្ធជញ្ជាំងវីដេអូ LED fine-pitch ដែលមានរូបភាពច្បាស់ល្អ ការរៀបចំទំហំអេក្រង់តាមតម្រូវការ ការរួមបញ្ចូល controller និងប្រព័ន្ធថាមពល ការដំឡើងវិជ្ជាជីវៈ ការកែតម្រូវ និងសេវាគាំទ្របន្ទាប់ពីលក់ក្នុងស្រុក។ ចាប់ពីជម្រើស P1.25 ដល់ P4 ក្រុមការងារយើងគាំទ្រការរចនាតាមគម្រោង ការរៀបចំ BOQ និងសម្រង់តម្លៃ ដើម្បីធានាបានប្រសិទ្ធភាពយូរអង្វែង។"
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
                ការជ្រើសរើសអេក្រង់ LED ក្នុងអគារ គួរពិនិត្យតាម Pixel Pitch ចម្ងាយមើល និងតម្រូវការភាពធន់។ ប្រភេទខាងក្រោមបង្ហាញបច្ចេកវិទ្យាផ្ទាំងក្នុងអគារដែលប្រើញឹកញាប់នៅកម្ពុជា ដើម្បីជួយអ្នកទិញជ្រើសដំណោះស្រាយត្រឹមត្រូវតាមភាពច្បាស់ ថវិកា និងភាពទុកចិត្តរយៈពេលវែង។
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  [
                    "SMD Fine-Pitch សម្រាប់ក្នុងអគារ",
                    "ផ្ទាំង SMD fine-pitch ផ្តល់រូបភាពលម្អិតខ្ពស់សម្រាប់កន្លែងមើលជិត ដូចជា បន្ទប់ប្រជុំ ស្ទូឌីយោផ្សាយ និងបន្ទប់បញ្ជា។ វាសមតុល្យល្អរវាងប្រសិទ្ធភាព និងថ្លៃដើម សម្រាប់ជញ្ជាំងវីដេអូក្នុងអគារកម្រិតខ្ពស់។",
                    ["P1.25 ដល់ P1.9", "មើលជិត", "លម្អិតខ្ពស់"],
                  ],
                  [
                    "COB Ultra-Fine សម្រាប់ក្នុងអគារ",
                    "COB (chip-on-board) មានផ្ទៃម៉ាត់ កាត់បន្ថយការឆ្លុះពន្លឺ និងបង្កើន contrast។ សមស្របសម្រាប់ការមើលជិតនៅបន្ទប់បញ្ជា ស្ទូឌីយោ និងជញ្ជាំងក្នុងអគារកម្រិតខ្ពស់។",
                    ["P0.7 ដល់ P1.8", "ការឆ្លុះទាប", "Contrast ខ្ពស់"],
                  ],
                  [
                    "GOB ការពារសម្រាប់ក្នុងអគារ",
                    "GOB (glue-on-board) មានស្រទាប់ការពារបន្ថែម ដែលបង្កើនភាពធន់នឹងការប៉ះទង្គិច ធូលី និងសំណើម។ សមស្របសម្រាប់កន្លែងមានចរាចរណ៍ខ្ពស់ និងអេក្រង់ដែលប្រើសាធារណៈ។",
                    ["ផ្ទៃការពារ", "ធន់ការប៉ះទង្គិច", "ថែទាំងាយ"],
                  ],
                  [
                    "SMD ស្តង់ដារសម្រាប់ក្នុងអគារ",
                    "ផ្ទាំង SMD ស្តង់ដារ គឺសន្សំសំចៃថវិកា និងអាចប្រើបានចម្រុះ សម្រាប់អេក្រង់ក្នុងអគារទូទៅ Digital Signage និងការមើលចម្ងាយមធ្យមដែលគិតថវិកា។",
                    ["P1.5 ដល់ P3.9", "សមថវិកា", "ប្រើទូទៅក្នុងអគារ"],
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
        pixelPitchIntroOverrideKm="ការជ្រើស Pixel Pitch ត្រឹមត្រូវ គឺជាកត្តាសំខាន់បំផុតសម្រាប់ភាពច្បាស់នៃរូបភាព និងប្រសិទ្ធភាពថវិកា។ ប្រើមគ្គុទ្ទេសក៍សម្រាប់ក្នុងអគារនេះ ជាចំណុចចាប់ផ្តើមសម្រាប់គម្រោងនៅកម្ពុជា។"
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
        pixelPitchRowsOverrideKm={[
          [
            "P1.25-P1.86 (COB / SMD Fine-pitch)",
            "2.5-5.6 m",
            "បន្ទប់បញ្ជា ស្ទូឌីយោ បន្ទប់ប្រជុំកម្រិតខ្ពស់",
          ],
          [
            "P2-P2.5 (SMD Fine-pitch)",
            "4-7.5 m",
            "បន្ទប់ប្រជុំ ហាងលក់រាយ ឡប់ប៊ីក្រុមហ៊ុន",
          ],
          [
            "P3-P4 (SMD ស្តង់ដារក្នុងអគារ)",
            "6-12 m",
            "ឡប់ប៊ីសណ្ឋាគារ ឆាកក្នុងអគារ សាលប្រជុំធំ",
          ],
          [
            "P5 (ក្នុងអគារទំហំធំ)",
            "10-15 m",
            "សាលធំ និងស្លាកសញ្ញាក្នុងអគារមើលឆ្ងាយ",
          ],
        ]}
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




