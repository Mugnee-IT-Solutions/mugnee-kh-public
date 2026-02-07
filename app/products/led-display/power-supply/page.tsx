import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/products/led-display/power-supply";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "LED Power Supply in Cambodia | Reliable Power for LED Displays � Mugnee",
  description:
    "High-quality LED power supplies in Cambodia for indoor and outdoor LED displays. Stable voltage, safety protections, and expert selection support for long-term reliability.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "LED Power Supply in Cambodia",
    description:
      "Reliable LED power supplies for video walls and signage with stable output, safety protections, and professional support.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const features = [
  "Stable voltage output for consistent LED brightness",
  "Over-voltage, over-current, and short-circuit protection",
  "High efficiency for lower heat and power loss",
  "Wide input range for unstable power conditions",
  "Reliable performance in 24/7 operation",
  "Multiple wattage options for different cabinet sizes",
];

const specs = [
  { label: "Output", value: "5V / 12V (model dependent)" },
  { label: "Power Rating", value: "200W, 300W, 400W+ (model dependent)" },
  { label: "Efficiency", value: ">85% (model dependent)" },
  { label: "Protections", value: "OVP / OCP / SCP" },
];

const useCases = [
  "Indoor LED video walls",
  "Outdoor LED billboards",
  "Retail and mall signage",
  "Event rental LED screens",
  "Control rooms and command centers",
  "Hotels, stages, and auditoriums",
];

const checklist = [
  "Total cabinet power draw and LED module load",
  "Required voltage (5V or 12V)",
  "Efficiency and thermal performance",
  "Protection features for long-term safety",
  "Environment (indoor/outdoor, heat, dust)",
  "Spare capacity for future expansion",
];

const faqs = [
  {
    q: "Why is power supply quality important for LED displays?",
    a: "The power supply directly affects brightness stability, color consistency, and overall reliability. High-quality supplies reduce flicker and extend LED lifespan.",
  },
  {
    q: "How do I choose the right wattage?",
    a: "We calculate cabinet power draw based on module specs, then recommend a power supply with safe headroom for stable operation.",
  },
  {
    q: "Can you provide backup power supplies?",
    a: "Yes. We can recommend and supply spares for critical installations to minimize downtime.",
  },
  {
    q: "Do you help with installation and wiring?",
    a: "Yes. Our team assists with correct wiring, load balancing, and safety checks during installation.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">LED Display Components</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            LED Power Supply in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            A reliable power supply keeps your LED wall stable, bright, and safe. We supply
            high-quality LED power supplies with proper protections and long-term performance
            for indoor and outdoor LED displays.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a Free Quotation
            </Link>
            <Link
              href="/products/led-display"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Explore LED Display Solutions
            </Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Serving Phnom Penh � Siem Reap � Sihanoukville
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Quick Summary</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
            <li>Stable output for consistent LED brightness</li>
            <li>Protection against voltage and current spikes</li>
            <li>Multiple wattage options for any LED cabinet</li>
            <li>Expert selection and installation support</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">What Is an LED Power Supply?</h2>
        <p className="mt-2 text-slate-700">
          LED power supplies convert AC power into stable DC output for LED modules. The
          correct power supply ensures consistent brightness, prevents flicker, and protects
          your LED display from electrical damage.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Key Features</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {features.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Typical Technical Highlights</h2>
        <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-2 gap-0 text-sm">
            {specs.map((item) => (
              <div key={item.label} className="contents">
                <div className="border-b border-slate-200 px-4 py-3 font-medium text-slate-700">
                  {item.label}
                </div>
                <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Exact specifications depend on the power supply model and your cabinet design.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Where LED Power Supplies Are Used</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {useCases.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">How to Choose the Right Power Supply</h2>
        <p className="mt-2 text-slate-700">
          Choosing the correct power supply ensures long-term stability and safety. Use this
          checklist to decide quickly:
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Safety & Reliability</h2>
        <p className="mt-2 text-slate-700">
          Power stability is critical for LED displays in Cambodia�s climate. We recommend
          models with strong protection features, stable output, and quality components to
          reduce downtime and protect your investment.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Installation & After-Sales Support</h2>
        <p className="mt-2 text-slate-700">
          Our technicians assist with wiring, load balancing, and configuration to ensure
          safe operation. We also provide spare recommendations and fast after-sales support.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Need a Reliable Power Supply?</h2>
        <p className="mt-2 text-slate-700">
          Share your screen size, cabinet power draw, and environment. We�ll recommend a
          safe, efficient power supply and provide a clear quotation.
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Contact Mugnee Cambodia
          </Link>
        </div>
      </section>
    </main>
  );
}
