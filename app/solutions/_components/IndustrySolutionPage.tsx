import Link from "next/link";
import { SITE_URL } from "../../lib/site";
import {
  INDUSTRY_SOLUTIONS,
  type IndustrySolution,
} from "../_data/industrySolutions";

type Props = {
  solution: IndustrySolution;
};

export default function IndustrySolutionPage({ solution }: Props) {
  const pageUrl = `${SITE_URL}/solutions/${solution.slug}`;
  const currentPath = `/solutions/${solution.slug}`;

  const solutionClusters: Record<string, "display" | "audio" | "security" | "education"> = {
    "indoor-communication-solutions-cambodia": "display",
    "outdoor-campaign-solutions-cambodia": "display",
    "retail-digital-signage-cambodia": "display",
    "hotel-display-solutions-cambodia": "display",
    "factory-pa-announcement-cambodia": "audio",
    "office-access-control-cambodia": "security",
    "education-smart-classroom-cambodia": "education",
  };

  const clusterAnchors: Record<
    "display" | "audio" | "security" | "education",
    { label: string; href: string }[]
  > = {
    display: [
      { label: "LED Display Hub", href: "/led-display" },
      { label: "Indoor LED Display", href: "/led-display/indoor-led-display" },
      { label: "Outdoor LED Display", href: "/led-display/outdoor-led-display" },
    ],
    audio: [
      { label: "PA System Hub", href: "/pa-system" },
      { label: "PA Product Catalog", href: "/products/catalog/pa-system" },
      { label: "IP Paging Microphones", href: "/products/catalog/ip-paging-microphones" },
    ],
    security: [
      { label: "Turnstile Gate Hub", href: "/turnstile-gate" },
      { label: "Access Control Catalog", href: "/products/catalog/access-control" },
      { label: "Turnstile Catalog", href: "/products/catalog/turnstile-gate" },
    ],
    education: [
      { label: "Interactive Flat Panel Hub", href: "/interactive-flat-panel" },
      { label: "Interactive Panel Catalog", href: "/products/catalog/interactive-panel" },
      { label: "Smart Board Catalog", href: "/products/catalog/smart-board" },
    ],
  };

  const currentCluster = solutionClusters[solution.slug];
  const relatedSolutions = INDUSTRY_SOLUTIONS.filter(
    (item) => item.slug !== solution.slug && solutionClusters[item.slug] === currentCluster
  );
  const supplementalSolutions = INDUSTRY_SOLUTIONS.filter((item) => item.slug !== solution.slug).slice(
    0,
    3
  );
  const crossIntentLinks = clusterAnchors[currentCluster] ?? [];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
      { "@type": "ListItem", position: 3, name: solution.title, item: pageUrl },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    serviceType: "Business Technology Solution",
    provider: {
      "@type": "Organization",
      name: "Mugnee Cambodia",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "Cambodia" },
    url: pageUrl,
    description: solution.description,
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <li>
                <Link href="/" className="hover:text-slate-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/solutions" className="hover:text-slate-700">
                  Solutions
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-slate-700">{solution.title}</li>
            </ol>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Cambodia Industry Solution
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {solution.title}
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {solution.heroIntro}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Request Quotation
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
            >
              Back to Solutions Hub
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Problem Context</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.problemContext.map((item) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm leading-relaxed text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Deployment Workflow</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {solution.deploymentWorkflow.map((item, idx) => (
              <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step {idx + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Integration Scope</h2>
              <ul className="mt-4 space-y-3">
                {solution.integrationScope.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Budget Factors</h2>
              <ul className="mt-4 space-y-3">
                {solution.budgetFactors.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Related Product Pages</h2>
          <p className="mt-2 text-sm text-slate-600">
            Use these dedicated pages for exact product-level details and procurement planning.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {solution.internalLinks.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5",
                  idx % 2 === 0
                    ? "border-cyan-200 bg-cyan-50 text-cyan-900 hover:border-cyan-300 hover:bg-cyan-100"
                    : "border-indigo-200 bg-indigo-50 text-indigo-900 hover:border-indigo-300 hover:bg-indigo-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Intent Cluster Navigation
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            For this query intent, use these primary hub pages before selecting exact products.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {crossIntentLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-900 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Related Industry Solution Pages
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Explore nearby industry intents to route broader business queries to the right page.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {(relatedSolutions.length > 0 ? relatedSolutions : supplementalSolutions).map((item) => (
              <Link
                key={item.slug}
                href={`/solutions/${item.slug}`}
                className={`rounded-2xl border p-4 shadow-sm transition hover:-translate-y-0.5 ${
                  `/solutions/${item.slug}` === currentPath
                    ? "border-slate-300 bg-slate-100"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            FAQ for {solution.title}
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {solution.faqs.map((item) => (
              <details key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
