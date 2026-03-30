import JsonLd from "./JsonLd";

type FAQItem = {
  question: string;
  answer: string;
  language?: "en" | "km";
};

type FAQJsonLdProps = {
  items: FAQItem[];
  id?: string;
  /**
   * Optional override for top-level FAQPage.inLanguage.
   * If omitted, we infer from items' language values.
   */
  pageLanguage?: "en" | "km";
};

function inferPageLanguage(items: FAQItem[], fallback: "en" | "km" = "en"): "en" | "km" {
  const langs = items.map((i) => i.language).filter((v): v is NonNullable<FAQItem["language"]> => Boolean(v));
  if (langs.length === 0) return fallback;

  const kmCount = langs.filter((l) => l === "km").length;
  const enCount = langs.filter((l) => l === "en").length;

  // If all provided values are the same, infer that language.
  if (kmCount > 0 && enCount === 0) return "km";
  if (enCount > 0 && kmCount === 0) return "en";

  // Mixed languages: pick the majority; tie-break to fallback.
  if (kmCount === enCount) return fallback;
  return kmCount > enCount ? "km" : "en";
}

export default function FAQJsonLd({ items, id = "faq-jsonld", pageLanguage }: FAQJsonLdProps) {
  const inferredPageLanguage = pageLanguage ?? inferPageLanguage(items, "en");

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: inferredPageLanguage,
    about: {
      "@type": "Place",
      name: "Cambodia",
    },
    spatialCoverage: {
      "@type": "Country",
      name: "Cambodia",
    },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      inLanguage: item.language || "en",
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd id={id} data={faqData} />;
}

