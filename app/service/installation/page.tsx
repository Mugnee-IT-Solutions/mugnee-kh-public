import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/service/installation";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Installation & Commissioning in Cambodia | Mugnee",
  description:
    "Professional installation and commissioning services in Cambodia for LED displays, access control, PA systems, and smart solutions. Safe setup, testing, and handover with training.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Installation & Commissioning in Cambodia",
    description:
      "End-to-end installation and commissioning with safety checks, calibration, and training by Mugnee Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const scopeItems = [
  "Site safety checks and mounting preparation",
  "Electrical wiring and power load verification",
  "Network setup and signal routing",
  "Device configuration and integration",
  "Performance testing and calibration",
  "Documentation and handover",
];

const checklist = [
  "Mechanical stability and alignment",
  "Power distribution and backup readiness",
  "Signal integrity and input sources",
  "Brightness, color, and uniformity calibration",
  "Control software configuration",
  "Emergency and safety compliance checks",
];

const readiness = [
  "Confirm mounting structure and access",
  "Provide stable power and grounding",
  "Ensure network availability",
  "Prepare site access for installation team",
  "Share project timelines and constraints",
];

const stages = [
  {
    title: "Planning",
    detail: "Review requirements, drawings, and site conditions.",
  },
  {
    title: "Installation",
    detail: "Mounting, cabling, and device setup on site.",
  },
  {
    title: "Commissioning",
    detail: "Testing, calibration, and system validation.",
  },
  {
    title: "Handover",
    detail: "Training, documentation, and sign-off.",
  },
];

const faqs = [
  {
    q: "How long does installation take?",
    a: "Time depends on project size. Typical installations take 3�14 days including commissioning.",
  },
  {
    q: "Do you provide on-site training?",
    a: "Yes. We train your team on daily operation and basic troubleshooting.",
  },
  {
    q: "Can you integrate with existing systems?",
    a: "Yes. We integrate with access control, PA, CCTV, and other systems where required.",
  },
  {
    q: "Do you handle safety compliance?",
    a: "Yes. We follow safety procedures and validate installations before handover.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Service & Support</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Installation & Commissioning in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            Mugnee Cambodia provides professional installation and commissioning services for
            LED displays, access control, PA systems, and smart solutions. We ensure safe
            setup, precise calibration, and smooth handover.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Request Installation
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
            <li>Professional mounting and wiring</li>
            <li>System calibration and testing</li>
            <li>Integration and configuration</li>
            <li>Training and documentation</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Installation Scope</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {scopeItems.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Commissioning Checklist</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {checklist.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Site Readiness Guide</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {readiness.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Project Stages</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {stages.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Handover & Training</h2>
        <p className="mt-2 text-slate-700">
          We provide documentation, user training, and final verification to ensure your
          team can operate the system confidently.
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
        <h2 className="text-xl font-semibold text-slate-900">Plan Your Installation</h2>
        <p className="mt-2 text-slate-700">
          Share your project timeline and site details. We�ll prepare a clear installation
          plan and quotation.
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
