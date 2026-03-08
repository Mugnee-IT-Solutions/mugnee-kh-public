import Link from "next/link";
import { BLOG_INDEX_CATEGORIES } from "@/app/content/blog/posts";

type BlogCategoryFilterProps = {
  selected: string;
};

export default function BlogCategoryFilter({ selected }: BlogCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {BLOG_INDEX_CATEGORIES.map((item) => {
        const active = selected === item.slug || (!selected && item.slug === "all");
        const href = item.slug === "all" ? "/blog/" : `/blog/?category=${item.slug}`;
        return (
          <Link
            key={item.slug}
            href={href}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              active
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

