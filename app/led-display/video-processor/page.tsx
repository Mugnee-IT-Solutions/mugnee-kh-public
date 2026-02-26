/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
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
  const videoProcessorFaq = [
    {
      q: "Why is a video processor important for LED display quality?",
      a: "It scales and maps source content to LED wall resolution, improving stability, clarity, and switching reliability.",
    },
    {
      q: "How do I select the correct processor model?",
      a: "Choose by required inputs, pixel load, window layout needs, and compatibility with your sending/receiving system.",
    },
    {
      q: "Can Mugnee configure processors on-site in Cambodia?",
      a: "Yes. We provide setup, mapping, optimization, and post-deployment support.",
    },
  ];

  return (
    <LedDisplayClient
      productQuickChips={productQuickChips}
      faqItemsOverride={videoProcessorFaq}
      schemaPathOverride="/led-display/video-processor"
      schemaNameOverride="LED Video Processor"
      schemaServiceNameOverride="LED Video Processor Solutions in Cambodia"
      schemaServiceDescOverride="LED video processor selection, setup, and commissioning support in Cambodia for indoor and outdoor LED display projects."
      breadcrumbOverride="LED Video Processor"
      heroTitleOverride="LED Video Processor in Cambodia"
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
      pixelPitchSectionOverrideKm={
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              មូលដ្ឋានសំខាន់ៗអំពី LED Video Processor សម្រាប់គម្រោងនៅកម្ពុជា
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Video processor គឺជា control hub សម្រាប់ប្ដូរ input, scaling មាតិកា
              និង map output ទៅប្រព័ន្ធ LED sending/receiving។ វាគ្រប់គ្រងប្រភព
              multi-input (HDMI/DVI/VGA/USB និង DP/SDI លើម៉ូដែលខ្លះ) ហើយបញ្ចេញតាម
              Gigabit ports ទៅ LED cabinet ដើម្បីឱ្យការចាក់បង្ហាញមានស្ថិរភាព
              និងសមកាលកម្ម។
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                [
                  "ការប្ដូរ Multi-Input",
                  "Input ទូទៅរួមមាន HDMI, DVI, VGA និង USB playback ហើយម៉ូដែលខ្លះមាន DP ឬ SDI បន្ថែម។ វាជួយឱ្យការប្ដូររវាង laptop, media player និង live feed រលូន។",
                ],
                [
                  "Scaling និងការគ្រប់គ្រងរូបភាព",
                  "Scaling, cropping និង seamless switching ជួយរក្សាមាតិកាឱ្យច្បាស់ និងសមទ្រង់ទ្រាយសម្រាប់ LED cabinet។ Scene preset ជួយឱ្យ operator ហៅ layout បានលឿនពេលកម្មវិធីបន្តផ្ទាល់។",
                ],
                [
                  "Output និងសមត្ថភាពផ្ទុក",
                  "Gigabit network output អាចភ្ជាប់ផ្ទាល់ទៅ sending/receiving card។ Processor កម្រិតខ្ពស់អាចគាំទ្រ pixel load ធំ និង layout ច្រើនបង្អួច សម្រាប់ LED wall ទំហំធំ។",
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
                  ចំណុចត្រូវពិនិត្យមុនពេលជ្រើស Video Processor
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {[
                    "ប្រភេទ input ដែលអ្នកត្រូវការ (HDMI/DVI/VGA/USB; DP/SDI ពេលចាំបាច់)",
                    "កម្រិត pixel load អតិបរមា និង output width/height សម្រាប់ LED wall",
                    "ចំនួន Gigabit output សម្រាប់ layout របស់ cabinet",
                    "Scene preset និងការគាំទ្រ multi-window សម្រាប់ live switching",
                    "វិធីគ្រប់គ្រង: front panel, Wi-Fi app, RS232 ឬ remote",
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
                  មុខងារទូទៅដែលអ្នកនឹងឃើញ
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Huidu processor ជាច្រើនមាន USB playback, seamless switching,
                  scaling/cropping និង scene memory។ ម៉ូដែលខ្ពស់អាចគាំទ្ររហូតដល់
                  5.2M pixels ជាមួយ 8 Gigabit outputs និងការគ្រប់គ្រងតាម Wi-Fi/APP
                  និង RS232។
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {[
                    "Multi-input",
                    "Scaling",
                    "Scene presets",
                    "Wi-Fi control",
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
