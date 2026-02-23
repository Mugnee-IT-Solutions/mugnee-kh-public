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
  const outdoorFaqKm = [
    {
      q: "សម្រាប់ប៊ីលបត្រ LED ខាងក្រៅនៅកម្ពុជា គួរតែប្រើកម្រិតពន្លឺប៉ុន្មាន?",
      a: "ជាទូទៅ អេក្រង់ LED ខាងក្រៅត្រូវការកម្រិតពន្លឺខ្ពស់ ដើម្បីឱ្យមើលឃើញច្បាស់ក្រោមពន្លឺថ្ងៃ។ កម្រិតពន្លឺចុងក្រោយអាស្រ័យលើទិសពន្លឺថ្ងៃ កម្ពស់ដំឡើង និងចម្ងាយមើល។",
    },
    {
      q: "Pixel Pitch មួយណាសមស្របសម្រាប់អេក្រង់ LED ខាងក្រៅ?",
      a: "សម្រាប់ផ្លូវក្នុងទីក្រុង P4-P6 គឺពេញនិយម។ សម្រាប់ចម្ងាយមើលឆ្ងាយ ដូចជាផ្លូវល្បឿនលឿន អាចជ្រើស P8-P10 ដែលមានប្រសិទ្ធភាពជាង។",
    },
    {
      q: "ហេតុអ្វីបានជា IP Rating សំខាន់សម្រាប់ Outdoor LED នៅកម្ពុជា?",
      a: "អេក្រង់ខាងក្រៅត្រូវប្រឈមនឹងភ្លៀង ធូលី និងកម្តៅ។ ការការពារ IP ដែលសមស្រប រចនាកាប៊ីណេត និងការបិទសន្លាក់ត្រឹមត្រូវ ជួយបង្កើនស្ថិរភាពប្រើប្រាស់រយៈពេលវែង។",
    },
    {
      q: "តើអ្នកផ្តល់សេវារចនាសម្ព័ន្ធ និងដំឡើងសម្រាប់គម្រោង Outdoor LED ដែរឬទេ?",
      a: "បាទ/ចាស។ យើងគាំទ្រការស្ទង់ទីតាំង ការរៀបចំគំនិតរចនាសម្ព័ន្ធ ការដំឡើងសុវត្ថិភាព ការតភ្ជាប់ខ្សែ ការដាក់ដី ការកំណត់ឧបករណ៍បញ្ជា និងការធ្វើ Commissioning។",
    },
    {
      q: "តើការដកស្រង់តម្លៃ Outdoor LED ត្រូវរៀបចំយ៉ាងដូចម្តេច?",
      a: "ការដកស្រង់តម្លៃ Outdoor LED គឺតាមគម្រោង ដោយគិតលើទំហំអេក្រង់ Pixel Pitch កម្រិតពន្លឺ ភាពស្មុគស្មាញរចនាសម្ព័ន្ធ ការងារអគ្គិសនី និងផែនការគាំទ្របន្ទាប់ពីដំឡើង។",
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
    { title: "អេក្រង់ LED ក្នុងអគារនៅកម្ពុជា", href: "/led-display/indoor-led-display" },
    { title: "កាតាឡុកផលិតផល Outdoor LED", href: "/products/catalog/outdoor-led-display" },
    { title: "មគ្គុទ្ទេសក៍ LED Video Processor", href: "/led-display/video-processor" },
    { title: "សេវាដំឡើង និងគាំទ្របច្ចេកទេស", href: "/service" },
    { title: "ដំណោះស្រាយតាមវិស័យនៅកម្ពុជា", href: "/solutions" },
    { title: "គម្រោងយោង", href: "/projects" },
    { title: "ស្នើសុំតម្លៃ Outdoor LED", href: "/contact" },
  ];

  const outdoorTrustSignals = [
    "Outdoor-specific FAQ structured data and entity signals applied",
    "IP protection, brightness, and structure safety planning workflow",
    "Local commissioning and support coverage across key Cambodia cities",
    "Roadside billboard, facade, and public-display deployment focus",
  ];
  const outdoorTrustSignalsKm = [
    "មាន FAQ រៀបចំល្អ សម្រាប់ Outdoor LED និង SEO Entity Signals",
    "គ្របដណ្តប់ការងារ IP Protection, Brightness Planning និងសុវត្ថិភាពរចនាសម្ព័ន្ធ",
    "មាន Commissioning និងសេវាគាំទ្រក្នុងស្រុកតាមទីក្រុងសំខាន់ៗនៅកម្ពុជា",
    "ផ្តោតលើគម្រោងប៊ីលបត្រតាមដងផ្លូវ អេក្រង់ Facade និងផ្ទាំងផ្សព្វផ្សាយសាធារណៈ",
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
      faqItemsOverrideKm={outdoorFaqKm}
      internalLinkClusterOverride={outdoorCluster}
      internalLinkClusterOverrideKm={outdoorClusterKm}
      trustSignalsOverride={outdoorTrustSignals}
      trustSignalsOverrideKm={outdoorTrustSignalsKm}
      trustTitleOverride="Trust & Delivery Signals for Outdoor LED Projects in Cambodia"
      trustTitleOverrideKm="សញ្ញានៃភាពទុកចិត្ត និងសមត្ថភាពអនុវត្តគម្រោង Outdoor LED នៅកម្ពុជា"
      trustDescOverride="This outdoor LED page is optimized for billboard and facade deployment intent with structured FAQ, local support proof, and clear parent-child internal linking."
      trustDescOverrideKm="ទំព័រ Outdoor LED នេះត្រូវបានរៀបចំសម្រាប់គោលបំណងទិញប៊ីលបត្រ និងការដំឡើង Facade ដោយមាន FAQ មានរចនាសម្ព័ន្ធ ភស្តុតាងគាំទ្រក្នុងស្រុក និងតំណភ្ជាប់ Parent-Child ច្បាស់លាស់។"
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
      heroIntroOverride="Mugnee delivers outdoor LED display solutions in Cambodia for roadside billboards, facade screens, DOOH advertising, and public digital signage projects. We provide high-brightness outdoor LED billboard systems with weatherproof IP65-ready cabinet options, pixel-pitch planning, viewing-distance optimization, and steel structure safety design for long-term reliability. From P2.5 to P10 outdoor LED display models, our team supports site survey, controller and power system integration, installation, commissioning, and local after-sales support with project-based BOQ and quotation."
      heroIntroOverrideKm="Mugnee ផ្តល់ដំណោះស្រាយអេក្រង់ LED ខាងក្រៅនៅកម្ពុជា សម្រាប់ប៊ីលបត្រតាមដងផ្លូវ អេក្រង់ Facade ការផ្សព្វផ្សាយ DOOH និងគម្រោងផ្ទាំងផ្សព្វផ្សាយឌីជីថលសាធារណៈ។ យើងផ្គត់ផ្គង់ប្រព័ន្ធ Outdoor LED Billboard ពន្លឺខ្ពស់ ជាមួយជម្រើស Cabinet ការពារទឹកភ្លៀងស្តង់ដារ IP65 ការរៀបចំ Pixel Pitch ការគណនាចម្ងាយមើល និងការរចនាសុវត្ថិភាពរចនាសម្ព័ន្ធដែកសម្រាប់ដំណើរការប្រើប្រាស់រយៈពេលវែង។ ចាប់ពីម៉ូឌែល P2.5 ដល់ P10 ក្រុមការងារយើងគាំទ្រការស្ទង់ទីតាំង ការរួមបញ្ចូល Controller និងប្រព័ន្ធ Power ការដំឡើង ការធ្វើ Commissioning និងសេវាកម្មបន្ទាប់ពីលក់ក្នុងស្រុក ជាមួយការរៀបចំ BOQ និងការដកស្រង់តម្លៃតាមគម្រោង។"
      afterSpecsContent={
        <section key="outdoor-after-specs-en" className="border-t border-slate-200 bg-white">
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
                  "Front-service cabinets simplify maintenance for wall-mounted or hard-to-access installations. Ideal for faÃ§ade screens and constrained spaces.",
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
                  key={`outdoor-spec-en-${idx}-${t}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                    {chips.map((c, chipIdx) => (
                      <span
                        key={`outdoor-spec-en-chip-${idx}-${chipIdx}-${c}`}
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
        <section key="outdoor-after-specs-km" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              ប្រភេទអេក្រង់ LED ខាងក្រៅ
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              អេក្រង់ LED ខាងក្រៅត្រូវជ្រើសតាមកម្រិតពន្លឺ ការពារអាកាសធាតុ (IP),
              ចម្ងាយមើល និងសុវត្ថិភាពរចនាសម្ព័ន្ធ។ ប្រភេទខាងក្រោមគឺជាជម្រើសដែល
              ប្រើញឹកញាប់នៅកម្ពុជា សម្រាប់ប៊ីលបត្រតាមដងផ្លូវ ដំបូលអគារ និងទីតាំង
              ផ្សព្វផ្សាយសាធារណៈ។
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "អេក្រង់ Billboard LED ប្រភេទថេរ",
                  "បន្ទះពន្លឺខ្ពស់ និងការពារអាកាសធាតុ សម្រាប់ដំណើរការ 24/7 លើប៊ីលបត្រតាមដងផ្លូវ និងដំបូលអគារ។ Cabinet រឹងមាំ និងប្រព័ន្ធត្រជាក់ល្អ ជួយបង្កើនអាយុកាលប្រើប្រាស់។",
                  ["P6 ដល់ P10", "IP65+", "ពន្លឺខ្ពស់"],
                ],
                [
                  "អេក្រង់ Outdoor LED ប្រភេទ Fine-Pitch",
                  "Fine-pitch ខាងក្រៅផ្តល់រូបភាពច្បាស់សម្រាប់ចម្ងាយមើលជិត ដូចជា ផ្លាហ្សា មុខហាង និងមជ្ឈមណ្ឌលដឹកជញ្ជូន។ ត្រូវការពន្លឺខ្ពស់ និងការកែតម្រូវរូបភាពបានត្រឹមត្រូវ។",
                  ["P2.5 ដល់ P5", "មើលជិត", "រូបភាពច្បាស់"],
                ],
                [
                  "អេក្រង់ Outdoor LED ប្រភេទ Front-Service",
                  "Cabinet ប្រភេទ front-service ងាយស្រួលថែទាំ សម្រាប់ការដំឡើងជាប់ជញ្ជាំង ឬទីតាំងពិបាកចូលដល់។ សមស្របសម្រាប់អេក្រង់ facade និងកន្លែងតូចចង្អៀត។",
                  ["ថែទាំពីមុខ", "ដំឡើងលើ Facade", "ពេលឈប់ដំណើរការតិច"],
                ],
                [
                  "អេក្រង់ Outdoor LED ប្រភេទ Rental",
                  "បន្ទះ rental សម្រាប់កម្មវិធី និងឆាកខាងក្រៅ ដែលដំឡើងរហ័ស ភ្ជាប់ម៉ូឌុលបានងាយ និងមានសុវត្ថិភាពខ្សែភ្លើងល្អ។",
                  ["ដំឡើងលឿន", "រឹងមាំ", "សម្រាប់ Event"],
                ],
              ].map((item, idx) => {
                const [t, d, chips] = item as [string, string, string[]];
                return (
                <div
                  key={`outdoor-spec-km-${idx}-${t}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                    {chips.map((c, chipIdx) => (
                      <span
                        key={`outdoor-spec-km-chip-${idx}-${chipIdx}-${c}`}
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
        <section key="outdoor-pixel-km" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              មគ្គុទ្ទេសក៍ Pixel Pitch និងចម្ងាយមើល
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              អេក្រង់ LED ខាងក្រៅត្រូវសមស្របជាមួយចម្ងាយមើល កម្រិតពន្លឺពេលថ្ងៃ និងការការពារ IP។
              សូមប្រើមគ្គុទ្ទេសក៍នេះជាចំណុចចាប់ផ្តើមសម្រាប់ការជ្រើសរើស និងដំឡើងគម្រោងនៅកម្ពុជា។
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
              ].map((row, rowIdx) => (
                <div
                  key={`outdoor-pixel-row-${rowIdx}-${row[0]}-${row[1]}`}
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
