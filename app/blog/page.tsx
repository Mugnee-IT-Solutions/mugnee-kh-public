import type { Metadata } from "next";
import BlogHero from "@/app/components/blog/BlogHero";
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogIndexContent from "@/app/components/blog/BlogIndexContent";
import JsonLd from "@/app/components/seo/JsonLd";
import {
  getAllBlogPosts,
  getFeaturedBlogPosts,
} from "@/app/content/blog/posts";
import { SITE_URL } from "@/app/lib/site";

const PAGE_PATH = "/blog/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Cambodia Technology Blog & Buying Guides | Mugnee",
  description:
    "Cambodia-focused technology blog from Mugnee with buying guides on LED display, digital signage, PA system, interactive flat panel, installation, pricing, and project planning.",
  alternates: {
    canonical: PAGE_PATH,
    languages: {
      "en-kh": PAGE_PATH,
      "km-kh": "/km/blog/",
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Cambodia Technology Blog & Buying Guides | Mugnee",
    description:
      "Practical Cambodia guides for business technology planning, product selection, installation workflow, and operational readiness.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`,
        width: 1200,
        height: 630,
        alt: "Mugnee Cambodia blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambodia Technology Blog & Buying Guides | Mugnee",
    description:
      "Read Cambodia-targeted buying guides across LED display, digital signage, PA system, and implementation planning.",
    images: [`${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`],
  },
  keywords: [
    "cambodia technology blog",
    "business technology cambodia",
    "led display cambodia",
    "pa system cambodia",
    "interactive flat panel cambodia",
    "access control cambodia",
    "led display price cambodia",
    "digital signage cambodia",
    "led installation phnom penh",
    "outdoor led billboard cambodia",
  ],
};

export default function BlogIndexPage() {
  const featuredPosts = getFeaturedBlogPosts(3);
  const allPosts = getAllBlogPosts();

  return (
    <main className="blog-justified bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <JsonLd
        id="blog-index-jsonld"
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": `${PAGE_URL}#blog`,
              name: "Mugnee Cambodia Blog",
              url: PAGE_URL,
              inLanguage: "en",
              publisher: {
                "@type": "Organization",
                name: "Mugnee Cambodia",
                url: SITE_URL,
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${PAGE_URL}#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Blog", item: PAGE_URL },
              ],
            },
            {
              "@type": "ItemList",
              "@id": `${PAGE_URL}#featured`,
              name: "Featured blog posts",
              itemListElement: featuredPosts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: post.title,
                url: `${SITE_URL}/blog/${post.slug}/`,
              })),
            },
          ],
        }}
      />

      <BlogHero />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Featured Posts</h2>
          <p className="mt-2 text-sm text-slate-600">
            Start with high-intent articles designed to support Cambodia business technology research and buying decisions.
          </p>
          <div className="mt-5">
            <BlogGrid posts={featuredPosts} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <BlogIndexContent allPosts={allPosts} />
        </div>
      </section>
    </main>
  );
}
