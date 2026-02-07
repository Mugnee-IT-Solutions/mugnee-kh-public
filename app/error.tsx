"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm font-semibold text-red-600">Runtime Error</p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          Something went wrong
        </h1>
        <p className="mt-3 text-slate-600">
          Please try again. If the issue continues, contact our team.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => reset()}
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Go to Home
          </Link>
        </div>

        <details className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <summary className="cursor-pointer text-sm font-semibold text-slate-900">
            Technical details
          </summary>
          <pre className="mt-3 overflow-auto whitespace-pre-wrap text-xs text-slate-700">
            {error?.message}
          </pre>
        </details>
      </div>
    </main>
  );
}
