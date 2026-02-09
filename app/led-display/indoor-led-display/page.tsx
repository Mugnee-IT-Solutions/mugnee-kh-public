export { metadata } from "../../products/indoor-led-display/page";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";

export default function IndoorLedDisplayPage() {
  const indoorProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("indoor_led_display")
  ).slice(0, 8);

  const productQuickChips = indoorProducts.map((p) => ({
    label: p.titleEn,
    href: `/products/catalog/${p.slug}`,
  }));

  return (
    <LedDisplayClient
      productQuickChips={productQuickChips}
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
              ].map(([t, d, chips]) => (
                <div
                  key={t}
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
              ))}
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
  );
}
