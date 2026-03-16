import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import JsonLd from "../../app/components/seo/JsonLd";
import BlogHero from "../../app/components/blog/BlogHero";
import BlogGrid from "../../app/components/blog/BlogGrid";
import BlogIndexContent from "../../app/components/blog/BlogIndexContent";
import { getAllBlogPosts, getFeaturedBlogPosts } from "../../app/content/blog/posts";
import { SITE_URL } from "../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const PAGE_PATH = "/blog/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const title = "Cambodia Technology Blog & Buying Guides | Mugnee";
const description =
  "Cambodia-focused buying guides on LED display, digital signage, PA systems, smart boards, pricing, and installation.";

export default function BlogIndexPage() {
  const featuredPosts = getFeaturedBlogPosts(3);
  const allPosts = getAllBlogPosts();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}${PAGE_PATH}`} />
        <link rel="alternate" hrefLang="en-kh" href={`${SITE_URL}${PAGE_PATH}`} />
        <link rel="alternate" hrefLang="km-kh" href={`${SITE_URL}/km/blog/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${PAGE_PATH}`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Practical Cambodia guides for business technology planning, product selection, installation workflow, and operational readiness."
        />
        <meta property="og:url" content={`${SITE_URL}${PAGE_PATH}`} />
        <meta property="og:site_name" content="Mugnee Cambodia" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mugnee Cambodia blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Read Cambodia-targeted buying guides across LED display, digital signage, PA system, and implementation planning."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`}
        />
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
          </div>

          <SiteFooter />
        </main>
      </div>
    </>
  );
}

