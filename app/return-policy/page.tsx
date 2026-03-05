import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/seo/JsonLd";
import FAQJsonLd from "../components/seo/FAQJsonLd";
import { SITE_URL } from "../lib/site";

const PAGE_PATH = "/return-policy/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED = "2026-03-05";

export const metadata: Metadata = {
  title: "Return Policy Cambodia | Mugnee Cambodia",
  description:
    "Detailed company return policy in Cambodia, including return window, RMA process, exclusions, and refund timeline.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": PAGE_PATH,
      "km-kh": "/km/return-policy/",
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Return Policy Cambodia | Mugnee Cambodia",
    description:
      "Clear Cambodia-focused return policy with RMA steps, eligibility criteria, project-item exclusions, and refund/replacement workflow.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Return Policy Cambodia | Mugnee Cambodia",
    description:
      "RMA process, eligibility, exclusions, and refund timeline for project-based systems in Cambodia.",
  },
  robots: { index: true, follow: true },
};

const POLICY_HIGHLIGHTS = [
  {
    label: "Return Request Window",
    value: "Within 7 Calendar Days",
    detail: "From delivery date or signed handover date, whichever applies.",
  },
  {
    label: "Initial Response",
    value: "Within 48 Working Hours",
    detail: "Technical triage starts after required documents are received.",
  },
  {
    label: "Project Site Coverage",
    value: "Cambodia-Wide",
    detail: "Phnom Penh, Siem Reap, Sihanoukville, and other provinces by scope.",
  },
];

const RETURN_STEPS: Array<{ title: string; detail: string }> = [
  {
    title: "Submit a return request",
    detail:
      "Notify Mugnee Cambodia within 7 calendar days and share invoice number, installation/handover date, and project location.",
  },
  {
    title: "Share technical evidence",
    detail:
      "Provide clear photos/videos, serial label, and issue description (power status, controller status, symptom timeline).",
  },
  {
    title: "Remote diagnostics and eligibility review",
    detail:
      "Our support engineer runs remote troubleshooting first, then confirms whether onsite inspection is required.",
  },
  {
    title: "RMA approval and return instruction",
    detail:
      "If approved, we issue written return authorization with packaging, logistics, and receiving instructions.",
  },
  {
    title: "Inspection, resolution, and closure",
    detail:
      "After inspection, resolution may be repair, replacement, or refund/partial credit depending on root cause and stock availability.",
  },
];

const REQUIRED_DOCUMENTS = [
  "Purchase invoice or quotation reference",
  "Delivery note or commissioning/handover record",
  "Item model and serial number photo",
  "Issue photos/videos and brief failure description",
  "Site contact person and phone number",
];

const ELIGIBLE_ITEMS = [
  "Manufacturing defect confirmed under normal operating conditions",
  "Wrong item/model delivered against approved quotation",
  "DOA (dead on arrival) item reported within policy timeline",
  "Unopened standard-stock item in original condition (subject to approval)",
];

const NON_RETURNABLE_ITEMS = [
  "Custom-configured, made-to-order, or project-cut materials (except verified factory defect)",
  "Damage from misuse, wrong voltage, water ingress, impact, or unauthorized modification",
  "Items with missing serial labels, altered parts, or incomplete accessories",
  "Consumables and software/license-based components once activated",
];

const REFUND_AND_REPLACEMENT_NOTES = [
  "Replacement is prioritized for business-critical project continuity where stock is available.",
  "Refunds are processed after final technical validation and approval.",
  "Transport and banking charges may be deducted depending on return reason and commercial terms.",
  "Labor already consumed for completed installation is generally non-refundable unless contractually stated.",
];

const FAQ_ITEMS = [
  {
    question: "How many days do I have to request a return in Cambodia?",
    answer:
      "Please submit your return request within 7 calendar days from delivery or signed handover date. Early reporting helps us validate and close the case faster.",
  },
  {
    question: "Can custom-configured or made-to-order items be returned?",
    answer:
      "Custom-configured or made-to-order items are normally non-returnable. If a verified manufacturing fault is confirmed, we may process repair, replacement, or another approved resolution under contract terms.",
  },
  {
    question: "What documents are required for return approval?",
    answer:
      "Please share invoice details, delivery or handover proof, item model and serial photo, and clear issue photos or video. Incomplete documents can delay approval.",
  },
  {
    question: "Who pays return transport cost?",
    answer:
      "Transport responsibility depends on root cause and contract terms. If the issue is validated as supplier or manufacturing fault, cost handling is decided during approval.",
  },
  {
    question: "How long does refund processing usually take after approval?",
    answer:
      "After final approval, refund processing usually takes 5 to 15 working days depending on payment method, banking cycle, and document completeness.",
  },
  {
    question: "Can I request a return without an invoice?",
    answer:
      "Invoice or purchase proof is required for policy verification. If the invoice is missing, share available transaction details so our team can attempt internal verification.",
  },
  {
    question: "Are opened items eligible for return?",
    answer:
      "Opened items may be accepted only when a genuine fault or delivery mismatch is verified. Items with signs of misuse, missing parts, or altered condition are usually rejected.",
  },
  {
    question: "Do you offer exchange instead of refund?",
    answer:
      "Yes, exchange or replacement may be offered when appropriate and available. Resolution type is selected after technical validation, stock check, and contractual scope review.",
  },
  {
    question: "Can I cancel an order before delivery and get a refund?",
    answer:
      "Cancellation and refund before delivery depend on order stage, procurement status, and contract terms. Please contact support quickly so the team can check eligibility.",
  },
  {
    question: "How can I escalate a delayed return or refund case?",
    answer:
      "If your case is delayed, contact us with your reference number through the official contact page. We will review status, identify blockers, and provide the next timeline update.",
  },
];

const RELATED_PAGES = [
  {
    href: "/service/",
    title: "Service & Support",
    detail: "Learn about AMC, troubleshooting flow, and Cambodia-wide technical response.",
  },
  {
    href: "/terms-and-conditions/",
    title: "Terms & Conditions",
    detail: "Commercial terms, project scope, and warranty limitations.",
  },
  {
    href: "/contact/",
    title: "Contact Support",
    detail: "Submit return details with photos/video for faster triage.",
  },
];

export default function ReturnPolicyPage() {
  return (
    <div className="bg-slate-50">
      <JsonLd
        id="return-policy-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Return Policy Cambodia | Mugnee Cambodia",
          url: PAGE_URL,
          inLanguage: "en",
          dateModified: LAST_UPDATED,
          about: "Return and replacement policy for company projects and supplied items in Cambodia",
          areaServed: {
            "@type": "Country",
            name: "Cambodia",
          },
        }}
      />
      <FAQJsonLd id="return-policy-faq-jsonld" items={FAQ_ITEMS.map((item) => ({ ...item, language: "en" }))} />

      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Policy</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Return Policy in Cambodia
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              This return policy is designed for project-based supply and installation in Cambodia. It defines return
              eligibility, RMA workflow, exclusions, and refund or replacement conditions for company-supplied items and
              project deliverables handled by Mugnee Cambodia.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-500">Last updated: March 5, 2026</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {POLICY_HIGHLIGHTS.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-bold text-slate-900">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Eligible for Return Review</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {ELIGIBLE_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Normally Not Returnable</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {NON_RETURNABLE_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Return Process (RMA Workflow)</h2>
          <ol className="mt-4 space-y-4">
            {RETURN_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Documents Required for Faster Approval</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {REQUIRED_DOCUMENTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Refund and Replacement Notes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {REFUND_AND_REPLACEMENT_NOTES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Expected Timeline</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Stage</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-slate-700">Initial acknowledgment</td>
                  <td className="px-4 py-3 text-slate-700">Within 48 working hours</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Technical validation</td>
                  <td className="px-4 py-3 text-slate-700">2-5 working days (depends on evidence/site access)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">RMA decision and next action</td>
                  <td className="px-4 py-3 text-slate-700">After validation and availability confirmation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Refund processing (if approved)</td>
                  <td className="px-4 py-3 text-slate-700">5-15 working days by payment channel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Timeline may vary for province logistics and third-party transport schedules.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-sm">
          <h2 className="text-xl font-bold text-white">Need Return Approval Support?</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">
            For return request and technical validation, submit details from our{" "}
            <Link href="/contact/" className="font-semibold text-sky-300 no-underline hover:text-sky-200 hover:no-underline">
              contact page
            </Link>{" "}
            with project location (Phnom Penh, Siem Reap, Sihanoukville, or other provinces), invoice reference, and issue
            evidence.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/contact/"
              className="inline-flex rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-900 no-underline transition hover:bg-slate-100 hover:no-underline"
            >
              Request Return Assistance
            </Link>
            <Link
              href="/service/"
              className="inline-flex rounded-xl border border-slate-400 px-4 py-2 text-xs font-semibold text-white no-underline transition hover:border-slate-200 hover:no-underline"
            >
              View Service Scope
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Related Policy and Support Pages</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {RELATED_PAGES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 no-underline transition hover:border-sky-300 hover:bg-sky-50 hover:no-underline"
              >
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Company Return Policy FAQs in Cambodia</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.question}</span>
                    <span className="text-slate-400 transition-transform duration-300 group-open:rotate-180">v</span>
                  </div>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            This page provides operational policy guidance for customers and project teams. Final commercial handling may
            vary by signed quotation, contract, and warranty scope.
          </p>
        </div>
      </section>
    </div>
  );
}
