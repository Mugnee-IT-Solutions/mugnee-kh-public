export { metadata } from "../../products/outdoor-led-display/page";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";

export default function OutdoorLedDisplayPage() {
  const outdoorProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("outdoor_led_display")
  ).slice(0, 8);

  const productQuickChips = outdoorProducts.map((p) => ({
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
      productGridOverride={{
        columns: 3,
        pageSize: 9,
        allowedCategoryIds: ["outdoor_led_display"],
        filterCategoryIds: ["outdoor_led_display"],
        categoryOrderIds: ["outdoor_led_display"],
        showCategoryFilters: false,
      }}
    />
  );
}
