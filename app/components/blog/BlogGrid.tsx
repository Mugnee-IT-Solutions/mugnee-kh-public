import type { BlogCategory, BlogPost } from "@/app/content/blog/posts";
import BlogCard from "./BlogCard";

type BlogGridProps = {
  posts: BlogPost[];
  hrefPrefix?: string;
  categoryLabelMap?: Record<BlogCategory, string>;
};

export default function BlogGrid({ posts, hrefPrefix, categoryLabelMap }: BlogGridProps) {
  if (!posts.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-600">
        No posts found in this category yet.
      </div>
    );
  }

  return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
        <BlogCard key={post.slug} post={post} hrefPrefix={hrefPrefix} categoryLabelMap={categoryLabelMap} />
      ))}
    </div>
  );
}
