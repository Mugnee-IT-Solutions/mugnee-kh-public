import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/service/warranty";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Warranty Policy in Cambodia | Coverage & Terms � Mugnee",
  description:
    "Warranty policy for Mugnee Cambodia systems. Coverage details, terms, and support for LED displays, access control, PA systems, and smart solutions.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Warranty Policy in Cambodia",
    description:
      "Clear warranty coverage and support terms for Mugnee Cambodia installations.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const coverage = [
  "Manufacturing defects on supported devices",
  "Controller and display panel faults (as per model)",
  "Standard labor support during warranty period",
  "Replacement of approved parts under warranty",
];

const exclusions = [
  "Physical damage or misuse",
  "Unauthorized modifications or repairs",
  "Damage from power surges without protection",
  "Natural disasters and external accidents",
];

const faqs = [
  {
    q: "How long is the warranty period?",
    a: "Warranty duration depends on product category and contract terms. We provide details during purchase and handover.",
  },
  {
    q: "Does warranty include labor and on-site support?",
    a: "Standard labor support is included for covered issues during the warranty period.",
  },
  {
    q: "What should I do if a fault occurs?",
    a: "Contact Mugnee support with your system details. We will evaluate and arrange service.",
  },
  {
    q: "Can warranty be extended?",
    a: "Yes. Warranty extension or AMC plans can be added based on system type.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Service & Support</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Warranty Policy in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            Mugnee Cambodia warranty policy ensures reliable coverage for supported products
            and installations. We provide clear terms, spare parts support, and responsive
            service throughout the warranty period.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Contact Support
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
            <li>Coverage for manufacturing defects</li>
            <li>Support for approved parts replacement</li>
            <li>Clear terms and service process</li>
            <li>Option to extend with AMC</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">What�s Covered</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">What�s Not Covered</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {exclusions.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Need Warranty Support?</h2>
        <p className="mt-2 text-slate-700">
          Share your system details and issue. We�ll guide you through the warranty process.
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
