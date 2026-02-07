import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/service";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Service & Support in Cambodia | Installation, AMC & Warranty � Mugnee",
  description:
    "Mugnee Cambodia service & support: site survey, installation, commissioning, training, AMC, and warranty support for LED display, access control, PA systems, and more.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Service & Support in Cambodia",
    description:
      "End-to-end service support with survey, installation, AMC, and warranty across Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const pillars = [
  {
    title: "Site Survey & Planning",
    desc: "We evaluate location, power, mounting, and usage to design the right solution.",
  },
  {
    title: "Installation & Commissioning",
    desc: "Professional installation, wiring, and performance testing for stable operation.",
  },
  {
    title: "Training & Handover",
    desc: "Hands-on training so your team can operate and manage the system confidently.",
  },
  {
    title: "AMC & Preventive Maintenance",
    desc: "Scheduled inspections, calibration, and rapid on-site support.",
  },
  {
    title: "Warranty & Spare Parts",
    desc: "Genuine parts and reliable warranty coverage for peace of mind.",
  },
];

const processSteps = [
  {
    title: "Request & Assessment",
    detail: "Share your needs or issue, and we confirm requirements quickly.",
  },
  {
    title: "Scheduling",
    detail: "We plan site visit, scope of work, and expected resolution timeline.",
  },
  {
    title: "On-Site Service",
    detail: "Technicians handle installation, repair, or optimization.",
  },
  {
    title: "Testing & Handover",
    detail: "System verification, documentation, and client sign-off.",
  },
];

const coverage = [
  "Phnom Penh",
  "Siem Reap",
  "Sihanoukville",
  "Battambang",
  "Kampong Cham",
  "Other provinces on request",
];

const faqs = [
  {
    q: "Do you provide maintenance for existing systems?",
    a: "Yes. We support both Mugnee installations and many existing systems with AMC plans.",
  },
  {
    q: "How fast can you respond to service requests?",
    a: "Response time depends on location and issue type, but we prioritize urgent cases.",
  },
  {
    q: "Is training included after installation?",
    a: "Yes. We provide training so your team can manage daily operations effectively.",
  },
  {
    q: "Do you provide spare parts?",
    a: "Yes. We keep common parts available and can source additional items quickly.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Service & Support</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Service & Support in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            Mugnee Cambodia provides full after-sales support�from site surveys and
            installation to preventive maintenance and warranty service. We keep your LED
            displays, access control, PA systems, and smart solutions running smoothly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Request Service
            </Link>
            <Link
              href="/projects"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              View Projects
            </Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Serving Phnom Penh � Siem Reap � Sihanoukville
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Quick Summary</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
            <li>End-to-end service from survey to support</li>
            <li>Local Cambodia team and rapid response</li>
            <li>AMC plans for preventive maintenance</li>
            <li>Warranty coverage and spare parts supply</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Our Service Pillars</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Service Process</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {processSteps.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Coverage Areas</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {coverage.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Maintenance & AMC Options</h2>
        <p className="mt-2 text-slate-700">
          Our AMC packages include preventive inspections, calibration, and priority support
          to reduce downtime and keep your systems performing at their best.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Response‑Time Tiers</h2>
        <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-3 gap-0 text-sm">
            <div className="border-b border-slate-200 px-4 py-3 font-medium text-slate-700">
              Tier
            </div>
            <div className="border-b border-slate-200 px-4 py-3 font-medium text-slate-700">
              Response Time
            </div>
            <div className="border-b border-slate-200 px-4 py-3 font-medium text-slate-700">
              Best For
            </div>

            <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
              Standard
            </div>
            <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
              24–48 hours
            </div>
            <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
              Non‑critical issues and routine support
            </div>

            <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
              Priority
            </div>
            <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
              12–24 hours
            </div>
            <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
              Business‑critical systems with uptime needs
            </div>

            <div className="px-4 py-3 text-slate-700">Emergency</div>
            <div className="px-4 py-3 text-slate-700">Same day</div>
            <div className="px-4 py-3 text-slate-700">
              Safety, security, and high‑impact outages
            </div>
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Response times vary by location and scope. We confirm SLA during service booking.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Warranty & Spare Parts</h2>
        <p className="mt-2 text-slate-700">
          We supply genuine spare parts and provide warranty handling to protect your
          investment. Our team ensures fast replacement and minimal disruption.
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
        <h2 className="text-xl font-semibold text-slate-900">Need Service Support?</h2>
        <p className="mt-2 text-slate-700">
          Tell us your system type and issue. We�ll arrange support and provide a clear plan.
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
