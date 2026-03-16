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

const PAGE_PATH = "/led-display/power-supply/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "LED Power Supply Cambodia | Best Price & Installation",
  description:
    "LED power supplies in Cambodia for indoor and outdoor displays with stable voltage, safety protection, and setup guidance.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/power-supply/",
      "km-kh": "/km/led-display/power-supply/",
      "x-default": "/led-display/power-supply/",
    },
  },
  openGraph: {
    title: "LED Power Supply Cambodia | Best Price & Installation",
    description:
      "Reliable LED power supplies for video walls and signage with stable output, safety protections, and professional support.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LED Power Supply in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Power Supply Cambodia | Best Price & Installation",
    description:
      "Reliable LED power supplies for video walls and signage with stable output, safety protections, and professional support.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function PowerSupplyPage() {
  const accessoryProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("power_supply")
  ).slice(0, 8);

  const productQuickChips = accessoryProducts.map((p) => ({
    label: p.titleEn,
    href: `/products/${p.slug}`,
  }));
  const powerSupplyFaq = [
    {
      q: "Why does LED power supply quality matter?",
      a: "A stable SMPS improves brightness consistency, protects components, and reduces downtime risk for LED displays.",
    },
    {
      q: "How do I calculate the right SMPS capacity?",
      a: "Use cabinet load, voltage requirements, and thermal headroom. Avoid running units at maximum load continuously.",
    },
    {
      q: "Do you support power system planning and installation in Cambodia?",
      a: "Yes. We support selection, wiring checks, balancing, and commissioning for reliable operation.",
    },
  ];

  return (
    <LedDisplayClient
      productGridOverride={{
        allowedCategoryIds: ["power_supply"],
        filterCategoryIds: ["power_supply"],
        categoryOrderIds: ["power_supply"],
      }}
      productQuickChips={productQuickChips}
      faqItemsOverride={powerSupplyFaq}
      schemaPathOverride="/led-display/power-supply"
      schemaNameOverride="LED Power Supply"
      schemaServiceNameOverride="LED Power Supply Solutions in Cambodia"
      schemaServiceDescOverride="LED display power supply selection, protection planning, and installation support in Cambodia for stable long-term performance."
      breadcrumbOverride="LED Power Supply"
      heroTitleOverride="LED Power Supply in Cambodia"
      pixelPitchSectionOverride={
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              LED Power Supply Essentials for Cambodia Installations
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              LED display power supplies are typically constant-voltage SMPS units
              (commonly 5V) that feed controller and module loads. Selecting the right
              capacity, protections, and thermal headroom helps keep LED screens stable,
              reduces flicker risk, and extends component life in Cambodia heat.
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                [
                  "Capacity and Derating",
                  "For reliability, choose power supplies with headroom above the calculated load and consider temperature derating in warm environments.",
                ],
                [
                  "Protection Functions",
                  "Look for protection features like over-voltage, over-current or overload, short-circuit, and over-temperature protection to safeguard LED modules.",
                ],
                [
                  "Constant Voltage vs Load",
                  "LED display systems generally use constant-voltage SMPS; overload protection typically activates above rated current and should not be used continuously.",
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
                    "Output voltage and current (for example 5V 20A / 30A / 40A)",
                    "Load headroom and thermal derating for hot environments",
                    "Protection features: OVP / OCP / SCP / OTP",
                    "Input range compatibility (AC 110-220V or AC 180-264V)",
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
                    "Short-circuit protection",
                    "Over-temperature protection",
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
    />
  );
}
