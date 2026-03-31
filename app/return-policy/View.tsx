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
    "Mugnee Cambodia no return and no refund policy for supplied products, with clear after-sales support guidance.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-KH": PAGE_PATH,
      "km-KH": "/km/return-policy/",
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Return Policy Cambodia | Mugnee Cambodia",
    description:
      "No return and no refund policy in Cambodia with issue reporting and technical support process.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "article",
    images: [{ url: `${SITE_URL}/images/hero/cambodia-led-hero.webp`, width: 1200, height: 630, alt: "Return policy of Mugnee Cambodia" }],
  },
  twitter: {
    card: "summary",
    title: "Return Policy Cambodia | Mugnee Cambodia",
    description:
      "No return and no refund policy for company-supplied products in Cambodia.",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
  robots: { index: true, follow: true },
};

const POLICY_HIGHLIGHTS = [
  {
    label: "Return Option",
    value: "Not Available",
    detail: "All delivered products are final sale and cannot be returned.",
  },
  {
    label: "Refund Option",
    value: "Not Available",
    detail: "Payments are non-refundable after confirmed order and delivery.",
  },
  {
    label: "Support Response",
    value: "Within 24 Hours",
    detail: "Our team provides technical troubleshooting for reported issues.",
  },
];

const SUPPORT_STEPS: Array<{ title: string; detail: string }> = [
  {
    title: "Report the issue",
    detail:
      "Contact our support team and share your invoice number, delivery date, and site location.",
  },
  {
    title: "Submit issue evidence",
    detail:
      "Provide clear photos/videos, model/serial label, and a short description of the problem.",
  },
  {
    title: "Technical diagnostics",
    detail:
      "Our engineers run remote checks first and arrange onsite support if required by scope.",
  },
  {
    title: "Resolution and follow-up",
    detail:
      "We provide the applicable service action under warranty and signed commercial terms.",
  },
];

const REQUIRED_DOCUMENTS = [
  "Purchase invoice or quotation reference",
  "Delivery note or commissioning/handover record (if applicable)",
  "Item model and serial number photo",
  "Issue photos/videos and brief failure description",
  "Site contact person and phone number",
];

const SUPPORT_SCOPE = [
  "Troubleshooting and technical guidance for installed or delivered products",
  "Warranty service based on product condition and signed agreement",
  "Onsite technical visit when remote support cannot resolve the issue",
  "Commercial follow-up through official support channel with case reference",
];

const NOT_AVAILABLE = [
  "Return of delivered products",
  "Refund after order confirmation, processing, or delivery",
  "Cash refund for completed installation or consumed labor",
  "Refund request for custom-configured, made-to-order, or project-cut items",
];

const FAQ_ITEMS = [
  {
    question: "Do you offer product return in Cambodia?",
    answer:
      "No. Mugnee Cambodia does not offer product return. All delivered products are treated as final sale.",
  },
  {
    question: "Do you offer refund for delivered products?",
    answer:
      "No. We do not provide refunds for delivered products. Payment is non-refundable once order and delivery are completed.",
  },
  {
    question: "What if my product has a technical issue?",
    answer:
      "Please contact support with invoice details, serial information, and issue evidence. Our team will provide troubleshooting and service support under warranty terms.",
  },
  {
    question: "Can I get refund for installation charge or service labor?",
    answer:
      "No. Completed installation and consumed labor are non-refundable unless explicitly stated in a signed contract.",
  },
  {
    question: "Can I cancel and refund after order processing starts?",
    answer:
      "Cancellation and refund are not available once processing has started. Please contact support immediately if you need urgent order status help.",
  },
  {
    question: "What documents should I share for support?",
    answer:
      "Please share invoice or purchase proof, delivery/handover reference, model and serial photo, and clear issue photos or videos.",
  },
  {
    question: "How can I escalate a delayed support case?",
    answer:
      "If your case is delayed, contact us via the official contact page with your case reference number for follow-up.",
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
    detail: "Commercial terms, final-sale policy, and warranty limitations.",
  },
  {
    href: "/contact/",
    title: "Contact Support",
    detail: "Submit technical issue details with photos/video for faster triage.",
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
          about: {
            "@type": "Thing",
            name: "No return and no refund policy with technical support guidance for supplied products in Cambodia",
          },
          areaServed: {
            "@type": "Country",
            name: "Cambodia",
          },
        }}
      />
      <FAQJsonLd id="return-policy-faq-jsonld" items={FAQ_ITEMS.map((item) => ({ ...item, language: "en" }))} />

      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="w-full max-w-none">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Policy</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Final Sale and Support Policy in Cambodia
            </h1>
            <p className="mt-4 text-justify text-base leading-relaxed text-slate-700">
              Mugnee Cambodia follows a strict no return and no refund policy for all company-supplied products. Once an
              order is confirmed and delivered, return and refund options are not available. For any technical issue, our
              support team provides troubleshooting and service guidance based on warranty and signed commercial terms.
            </p>
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
            <h2 className="text-xl font-bold text-slate-900">What We Provide</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {SUPPORT_SCOPE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">What Is Not Available</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {NOT_AVAILABLE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Issue Support Process</h2>
          <ol className="mt-4 space-y-4">
            {SUPPORT_STEPS.map((step, index) => (
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
            <h2 className="text-xl font-bold text-slate-900">Final-Sale Notes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {NOT_AVAILABLE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Expected Support Timeline</h2>
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
                  <td className="px-4 py-3 text-slate-700">Within 24 hours</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Technical validation</td>
                  <td className="px-4 py-3 text-slate-700">2-5 working days (depends on evidence/site access)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Service action and next steps</td>
                  <td className="px-4 py-3 text-slate-700">After validation and availability confirmation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Policy note</td>
                  <td className="px-4 py-3 text-slate-700">No return and no refund for delivered products</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Timeline may vary for province logistics and third-party transport schedules.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-sm">
          <h2 className="text-xl font-bold text-white">Need Technical Support?</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">
            Since return and refund are not available, please submit technical issue details from our{" "}
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
              Request Technical Assistance
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
        </div>
      </section>
    </div>
  );
}
