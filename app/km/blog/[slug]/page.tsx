import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import ArticleTOC from "@/app/components/blog/ArticleTOC";
import FAQAccordion from "@/app/components/blog/FAQAccordion";
import RelatedPosts from "@/app/components/blog/RelatedPosts";
import Breadcrumbs from "@/app/components/blog/Breadcrumbs";
import FAQJsonLd from "@/app/components/seo/FAQJsonLd";
import JsonLd from "@/app/components/seo/JsonLd";
import {
  BLOG_CATEGORY_LABELS_KM,
  getAllKmBlogSlugs,
  getKmBlogPostBySlug,
  getRelatedKmBlogPosts,
} from "@/app/content/blog/posts.km";
import { SITE_URL } from "@/app/lib/site";

type KmBlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function sectionId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u1780-\u17ff\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function renderParagraphs(content: string) {
  const renderInlineContent = (text: string, key: string): ReactNode[] => {
    const pattern = /\[([^\]]+)\]\((\/[^)]+)\)/g;
    const nodes: ReactNode[] = [];
    let lastIndex = 0;
    let match = pattern.exec(text);
    while (match) {
      if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
      nodes.push(
        <Link key={`${key}-${match.index}`} href={match[2]} className="font-semibold text-sky-700 no-underline hover:underline">
          {match[1]}
        </Link>
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
      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
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

export function generateStaticParams() {
  return getAllKmBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: KmBlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getKmBlogPostBySlug(slug);
  if (!post) return {};

  const canonical = `/km/blog/${post.slug}/`;
  return {
    title: `${post.title} | Mugnee Cambodia`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical,
      languages: {
        "en-kh": `/blog/${post.slug}/`,
        "km-kh": canonical,
        "x-default": `/blog/${post.slug}/`,
      },
    },
    openGraph: {
      title: `${post.title} | Mugnee Cambodia`,
      description: post.description,
      url: canonical,
      type: "article",
      images: [{ url: `${SITE_URL}${post.coverImage}`, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function KmBlogPostPage({ params }: KmBlogPostPageProps) {
  const { slug } = await params;
  const post = getKmBlogPostBySlug(slug);
  if (!post) notFound();

  const pageUrl = `${SITE_URL}/km/blog/${post.slug}/`;
  const tocItems = post.sections
    .map((section) => ({ id: sectionId(section.heading), label: section.heading }))
    .filter((item) => !/^សេចក្តីផ្តើម/i.test(item.label))
    .filter((item) => !/^សេចក្តីសន្និដ្ឋាន/i.test(item.label));

  return (
    <main className="blog-justified bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
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
              inLanguage: "km",
              author: { "@type": "Organization", name: "Mugnee Cambodia", url: SITE_URL },
              publisher: { "@type": "Organization", name: "Mugnee Cambodia", url: SITE_URL },
              datePublished: post.publishedAt,
              dateModified: post.updatedAt || post.publishedAt,
              mainEntityOfPage: pageUrl,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "ទំព័រដើម", item: `${SITE_URL}/km/` },
                { "@type": "ListItem", position: 2, name: "ប្លក់", item: `${SITE_URL}/km/blog/` },
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
          <Breadcrumbs items={[{ label: "ទំព័រដើម", href: "/km/" }, { label: "ប្លក់", href: "/km/blog/" }, { label: post.title }]} />
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/7]">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(min-width: 1280px) 1200px, 100vw" priority />
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
              {BLOG_CATEGORY_LABELS_KM[post.category]}
            </span>
            <span className="text-xs text-slate-500">{post.readingTime} min read</span>
          </div>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">{post.description}</p>
          <aside className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">សម្រាប់អ្នកសម្រេចចិត្តអាជីវកម្មនៅកម្ពុជា</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Mugnee Cambodia ផ្តល់ដំណោះស្រាយ LED Display, Digital Signage និង AV ជាមួយការគាំទ្រនៅភ្នំពេញ សៀមរាប
              និងព្រះសីហនុ។
            </p>
          </aside>
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
              posts={getRelatedKmBlogPosts(post, 3)}
              title="អត្ថបទពាក់ព័ន្ធ"
              description="បន្តអានអត្ថបទដែលពាក់ព័ន្ធក្នុងប្រធានបទដូចគ្នា ដើម្បីសម្រេចចិត្តបានច្បាស់ជាងមុន។"
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
                <Link href="/km/service/" className="rounded-xl bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-800">
                  Service & Support
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
    </main>
  );
}
