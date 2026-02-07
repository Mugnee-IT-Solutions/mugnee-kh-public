import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm font-semibold text-slate-600">404</p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-slate-600">
          The page you are looking for does not exist.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
