/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "LED Controller in Cambodia | Mugnee Cambodia",
  description:
    "LED controller and processor solutions in Cambodia for stable screen control, signal management, and reliable project delivery.",
  alternates: {
    canonical: `${SITE_URL}/products/led-controller/`,
    languages: {
      "en-kh": "/products/led-controller/",
      "x-default": "/products/led-controller/",
    },
  },
  robots: { index: false, follow: true },
};

export default function LedControllerPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-slate-600">LED Components</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          LED Controller in Cambodia
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
          We supply LED controller solutions for indoor and outdoor displays with practical setup
          guidance, clean signal flow, and stable long-term operation.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/led-display/receiving-card"
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Receiving Card
          </Link>
          <Link
            href="/led-display/video-processor"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Video Processor
          </Link>
          <Link
            href="/led-display/power-supply"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Power Supply
          </Link>
        </div>
      </section>
    </main>
  );
}
