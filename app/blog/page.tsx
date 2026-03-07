import type { Metadata } from "next";
import Link from "next/link";
import FAQJsonLd from "../components/seo/FAQJsonLd";
import JsonLd from "../components/seo/JsonLd";
import { SITE_URL } from "../lib/site";

const PAGE_PATH = "/blog/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Blog & Guides Cambodia | Mugnee Cambodia",
  description:
    "Explore Mugnee Cambodia blog guides on LED display, digital signage, smart classroom, PA system, and access control trends for Cambodia businesses.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": PAGE_PATH,
      "km-kh": "/km/blog/",
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Blog & Guides Cambodia | Mugnee Cambodia",
    description:
      "Practical resources and technical insights for choosing LED screens, PA systems, and smart solutions in Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`,
        width: 1200,
        height: 630,
        alt: "Mugnee Cambodia blog and buying guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Guides Cambodia | Mugnee Cambodia",
    description:
      "Read Cambodia-focused buying guides and practical implementation tips from Mugnee Cambodia.",
    images: [`${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`],
  },
  keywords: [
    "Cambodia technology blog",
    "LED display buying guide Cambodia",
    "PA system planning Cambodia",
    "interactive flat panel Cambodia",
    "turnstile gate guide Cambodia",
    "digital signage Cambodia",
  ],
  robots: { index: true, follow: true },
};

const FEATURED_GUIDES = [
  {
    title: "LED Display Buying Guide in Cambodia: Pitch, Brightness, and Budget",
    description:
      "Compare indoor and outdoor LED options for Phnom Penh conditions, content distance, and long-term operating cost.",
    href: "/led-display",
    cta: "Read LED guide",
  },
  {
    title: "PA System Planning for Schools, Factories, and Commercial Buildings",
    description:
      "Understand zoning, amplifier sizing, emergency announcement flow, and audio intelligibility factors.",
    href: "/pa-system",
    cta: "Read PA guide",
  },
  {
    title: "Interactive Flat Panel Guide for Smart Classroom and Meeting Rooms",
    description:
      "Choose the right IFP size and software stack for Khmer and English content delivery in Cambodia.",
    href: "/interactive-flat-panel",
    cta: "Read IFP guide",
  },
  {
    title: "Turnstile Gate and Access Control Guide for Cambodia Offices",
    description:
      "Evaluate tripod, flap, and speed gates with RFID, biometric, and visitor workflow integration needs.",
    href: "/turnstile-gate",
    cta: "Read access guide",
  },
];

const MARKET_SIGNALS = [
  {
    title: "Local Climate and Site Reality",
    description:
      "Guides are written for Cambodia heat, humidity, dust, and real city traffic visibility requirements.",
  },
  {
    title: "Business and Company Decision Flow",
    description:
      "Each topic supports procurement and management teams with clear scope, cost drivers, and rollout priorities.",
  },
  {
    title: "Implementation, Not Just Theory",
    description:
      "Content focuses on practical planning, installation workflow, and long-term service readiness.",
  },
];

const INTENT_CLUSTERS = [
  {
    title: "LED and Digital Signage Planning",
    links: [
      { label: "LED Display Hub", href: "/led-display" },
      { label: "Indoor LED Display", href: "/led-display/indoor-led-display" },
      { label: "Outdoor LED Display", href: "/led-display/outdoor-led-display" },
      { label: "All Product Catalog", href: "/products" },
    ],
  },
  {
    title: "Audio, Classroom, and Access Infrastructure",
    links: [
      { label: "PA System Hub", href: "/pa-system" },
      { label: "Interactive Flat Panel", href: "/interactive-flat-panel" },
      { label: "Turnstile Gate Hub", href: "/turnstile-gate" },
      { label: "Cambodia Solutions", href: "/solutions" },
    ],
  },
];

const EXECUTION_FRAMEWORK = [
  {
    step: "1. Requirement Discovery",
    detail: "Define audience, site type, daily operating hours, and business KPI before product shortlisting.",
  },
  {
    step: "2. Technical Scope and BOQ",
    detail: "Translate project goals into pixel pitch, zone design, controller logic, power map, and BOQ structure.",
  },
  {
    step: "3. Deployment and Integration",
    detail: "Plan mounting, wiring, software onboarding, and integration with existing security and operations tools.",
  },
  {
    step: "4. Support and Optimization",
    detail: "Set SOP, operator training, preventive checks, and fault response process for consistent long-term uptime.",
  },
];

const FAQS = [
  {
    question: "Who should use Mugnee Cambodia blog guides?",
    answer:
      "Our guides are built for company owners, project managers, procurement teams, school operators, and facility teams planning LED, PA, classroom, and access systems in Cambodia.",
  },
  {
    question: "Are these guides focused on Cambodia market conditions?",
    answer:
      "Yes. Content is structured around Cambodia site realities such as weather exposure, traffic visibility, budget control, and local deployment workflow.",
  },
  {
    question: "Can we request a tailored recommendation after reading a guide?",
    answer:
      "Yes. Share your project location, use case, and timeline through our contact page, and our team will suggest a practical configuration.",
  },
  {
    question: "Do your guides include both product and solution-level advice?",
    answer:
      "Yes. We cover product-level selection and also solution-level planning such as integration, rollout sequencing, and long-term service strategy.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <JsonLd
        id="blog-page-jsonld"
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": `${PAGE_URL}#blog`,
              name: "Mugnee Cambodia Blog",
              url: PAGE_URL,
              inLanguage: "en",
              about: ["LED display Cambodia", "PA system Cambodia", "Interactive flat panel Cambodia"],
              publisher: {
                "@type": "Organization",
                name: "Mugnee Cambodia",
                url: SITE_URL,
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${PAGE_URL}#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Blog", item: PAGE_URL },
              ],
            },
            {
              "@type": "ItemList",
              "@id": `${PAGE_URL}#featured-guides`,
              name: "Featured Cambodia Buying Guides",
              itemListElement: FEATURED_GUIDES.map((guide, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: guide.title,
                url: `${SITE_URL}${guide.href}`,
              })),
            },
          ],
        }}
      />
      <FAQJsonLd id="blog-faq-jsonld" items={FAQS.map((item) => ({ ...item, language: "en" as const }))} />

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <li>
                <Link href="/" className="hover:text-slate-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-slate-700">Blog</li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Insights</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl [text-align:justify]">
            Cambodia Technology Blog for Smart Business Buying Decisions
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base [text-align:justify]">
            Explore company-focused guides from Mugnee Cambodia on LED display, digital signage, PA system,
            interactive flat panel, and access control. This page is built for Cambodia project planning with practical
            implementation guidance, procurement clarity, and SEO-structured topic clusters.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
            >
              Request Project Consultation
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
            >
              Explore Cambodia Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Market-Focused Knowledge for Cambodia Companies
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Our editorial structure helps teams move from discovery to decision with clear technical scope,
              deployment planning, and support readiness.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MARKET_SIGNALS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                >
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Quick Access</h3>
            <ul className="mt-4 space-y-2">
              {INTENT_CLUSTERS.flatMap((cluster) => cluster.links).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 no-underline transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Featured Cambodia Buying Guides and Decision Content
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Start with the guide that matches your business objective, then move to solution and product pages for
            technical scope alignment.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {FEATURED_GUIDES.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-slate-800 hover:no-underline"
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Project Execution Framework for Cambodia Technology Deployment
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Use this workflow as a checklist for enterprise and institutional projects in Phnom Penh and nationwide.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXECUTION_FRAMEWORK.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                <h3 className="text-sm font-semibold text-slate-900">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {FAQS.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition open:border-sky-300 open:shadow-md"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.question}</span>
                    <span className="text-slate-400 transition-transform group-open:rotate-180">v</span>
                  </div>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Need a Company-Focused Recommendation for Your Cambodia Project?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Share your industry, location, and objective. Mugnee Cambodia will recommend a practical solution path,
              budget direction, and implementation workflow.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                Contact Mugnee Cambodia
              </Link>
              <Link
                href="/products"
                className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
