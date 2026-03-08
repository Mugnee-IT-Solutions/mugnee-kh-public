import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Insights</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Cambodia Business Technology Blog and Buying Guides
        </h1>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Explore Cambodia-focused articles across LED display, digital signage, PA system, interactive flat panel,
          access control, installation, pricing, and business planning. This blog is built as a parent knowledge hub
          to support practical research and decision-making.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/solutions/"
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
          >
            Explore Cambodia Solutions
          </Link>
          <Link
            href="/contact/"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
          >
            Contact Mugnee Cambodia
          </Link>
        </div>
      </div>
    </section>
  );
}
