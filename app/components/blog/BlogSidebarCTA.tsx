import Link from "next/link";

export default function BlogSidebarCTA() {
  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <h3 className="text-base font-bold text-slate-900">Need a quotation?</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Need help choosing pixel pitch or screen type? Talk with Mugnee Cambodia for practical planning support.
      </p>
      <div className="mt-4 grid gap-2">
        <Link
          href="/led-display/"
          className="rounded-xl bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          LED Display in Cambodia
        </Link>
        <Link
          href="/service/"
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400"
        >
          Service and Support
        </Link>
        <Link
          href="/contact/"
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400"
        >
          Contact Mugnee Cambodia
        </Link>
      </div>
    </aside>
  );
}

