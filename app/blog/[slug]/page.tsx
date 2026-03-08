import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import ArticleTOC from "@/app/components/blog/ArticleTOC";
import AuthorTrustBox from "@/app/components/blog/AuthorTrustBox";
import BlogSidebarCTA from "@/app/components/blog/BlogSidebarCTA";
import BottomCTA from "@/app/components/blog/BottomCTA";
import Breadcrumbs from "@/app/components/blog/Breadcrumbs";
import FAQAccordion from "@/app/components/blog/FAQAccordion";
import RelatedPosts from "@/app/components/blog/RelatedPosts";
import FAQJsonLd from "@/app/components/seo/FAQJsonLd";
import JsonLd from "@/app/components/seo/JsonLd";
import {
  BLOG_CATEGORY_LABELS,
  getAllBlogSlugs,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  getBlogSeoMeta,
} from "@/app/content/blog/posts";
import { SITE_URL } from "@/app/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function sectionId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function compactTocLabel(label: string) {
  const withoutPrefix = label.includes(":") ? label.split(":").slice(1).join(":").trim() : label;
  return withoutPrefix
    .replace(/^Why Businesses Choose Mugnee for\s+/i, "Why Mugnee: ")
    .replace(/^Common\s+(.+)\s+Mistakes to Avoid$/i, "Common Mistakes")
    .replace(/^Recommended Use Cases for\s+/i, "Use Cases: ")
    .replace(/^(.+)\s+Buying, Planning, and Cost Factors$/i, "Buying and Cost Factors")
    .replace(/^(.+)\s+Implementation Playbook$/i, "Implementation Playbook")
    .replace(/^(.+)\s+Performance Metrics and Review$/i, "Performance and Review")
    .replace(/^(.+)\s+Local Scenario Walkthrough$/i, "Local Scenario")
    .replace(/^(.+)\s+Decision Matrix and Next 90 Days$/i, "Decision Matrix");
}

function renderParagraphs(content: string) {
  const renderInlineContent = (text: string, blockKey: string): ReactNode[] => {
    const pattern = /\[([^\]]+)\]\((\/[^)]+)\)/g;
    const nodes: ReactNode[] = [];
    let lastIndex = 0;
    let match = pattern.exec(text);

    while (match) {
      if (match.index > lastIndex) {
        nodes.push(text.slice(lastIndex, match.index));
      }
      nodes.push(
        <Link key={`${blockKey}-${match.index}-${match[2]}`} href={match[2]} className="font-semibold text-sky-700 no-underline hover:underline">
          {match[1]}
        </Link>
      );
      lastIndex = match.index + match[0].length;
      match = pattern.exec(text);
    }

    if (lastIndex < text.length) {
      nodes.push(text.slice(lastIndex));
    }
    return nodes;
  };

  return content
    .split("\n\n")
    .filter(Boolean)
    .map((block, index) => {
      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
      const isBulletBlock = lines.length > 1 && lines.every((line) => line.startsWith("- "));
      const key = `${block.slice(0, 18)}-${index}`;

      if (isBulletBlock) {
        return (
          <ul key={key} className="list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {lines.map((line, lineIndex) => (
              <li key={`${key}-li-${lineIndex}`}>{renderInlineContent(line.slice(2), `${key}-li-${lineIndex}`)}</li>
            ))}
          </ul>
        );
      }

      return (
        <p key={key} className="text-sm leading-7 text-slate-700 sm:text-base">
          {renderInlineContent(block, key)}
        </p>
      );
    });
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const canonical = `/blog/${post.slug}/`;
  const seoMeta = getBlogSeoMeta(post);
  const title = seoMeta.title;
  const description = seoMeta.description;
  const ogTitle = seoMeta.ogTitle || title;
  const ogDescription = seoMeta.ogDescription || description;

  return {
    title,
    description,
    keywords: post.keywords,
    alternates: {
      canonical,
      languages: {
        "en-kh": canonical,
        "km-kh": `/km/blog/${post.slug}/`,
        "x-default": canonical,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: ["Mugnee Cambodia"],
      images: [
        {
          url: `${SITE_URL}${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [`${SITE_URL}${post.coverImage}`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const pageUrl = `${SITE_URL}/blog/${post.slug}/`;
  const relatedPosts = getRelatedBlogPosts(post, 3);
  const tocItems = post.sections
    .map((section) => ({ id: sectionId(section.heading), label: section.heading }))
    .filter((item) => !/^Intro:/i.test(item.label))
    .filter((item) => !/^Conclusion:/i.test(item.label))
    .map((item) => ({ ...item, label: compactTocLabel(item.label) }));

  return (
    <main className="blog-justified bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <JsonLd
        id={`blog-post-jsonld-${post.slug}`}
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              keywords: post.keywords,
              image: `${SITE_URL}${post.coverImage}`,
              author: {
                "@type": "Organization",
                name: "Mugnee Cambodia",
                url: SITE_URL,
              },
              publisher: {
                "@type": "Organization",
                name: "Mugnee Cambodia",
                url: SITE_URL,
              },
              datePublished: post.publishedAt,
              dateModified: post.updatedAt || post.publishedAt,
              mainEntityOfPage: pageUrl,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
                { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
              ],
            },
          ],
        }}
      />
      {post.faq?.length ? (
        <FAQJsonLd id={`blog-faq-jsonld-${post.slug}`} items={post.faq.map((item) => ({ question: item.q, answer: item.a, language: "en" as const }))} />
      ) : null}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: post.title }]} />
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/7]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 1200px, 100vw"
                priority
              />
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
              {BLOG_CATEGORY_LABELS[post.category]}
            </span>
            <span className="text-xs text-slate-500">{post.readingTime} min read</span>
          </div>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">{post.description}</p>
          <AuthorTrustBox />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <article>
            <div className="grid gap-8">
              {post.sections.map((section) => (
                <section key={section.heading} id={sectionId(section.heading)}>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">{section.heading}</h2>
                  <div className="mt-3 grid gap-4">{renderParagraphs(section.content)}</div>
                  {section.subSections?.length ? (
                    <div className="mt-5 grid gap-5">
                      {section.subSections.map((sub) => (
                        <section key={sub.heading}>
                          <h3 className="text-lg font-semibold text-slate-900">{sub.heading}</h3>
                          <div className="mt-2 grid gap-3">{renderParagraphs(sub.content)}</div>
                        </section>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700">
              Looking for LED Display solutions in Cambodia? Explore Mugnee&apos;s{" "}
              <Link href="/led-display/" className="font-semibold text-sky-700 no-underline hover:underline">
                LED Display solutions
              </Link>
              , see{" "}
              <Link href="/service/" className="font-semibold text-sky-700 no-underline hover:underline">
                service support
              </Link>
              , or{" "}
              <Link href="/contact/" className="font-semibold text-sky-700 no-underline hover:underline">
                request a quotation
              </Link>
              .
            </div>

            {post.internalLinks?.length ? (
              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-xl font-bold tracking-tight text-slate-900">Recommended Internal Links</h2>
                <ul className="mt-3 grid gap-2 text-sm">
                  {post.internalLinks.map((item) => (
                    <li key={`${item.href}-${item.anchor}`}>
                      <Link href={item.href} className="font-semibold text-sky-700 no-underline hover:underline">
                        {item.anchor}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <FAQAccordion items={post.faq} />
            <BottomCTA />
            <RelatedPosts posts={relatedPosts} />
          </article>

          <div className="space-y-4">
            <ArticleTOC items={tocItems} />
            <BlogSidebarCTA />
          </div>
        </div>
      </section>
    </main>
  );
}
