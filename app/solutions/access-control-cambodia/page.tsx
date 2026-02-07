import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/solutions/access-control-cambodia";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Office & Building Access Control in Cambodia | Mugnee",
  description:
    "Office and building access control solutions in Cambodia with RFID, QR, fingerprint, and face recognition. Secure entry, attendance tracking, and professional installation support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Office & Building Access Control in Cambodia",
    description:
      "Secure access control solutions for offices and buildings. RFID, QR, biometric options with installation and after-sales support in Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const benefits = [
  "Prevent unauthorized entry and improve security",
  "Track staff attendance and working hours",
  "Manage visitor access with QR or temporary passes",
  "Reduce manual keys and access misuse",
  "Centralized control across multiple floors",
  "Audit trails and access logs for compliance",
];

const methods = [
  "RFID cards and keyfobs",
  "QR codes and mobile access",
  "Fingerprint authentication",
  "Face recognition",
  "PIN keypad (optional)",
];

const components = [
  {
    title: "Door Controller",
    desc: "Manages locks, readers, and access rules.",
  },
  {
    title: "Readers & Scanners",
    desc: "RFID, QR, fingerprint, or face terminals.",
  },
  {
    title: "Locks & Accessories",
    desc: "Electric locks, maglocks, exit buttons, and sensors.",
  },
  {
    title: "Software Platform",
    desc: "User management, access schedules, and logs.",
  },
];

const useCases = [
  "Office buildings and corporate entrances",
  "Apartment and condominium access",
  "Factories and industrial facilities",
  "Schools, campuses, and training centers",
  "Hospitals and public institutions",
  "Government offices and secure zones",
];

const integrations = [
  "Turnstile gates and speed gates",
  "Elevator access control",
  "Time & attendance systems",
  "Visitor management platforms",
  "CCTV and security systems",
];

const processSteps = [
  {
    title: "Site Survey",
    detail: "We assess entry points, traffic flow, and security risks.",
  },
  {
    title: "Solution Design",
    detail: "Select devices, access methods, and integration needs.",
  },
  {
    title: "Installation",
    detail: "Professional wiring, mounting, and configuration.",
  },
  {
    title: "Training",
    detail: "Admin training for user setup and reports.",
  },
  {
    title: "Support & AMC",
    detail: "Preventive maintenance and local troubleshooting.",
  },
];

const faqs = [
  {
    q: "Can I control access for different departments?",
    a: "Yes. Access schedules and zones can be set for each department or floor.",
  },
  {
    q: "Can I use both RFID and biometrics?",
    a: "Yes. Multi-factor access can be configured depending on your security level.",
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes. We provide local support, AMC plans, and spare part guidance.",
  },
  {
    q: "Can I integrate with turnstiles or elevators?",
    a: "Yes. We integrate with gates, elevators, and other access points.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Solutions</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Office & Building Access Control in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            Secure your offices and buildings with smart access control systems. Mugnee
            Cambodia delivers RFID, QR, fingerprint, and face-based solutions with complete
            installation and long-term support.
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
            <li>RFID, QR, fingerprint, and face options</li>
            <li>Centralized access control & reporting</li>
            <li>Integration with turnstiles & elevators</li>
            <li>Local Cambodia installation & support</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Why Access Control Matters</h2>
        <p className="mt-2 text-slate-700">
          Access control reduces security risks, eliminates key sharing, and improves staff
          accountability. It provides access logs and real-time control for building managers.
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
        <h2 className="text-xl font-semibold text-slate-900">Access Methods</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {methods.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Core Components</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Where Access Control Is Used</h2>
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
          AMC plans include preventive checks, device health monitoring, and quick support to
          keep your access system running reliably.
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
        <h2 className="text-xl font-semibold text-slate-900">Secure Your Building</h2>
        <p className="mt-2 text-slate-700">
          Share your building size, entry points, and preferred access method. We�ll recommend
          the right access control system and provide a clear quotation.
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
