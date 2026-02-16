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
        trustSignalsOverride={indoorTrustSignals}
        trustTitleOverride="Trust & Delivery Signals for Indoor LED Projects in Cambodia"
        trustDescOverride="This indoor LED page is optimized for close-viewing commercial use cases with structured FAQ, local service evidence, and clear parent-child internal linking."
        internalLinkTitleOverride="Indoor LED Internal Linking Cluster"
        internalLinkDescOverride="Navigate indoor buying paths by product type, technical guidance, related pages, and direct quotation routes."
        schemaPathOverride="/led-display/indoor-led-display"
        schemaNameOverride="Indoor LED Display"
        schemaServiceNameOverride="Indoor LED Display in Cambodia"
        schemaServiceDescOverride="Fine-pitch indoor LED display solutions in Cambodia with survey, design, installation, calibration, and local after-sales support."
        breadcrumbOverride="Indoor LED Display"
        heroTitleOverride="Indoor LED Display in Cambodia"
        heroIntroOverride="Mugnee provides indoor LED display solutions in Cambodia for boardrooms, retail, showrooms, control rooms, and hospitality spaces. We support fine-pitch planning, installation, calibration, and local after-sales service with project-based quotation."
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
