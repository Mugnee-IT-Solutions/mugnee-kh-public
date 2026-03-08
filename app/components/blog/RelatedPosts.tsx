import type { BlogPost } from "@/app/content/blog/posts";
import BlogGrid from "./BlogGrid";

type RelatedPostsProps = {
  posts: BlogPost[];
};

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;
  return (
    <section className="mt-12 border-t border-slate-200 pt-10">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Related Articles</h2>
      <p className="mt-2 text-sm text-slate-600">Continue with related buyer guides from the same topic cluster.</p>
      <div className="mt-5">
        <BlogGrid posts={posts} />
      </div>
    </section>
  );
}

