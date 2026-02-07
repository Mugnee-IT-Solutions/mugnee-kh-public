import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/service/maintenance";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Maintenance & AMC in Cambodia | Preventive Service � Mugnee",
  description:
    "Maintenance & AMC services in Cambodia for LED displays, access control, PA systems, and smart solutions. Preventive checks, calibration, and priority support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Maintenance & AMC in Cambodia",
    description:
      "Preventive maintenance and AMC plans to keep your systems reliable with fast support and scheduled inspections.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const plans = [
  {
    title: "Standard AMC",
    desc: "Scheduled inspections, basic cleaning, and phone support for non-critical sites.",
  },
  {
    title: "Priority AMC",
    desc: "Faster response time, preventive calibration, and on-site visits as required.",
  },
  {
    title: "Critical AMC",
    desc: "Same-day response for high-impact systems and critical locations.",
  },
];

const inclusions = [
  "Preventive inspections and health checks",
  "Calibration for displays and controllers",
  "Firmware/software updates (when applicable)",
  "Cleaning and safety verification",
  "Performance reporting and recommendations",
  "Priority support for urgent issues",
];

const benefits = [
  "Reduced downtime and fewer emergencies",
  "Longer system life and stable performance",
  "Predictable maintenance costs",
  "Faster troubleshooting and service",
  "Compliance-ready maintenance logs",
];

const faqs = [
  {
    q: "How often do you perform maintenance?",
    a: "Frequency depends on the AMC plan and system type. Typical schedules are quarterly or bi-annual.",
  },
  {
    q: "Do you support systems installed by others?",
    a: "Yes. We assess the system and recommend a suitable AMC plan.",
  },
  {
    q: "Does AMC include parts replacement?",
    a: "Parts are supplied as needed. Coverage depends on the plan and warranty terms.",
  },
  {
    q: "Can AMC be customized?",
    a: "Yes. We tailor AMC scope based on site criticality and usage.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Service & Support</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Maintenance & AMC in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            Keep your systems reliable with preventive maintenance and AMC plans. Mugnee
            Cambodia provides scheduled inspections, calibration, and priority support for
            LED displays, access control, PA systems, and smart solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Request AMC
            </Link>
            <Link
              href="/service"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Service & Support
            </Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Serving Phnom Penh � Siem Reap � Sihanoukville
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Quick Summary</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
            <li>Preventive maintenance & scheduled checks</li>
            <li>Priority response for critical systems</li>
            <li>Calibration and performance tuning</li>
            <li>Local Cambodia support team</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">AMC Plans</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {plans.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">What�s Included</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {inclusions.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Benefits of AMC</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {benefits.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Plan Your Maintenance</h2>
        <p className="mt-2 text-slate-700">
          Share your system type and usage. We�ll recommend the right AMC plan and provide a
          clear quotation.
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
