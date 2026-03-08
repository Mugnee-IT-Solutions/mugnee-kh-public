import type { BlogPost } from "@/app/content/blog/posts";
import BlogGrid from "./BlogGrid";

type RelatedPostsProps = {
  posts: BlogPost[];
  title?: string;
  description?: string;
};

export default function RelatedPosts({ posts, title = "Related Articles", description = "Continue with related buyer guides from the same topic cluster." }: RelatedPostsProps) {
  if (!posts.length) return null;
  return (
    <section className="mt-12 border-t border-slate-200 pt-10">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-5">
        <BlogGrid posts={posts} />
      </div>
    </section>
  );
}
