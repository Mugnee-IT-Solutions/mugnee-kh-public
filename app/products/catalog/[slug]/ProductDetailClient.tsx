"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { MouseEvent } from "react";
import { useLang } from "../../../components/layout/LanguageProvider";
import type { Product } from "../../../data/products";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../../../data/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { lang } = useLang();

  const title = lang === "en" ? product.titleEn : product.titleKm;
  const shortDesc = lang === "en" ? product.shortDescEn : product.shortDescKm;
  const description = lang === "en" ? product.descriptionEn : product.descriptionKm;
  const features = lang === "en" ? product.featuresEn : product.featuresKm;
  const applications =
    lang === "en" ? product.applicationsEn : product.applicationsKm;
  const tags = lang === "en" ? product.tagsEn : product.tagsKm;
  const galleryImages = useMemo(() => {
    const items = [product.heroImage, ...product.gallery];
    return Array.from(new Set(items.filter(Boolean)));
  }, [product.heroImage, product.gallery]);
  const [activeImage, setActiveImage] = useState(
    galleryImages[0] ?? product.heroImage
  );
  const [zoom, setZoom] = useState({ x: 50, y: 50, show: false, px: 0, py: 0 });
  const relatedProducts = useMemo(() => {
    const categoryMap = new Map(
      PRODUCT_CATEGORIES.map((category) => [category.id, category])
    );
    const primaryCategory = categoryMap.get(product.primaryCategoryId);
    const parentCategoryId = primaryCategory?.parentId ?? null;

    const samePrimary = PRODUCTS.filter((item) => {
      if (item.slug === product.slug) return false;
      return item.primaryCategoryId === product.primaryCategoryId;
    });

    if (samePrimary.length >= 8) return samePrimary.slice(0, 8);

    const sameParent = PRODUCTS.filter((item) => {
      if (item.slug === product.slug) return false;
      const itemPrimary = categoryMap.get(item.primaryCategoryId);
      return (
        parentCategoryId &&
        itemPrimary?.parentId &&
        itemPrimary.parentId === parentCategoryId
      );
    });

    const merged = [...samePrimary];
    for (const item of sameParent) {
      if (!merged.some((p) => p.slug === item.slug)) {
        merged.push(item);
      }
      if (merged.length >= 8) break;
    }

    return merged.slice(0, 8);
  }, [product]);

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
                <div className="order-2 flex gap-3 overflow-x-auto pb-2 sm:order-1 sm:flex-col sm:overflow-visible sm:pb-0">
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
                {lang === "en" ? "Product" : "ផលិតផល"}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {shortDesc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="cta-anim relative rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white no-underline hover:bg-slate-800"
                >
                  {lang === "en" ? "Get Quotation" : "ស្នើសុំតម្លៃ"}
                </Link>
                <Link
                  href="/products"
                  className="cta-anim relative rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 no-underline hover:border-slate-300"
                >
                  {lang === "en" ? "Back to Products" : "ត្រឡប់ទៅផលិតផល"}
                </Link>
              </div>

              <div className="mt-6">
                <h2 className="text-base font-semibold text-slate-900">
                  {lang === "en" ? "Key Features" : "លក្ខណៈពិសេស"}
                </h2>
                <ul className="mt-3 space-y-2 text-sm font-medium text-black">
                  {features.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {lang === "en" ? "Overview" : "សេចក្តីសង្ខេប"}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {description}
            </p>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">
              {lang === "en" ? "Key Features" : "លក្ខណៈពិសេស"}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {features.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">
              {lang === "en" ? "Applications" : "ការប្រើប្រាស់"}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {applications.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              {lang === "en" ? "Specifications" : "លក្ខណៈបច្ចេកទេស"}
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              {product.specs.map((spec) => (
                <div
                  key={`${spec.labelEn}-${spec.valueEn}`}
                  className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3"
                >
                  <dt className="font-semibold text-slate-700">
                    {lang === "en" ? spec.labelEn : spec.labelKm}
                  </dt>
                  <dd className="text-right text-slate-600">
                    {lang === "en" ? spec.valueEn : spec.valueKm}
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
              {lang === "en" ? "Related Products" : "ផលិតផលដែលពាក់ព័ន្ធ"}
            </h3>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
              {relatedProducts.map((item) => {
                const itemTitle = lang === "en" ? item.titleEn : item.titleKm;
                const itemDesc =
                  lang === "en" ? item.shortDescEn : item.shortDescKm;
                return (
                  <Link
                    key={item.slug}
                    href={`/products/catalog/${item.slug}`}
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
                    <h4 className="mt-3 text-sm font-semibold text-slate-900">
                      {itemTitle}
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      {itemDesc}
                    </p>
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
          -webkit-mask: linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
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
