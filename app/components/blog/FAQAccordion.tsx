import type { BlogFAQ } from "@/app/content/blog/posts";

type FAQAccordionProps = {
  items?: BlogFAQ[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  if (!items?.length) return null;

  return (
    <section id="faq" className="mt-10">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ</h2>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition open:border-sky-300"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
              <div className="flex items-center justify-between gap-3">
                <span>{item.q}</span>
                <span className="text-slate-400 transition-transform group-open:rotate-180">v</span>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

