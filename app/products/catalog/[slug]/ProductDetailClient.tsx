"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import { useLang } from "../../../components/layout/LanguageProvider";
import type { Product } from "../../../data/products";

const KHMER_RE = /[\u1780-\u17FF]/;
const MOJIBAKE_RE = /\u00C3|\u00C2|\u00E2|\u0192|\uFFFD|\u00E1\u017E/;

function decodeLatin1AsUtf8(str: string) {
  const bytes = Uint8Array.from(Array.from(str).map((ch) => ch.charCodeAt(0) & 0xff));
  return new TextDecoder("utf-8").decode(bytes);
}

function repairMojibake(input: string) {
  let out = input;
  for (let i = 0; i < 3; i += 1) {
    if (!MOJIBAKE_RE.test(out)) break;
    try {
      const decoded = decodeLatin1AsUtf8(out);
      if (!decoded || decoded === out) break;
      out = decoded;
    } catch {
      break;
    }
  }
  return out;
}

function sanitizeKhmer(value: string, fallback: string) {
  if (!value?.trim()) return fallback;
  if (!MOJIBAKE_RE.test(value)) return value;
  const repaired = repairMojibake(value).trim();
  if (!repaired || MOJIBAKE_RE.test(repaired)) return fallback;
  return repaired;
}

function hasKhmer(value: string) {
  return KHMER_RE.test(value);
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function autoTranslateToKhmer(input: string) {
  const text = input?.trim();
  if (!text || hasKhmer(text)) return text;

  const map: Array<[string, string]> = [
    ["Interactive Flat Panel", "អេក្រង់អន្តរកម្ម"],
    ["Indoor LED Display", "អេក្រង់ LED ក្នុងអគារ"],
    ["Outdoor LED Display", "អេក្រង់ LED ខាងក្រៅ"],
    ["Rental LED Display", "អេក្រង់ LED សម្រាប់ជួល"],
    ["LED Display Module", "ម៉ូឌុលអេក្រង់ LED"],
    ["LED Screen Panel", "បន្ទះអេក្រង់ LED"],
    ["LED Display", "អេក្រង់ LED"],
    ["Video Processor", "ឧបករណ៍កែច្នៃវីដេអូ"],
    ["Power Supply", "ឧបករណ៍ផ្គត់ផ្គង់ថាមពល"],
    ["PA Speakers", "ឧបករណ៍បំពងសំឡេង PA"],
    ["PA Microphones", "មីក្រូហ្វូន PA"],
    ["PA Amplifiers", "អំព្លីសំឡេង PA"],
    ["PA Controllers", "ឧបករណ៍បញ្ជា PA"],
    ["Network Audio", "សំឡេងតាមបណ្ដាញ"],
    ["PA Software", "កម្មវិធី PA"],
    ["PA Accessories", "គ្រឿងបន្លាស់ PA"],
    ["Turnstile Gate", "ច្រកសុវត្ថិភាព"],
    ["Tripod Turnstile", "ច្រកសុវត្ថិភាព Tripod"],
    ["Flap Barrier", "ច្រកស្លាបបិទបើក"],
    ["Speed Gate", "ច្រកល្បឿនលឿន"],
    ["Full Height", "កម្ពស់ពេញ"],
    ["Key Features", "មុខងារសំខាន់ៗ"],
    ["Overview", "ទិដ្ឋភាពទូទៅ"],
    ["Specifications", "លក្ខណៈបច្ចេកទេស"],
    ["Applications", "ការប្រើប្រាស់"],
    ["Product", "ផលិតផល"],
    ["for", "សម្រាប់"],
    ["with", "ជាមួយ"],
    ["and", "និង"],
    ["in", "នៅ"],
    ["to", "ទៅ"],
    ["from", "ពី"],
  ];

  let out = text;
  for (const [en, km] of map) {
    out = out.replace(new RegExp(escapeRegExp(en), "gi"), km);
  }

  if (hasKhmer(out)) return out;
  return "ព័ត៌មានលម្អិតផលិតផល";
}

function localizedKhmer(valueKm: string, fallbackEn: string) {
  const cleaned = sanitizeKhmer(valueKm, fallbackEn);
  if (hasKhmer(cleaned)) return cleaned;
  return autoTranslateToKhmer(cleaned);
}

function localizedKhmerStrict(valueKm: string, fallbackEn: string) {
  return sanitizeKhmer(valueKm, fallbackEn);
}

type ProductDetailClientProps = {
  product: Product;
  relatedProducts: Product[];
};

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { lang } = useLang();
  const toLangHref = (href: string) =>
    lang === "km" && href.startsWith("/") && !href.startsWith("/km/") ? `/km${href}` : href;
  const ui =
    lang === "km"
      ? {
          productLabel: "ផលិតផល",
          getQuotation: "ស្នើសុំតម្លៃ",
          backToProducts: "ត្រឡប់ទៅផលិតផល",
          guidanceTitle: "ត្រូវការតម្លៃគម្រោងអេក្រង់ LED និងការណែនាំដំឡើងមែនទេ?",
          guidanceDesc:
            "ប្រើទំព័រ LED Display Cambodia Hub របស់យើង សម្រាប់កត្តា BOQ ការរៀបចំក្នុងអគារ/ក្រៅអគារ និងលំហូរការងារគម្រោង។",
          hubLink: "មជ្ឈមណ្ឌល LED Display Cambodia",
          indoorLink: "អេក្រង់ LED ក្នុងអគារ",
          outdoorLink: "ប៊ីលបត LED ខាងក្រៅ",
          overview: "ទិដ្ឋភាពទូទៅ",
          keyFeatures: "មុខងារសំខាន់ៗ",
          applications: "ការប្រើប្រាស់",
          specifications: "លក្ខណៈបច្ចេកទេស",
          relatedProducts: "ផលិតផលដែលពាក់ព័ន្ធ",
        }
      : {
          productLabel: "Product",
          getQuotation: "Get Quotation",
          backToProducts: "Back to Products",
          guidanceTitle: "Need LED display project pricing and installation guidance?",
          guidanceDesc:
            "Use our LED Display Cambodia pillar page for BOQ factors, indoor/outdoor planning, and project workflow.",
          hubLink: "LED Display Cambodia Hub",
          indoorLink: "Indoor LED Display",
          outdoorLink: "Outdoor LED Billboard",
          overview: "Overview",
          keyFeatures: "Key Features",
          applications: "Applications",
          specifications: "Specifications",
          relatedProducts: "Related Products",
        };

  useEffect(() => {
    const scrollTop = () => {
      const root = document.getElementById("app-scroll-root");
      if (root instanceof HTMLElement) {
        root.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    const frame = window.requestAnimationFrame(() => {
      scrollTop();
    });

    const timer = window.setTimeout(() => {
      scrollTop();
    }, 0);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [product.slug]);

  const title = lang === "en" ? product.titleEn : localizedKhmer(product.titleKm, product.titleEn);
  const shortDesc =
    lang === "en" ? product.shortDescEn : localizedKhmer(product.shortDescKm, product.shortDescEn);
  const description =
    lang === "en"
      ? product.descriptionEn
      : localizedKhmer(product.descriptionKm, product.descriptionEn);
  const features =
    lang === "en"
      ? product.featuresEn
      : product.featuresKm.map((item, i) => localizedKhmer(item, product.featuresEn[i] || item));
  const applications =
    lang === "en"
      ? product.applicationsEn
      : product.applicationsKm.map((item, i) =>
          localizedKhmer(item, product.applicationsEn[i] || item)
        );
  const tags =
    lang === "en"
      ? product.tagsEn
      : product.tagsKm.map((item, i) => localizedKhmer(item, product.tagsEn[i] || item));
  const galleryImages = useMemo(() => {
    const items = [product.heroImage, ...product.gallery];
    return Array.from(new Set(items.filter(Boolean)));
  }, [product.heroImage, product.gallery]);
  const [activeImage, setActiveImage] = useState(galleryImages[0] ?? product.heroImage);
  const [zoom, setZoom] = useState({ x: 50, y: 50, show: false, px: 0, py: 0 });
  const handleZoomMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - rect.left;
    const relY = event.clientY - rect.top;
    const x = (relX / rect.width) * 100;
    const y = (relY / rect.height) * 100;
    setZoom({ x, y, show: true, px: relX, py: relY });
  };

  return (
    <div className="bg-white text-slate-900">
      <section className="border-b border-slate-100">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {galleryImages.length > 1 ? (
              <div className="grid gap-4 sm:grid-cols-[0.2fr_0.8fr]">
                <div
                  className={`order-2 flex gap-3 overflow-x-auto pb-2 sm:order-1 sm:flex-col sm:pb-0 ${
                    galleryImages.length > 3
                      ? "sm:max-h-[372px] sm:overflow-y-auto sm:pr-1"
                      : "sm:overflow-visible"
                  }`}
                >
                  {galleryImages.map((img) => {
                    const isActive = img === activeImage;
                    return (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setActiveImage(img)}
                        className={`relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl border bg-white transition sm:w-full ${
                          isActive
                            ? "border-slate-900 ring-2 ring-slate-900/20"
                            : "border-slate-200 hover:border-slate-400"
                        }`}
                        aria-label={`View ${title}`}
                        aria-pressed={isActive}
                      >
                        <Image
                          src={img}
                          alt={title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 80px, 140px"
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="order-1 sm:order-2">
                  <div
                    className="relative"
                    onMouseMove={handleZoomMove}
                    onMouseEnter={() => setZoom((prev) => ({ ...prev, show: true }))}
                    onMouseLeave={() => setZoom((prev) => ({ ...prev, show: false }))}
                  >
                    <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:aspect-[5/4] lg:aspect-[4/3]">
                      <Image
                        src={activeImage || product.heroImage}
                        alt={title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </div>

                    {zoom.show ? (
                      <div
                        className="pointer-events-none absolute z-20 hidden h-44 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-2 shadow-md lg:block"
                        style={{
                          left: zoom.px,
                          top: zoom.py,
                        }}
                      >
                        <div
                          className="h-full w-full rounded-xl bg-slate-50"
                          style={{
                            backgroundImage: `url(${activeImage || product.heroImage})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                            backgroundSize: "260%",
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div
                  className="relative"
                  onMouseMove={handleZoomMove}
                  onMouseEnter={() => setZoom((prev) => ({ ...prev, show: true }))}
                  onMouseLeave={() => setZoom((prev) => ({ ...prev, show: false }))}
                >
                  <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:aspect-[5/4] lg:aspect-[4/3]">
                    <Image
                      src={activeImage || product.heroImage}
                      alt={title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>

                  {zoom.show ? (
                    <div
                      className="pointer-events-none absolute z-20 hidden h-44 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-2 shadow-md lg:block"
                      style={{
                        left: zoom.px,
                        top: zoom.py,
                      }}
                    >
                      <div
                        className="h-full w-full rounded-xl bg-slate-50"
                        style={{
                          backgroundImage: `url(${activeImage || product.heroImage})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                          backgroundSize: "260%",
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            )}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {ui.productLabel}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{shortDesc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={`tag-${idx}-${tag}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={toLangHref("/contact")}
                  className="cta-anim relative rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white no-underline hover:bg-slate-800"
                >
                  {ui.getQuotation}
                </Link>
                <Link
                  href={toLangHref("/products")}
                  className="cta-anim relative rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 no-underline hover:border-slate-300"
                >
                  {ui.backToProducts}
                </Link>
              </div>
              <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  {ui.guidanceTitle}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {ui.guidanceDesc}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    href={toLangHref("/led-display")}
                    className="rounded-full border border-sky-300 bg-white px-3 py-1.5 text-xs font-semibold text-sky-900 transition hover:bg-sky-100"
                  >
                    {ui.hubLink}
                  </Link>
                  <Link
                    href={toLangHref("/led-display/indoor-led-display")}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    {ui.indoorLink}
                  </Link>
                  <Link
                    href={toLangHref("/led-display/outdoor-led-display")}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    {ui.outdoorLink}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {ui.overview}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>

            <h3 className="mt-8 text-lg font-semibold tracking-tight text-slate-900">
              {ui.keyFeatures}
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] font-medium leading-relaxed text-slate-700">
              {features.map((item, idx) => (
                <li key={`feature-${idx}-${item}`} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">
              {ui.applications}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {applications.map((item, idx) => (
                <li key={`application-${idx}-${item}`} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              {ui.specifications}
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              {product.specs.map((spec) => (
                <div
                  key={`${spec.labelEn}-${spec.valueEn}`}
                  className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3"
                >
                  <dt className="font-semibold text-slate-700">
                    {lang === "en"
                      ? spec.labelEn
                      : localizedKhmerStrict(spec.labelKm, spec.labelEn)}
                  </dt>
                  <dd className="text-right text-slate-600">
                    {lang === "en"
                      ? spec.valueEn
                      : localizedKhmerStrict(spec.valueKm, spec.valueEn)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="border-t border-slate-100 bg-slate-50/60">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-slate-900">
              {ui.relatedProducts}
            </h3>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
              {relatedProducts.map((item) => {
                const itemTitle =
                  lang === "en" ? item.titleEn : localizedKhmer(item.titleKm, item.titleEn);
                const itemDesc =
                  lang === "en"
                    ? item.shortDescEn
                    : localizedKhmer(item.shortDescKm, item.shortDescEn);
                return (
                  <Link
                    key={item.slug}
                    href={toLangHref(`/products/${item.slug}`)}
                    className="min-w-[220px] max-w-[240px] flex-1 rounded-2xl border border-slate-200 bg-white p-4 text-left no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                      <Image
                        src={item.heroImage}
                        alt={itemTitle}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 70vw, 240px"
                      />
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-slate-900">{itemTitle}</h4>
                    <p className="mt-1 text-xs text-slate-600">{itemDesc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
      <style jsx>{`
        .cta-anim {
          position: relative;
          overflow: hidden;
        }
        .cta-anim::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 1px;
          background: linear-gradient(
            90deg,
            rgba(15, 23, 42, 0) 0%,
            rgba(56, 189, 248, 0.9) 45%,
            rgba(14, 165, 233, 1) 55%,
            rgba(15, 23, 42, 0) 100%
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transform: translateX(-120%);
          transition: opacity 200ms ease;
        }
        .cta-anim:hover::before {
          opacity: 1;
          animation: cta-border-sweep 1.4s linear infinite;
        }
        @keyframes cta-border-sweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

