import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import ArticleTOC from "../../../app/components/blog/ArticleTOC";
import Breadcrumbs from "../../../app/components/blog/Breadcrumbs";
import FAQAccordion from "../../../app/components/blog/FAQAccordion";
import RelatedPosts from "../../../app/components/blog/RelatedPosts";
import FAQJsonLd from "../../../app/components/seo/FAQJsonLd";
import JsonLd from "../../../app/components/seo/JsonLd";
import {
  BLOG_CATEGORY_LABELS_KM,
  getAllKmBlogSlugs,
  getKmBlogPostBySlug,
  getRelatedKmBlogPosts,
} from "../../../app/content/blog/posts.km";
import type { BlogPost } from "../../../app/content/blog/posts";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

function sectionId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u1780-\u17ff\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function normalizeWhitespace(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function trimMetaText(text: string, maxLength: number) {
  const normalized = normalizeWhitespace(text);
  if (normalized.length <= maxLength) return normalized;

  const sliced = normalized.slice(0, maxLength + 1);
  const boundary = Math.max(sliced.lastIndexOf("។"), sliced.lastIndexOf(" "), sliced.lastIndexOf(", "));
  const trimmed = boundary > 80 ? sliced.slice(0, boundary) : normalized.slice(0, maxLength);
  return trimmed.replace(/[,\s]+$/, "").trim();
}

function normalizeMetaDescription(text: string, fallbackText: string) {
  const base = normalizeWhitespace(text || fallbackText);
  const enriched =
    base.length < 110
      ? `${base} មានការណែនាំតម្លៃ BOQ ការដំឡើង និងការគាំទ្រក្នុងស្រុកពី Mugnee Cambodia។`
      : base;
  return trimMetaText(enriched, 158);
}

function trimTitle(value: string, max = 58) {
  if (/[\u1780-\u17FF]/.test(value)) return value;
  if (value.length <= max) return value;
  const sliced = value.slice(0, max + 1);
  const boundary = Math.max(sliced.lastIndexOf(" "), sliced.lastIndexOf(":"), sliced.lastIndexOf(","));
  return (boundary > 24 ? sliced.slice(0, boundary) : value.slice(0, max))
    .replace(/[,:\s]+$/g, "")
    .trim();
}

function renderParagraphs(content: string) {
  const renderInlineContent = (text: string, key: string) => {
    const pattern = /\[([^\]]+)\]\((\/[^)]+)\)/g;
    const nodes: ReactNode[] = [];
    let lastIndex = 0;
    let match = pattern.exec(text);
    while (match) {
      if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
      nodes.push(
        <Link key={`${key}-${match.index}`} href={match[2]} className="font-semibold text-sky-700 no-underline hover:underline">
          {match[1]}
        </Link>,
      );
      lastIndex = match.index + match[0].length;
      match = pattern.exec(text);
    }
    if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
    return nodes;
  };

  return content
    .split("\n\n")
    .filter(Boolean)
    .map((block, index) => {
      const lines = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      const isBullets = lines.length > 1 && lines.every((line) => line.startsWith("- "));
      const key = `${block.slice(0, 12)}-${index}`;
      if (isBullets) {
        return (
          <ul key={key} className="list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {lines.map((line, lineIndex) => (
              <li key={`${key}-${lineIndex}`}>{renderInlineContent(line.slice(2), `${key}-${lineIndex}`)}</li>
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

type PageProps = {
  post: BlogPost;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllKmBlogSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  const post = getKmBlogPostBySlug(slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};

export default function KmBlogPostPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const canonicalPath = `/km/blog/${post.slug}/`;
  const title = trimTitle(post.title);
  const description = normalizeMetaDescription(post.description, post.excerpt || post.description);
  const pageUrl = `${SITE_URL}${canonicalPath}`;

  const relatedPosts = getRelatedKmBlogPosts(post, 3);
  const tocItems = post.sections
    .map((section) => ({ id: sectionId(section.heading), label: section.heading }))
    .filter((item) => !/^សេចក្តីផ្តើម/i.test(item.label))
    .filter((item) => !/^សេចក្តីសន្និដ្ឋាន/i.test(item.label));

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/blog/${post.slug}/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/blog/${post.slug}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}${canonicalPath}`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post.updatedAt || post.publishedAt} />
        <meta property="og:image" content={`${SITE_URL}${post.coverImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={post.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${post.coverImage}`} />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
        >
          <div className="blog-justified bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
            <JsonLd
              id={`km-blog-post-jsonld-${post.slug}`}
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
                      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/km/` },
                      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/km/blog/` },
                      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
                    ],
                  },
                ],
              }}
            />

            {post.faq?.length ? (
              <FAQJsonLd
                id={`km-blog-faq-jsonld-${post.slug}`}
                pageLanguage="km"
                items={post.faq.map((item) => ({ question: item.q, answer: item.a, language: "km" as const }))}
              />
            ) : null}

            <section className="border-b border-slate-200 bg-white">
              <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <Breadcrumbs items={[{ label: "Home", href: "/km/" }, { label: "Blog", href: "/km/blog/" }, { label: post.title }]} />
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
                    {BLOG_CATEGORY_LABELS_KM[post.category]}
                  </span>
                  <span className="text-xs text-slate-500">{post.readingTime} min read</span>
                </div>
                <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  {post.title}
                </h1>
                <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">{post.description}</p>
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
                    ត្រូវការដំណោះស្រាយ LED Display នៅកម្ពុជា? សូមមើល{" "}
                    <Link href="/km/led-display/" className="font-semibold text-sky-700 no-underline hover:underline">
                      LED Display
                    </Link>{" "}
                    ឬ{" "}
                    <Link href="/km/contact/" className="font-semibold text-sky-700 no-underline hover:underline">
                      ទាក់ទងក្រុមការងារ
                    </Link>
                    ។
                  </div>

                  <FAQAccordion items={post.faq} title="សំណួរដែលសួរញឹកញាប់" />

                  <section className="mt-12">
                    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900">ត្រូវការជំនួយជ្រើសរើសអេក្រង់ LED?</h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        ផ្ញើព័ត៌មានអំពីគម្រោងរបស់អ្នក ហើយក្រុម Mugnee Cambodia នឹងជួយរៀបចំ scope និងផែនការអនុវត្តជាក់ស្តែង។
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                          href="/km/led-display/"
                          className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                          មើល LED Display
                        </Link>
                        <Link
                          href="/km/contact/"
                          className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
                        >
                          ទាក់ទងយើង
                        </Link>
                      </div>
                    </div>
                  </section>

                  <RelatedPosts
                    posts={relatedPosts}
                    title="អត្ថបទពាក់ព័ន្ធ"
                    description="បន្តអានអត្ថបទដែលពាក់ព័ន្ធក្នុងប្រធានបទដូចគ្នា ដើម្បីសម្រេចចិត្តបានច្បាស់ជាងមុន។"
                    hrefPrefix="/km/blog"
                    categoryLabelMap={BLOG_CATEGORY_LABELS_KM}
                    readMoreLabel="អានបន្ថែម"
                  />
                </article>

                <div className="space-y-4">
                  <ArticleTOC title="តារាងមាតិកា" subtitle="ផ្លូវអានសំខាន់" moreLabel="មើលផ្នែកបន្ថែម" items={tocItems} />
                  <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <h3 className="text-base font-bold text-slate-900">ត្រូវការការណែនាំគម្រោង?</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      សូមទាក់ទង Mugnee Cambodia ដើម្បីទទួលបានការណែនាំ និង quotation សមស្របតាមទីតាំងគម្រោង។
                    </p>
                    <div className="mt-4 grid gap-2">
                      <Link
                        href="/km/service/"
                        className="rounded-xl bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Service &amp; Support
                      </Link>
                      <Link
                        href="/km/contact/"
                        className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400"
                      >
                        ទាក់ទង Mugnee
                      </Link>
                    </div>
                  </aside>
                </div>
              </div>
            </section>
          </div>

          <SiteFooter />
        </main>
      </div>
    </>
  );
}
