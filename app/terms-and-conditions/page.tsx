import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/seo/JsonLd";
import { SITE_URL } from "../lib/site";

const PAGE_PATH = "/terms-and-conditions/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Terms and Conditions Cambodia | Mugnee Cambodia",
  description:
    "Review Mugnee Cambodia terms and conditions for product supply, project execution, payment, warranty, and service responsibilities in Cambodia.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": PAGE_PATH,
      "km-kh": "/km/terms-and-conditions/",
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Terms and Conditions Cambodia | Mugnee Cambodia",
    description:
      "Terms and conditions for LED display, PA system, interactive flat panel, and access control projects in Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions Cambodia | Mugnee Cambodia",
    description:
      "Commercial terms, warranty scope, and project responsibilities for Mugnee Cambodia customers.",
  },
  robots: { index: true, follow: true },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-50">
      <JsonLd
        id="terms-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms and Conditions Cambodia | Mugnee Cambodia",
          url: PAGE_URL,
          inLanguage: "en",
        }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Legal</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            These terms govern product sales, installation projects, and service support provided by Mugnee Cambodia
            across Phnom Penh, Siem Reap, Sihanoukville, and other regions of Cambodia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">1. Scope of Service</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Mugnee Cambodia provides LED display solutions, digital signage, interactive flat panel deployment, PA
            systems, and access control integrations. Final scope is based on approved quotation, BOQ, and project
            agreement.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">2. Quotation and Payment</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
            <li>All quotations are valid for the period stated in the official proposal.</li>
            <li>Project confirmation may require advance payment according to contract terms.</li>
            <li>Delays in payment can affect delivery timeline and deployment schedule.</li>
            <li>Taxes, transport, and site readiness costs are handled as specified in the quotation.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">3. Installation and Handover</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Client must provide site access, stable utility conditions, and safety clearance. Installation is considered
            complete after commissioning checklist and handover documentation are signed by both parties.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">4. Warranty and Limitations</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Warranty covers manufacturing defects under normal operating conditions. It excludes accidents, voltage
            instability, unauthorized modification, force majeure, and damage from external systems.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">5. Support Contact</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            For contract clarification, billing, or service issues, please reach out via the{" "}
            <Link href="/contact" className="font-semibold text-sky-700 no-underline hover:text-sky-800 hover:no-underline">
              official contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
