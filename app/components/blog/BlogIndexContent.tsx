"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import type { BlogPost } from "@/app/content/blog/posts";
import { BLOG_CATEGORY_LABELS, BLOG_INDEX_CATEGORIES } from "@/app/content/blog/posts";
import BlogCategoryFilter from "./BlogCategoryFilter";
import BlogGrid from "./BlogGrid";
import BottomCTA from "./BottomCTA";

type BlogIndexContentProps = {
  allPosts: BlogPost[];
};

export default function BlogIndexContent({ allPosts }: BlogIndexContentProps) {
  const searchParams = useSearchParams();
  const selectedCategory = (searchParams.get("category") || "all").toLowerCase();
  const validCategory = BLOG_INDEX_CATEGORIES.some((item) => item.slug === selectedCategory) ? selectedCategory : "all";

  const posts = useMemo(() => {
    if (validCategory === "all") return allPosts;
    return allPosts.filter((post) => post.category === validCategory);
  }, [allPosts, validCategory]);

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Latest Articles</h2>
      <p className="mt-2 text-sm text-slate-600">
        {validCategory === "all"
          ? "Browse all topic clusters across pricing, installation, guides, and use cases."
          : `Showing category: ${BLOG_CATEGORY_LABELS[validCategory as keyof typeof BLOG_CATEGORY_LABELS]}`}
      </p>
      <div className="mt-5">
        <BlogCategoryFilter selected={validCategory} />
      </div>
      <div className="mt-6">
        <BlogGrid posts={posts} />
      </div>
      <BottomCTA />
    </>
  );
}

