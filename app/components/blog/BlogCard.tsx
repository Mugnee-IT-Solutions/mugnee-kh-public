import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/app/content/blog/posts";
import { BLOG_CATEGORY_LABELS } from "@/app/content/blog/posts";
import type { BlogCategory } from "@/app/content/blog/posts";

type BlogCardProps = {
  post: BlogPost;
  hrefPrefix?: string;
  categoryLabelMap?: Record<BlogCategory, string>;
  readMoreLabel?: string;
};

export default function BlogCard({
  post,
  hrefPrefix = "/blog",
  categoryLabelMap = BLOG_CATEGORY_LABELS,
  readMoreLabel = "Read More",
}: BlogCardProps) {
  return (
    <article className="h-full">
      <Link
        href={`${hrefPrefix}/${post.slug}/`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
              {categoryLabelMap[post.category]}
            </span>
            <span className="text-xs text-slate-500">{post.readingTime} min read</span>
          </div>
          <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">{post.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
          <span className="mt-4 inline-flex text-sm font-semibold text-sky-700">{readMoreLabel}</span>
        </div>
      </Link>
    </article>
  );
}
