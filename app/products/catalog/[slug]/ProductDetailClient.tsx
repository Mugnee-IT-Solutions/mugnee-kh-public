"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "../../../components/layout/LanguageProvider";
import type { Product } from "../../../data/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { lang } = useLang();

  const title = lang === "en" ? product.titleEn : product.titleKm;
  const shortDesc = lang === "en" ? product.shortDescEn : product.shortDescKm;
  const description = lang === "en" ? product.descriptionEn : product.descriptionKm;
  const features = lang === "en" ? product.featuresEn : product.featuresKm;
  const applications =
    lang === "en" ? product.applicationsEn : product.applicationsKm;
  const tags = lang === "en" ? product.tagsEn : product.tagsKm;

  return (
    <div className="bg-white text-slate-900">
      <section className="border-b border-slate-100">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <Image
                src={product.heroImage}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

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
                  className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white no-underline hover:bg-slate-800"
                >
                  {lang === "en" ? "Get Quote" : "ស្នើសុំតម្លៃ"}
                </Link>
                <Link
                  href="/products"
                  className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 no-underline hover:border-slate-300"
                >
                  {lang === "en" ? "Back to Products" : "ត្រឡប់ទៅផលិតផល"}
                </Link>
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

      {product.gallery.length > 0 ? (
        <section className="border-t border-slate-100 bg-slate-50/60">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-slate-900">
              {lang === "en" ? "Gallery" : "រូបភាព"}
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.gallery.map((img) => (
                <div
                  key={img}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
