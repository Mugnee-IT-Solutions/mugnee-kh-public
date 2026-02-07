import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/products/pa-system";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "PA System in Cambodia | Public Address Solutions & Installation � Mugnee",
  description:
    "Professional PA system solutions in Cambodia: amplifiers, mixers, speakers, microphones and accessories. Designed for clear announcements in factories, schools, malls, and offices with expert installation support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "PA System in Cambodia",
    description:
      "Clear, reliable public address systems for factories, schools, malls, and offices. Complete supply, design, and installation support by Mugnee Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const categories = [
  {
    title: "Mixers & Amplifiers",
    desc: "Core audio processing and power units that drive your PA system with stable output and zone control.",
  },
  {
    title: "Gooseneck & Paging Microphones",
    desc: "Professional paging mics for reception desks, control rooms, and announcements.",
  },
  {
    title: "Wall-Mounted Speakers",
    desc: "Clean voice projection for offices, schools, retail, and corridors.",
  },
  {
    title: "Horn Speakers",
    desc: "High-output outdoor speakers for factories, yards, and large spaces.",
  },
  {
    title: "Control Units & Zone Selectors",
    desc: "Multi-zone control, scheduling, and priority paging features.",
  },
  {
    title: "Accessories & Cables",
    desc: "Connectors, mounts, racks, and wiring for reliable installations.",
  },
];

const useCases = [
  "Factory safety announcements and shift calls",
  "School campus paging and emergency alerts",
  "Retail and mall announcements",
  "Office buildings and multi-floor complexes",
  "Hotels, hospitals, and public venues",
  "Warehouse and logistics facilities",
];

const checklist = [
  "Required coverage area and number of zones",
  "Indoor vs outdoor speaker types",
  "Power and wattage needs",
  "Emergency priority and backup requirements",
  "Integration with existing security systems",
];

const faqs = [
  {
    q: "What is a PA system used for?",
    a: "A PA (Public Address) system delivers clear voice announcements and background audio across buildings or outdoor areas. It is essential for safety, paging, and operational coordination.",
  },
  {
    q: "Can you design a PA system for my building?",
    a: "Yes. We provide site assessment, system design, speaker placement planning, and installation for optimal clarity.",
  },
  {
    q: "Do you install both indoor and outdoor PA systems?",
    a: "Yes. We supply and install indoor ceiling/wall speakers and outdoor horn speakers depending on your environment.",
  },
  {
    q: "How many zones can a PA system support?",
    a: "That depends on your amplifier and control system. We can design multi-zone systems for large campuses or factories.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Public Address Solutions</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">PA System in Cambodia</h1>
          <p className="mt-3 text-slate-700">
            Reliable PA systems deliver clear announcements, emergency alerts, and daily
            communications. We supply complete PA solutions�amplifiers, speakers, microphones,
            cabling, and professional installation�for factories, schools, malls, offices,
            and public venues in Cambodia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a Free Quotation
            </Link>
            <Link
              href="/solutions/pa-system-cambodia"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Explore PA System Solutions
            </Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Serving Phnom Penh � Siem Reap � Sihanoukville
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Quick Summary</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
            <li>Clear voice announcements for large areas</li>
            <li>Multi-zone control for different departments</li>
            <li>Indoor & outdoor speaker options</li>
            <li>Professional design & installation support</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">What Is a PA System?</h2>
        <p className="mt-2 text-slate-700">
          A PA (Public Address) system amplifies and distributes audio to multiple speakers
          across a facility. It is essential for announcements, safety alerts, and daily
          communication in factories, campuses, malls, offices, and public venues.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">PA System Categories</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {categories.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Where PA Systems Are Used</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">How to Choose the Right PA System</h2>
        <p className="mt-2 text-slate-700">
          A properly designed system ensures clear coverage and reliable emergency paging. Use
          this checklist before buying:
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Why Choose Mugnee Cambodia</h2>
        <p className="mt-2 text-slate-700">
          We provide complete design, supply, installation, and after-sales support. From
          system layout to tuning and maintenance, our team ensures your PA system performs
          clearly and reliably.
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
        <h2 className="text-xl font-semibold text-slate-900">Need a PA System?</h2>
        <p className="mt-2 text-slate-700">
          Tell us your building size, zones, and usage needs. We�ll design a reliable PA system
          and provide a clear quotation.
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
