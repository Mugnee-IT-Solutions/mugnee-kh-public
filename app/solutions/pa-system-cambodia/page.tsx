import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/solutions/pa-system-cambodia";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Factory PA & Announcement System in Cambodia | Mugnee",
  description:
    "Factory PA and announcement systems in Cambodia for clear safety alerts, shift calls, and zone paging. Reliable horns, speakers, amplifiers, and installation support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Factory PA & Announcement System in Cambodia",
    description:
      "Clear factory announcements and safety alerts with zoned PA systems, horns, and paging microphones. End-to-end setup by Mugnee Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const benefits = [
  "Clear announcements for safety and shift changes",
  "Zone-based paging for different departments",
  "Emergency alerts and evacuation messaging",
  "Reduced downtime with instant communication",
  "Reliable coverage in noisy factory environments",
  "Expandable systems for future growth",
];

const components = [
  {
    title: "Amplifiers & Mixers",
    desc: "Powerful audio processing and stable output for large areas.",
  },
  {
    title: "Horn Speakers",
    desc: "High-volume outdoor and factory floor coverage.",
  },
  {
    title: "Paging Microphones",
    desc: "Central control for announcements and emergency calls.",
  },
  {
    title: "Zone Controllers",
    desc: "Independent audio control across departments.",
  },
];

const useCases = [
  "Manufacturing plants and production lines",
  "Warehouses and logistics hubs",
  "Industrial yards and outdoor zones",
  "Food processing and packaging units",
  "Large workshops and assembly areas",
  "Factory offices and staff facilities",
];

const processSteps = [
  {
    title: "Site Survey",
    detail: "We measure noise levels, coverage areas, and speaker placement.",
  },
  {
    title: "System Design",
    detail: "Zoning layout, amplifier sizing, and equipment selection.",
  },
  {
    title: "Installation",
    detail: "Wiring, mounting, and integration with safety systems.",
  },
  {
    title: "Testing & Commissioning",
    detail: "Sound tuning and emergency announcement checks.",
  },
  {
    title: "Maintenance & AMC",
    detail: "Preventive checks, replacements, and fast support.",
  },
];

const faqs = [
  {
    q: "Can the PA system be divided into zones?",
    a: "Yes. Zone control allows announcements to be sent to specific departments or areas.",
  },
  {
    q: "Will the system work in noisy factory environments?",
    a: "Yes. Horn speakers and properly sized amplifiers are designed to cut through high noise levels.",
  },
  {
    q: "Can it integrate with fire alarm systems?",
    a: "Yes. The PA system can be linked for emergency evacuation messages.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. We provide AMC plans for long-term reliability and rapid support.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Solutions</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Factory PA & Announcement System in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            Factory PA systems deliver clear safety announcements, shift calls, and emergency
            alerts across large industrial spaces. Mugnee Cambodia provides complete PA
            solutions with professional design, installation, and support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a Free Quotation
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
            <li>Clear voice announcements for safety</li>
            <li>Zone paging for departments</li>
            <li>Outdoor and noisy environment coverage</li>
            <li>Local Cambodia installation & support</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Why Factory PA Systems Matter</h2>
        <p className="mt-2 text-slate-700">
          Factories need fast, reliable communication to manage safety, productivity, and
          daily operations. A zoned PA system ensures the right message reaches the right
          team at the right time.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Key Benefits</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Core System Components</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {components.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Where Factory PA Systems Are Used</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Implementation Process</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Maintenance & AMC Options</h2>
        <p className="mt-2 text-slate-700">
          AMC plans include preventive inspection, speaker testing, amplifier health checks,
          and fast response for any issues.
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
        <h2 className="text-xl font-semibold text-slate-900">Need a Factory PA System?</h2>
        <p className="mt-2 text-slate-700">
          Tell us your facility size, zones, and noise level. We�ll recommend the right
          PA system and provide a clear quotation.
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
