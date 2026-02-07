import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/solutions/digital-signage-cambodia";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Retail & Mall Digital Signage in Cambodia | Mugnee",
  description:
    "Retail and mall digital signage solutions in Cambodia. Boost promotions, improve wayfinding, and engage shoppers with professional displays, content scheduling, and local support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Retail & Mall Digital Signage in Cambodia",
    description:
      "Digital signage solutions for malls and retail chains with content scheduling, placement planning, and full installation support in Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const benefits = [
  "Increase promotion visibility with dynamic content",
  "Boost dwell time and product discovery",
  "Support wayfinding and tenant directory updates",
  "Centralized content scheduling across locations",
  "Reduce print costs with instant updates",
  "Monetize screens with tenant advertising",
];

const placementGuide = [
  {
    title: "Indoor Stores",
    detail: "Standard-brightness displays for aisles, checkout zones, and end-caps.",
  },
  {
    title: "Bright Lobbies",
    detail: "Higher brightness screens for entrances and sun-lit areas.",
  },
  {
    title: "Window-Facing",
    detail: "High-brightness, anti-glare screens for storefront windows.",
  },
  {
    title: "Mall Atriums",
    detail: "Large-format displays for announcements and events.",
  },
];

const useCases = [
  "Retail chains and supermarkets",
  "Mall tenant directories and wayfinding",
  "Food courts and menu boards",
  "Showrooms and brand experience zones",
  "Promotional campaigns and seasonal events",
  "Queue management and service counters",
];

const processSteps = [
  {
    title: "Site Survey",
    detail: "We assess traffic flow, placement, and content needs.",
  },
  {
    title: "Display Selection",
    detail: "Brightness, size, and orientation matched to each location.",
  },
  {
    title: "Installation",
    detail: "Mounting, cabling, and safety-compliant setup.",
  },
  {
    title: "Content & Scheduling",
    detail: "Templates, playlists, day-parting, and remote updates.",
  },
  {
    title: "Support & AMC",
    detail: "Preventive maintenance and fast troubleshooting.",
  },
];

const faqs = [
  {
    q: "How many screens do I need for a mall?",
    a: "It depends on mall size, entrances, and wayfinding needs. We recommend a site survey to design an effective signage plan.",
  },
  {
    q: "Can I update content remotely?",
    a: "Yes. We provide content management setup so you can update promotions and announcements from a central dashboard.",
  },
  {
    q: "Do you support multilingual content?",
    a: "Yes. Content can be scheduled in Khmer and English, including tenant ads and promotions.",
  },
  {
    q: "What about screen maintenance?",
    a: "We offer AMC plans with preventive checks, calibration, and on-call support.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Solutions</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Retail & Mall Digital Signage in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            Digital signage transforms retail and mall environments with dynamic promotions,
            real-time updates, and modern shopper experiences. Mugnee Cambodia provides
            end-to-end signage solutions from display selection to content scheduling.
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
            <li>Dynamic promotions and real-time updates</li>
            <li>Wayfinding and tenant directory support</li>
            <li>Centralized scheduling and control</li>
            <li>Local Cambodia installation & support</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Why Digital Signage Works</h2>
        <p className="mt-2 text-slate-700">
          Retail and mall digital signage captures attention better than static posters and
          makes it easy to update campaigns instantly. It improves customer flow, promotes
          high-margin products, and creates a premium shopping environment.
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
        <h2 className="text-xl font-semibold text-slate-900">Screen Placement & Brightness Guide</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {placementGuide.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Where Retail Signage Is Used</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Delivery Process</h2>
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
          Our AMC plans include preventive checks, cleaning, calibration, and fast support to
          keep screens running at peak brightness.
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
        <h2 className="text-xl font-semibold text-slate-900">Need Retail Digital Signage?</h2>
        <p className="mt-2 text-slate-700">
          Share your store size, locations, and content needs. We�ll recommend the right
          signage plan and provide a clear quotation.
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
