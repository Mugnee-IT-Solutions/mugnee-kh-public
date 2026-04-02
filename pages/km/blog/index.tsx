import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import JsonLd from "../../../app/components/seo/JsonLd";
import BlogGrid from "../../../app/components/blog/BlogGrid";
import Breadcrumbs from "../../../app/components/blog/Breadcrumbs";
import { BLOG_CATEGORY_LABELS_KM, getAllKmBlogPosts, getFeaturedKmBlogPosts } from "../../../app/content/blog/posts.km";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const PAGE_PATH = "/km/blog/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const title = "ប្លក់បច្ចេកវិទ្យាភាសាខ្មែរ | LED Display កម្ពុជា";
const description =
  "អត្ថបទភាសាខ្មែរអំពី LED Display, Digital Signage, Smart Board, PA System និងគន្លឹះជ្រើសរើសផលិតផលនៅកម្ពុជា។";

export default function KmBlogIndexPage() {
  const featuredPosts = getFeaturedKmBlogPosts(3);
  const allPosts = getAllKmBlogPosts();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}${PAGE_PATH}`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/blog/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}${PAGE_PATH}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/blog/`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="ស្វែងយល់អត្ថបទជាក់ស្តែង ដើម្បីសម្រេចចិត្តទិញផលិតផលបច្ចេកវិទ្យា និងអនុវត្តគម្រោងអាជីវកម្មបានមានប្រសិទ្ធភាពនៅកម្ពុជា។"
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
        <meta property="og:image:alt" content="Mugnee Cambodia Khmer blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
              id="km-blog-index-jsonld"
              data={{
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Blog",
                    "@id": `${PAGE_URL}#blog`,
                    name: "Mugnee Cambodia Khmer Blog",
                    url: PAGE_URL,
                    inLanguage: "km",
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
                      { "@type": "ListItem", position: 1, name: "ទំព័រដើម", item: `${SITE_URL}/km/` },
                      { "@type": "ListItem", position: 2, name: "ប្លក់", item: PAGE_URL },
                    ],
                  },
                ],
              }}
            />

            <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
              </div>
              <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <Breadcrumbs items={[{ label: "ទំព័រដើម", href: "/km/" }, { label: "ប្លក់" }]} />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Insights</p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  ប្លក់បច្ចេកវិទ្យាអាជីវកម្មកម្ពុជា និងមគ្គុទេសក៍ទិញ
                </h1>
                <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  ស្វែងយល់អត្ថបទភាសាខ្មែរ អំពី LED Display, Digital Signage, ការដំឡើង, តម្លៃ, និងការគ្រប់គ្រងគម្រោង
                  ដើម្បីជួយក្រុមការងារធ្វើសេចក្តីសម្រេចបានច្បាស់ និងអនុវត្តបានជាក់ស្តែង។
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/km/solutions/"
                    className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                  >
                    មើលដំណោះស្រាយកម្ពុជា
                  </Link>
                  <Link
                    href="/km/contact/"
                    className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
                  >
                    ទាក់ទង Mugnee Cambodia
                  </Link>
                </div>
              </div>
            </section>

            <section className="border-b border-slate-200 bg-white">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">អត្ថបទណែនាំសំខាន់ៗ</h2>
                <p className="mt-2 text-sm text-slate-600">
                  ចាប់ផ្តើមពីអត្ថបទដែលមាន intent ខ្ពស់ សម្រាប់ជួយការសម្រេចចិត្តទិញ និងអនុវត្តគម្រោងនៅកម្ពុជា។
                </p>
                <div className="mt-5">
                  <BlogGrid
                    posts={featuredPosts}
                    hrefPrefix="/km/blog"
                    categoryLabelMap={BLOG_CATEGORY_LABELS_KM}
                    readMoreLabel="អានបន្ថែម"
                  />
                </div>
              </div>
            </section>

            <section className="bg-white">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">អត្ថបទចុងក្រោយ</h2>
                <p className="mt-2 text-sm text-slate-600">
                  មើលអត្ថបទទាំងអស់តាមប្រធានបទ ដើម្បីរៀបចំផែនការគម្រោងបានល្អជាងមុន។
                </p>
                <div className="mt-6">
                  <BlogGrid
                    posts={allPosts}
                    hrefPrefix="/km/blog"
                    categoryLabelMap={BLOG_CATEGORY_LABELS_KM}
                    readMoreLabel="អានបន្ថែម"
                  />
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
