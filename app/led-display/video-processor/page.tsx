export { metadata } from "../../products/led-display/video-processor/page";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";

export default function VideoProcessorPage() {
  const accessoryProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("video_processor")
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
              LED Video Processor Essentials for Cambodia Projects
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              A video processor is the control hub that switches inputs, scales content,
              and maps output to LED sending/receiving systems. It manages multi‑input
              sources (HDMI/DVI/VGA/USB, with DP/SDI on some models), then outputs through
              Gigabit ports to LED cabinets for stable, synchronized playback.
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                [
                  "Multi-Input Switching",
                  "Common inputs include HDMI, DVI, VGA, and USB playback, with some models adding DP or SDI. This keeps switching smooth between laptops, media players, and live feeds.",
                ],
                [
                  "Scaling & Image Control",
                  "Scaling, cropping, and seamless switching keep content sharp and properly framed for LED cabinets. Scene presets help operators recall layouts quickly during events.",
                ],
                [
                  "Output & Load Capacity",
                  "Gigabit network outputs connect directly to sending/receiving cards. Higher‑tier processors offer larger pixel loads and multi‑window layouts for big LED walls.",
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
                  What to Check Before Choosing a Video Processor
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {[
                    "Input types you need (HDMI/DVI/VGA/USB; DP/SDI when required)",
                    "Maximum pixel load and output width/height for your LED wall",
                    "Number of Gigabit outputs for your cabinet layout",
                    "Scene presets and multi-window support for live switching",
                    "Control methods: front panel, Wi‑Fi app, RS232, or remote",
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
                  Common Features You Will See
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Many Huidu processors include USB playback, seamless switching,
                  scaling/cropping, and scene memory. Higher models can reach up to
                  5.2M pixels with 8 Gigabit outputs, plus Wi‑Fi/APP and RS232 control.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {[
                    "Multi-input",
                    "Scaling",
                    "Scene presets",
                    "Wi‑Fi control",
                    "RS232",
                    "Gigabit outputs",
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
        allowedCategoryIds: ["video_processor"],
        filterCategoryIds: ["video_processor"],
        categoryOrderIds: ["video_processor"],
        showCategoryFilters: false,
      }}
    />
  );
}
