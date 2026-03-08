import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="mt-12">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Need help choosing an LED display?</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Share your use case and location. Mugnee Cambodia will help with scope, quotation planning, and installation
          support.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/led-display/"
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View LED Display Solutions
          </Link>
          <Link
            href="/contact/"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Contact Mugnee
          </Link>
        </div>
      </div>
    </section>
  );
}

