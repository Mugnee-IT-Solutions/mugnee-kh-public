export { metadata } from "../../products/led-display/power-supply/page";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";

export default function PowerSupplyPage() {
  const accessoryProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("power_supply")
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
              LED Power Supply Essentials for Cambodia Installations
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              LED display power supplies are typically constant‑voltage SMPS units
              (commonly 5V) that feed controller and module loads. Selecting the right
              capacity, protections, and thermal headroom helps keep LED screens stable,
              reduces flicker risk, and extends component life in Cambodia’s heat. citeturn0search0turn0search2
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                [
                  "Capacity & Derating",
                  "For reliability, choose power supplies with headroom above the calculated load and consider temperature derating in warm environments.",
                ],
                [
                  "Protection Functions",
                  "Look for protection features like over‑voltage, over‑current/overload, short‑circuit, and over‑temperature protection to safeguard LED modules.",
                ],
                [
                  "Constant Voltage vs Load",
                  "LED display systems generally use constant‑voltage SMPS; overload protection typically activates above rated current and should not be used continuously.",
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
                  What to Check Before Buying a Power Supply
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {[
                    "Output voltage and current (e.g., 5V 20A / 30A / 40A)",
                    "Load headroom and thermal derating for hot environments",
                    "Protection features: OVP / OCP / SCP / OTP",
                    "Input range compatibility (AC 110–220V or AC 180–264V)",
                    "Cooling and mounting method inside the cabinet",
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
                  Reliability Tips for LED Cabinets
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Avoid running SMPS units at full load continuously. A practical
                  headroom margin improves stability and reduces heat stress. Proper
                  airflow inside cabinets also helps maintain long service life.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {[
                    "Headroom margin",
                    "Thermal derating",
                    "Airflow",
                    "Short‑circuit protection",
                    "Over‑temperature protection",
                  ].map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      productGridOverride={{
        columns: 3,
        pageSize: 9,
        allowedCategoryIds: ["power_supply"],
        filterCategoryIds: ["power_supply"],
        categoryOrderIds: ["power_supply"],
        showCategoryFilters: false,
      }}
    />
  );
}
