type TocItem = {
  id: string;
  label: string;
};

type ArticleTOCProps = {
  items: TocItem[];
  title?: string;
  subtitle?: string;
  moreLabel?: string;
};

export default function ArticleTOC({ items, title = "Table of Contents", subtitle = "Core reading path", moreLabel = "More Sections" }: ArticleTOCProps) {
  if (!items.length) return null;
  const primaryItems = items.slice(0, 8);
  const extraItems = items.slice(8);

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">{title}</h3>
      <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      <ol className="mt-3 space-y-1.5 text-sm">
        {primaryItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block rounded-lg px-2 py-1.5 leading-snug text-slate-700 no-underline transition hover:bg-slate-50 hover:text-sky-700"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
      {extraItems.length ? (
        <details className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-2">
          <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wide text-slate-600">
            {moreLabel} ({extraItems.length})
          </summary>
          <ul className="mt-2 space-y-1 text-sm">
            {extraItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-lg px-2 py-1.5 leading-snug text-slate-700 no-underline transition hover:bg-white hover:text-sky-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </nav>
  );
}
