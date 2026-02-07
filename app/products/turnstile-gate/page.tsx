import Link from "next/link";
import ProductGrid from "../../components/sections/ProductGrid";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/products/turnstile-gate";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Turnstile Gate in Cambodia | Access Control & Entry Solutions � Mugnee",
  description:
    "Professional turnstile gate solutions in Cambodia for offices, factories, schools, and public venues. Flap, tripod, speed, and full-height turnstiles with RFID, QR, fingerprint, and face integration.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Turnstile Gate in Cambodia",
    description:
      "Secure entry control with flap, tripod, speed, and full-height turnstiles. Integration with access control and attendance systems.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const types = [
  {
    title: "Tripod Turnstile",
    desc: "Cost-effective entry control for offices and staff entrances. Durable and easy to maintain.",
  },
  {
    title: "Flap Barrier Turnstile",
    desc: "Fast, elegant access control with retractable flaps�ideal for lobbies and premium offices.",
  },
  {
    title: "Speed Gate Turnstile",
    desc: "High-speed lanes for busy environments such as corporate HQs and transport hubs.",
  },
  {
    title: "Full-Height Turnstile",
    desc: "Maximum security for factories, stadiums, and restricted zones.",
  },
  {
    title: "Swing Gate / Optical Turnstile",
    desc: "Accessible lanes for people with disabilities, carts, or wide entry needs.",
  },
];

const features = [
  "SUS304 stainless steel body for durability",
  "Anti-tailgating logic and access control",
  "Emergency fail-open / fire alarm linkage",
  "Smooth motorized operation with low noise",
  "Multi-modal access: RFID, QR, biometric",
  "High-traffic throughput for busy sites",
  "Indoor and outdoor-ready models",
  "Remote monitoring and event logs",
];

const useCases = [
  "Office buildings and corporate entrances",
  "Factories and industrial zones",
  "Schools, campuses, and dormitories",
  "Hospitals and public institutions",
  "Stadiums, events, and ticketed venues",
  "Residential complexes and condominiums",
];

const integrations = [
  "RFID cards and keyfobs",
  "QR code and mobile tickets",
  "Fingerprint and face recognition",
  "Visitor management systems",
  "Time & attendance platforms",
  "Emergency push-open and fire alarm linkage",
];

const checklist = [
  "Traffic volume and required throughput",
  "Security level (low, medium, high)",
  "Indoor vs outdoor installation",
  "Access method (RFID/QR/biometric)",
  "Integration with attendance or visitor systems",
  "Power and network availability",
];

const caseStudies = [
  {
    title: "Factory Shift Entry Control",
    detail:
      "Installed tripod turnstiles integrated with RFID attendance to control shift entry and reduce time-fraud. Daily reports synced with HR.",
  },
  {
    title: "Private School Campus Access",
    detail:
      "Flap barriers at the main gate with QR visitor passes and time-based access rules for students and parents.",
  },
  {
    title: "Corporate Office Lobby",
    detail:
      "Speed gates for high-traffic entry, linked to access cards and visitor management to improve security without slowing flow.",
  },
];

const faqs = [
  {
    q: "Which turnstile type is best for my site?",
    a: "Tripod turnstiles work well for staff entrances, flap barriers for premium lobbies, speed gates for high traffic, and full-height units for maximum security zones.",
  },
  {
    q: "Can you integrate with RFID or biometric systems?",
    a: "Yes. We integrate turnstiles with RFID, QR, fingerprint, and face recognition systems based on your security requirements.",
  },
  {
    q: "Do you provide installation and maintenance?",
    a: "Yes. We supply, install, configure, and provide after-sales support and maintenance services across Cambodia.",
  },
  {
    q: "What about emergency evacuation?",
    a: "Turnstiles can be configured for emergency release and linked to fire alarms for safe evacuation.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Access Control Solutions</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Turnstile Gate in Cambodia</h1>
          <p className="mt-3 text-slate-700">
            Turnstile gates provide secure, controlled entry for offices, factories, schools,
            and public venues. We supply and install a full range of turnstiles with RFID, QR,
            biometric, and attendance system integration�tailored for Cambodia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a Free Quotation
            </Link>
            <Link
              href="/solutions/access-control-cambodia"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Explore Access Control Solutions
            </Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Serving Phnom Penh � Siem Reap � Sihanoukville
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Quick Summary</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
            <li>Secure entry control for any facility</li>
            <li>Multiple types: flap, tripod, speed, full-height</li>
            <li>RFID, QR, and biometric integration</li>
            <li>Installation and after-sales support</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">What Is a Turnstile Gate?</h2>
        <p className="mt-2 text-slate-700">
          A turnstile gate controls the flow of people into secure areas. It improves safety,
          prevents unauthorized entry, and can integrate with access control and attendance
          systems for reliable monitoring.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Types of Turnstile Gates</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {types.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Features Grid</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Where Turnstile Gates Are Used</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Case Studies</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {caseStudies.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Integration Options</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {integrations.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">How to Choose the Right Turnstile</h2>
        <p className="mt-2 text-slate-700">
          Selecting the right turnstile depends on traffic volume, security needs, and
          integration requirements. Use this checklist to decide:
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Maintenance & AMC Options</h2>
        <p className="mt-2 text-slate-700">
          Keep your entry system reliable with preventive maintenance. We offer AMC plans for
          periodic inspection, sensor calibration, lubrication, and emergency response�ideal
          for high-traffic locations.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Installation & After-Sales Support</h2>
        <p className="mt-2 text-slate-700">
          Our team provides site assessment, installation, integration, and long-term support
          to keep your entry system stable and secure.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">
          Turnstile Gate Products
        </h2>
        <p className="mt-2 text-slate-700">
          Browse turnstile models for offices, factories and secure facilities. No public
          pricingâ€”request a quotation for your project.
        </p>
        <div className="mt-4">
          <ProductGrid
            categoryId="turnstile_gate"
            showCategoryFilters={false}
            showSort={false}
            columns={3}
          />
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
        <h2 className="text-xl font-semibold text-slate-900">Need a Turnstile Gate?</h2>
        <p className="mt-2 text-slate-700">
          Share your site size, traffic flow, and access method. We�ll recommend the right
          turnstile model and provide a clear quotation.
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
