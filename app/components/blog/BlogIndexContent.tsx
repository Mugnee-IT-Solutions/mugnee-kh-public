import type { BlogPost } from "@/app/content/blog/posts";
import BlogGrid from "./BlogGrid";
import BottomCTA from "./BottomCTA";

type BlogIndexContentProps = {
  allPosts: BlogPost[];
};

export default function BlogIndexContent({ allPosts }: BlogIndexContentProps) {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Latest Articles</h2>
      <p className="mt-2 text-sm text-slate-600">
        Browse all topic clusters across pricing, installation, guides, and use cases.
      </p>
      <div className="mt-6">
        <BlogGrid posts={allPosts} />
      </div>
      <BottomCTA />
    </>
  );
}
