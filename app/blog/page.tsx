import type { Metadata } from "next";
import Link from "next/link";
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
  robots: { index: true, follow: true },
};

const RESOURCES = [
  {
    title: "LED Display Buying Guide in Cambodia",
    description:
      "How to choose indoor vs outdoor LED pitch, brightness, and cabinet type for Phnom Penh weather and visibility needs.",
    href: "/led-display",
  },
  {
    title: "PA System Planning for Schools and Factories",
    description:
      "Checklist for zoning, amplifier capacity, paging priority, and emergency announcement workflow.",
    href: "/pa-system",
  },
  {
    title: "Interactive Flat Panel for Smart Classroom",
    description:
      "Deployment tips for education institutes in Cambodia, including size selection and lesson-ready setup.",
    href: "/interactive-flat-panel",
  },
  {
    title: "Turnstile Gate Selection for Office Access",
    description:
      "Compare tripod, flap, and speed gates with local project constraints and integration requirements.",
    href: "/turnstile-gate",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-slate-50">
      <JsonLd
        id="blog-page-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Mugnee Cambodia Blog",
          url: PAGE_URL,
          inLanguage: "en",
          publisher: {
            "@type": "Organization",
            name: "Mugnee Cambodia",
            url: SITE_URL,
          },
        }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Insights</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Cambodia Technology Blog and Buying Guides
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
            This resource hub helps businesses, schools, retailers, and public organizations choose the right LED
            display, PA system, interactive panel, and access control setup for real project conditions in Cambodia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {RESOURCES.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-slate-800 hover:no-underline"
              >
                Read related page
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Need a custom recommendation?</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Share your project type, target audience, and location. Our team will suggest a practical configuration for
            Cambodia conditions and budget.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 no-underline transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 hover:no-underline"
          >
            Contact Mugnee Cambodia
          </Link>
        </div>
      </section>
    </div>
  );
}
