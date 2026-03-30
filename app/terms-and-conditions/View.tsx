import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/seo/JsonLd";
import FAQJsonLd from "../components/seo/FAQJsonLd";
import { SITE_URL } from "../lib/site";

const PAGE_PATH = "/terms-and-conditions/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
export const metadata: Metadata = {
  title: "Terms and Conditions Cambodia 2026 | Mugnee Cambodia",
  description:
    "Read Mugnee Cambodia terms for LED display, PA system, smart board, and access control projects, including payment, warranty, and legal terms.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-KH": PAGE_PATH,
      "km-KH": "/km/terms-and-conditions/",
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Terms and Conditions Cambodia 2026 | Mugnee Cambodia",
    description:
      "Company terms and conditions for supply, installation, warranty, and support services in Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "article",
    images: [{ url: `${SITE_URL}/images/hero/cambodia-led-hero.webp`, width: 1200, height: 630, alt: "Terms and conditions of Mugnee Cambodia" }],
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions Cambodia 2026 | Mugnee Cambodia",
    description:
      "Commercial, legal, and warranty terms for Mugnee Cambodia projects and product supply.",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
  robots: { index: true, follow: true },
};

const POLICY_HIGHLIGHTS = [
  {
    label: "Quotation Validity",
    value: "As Stated in Proposal",
    detail: "Commercial validity follows the official quotation issue date and terms.",
  },
  {
    label: "Support Coverage",
    value: "Cambodia Nationwide",
    detail: "Project support available in Phnom Penh and other provinces based on scope.",
  },
  {
    label: "Project Agreement Basis",
    value: "BOQ + Signed Contract",
    detail: "Final execution follows approved technical BOQ and commercial agreement.",
  },
];

const TERMS_SECTIONS: Array<{ title: string; content: string[] }> = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By confirming a quotation, purchase order, or signed agreement, the client accepts these terms and conditions.",
      "Any additional terms from the client are valid only when approved in writing by Mugnee Cambodia.",
    ],
  },
  {
    title: "2. Scope of Service",
    content: [
      "Mugnee Cambodia provides LED display, digital signage, interactive flat panel, PA system, and access control solutions.",
      "Final scope is defined by approved BOQ, technical specification, and signed commercial documents.",
    ],
  },
  {
    title: "3. Quotation, Pricing, and Payment",
    content: [
      "All prices are based on the approved quotation and may include product, logistics, installation, and applicable taxes as specified.",
      "Payment policy: 50% advance payment is required to confirm the order and start processing.",
      "The remaining 50% payment must be fully cleared at the time of delivery.",
      "Delayed payment may hold delivery, installation scheduling, and project handover.",
    ],
  },
  {
    title: "4. Delivery, Installation, and Handover",
    content: [
      "Delivery timelines are estimates and may vary based on import clearance, transport, and site readiness.",
      "Client must ensure safe access, electrical readiness, network availability, and civil completion where required.",
      "Project handover is completed after commissioning tests and sign-off by authorized representatives.",
    ],
  },
  {
    title: "5. Warranty and Technical Limitations",
    content: [
      "Warranty is claimable only for confirmed product defects under normal operating conditions.",
      "Warranty does not cover physical damage of any kind.",
      "Warranty does not cover damage caused by natural disasters or force majeure events.",
      "Any damage caused by misuse, mishandling, or unauthorized modification is outside warranty scope.",
    ],
  },
  {
    title: "6. Service and Support Policy",
    content: [
      "Mugnee Cambodia provides service and technical support through official company channels based on project scope and signed terms.",
      "Support includes troubleshooting guidance, remote diagnosis, and onsite service scheduling when required.",
      "Service response timeline depends on issue type, site location, and spare-part availability.",
      "Support requests should include invoice/order reference and clear issue evidence for faster resolution.",
    ],
  },
  {
    title: "7. Client Responsibilities",
    content: [
      "Client is responsible for timely approvals, site readiness, permit compliance, and accurate project information.",
      "Any delay caused by client-side readiness, access restrictions, or instruction changes may affect timeline and cost.",
    ],
  },
  {
    title: "8. Intellectual Property and Content Rights",
    content: [
      "Technical drawings, design files, software setup, and documentation provided by Mugnee Cambodia remain protected intellectual property unless transferred in writing.",
      "Client remains responsible for legal rights to media content displayed on installed screens and systems.",
    ],
  },
  {
    title: "9. Cancellation, Variation, and Termination",
    content: [
      "Order cancellation after confirmation may involve cancellation fees, restocking cost, or non-refundable procurement charges.",
      "Scope changes after approval are treated as variation orders and may affect price and delivery schedule.",
      "Either party may terminate for material breach if unresolved after written notice within a reasonable correction window.",
    ],
  },
  {
    title: "10. Liability and Indemnity",
    content: [
      "Mugnee Cambodia is not liable for indirect, incidental, or consequential damages such as business interruption or revenue loss.",
      "Maximum liability is limited to the invoiced value of the specific affected supply or service unless prohibited by applicable law.",
    ],
  },
  {
    title: "11. Governing Law and Dispute Resolution",
    content: [
      "These terms are governed by applicable laws of the Kingdom of Cambodia.",
      "Parties will attempt good-faith negotiation first; unresolved disputes may proceed through competent legal channels in Cambodia.",
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: "Do these terms apply to all Mugnee Cambodia projects?",
    answer:
      "Yes. These terms apply to product supply, installation, and service support unless a signed contract defines specific overrides.",
  },
  {
    question: "Can payment terms be customized for large projects?",
    answer:
      "Yes. Payment milestones can be customized for approved projects and are finalized in the official quotation or contract.",
  },
  {
    question: "What is required before installation starts?",
    answer:
      "Site access, electrical readiness, and approval of technical scope are required before installation can begin.",
  },
  {
    question: "Are warranty claims accepted for voltage or misuse damage?",
    answer:
      "No. Warranty excludes damage caused by unstable voltage, misuse, or unauthorized modifications.",
  },
  {
    question: "How can a client request legal clarification?",
    answer:
      "Clients can submit contract, billing, or legal clarification requests through the official Mugnee Cambodia contact page.",
  },
];

const RELATED_PAGES = [
  {
    href: "/return-policy/",
    title: "Return Policy",
    detail: "Final-sale and refund limitations with support process details.",
  },
  {
    href: "/service/",
    title: "Service & Support",
    detail: "Understand maintenance, troubleshooting, and response coverage.",
  },
  {
    href: "/contact/",
    title: "Contact Mugnee Cambodia",
    detail: "Reach our team for project consultation and policy clarification.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-50">
      <JsonLd
        id="terms-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms and Conditions Cambodia 2026 | Mugnee Cambodia",
          url: PAGE_URL,
          inLanguage: "en",
          dateModified: "2026-03-07",
          about:
            "Terms and conditions for product supply, installation, warranty, and legal responsibilities in Cambodia.",
          areaServed: {
            "@type": "Country",
            name: "Cambodia",
          },
        }}
      />
      <FAQJsonLd id="terms-faq-jsonld" items={FAQ_ITEMS.map((item) => ({ ...item, language: "en" }))} />

      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Legal Policy</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
            Terms and Conditions for Mugnee Cambodia
          </h1>
          <p className="mt-4 w-full text-justify text-base leading-relaxed text-slate-700">
            These terms govern quotation approval, payment, delivery, installation, warranty, and legal obligations for
            Mugnee Cambodia projects across Phnom Penh, Siem Reap, Sihanoukville, and nationwide coverage in Cambodia.
          </p>

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
        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">Important Legal Notice</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Before confirming any supply or project order, please review these terms together with quotation details,
            BOQ, warranty note, and return policy. In case of conflict, signed project contract terms take precedence.
          </p>
        </div>

        <div className="space-y-5">
          {TERMS_SECTIONS.map((section) => (
            <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                {section.content.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-sm">
          <h2 className="text-xl font-bold text-white">Need Contract Clarification Before Confirming Order?</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">
            Our commercial and technical team can help clarify clause interpretation, payment milestones, delivery
            conditions, and warranty coverage for your project in Cambodia.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/contact/"
              className="inline-flex rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-900 no-underline transition hover:bg-slate-100 hover:no-underline"
            >
              Request Clarification
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
          <h2 className="text-xl font-bold text-slate-900">Related Legal and Support Pages</h2>
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
          <h2 className="text-xl font-bold text-slate-900">Terms and Conditions FAQs (Cambodia)</h2>
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
