export default function Loading() {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="animate-pulse space-y-6">
          <div className="h-7 w-72 rounded bg-slate-200" />
          <div className="h-4 w-full max-w-2xl rounded bg-slate-200" />
          <div className="h-4 w-full max-w-xl rounded bg-slate-200" />

          <div className="grid gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="h-10 w-10 rounded-xl bg-slate-200" />
                <div className="mt-4 h-4 w-40 rounded bg-slate-200" />
                <div className="mt-3 h-3 w-full rounded bg-slate-200" />
                <div className="mt-2 h-3 w-5/6 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

