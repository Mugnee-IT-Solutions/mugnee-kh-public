import JsonLd from "./JsonLd";

type FAQItem = {
  question: string;
  answer: string;
  language?: "en" | "km";
};

type FAQJsonLdProps = {
  items: FAQItem[];
  id?: string;
};

export default function FAQJsonLd({ items, id = "faq-jsonld" }: FAQJsonLdProps) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: ["en", "km"],
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


