export { metadata } from "../../products/led-display/receiving-card/page";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";

export default function ReceivingCardPage() {
  const accessoryProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("led_accessories")
  ).slice(0, 8);

  const productQuickChips = accessoryProducts.map((p) => ({
    label: p.titleEn,
    href: `/products/catalog/${p.slug}`,
  }));

  return (
    <LedDisplayClient
      productQuickChips={productQuickChips}
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
