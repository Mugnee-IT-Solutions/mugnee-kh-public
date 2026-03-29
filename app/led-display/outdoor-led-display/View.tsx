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

const PAGE_PATH = "/led-display/outdoor-led-display/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "LED Display in Cambodia - Outdoor LED Billboard",
  description:
    "Outdoor LED display Cambodia for billboards, facade screens, and digital signage with structure planning, installation, and local support.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: "/led-display/outdoor-led-display/",
      km: "/km/led-display/outdoor-led-display/",
      "x-default": "/led-display/outdoor-led-display/",
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "LED Display in Cambodia - Outdoor LED Billboard",
    description:
      "Outdoor LED billboard and digital signage solutions in Cambodia with structure design, installation, commissioning, and after-sales support.",
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
    title: "LED Display in Cambodia - Outdoor LED Billboard",
    description:
      "Outdoor LED billboard solutions in Cambodia with local installation, structure planning, commissioning, and support.",
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
    labelKm: p.titleKm || p.titleEn,
    href: `/products/${p.slug}`,
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
      url: `${SITE_URL}/products/${product.slug}`,
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
      q: "តើកម្រិតពន្លឺប៉ុន្មានសមស្របសម្រាប់ប៊ីលបត្រ LED ខាងក្រៅនៅកម្ពុជា?",
      a: "អេក្រង់ LED ខាងក្រៅជាទូទៅត្រូវការពន្លឺខ្ពស់ ដើម្បីឲ្យមើលឃើញច្បាស់ពេលថ្ងៃ។ កម្រិតពន្លឺចុងក្រោយអាស្រ័យលើទិសពន្លឺថ្ងៃ កម្ពស់ដំឡើង និងចម្ងាយមើល។",
    },
    {
      q: "តើ Pixel Pitch មួយណាសមស្របសម្រាប់អេក្រង់ LED ខាងក្រៅ?",
      a: "សម្រាប់ផ្លូវក្នុងក្រុង P4-P6 គេប្រើញឹកញាប់។ សម្រាប់ចម្ងាយឆ្ងាយជាងនេះ ដូចជាផ្លូវជាតិ P8-P10 អាចសមស្របជាង។",
    },
    {
      q: "ហេតុអ្វីបានជា IP Rating សំខាន់សម្រាប់អេក្រង់ LED ខាងក្រៅនៅកម្ពុជា?",
      a: "អេក្រង់ខាងក្រៅប៉ះពាល់ដោយភ្លៀង ធូលី និងកម្តៅ។ ការការពារ IP ត្រឹមត្រូវ រចនាកាប៊ីណេត និងការបិតសន្លាក់ល្អ ជួយបង្កើនភាពទុកចិត្តរយៈពេលវែង។",
    },
    {
      q: "តើអ្នកផ្តល់សេវារចនាគ្រោង និងដំឡើងសម្រាប់គម្រោង LED ខាងក្រៅទេ?",
      a: "មាន។ យើងគាំទ្រស្ទង់ទីតាំង គំនិតរចនាគ្រោង ដំឡើងសុវត្ថិភាព រៀបខ្សែ ដីសុវត្ថិភាព កំណត់ controller និងត្រួតពិនិត្យដំណើរការ។",
    },
    {
      q: "តើសម្រង់តម្លៃអេក្រង់ LED ខាងក្រៅគណនាយ៉ាងដូចម្តេច?",
      a: "សម្រង់តម្លៃខាងក្រៅគឺផ្អែកលើគម្រោង ហើយរួមមានទំហំអេក្រង់ Pixel Pitch កម្រិតពន្លឺ ភាពស្មុគស្មាញនៃរចនាសម្ព័ន្ធ វិសាលភាពអគ្គិសនី និងការគ្របដណ្តប់សេវាគាំទ្រ។",
    },
  ];

  const outdoorCluster = [
    { title: "Parent LED Display Page", href: "/led-display" },
    { title: "Indoor LED Display in Cambodia", href: "/led-display/indoor-led-display" },
    { title: "Outdoor LED Product Catalog", href: "/led-display/outdoor-led-display" },
    { title: "LED Video Processor Guide", href: "/led-display/video-processor" },
    { title: "Installation and Service Support", href: "/service" },
    { title: "Cambodia Industry Solutions", href: "/solutions" },
    { title: "Project References", href: "/projects" },
    { title: "Request Outdoor LED Quotation", href: "/contact" },
  ];
  const outdoorClusterKm = [
    { title: "ទំព័រមេអេក្រង់ LED", href: "/led-display" },
    { title: "អេក្រង់ LED ក្នុងអគារនៅកម្ពុជា", href: "/led-display/indoor-led-display" },
    { title: "កាតាឡុកផលិតផល LED ខាងក្រៅ", href: "/led-display/outdoor-led-display" },
    { title: "មគ្គុទ្ទេសក៍ Video Processor សម្រាប់ LED", href: "/led-display/video-processor" },
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
    "បានអនុវត្ត Structured FAQ និងសញ្ញា Entity សម្រាប់ Outdoor LED ជាក់លាក់",
    "ដំណើរការរៀបចំផែនការ IP protection កម្រិតពន្លឺ និងសុវត្ថិភាពរចនាសម្ព័ន្ធ",
    "គ្របដណ្តប់ការត្រួតពិនិត្យដំណើរការ និងសេវាគាំទ្រក្នុងទីក្រុងសំខាន់ៗនៅកម្ពុជា",
    "ផ្តោតលើការអនុវត្តប៊ីលបត្រតាមផ្លូវ Facade និងអេក្រង់សាធារណៈ",
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
        trustTitleOverride="Trust and Delivery Signals for Outdoor LED Projects in Cambodia"
        trustTitleOverrideKm="សញ្ញានៃភាពទុកចិត្ត និងសមត្ថភាពអនុវត្តសម្រាប់គម្រោង LED ខាងក្រៅនៅកម្ពុជា"
        trustDescOverride="This outdoor LED page is optimized for billboard and facade deployment intent with structured FAQ, local support proof, and clear parent-child internal linking."
        trustDescOverrideKm="ទំព័រ Outdoor LED នេះត្រូវបានរៀបចំសម្រាប់បំណងប្រើប្រាស់ប៊ីលបត្រ និង Facade ដោយមាន FAQ តាមរចនាសម្ព័ន្ធ ភស្តុតាងគាំទ្រក្នុងស្រុក និង internal linking មេ-កូនច្បាស់លាស់។"
        internalLinkTitleOverride="Outdoor LED Internal Linking Cluster"
        internalLinkTitleOverrideKm="ក្រុមតំណភ្ជាប់ខាងក្នុងសម្រាប់ LED ខាងក្រៅ"
        internalLinkDescOverride="Navigate outdoor buying paths by billboard type, technical components, related pages, and quotation routes."
        internalLinkDescOverrideKm="រុករកផ្លូវសម្រេចចិត្តទិញខាងក្រៅតាមប្រភេទប៊ីលបត្រ ផ្នែកបច្ចេកទេស ទំព័រពាក់ព័ន្ធ និងផ្លូវស្នើសុំតម្លៃ។"
        schemaPathOverride="/led-display/outdoor-led-display"
        schemaNameOverride="Outdoor LED Display"
        schemaServiceNameOverride="Outdoor LED Display in Cambodia"
        schemaServiceDescOverride="Outdoor LED billboard and digital signage solutions in Cambodia with structure design, installation, commissioning, and after-sales support."
        breadcrumbOverride="Outdoor LED Display"
        breadcrumbOverrideKm="អេក្រង់ LED ខាងក្រៅ"
        heroTitleOverride="LED Display in Cambodia - Outdoor LED Billboard"
        heroTitleOverrideKm="LED Display in Cambodia - Outdoor LED Billboard"
        heroIntroOverride="Looking for outdoor LED display price in Cambodia from a reliable outdoor LED supplier? Mugnee delivers outdoor LED display, outdoor LED billboard, and digital signage solutions for roadside billboards, facade screens, DOOH advertising, and public information projects. We provide high-brightness outdoor LED screen systems with weatherproof IP65-ready cabinet options, pixel-pitch planning, viewing-distance optimization, steel structure safety design, and BOQ preparation, with local installation, commissioning, and after-sales support for P2.5 to P10 outdoor LED display projects."
        heroIntroOverrideKm="Mugnee ផ្តល់ដំណោះស្រាយអេក្រង់ LED ខាងក្រៅនៅកម្ពុជា សម្រាប់ប៊ីលបត្រតាមដងផ្លូវ អេក្រង់ Facade ការផ្សព្វផ្សាយ DOOH និងគម្រោង Digital Signage សាធារណៈ។ យើងផ្គត់ផ្គង់ប្រព័ន្ធប៊ីលបត្រ LED ខាងក្រៅដែលមានពន្លឺខ្ពស់ ជាមួយជម្រើសកាប៊ីណេតការពារអាកាសធាតុ IP65-ready ការរៀបចំ Pixel Pitch ការបង្កើនប្រសិទ្ធភាពចម្ងាយមើល និងការរចនាសុវត្ថិភាពរចនាសម្ព័ន្ធដែកសម្រាប់ភាពទុកចិត្តរយៈពេលវែង។ ចាប់ពីម៉ូដែល P2.5 ដល់ P10 ក្រុមការងារយើងគាំទ្រស្ទង់ទីតាំង ការរួមបញ្ចូល controller និងប្រព័ន្ធថាមពល ការដំឡើង ការត្រួតពិនិត្យដំណើរការ និងសេវាបន្ទាប់ពីលក់ក្នុងស្រុក ជាមួយ BOQ និងសម្រង់តម្លៃផ្អែកលើគម្រោង។"
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
                    "Front-service cabinets simplify maintenance for wall-mounted or hard-to-access installations. Ideal for facade screens and constrained spaces.",
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
                ការជ្រើសរើសអេក្រង់ LED ខាងក្រៅគួរពិនិត្យតាមកម្រិតពន្លឺ កម្រិតការពារ IP
                ចម្ងាយមើល និងសុវត្ថិភាពរចនាសម្ព័ន្ធ។ ប្រភេទខាងក្រោមគឺជាប្រភេទផ្ទាំងខាងក្រៅ
                ដែលប្រើញឹកញាប់នៅតាមផ្លូវជាតិ លើដំបូល និងតំបន់សាធារណៈនៅកម្ពុជា។
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  [
                    "ប៊ីលបត្រ LED ខាងក្រៅប្រភេទ Fixed",
                    "ផ្ទាំងការពារអាកាសធាតុដែលមានពន្លឺខ្ពស់ សម្រាប់ដំណើរការ 24/7 លើប៊ីលបត្រតាមដងផ្លូវ និងលើដំបូល។ កាប៊ីណេតរឹងមាំ និងប្រព័ន្ធត្រជាក់ស្ថេរភាព ជួយបង្កើនអាយុកាលប្រើប្រាស់។",
                    ["P6 ដល់ P10", "IP65+", "ពន្លឺខ្ពស់"],
                  ],
                  [
                    "Outdoor LED Fine-Pitch",
                    "ផ្ទាំង outdoor fine-pitch ផ្តល់រូបភាពច្បាស់ជាង សម្រាប់ការមើលជិតនៅមជ្ឈមណ្ឌលពាណិជ្ជកម្ម មុខហាង និងស្ថានីយដឹកជញ្ជូន។ វាត្រូវការពន្លឺខ្ពស់ និងការកែតម្រូវម៉ត់ចត់។",
                    ["P2.5 ដល់ P5", "មើលជិត", "ភាពច្បាស់ខ្ពស់"],
                  ],
                  [
                    "Outdoor LED ប្រភេទ Front-Service",
                    "កាប៊ីណេត front-service ងាយថែទាំសម្រាប់ការដំឡើងជាប់ជញ្ជាំង ឬកន្លែងពិបាកចូលដល់។ សមស្របសម្រាប់អេក្រង់ facade និងទីតាំងមានដែនកំណត់។",
                    ["ចូលថែទាំផ្នែកមុខ", "ដំឡើង Facade", "ពេលឈប់ដំណើរការទាប"],
                  ],
                  [
                    "Outdoor LED ប្រភេទ Rental",
                    "ផ្ទាំង Rental ដែលត្រៀមសម្រាប់អាកាសធាតុខាងក្រៅ សម្រាប់ព្រឹត្តិការណ៍ និងឆាក ដែលរចនាឡើងឱ្យដំឡើងលឿន ភ្ជាប់ម៉ូឌុលងាយ និងរៀបខ្សែសុវត្ថិភាព។",
                    ["ដំឡើងលឿន", "រឹងមាំ", "សមព្រឹត្តិការណ៍"],
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
        pixelPitchIntroOverrideKm="អេក្រង់ LED ខាងក្រៅត្រូវតែសមនឹងចម្ងាយមើល កម្រិតពន្លឺថ្ងៃ និងកម្រិតការពារ IP។ ប្រើមគ្គុទ្ទេសក៍នេះសម្រាប់គម្រោងដំឡើងនៅកម្ពុជា។"
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
        pixelPitchRowsOverrideKm={[
          [
            "P2.5-P3.9 (Outdoor fine-pitch)",
            "3-8 m",
            "មុខហាង ទីលានសាធារណៈ និងស្ថានីយដឹកជញ្ជូន",
          ],
          [
            "P4-P6 (ខាងក្រៅពេញនិយម)",
            "6-15 m",
            "ផ្សព្វផ្សាយតាមផ្លូវ និងស្លាកសញ្ញាក្នុងក្រុង",
          ],
          [
            "P8-P10 (ចម្ងាយឆ្ងាយ)",
            "12-30 m",
            "ប៊ីលបត្រផ្លូវជាតិ និងអេក្រង់លើដំបូលទំហំធំ",
          ],
          [
            "P10+ (ចម្ងាយឆ្ងាយខ្លាំង)",
            "20 m+",
            "អេក្រង់ទ្រង់ទ្រាយធំតាមដងផ្លូវ និងតំបន់បើកចំហ",
          ],
        ]}
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

