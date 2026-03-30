"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLang } from "../../components/layout/LanguageProvider";
import ProductGrid from "../../components/sections/ProductGrid";
import { BUSINESS_PHONE_E164 } from "../../lib/nap";
import { SITE_URL } from "../../lib/site";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };
type IfpProduct = {
  id: string;
  slug: string;
  categoryIds: string[];
  titleEn: string;
  titleKm: string;
  shortDescEn: string;
  shortDescKm: string;
  heroImage: string;
  featuresEn: string[];
  featuresKm: string[];
  specs: Array<{ labelEn: string; valueEn: string }>;
};

export default function InteractiveFlatPanelClient() {
  const { lang } = useLang();
  const toLangHref = (href: string) =>
    lang === "km" && href.startsWith("/") && !href.startsWith("/km/") ? `/km${href}` : href;

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Interactive Flat Panel",
      badge: "Cambodia - Interactive Flat Panel - Smart Board",
      h1: "Interactive Flat Panel Price in Cambodia",
      sub:
        "Looking for interactive flat panel price in Cambodia from a trusted smart board supplier? Mugnee Cambodia provides interactive flat panel, smart board, interactive whiteboard, and 4K touch display solutions for schools, universities, training centers, meeting rooms, boardrooms, and government offices. Our interactive flat panels support multi-touch writing, wireless screen sharing, Android and OPS/Windows options, classroom annotation, and meeting presentation workflows, with project-based quotation, installation, wall-mount or mobile-stand setup, user training, and local after-sales support in Phnom Penh, Siem Reap, and Sihanoukville.",
      cta1: "Get a Free Quotation",
      cta2: "View IFP Models",
      serving: "Serving: Phnom Penh - Siem Reap - Sihanoukville",

      seoTitle: "Smart Board & Interactive Display Solutions",
      seoText:
        "Interactive flat panels (smart boards) are 4K touch displays built for modern teaching and collaboration. Choose screen size, touch performance, operating system, and connectivity based on room size and use case. Popular sizes include 65, 75, 86, 98, and 110 inches.",

      keyTitle: "Interactive Flat Panel Specifications for Cambodia",
      keySub:
        "Common requirements for smooth writing, clear visuals, and reliable daily operation.",
      k1: "Display & Resolution",
      k1d: "4K UHD panels with wide viewing angles for clear visibility.",
      k2: "Touch Performance",
      k2d: "20 to 40-point multi-touch with fast response for writing and collaboration.",
      k3: "Operating System",
      k3d: "Android built-in with optional OPS/Windows support.",
      k4: "Connectivity",
      k4d: "HDMI, USB, USB-C, LAN, and wireless connectivity options.",

      productTitle: "Interactive Flat Panel Models",
      productSub:
        "Select a size based on room dimensions and viewing distance. Share room size and use case for the right recommendation.",

      useTitle: "Best Use Cases in Cambodia",
      useSub:
        "Where Interactive Flat Panels deliver the most value for communication and learning.",
      u1: "Schools & Smart Classrooms",
      u1d: "Teach with whiteboard, annotation, multimedia and interactive lessons.",
      u2: "Meeting Rooms & Boardrooms",
      u2d: "Present, annotate, collaborate and share screens wirelessly.",
      u3: "Training Centers",
      u3d: "Interactive sessions with clear visuals and hands-on demonstration.",
      u4: "Government & Institutions",
      u4d: "Reliable daily usage for briefings, reporting and presentations.",

      compareTitle: "Interactive Flat Panel vs Projector",
      compareSub:
        "Why many schools and offices in Cambodia upgrade to smart interactive panels.",
      cA: "Brighter & clearer in daylight rooms",
      cB: "No lamp replacement, lower maintenance",
      cC: "សរសេរប៉ះអេក្រង់ និងកំណត់ចំណាំបានភ្លាមៗ",
      cD: "Wireless sharing + multiple device support",

      setupTitle: "Installation, Setup & Training",
      setupSub:
        "We ensure safe mounting, correct wiring, and user training for smooth operation.",
      s1: "ពិនិត្យទីតាំង និងផែនការដំឡើង",
      s2: "ដំឡើងជញ្ជាំង ឬជើងឈរ",
      s3: "Apps, Wi-Fi/LAN and screen sharing configuration",
      s4: "បណ្តុះបណ្តាលអ្នកប្រើ និងប្រគល់ប្រព័ន្ធ",

      softwareTitle: "Software & Compatibility",
      softwareSub:
        "Works with laptops, smartphones, and popular meeting or learning workflows.",
      sw1: "កម្មវិធីក្តារស និងកំណត់ចំណាំ",
      sw2: "បញ្ជូនអេក្រង់ឥតខ្សែ (Windows/macOS/Android/iOS)",
      sw3: "ជម្រើស OPS/PC សម្រាប់កម្មវិធី Windows",
      sw4: "HDMI/USB-C support for quick plug & play",

      faqTitle: "FAQ - Interactive Flat Panel",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your room size, preferred screen size, and usage (classroom or meeting). We will recommend the best model with installation and support options.",
      finalCta: "Contact & Get Quotation",
      seeProjects: "See Projects",
      note:
        "Note: Final configuration (ports, OPS, mount type) depends on project requirements.",
    };

    const km = {
      breadcrumb: "បន្ទះអេក្រង់អន្តរកម្ម",
      badge: "កម្ពុជា • បន្ទះអេក្រង់អន្តរកម្ម • ក្តារឆ្លាតវៃ",
      h1: "តម្លៃបន្ទះអេក្រង់អន្តរកម្ម នៅកម្ពុជា",
      sub:
        "កំពុងស្វែងរកតម្លៃ Interactive Flat Panel នៅកម្ពុជា ពីអ្នកផ្គត់ផ្គង់ smart board ដែលអាចទុកចិត្តបានមែនទេ? Mugnee Cambodia ផ្តល់ដំណោះស្រាយ Interactive Flat Panel, smart board, interactive whiteboard និងអេក្រង់ 4K touch សម្រាប់សាលារៀន សាកលវិទ្យាល័យ មជ្ឈមណ្ឌលបណ្តុះបណ្តាល បន្ទប់ប្រជុំ បន្ទប់គ្រប់គ្រង និងស្ថាប័នរដ្ឋាភិបាល។ អេក្រង់អន្តរកម្មរបស់យើងគាំទ្រការសរសេរ multi-touch, wireless screen sharing, Android និង OPS/Windows, ការកំណត់ចំណាំក្នុងថ្នាក់រៀន និងការបង្ហាញក្នុងកិច្ចប្រជុំ ជាមួយសម្រង់តម្លៃតាមគម្រោង ការដំឡើង ការរៀបចំ wall mount ឬ mobile stand ការបណ្តុះបណ្តាលអ្នកប្រើ និងសេវាកម្មបន្ទាប់ពីលក់ក្នុងស្រុកនៅភ្នំពេញ សៀមរាប និងព្រះសីហនុ។",
      cta1: "ស្នើសុំតម្លៃ (ឥតគិតថ្លៃ)",
      cta2: "មើលម៉ូដែល",
      serving: "សេវាកម្ម៖ Phnom Penh • Siem Reap • Sihanoukville",

      seoTitle: "ដំណោះស្រាយក្តារឆ្លាតវៃ និងអេក្រង់អន្តរកម្ម",
      seoText:
        "Interactive Flat Panel (smart board) គឺសម្រាប់ការបង្រៀន និងការសហការ modern។ ជ្រើស model ត្រូវគិតពី screen size, touch performance, connectivity ports និង mounting method។ យើងផ្គត់ផ្គង់ ដំឡើង និង support សម្រាប់ schools, universities, offices និង training centers ជាមួយ quotation តាមគម្រោង។",

      keyTitle: "លក្ខណៈបច្ចេកទេសបន្ទះអេក្រង់អន្តរកម្ម សម្រាប់កម្ពុជា",
      keySub:
        "តម្រូវការសម្រាប់ writing ស្មੂត និងរូបភាពច្បាស់សម្រាប់ប្រើរៀងរាល់ថ្ងៃ។",
      k1: "អេក្រង់ និងកម្រិតភាពច្បាស់",
      k1d: "4K UHD + anti-glare glass សម្រាប់មើលច្បាស់នៅបន្ទប់ភ្លឺ។",
      k2: "សមត្ថភាពប៉ះអេក្រង់",
      k2d: "Multi-touch សម្រាប់សរសេរ/annotation និង collaboration។",
      k3: "ប្រព័ន្ធប្រតិបត្តិការ",
      k3d: "Android built-in; OPS/PC optional សម្រាប់ Windows apps។",
      k4: "ការតភ្ជាប់",
      k4d: "HDMI/USB/USB-C, Wi-Fi/LAN, screen sharing និង audio output។",

      productTitle: "ម៉ូដែលបន្ទះអេក្រង់អន្តរកម្ម",
      productSub:
        "ជ្រើសទំហំតាម room size និង viewing distance។ សូមផ្ញើ room size + use-case ដើម្បីណែនាំបានត្រឹមត្រូវ។",

      useTitle: "ករណីប្រើប្រាស់ល្អបំផុតនៅកម្ពុជា",
      useSub:
        "កន្លែងដែល IFP ផ្តល់ value ខ្ពស់សម្រាប់ learning និង presentation។",
      u1: "សាលារៀន និងថ្នាក់រៀនឆ្លាតវៃ",
      u1d: "Whiteboard, annotation, multimedia និង interactive lessons។",
      u2: "បន្ទប់ប្រជុំ និងបន្ទប់គ្រប់គ្រង",
      u2d: "Presentation + collaboration + wireless sharing។",
      u3: "មជ្ឈមណ្ឌលបណ្តុះបណ្តាល",
      u3d: "Training sessions ជាមួយ visuals ច្បាស់ និង demonstration។",
      u4: "ស្ថាប័នរដ្ឋ និងឯកជន",
      u4d: "ប្រើប្រាស់រៀងរាល់ថ្ងៃសម្រាប់ briefings និង reporting។",

      compareTitle: "បន្ទះអេក្រង់អន្តរកម្ម ប្រៀបធៀបនឹងប្រូជែកទ័រ",
      compareSub:
        "ហេតុអ្វី schools/offices នៅកម្ពុជា upgrade ទៅ smart panel។",
      cA: "មើលច្បាស់នៅបន្ទប់ភ្លឺ",
      cB: "maintenance តិច (no lamp)",
      cC: "សរសេរប៉ះអេក្រង់ និងកំណត់ចំណាំបានភ្លាមៗ",
      cD: "ចែករំលែកឥតខ្សែ និងគាំទ្រឧបករណ៍ច្រើន",

      setupTitle: "ការដំឡើង កំណត់ប្រព័ន្ធ និងបណ្តុះបណ្តាល",
      setupSub:
        "ដំឡើងសុវត្ថិភាព, wiring ត្រឹមត្រូវ និងបង្រៀនប្រើប្រាស់។",
      s1: "ពិនិត្យទីតាំង និងផែនការដំឡើង",
      s2: "ដំឡើងជញ្ជាំង ឬជើងឈរ",
      s3: "កំណត់ Wi-Fi/LAN និងការចែកអេក្រង់",
      s4: "បណ្តុះបណ្តាលអ្នកប្រើ និងប្រគល់ប្រព័ន្ធ",

      softwareTitle: "កម្មវិធី និងភាពឆបគ្នា",
      softwareSub:
        "Support laptops/phones និង meeting/learning workflow ពេញនិយម។",
      sw1: "កម្មវិធីក្តារស និងកំណត់ចំណាំ",
      sw2: "បញ្ជូនអេក្រង់ឥតខ្សែ (Windows/macOS/Android/iOS)",
      sw3: "ជម្រើស OPS/PC សម្រាប់កម្មវិធី Windows",
      sw4: "HDMI/USB-C ដោតប្រើបានភ្លាម",

      faqTitle: "សំណួរញឹកញាប់ - បន្ទះអេក្រង់អន្តរកម្ម",
      finalTitle: "ស្នើសុំ Quotation តាមគម្រោង",
      finalSub:
        "ផ្ញើ room size, screen size និង use-case (classroom/meeting)। យើងនឹងណែនាំ model + installation + support options។",
      finalCta: "ទំនាក់ទំនង & ស្នើសុំតម្លៃ",
      seeProjects: "មើលគម្រោង",
      note:
        "ចំណាំ៖ Final configuration (ports, OPS, mount type) តាម project requirement។",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const [ifpProducts, setIfpProducts] = useState<IfpProduct[]>([]);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const { PRODUCTS } = await import("../../data/products");
      if (!isMounted) return;
      const list = PRODUCTS.filter((p) => p.categoryIds.includes("smart_board"))
        .map((p) => ({
          id: p.id,
          slug: p.slug,
          categoryIds: p.categoryIds,
          titleEn: p.titleEn,
          titleKm: p.titleKm,
          shortDescEn: p.shortDescEn,
          shortDescKm: p.shortDescKm,
          heroImage: p.heroImage,
          featuresEn: p.featuresEn,
          featuresKm: p.featuresKm,
          specs: p.specs.map((s) => ({ labelEn: s.labelEn, valueEn: s.valueEn })),
        }))
        .sort((a, b) => {
          const aSize = parseInt(
            a.specs.find((s) => s.labelEn === "Display Size")?.valueEn || "0",
            10
          );
          const bSize = parseInt(
            b.specs.find((s) => s.labelEn === "Display Size")?.valueEn || "0",
            10
          );
          return aSize - bSize;
        });
      setIfpProducts(list);
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const [viewDistance, setViewDistance] = useState("");

  const recommendedSize = useMemo(() => {
    const distance = Number.parseFloat(viewDistance);
    if (!Number.isFinite(distance)) return null;
    if (distance <= 2) return "55-65 inch";
    if (distance <= 3) return "65-75 inch";
    if (distance <= 4) return "75-86 inch";
    if (distance <= 5) return "86-98 inch";
    return "98-110 inch";
  }, [viewDistance]);

  const faqs = useMemo<FAQ[]>(
    () => [
    {
      qEn: "What size interactive flat panel should I choose for a classroom?",
      aEn:
        "Choose based on viewing distance and room size. Common classroom sizes range from 65 to 86 inch, while larger halls often use 98 to 110 inch.",
        qKm: "សម្រាប់ថ្នាក់រៀន តើគួរជ្រើសទំហំបន្ទះអន្តរកម្មប៉ុន្មាន?",
      aKm:
        "គួរជ្រើសតាម viewing distance និងទំហំបន្ទប់។ ទំហំដែលប្រើញឹកញាប់សម្រាប់ថ្នាក់រៀនគឺ 65-86 inch ខណៈបន្ទប់ធំអាចប្រើ 98-110 inch។",
    },
    {
      qEn: "How far should students sit from a smart board?",
      aEn:
        "Viewing distance depends on screen size. As a general guide, 65-inch panels suit around 2 to 3.5 meters, 75-inch suits around 2.5 to 4 meters, and 86-inch around 3 to 5 meters.",
        qKm: "សិស្សគួរអង្គុយឆ្ងាយពីបន្ទះឆ្លាតវៃប៉ុន្មាន?",
      aKm:
        "ចម្ងាយមើលអាស្រ័យលើទំហំអេក្រង់។ ជាទូទៅ 65-inch សមស្របប្រហែល 2-3.5m, 75-inch ប្រហែល 2.5-4m និង 86-inch ប្រហែល 3-5m។",
    },
    {
      qEn: "Do interactive flat panels support Android and Windows?",
      aEn:
        "Most models include Android, and many offer OPS/Windows compatibility. Check the exact model for OS version and OPS options.",
        qKm: "បន្ទះអន្តរកម្ម គាំទ្រ Android និង Windows ដែរឬទេ?",
      aKm:
        "ម៉ូឌែលភាគច្រើនមាន Android ហើយម៉ូឌែលជាច្រើនគាំទ្រ OPS/Windows ផងដែរ។ សូមពិនិត្យម៉ូឌែលជាក់លាក់សម្រាប់ OS version និង OPS option។",
    },
    {
      qEn: "How many touch points does an IFP support?",
      aEn:
        "Multi-touch is standard. For example, some models support 20-point touch, and higher-end models support 40-point touch.",
        qKm: "បន្ទះអន្តរកម្មមួយអាចគាំទ្រចំណុចប៉ះបានប៉ុន្មាន?",
      aKm:
        "Multi-touch គឺជាស្តង់ដារ។ ឧទាហរណ៍ ម៉ូឌែលខ្លះគាំទ្រ 20-point touch ហើយម៉ូឌែលខ្ពស់គាំទ្រ 40-point touch។",
    },
    {
      qEn: "Can I connect laptops and phones wirelessly?",
      aEn:
        "Yes. Many models support wireless screen sharing, plus HDMI and USB-C for plug-and-play connectivity.",
        qKm: "តើអាចភ្ជាប់កុំព្យូទ័រយួរដៃ និងទូរស័ព្ទដោយឥតខ្សែបានទេ?",
      aKm:
        "បាន។ ម៉ូឌែលជាច្រើនគាំទ្រ wireless screen sharing និងមាន HDMI/USB-C សម្រាប់ plug-and-play connectivity។",
    },
    {
      qEn: "Do you provide installation and user training in Cambodia?",
      aEn:
        "Yes. We provide installation, configuration, and training for classrooms, meeting rooms, and training centers.",
        qKm: "តើអ្នកផ្តល់សេវាដំឡើង និងបណ្តុះបណ្តាលអ្នកប្រើ នៅកម្ពុជាដែរឬទេ?",
      aKm:
        "បាទ/ចាស។ យើងផ្តល់សេវា installation, configuration និង training សម្រាប់ classroom, meeting room និង training center។",
    },
    {
      qEn: "What are the key ports I should check?",
      aEn:
        "Look for HDMI, USB, USB-C, and LAN connectivity. These cover most classroom and meeting room setups.",
        qKm: "ច្រកតភ្ជាប់សំខាន់ៗដែលគួរតែពិនិត្យមានអ្វីខ្លះ?",
      aKm:
        "គួរពិនិត្យ HDMI, USB, USB-C និង LAN connectivity ព្រោះវាគ្របដណ្តប់ setup ភាគច្រើនសម្រាប់ classroom និង meeting room។",
    },
    {
      qEn: "Do you offer warranty and after-sales support?",
      aEn:
        "Yes. Warranty terms depend on the model and project scope. We share the coverage details during quotation.",
        qKm: "តើមានការធានា និងសេវាគាំទ្របន្ទាប់ពីលក់ដែរឬទេ?",
      aKm:
        "មាន។ លក្ខខណ្ឌ warranty អាស្រ័យលើម៉ូឌែល និង scope គម្រោង ហើយយើងនឹងផ្តល់ព័ត៌មាន coverage ពេល quotation។",
    },
    ],
    []
  );

  const jsonLd = useMemo(() => {
    const site = SITE_URL;
    const base = `${site}/interactive-flat-panel/`;
    const serviceAreas = ["Phnom Penh", "Siem Reap", "Sihanoukville"].map((name) => ({
      "@type": "AdministrativeArea",
      name,
    }));

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${site}/`,
        },
        { "@type": "ListItem", position: 2, name: "Interactive Flat Panel", item: base },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: lang === "en" ? f.qEn : f.qKm,
        acceptedAnswer: {
          "@type": "Answer",
          text: lang === "en" ? f.aEn : f.aKm,
        },
      })),
    };

    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${site}#organization`,
      name: "Mugnee Cambodia",
      url: site,
      areaServed: serviceAreas,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: BUSINESS_PHONE_E164,
          availableLanguage: ["en", "km"],
        },
      ],
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Interactive Flat Panel Installation",
      serviceType: "Interactive Flat Panel Solutions",
      url: base,
      description: lang === "en" ? t.sub : t.seoText,
      areaServed: serviceAreas,
      provider: {
        "@id": `${site}#organization`,
      },
    };

    return { breadcrumb, faqSchema, orgSchema, serviceSchema };
  }, [faqs, lang]);

  return (
    <div className="bg-white text-slate-900">
      <style jsx global>{`
        .quick-link {
          position: relative;
          border: 1px solid transparent;
          background:
            linear-gradient(#fff, #fff) padding-box,
            linear-gradient(
              90deg,
              rgba(14, 116, 144, 0),
              rgba(14, 116, 144, 0.85),
              rgba(2, 132, 199, 0.9),
              rgba(14, 116, 144, 0)
            )
              border-box;
          background-size: 100% 100%, 240% 240%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .quick-link:hover {
          animation: quickLinkBorder 1.2s linear infinite;
          box-shadow: 0 10px 24px rgba(2, 6, 23, 0.08);
        }
        @keyframes quickLinkBorder {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 0 0, 220% 0;
          }
        }

        .spec-card {
          position: relative;
          border: 1px solid transparent;
          background:
            linear-gradient(#fff, #fff) padding-box,
            linear-gradient(
              120deg,
              rgba(14, 116, 144, 0.1),
              rgba(2, 132, 199, 0.45),
              rgba(59, 130, 246, 0.45),
              rgba(14, 116, 144, 0.1)
            )
              border-box;
          background-size: 100% 100%, 260% 260%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .spec-card:hover {
          animation: specBorder 2s linear infinite;
          box-shadow: 0 12px 28px rgba(2, 6, 23, 0.12);
        }
        @keyframes specBorder {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 0 0, 260% 0;
          }
        }
      `}</style>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.serviceSchema) }}
      />

      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">{t.breadcrumb}</span>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            {t.badge}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.h1}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 [text-align:justify] sm:text-base">
            {lang === "en" ? (
              <>
                Mugnee Cambodia provides <strong>interactive flat panel</strong> (
                <strong>smart board</strong>) solutions and project-based{" "}
                <strong>interactive flat panel price in Cambodia</strong> support,
                including <strong>smart board price in Cambodia</strong> guidance, for
                schools, universities, training centers, meeting rooms, and government
                offices. Our <strong>4K interactive touch displays</strong> include{" "}
                <strong>wireless screen sharing</strong>, <strong>Android/OPS</strong>{" "}
                options, professional installation, user training, and local after-sales
                support in <strong>Phnom Penh</strong>, <strong>Siem Reap</strong>, and{" "}
                <strong>Sihanoukville</strong>.
              </>
            ) : (
              <>
                Mugnee Cambodia ផ្តល់ដំណោះស្រាយ <strong>Interactive Flat Panel</strong>{" "}
                (<strong>Smart Board</strong>) និងការណែនាំតម្លៃ{" "}
                <strong>Interactive Flat Panel នៅកម្ពុជា</strong> និង{" "}
                <strong>smart board price in Cambodia</strong> សម្រាប់សាលារៀន
                សាកលវិទ្យាល័យ មជ្ឈមណ្ឌលបណ្តុះបណ្តាល បន្ទប់ប្រជុំ និងស្ថាប័នរដ្ឋ។
                អេក្រង់ <strong>4K Touch Display</strong> របស់យើងមាន{" "}
                <strong>Wireless Screen Sharing</strong>, ជម្រើស{" "}
                <strong>Android/OPS</strong>, ការដំឡើងដោយវិជ្ជាជីវៈ
                ការបណ្តុះបណ្តាលអ្នកប្រើ និងសេវាបន្ទាប់ពីលក់ក្នុងស្រុកនៅ{" "}
                <strong>Phnom Penh</strong>, <strong>Siem Reap</strong>, និង{" "}
                <strong>Sihanoukville</strong>។
              </>
            )}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <Link
              href={toLangHref("/contact/")}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {t.cta1}
            </Link>
            <a
              href="#models"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              {t.cta2}
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-600">{t.serving}</p>

        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="models" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Interactive Flat Panel Products
          </h2>
          <div className="mt-6">
            <ProductGrid
              columns={3}
              pageSize={9}
              allowedCategoryIds={["smart_board", "interactive_panel"]}
              filterCategoryIds={["smart_board", "interactive_panel"]}
              showCategoryFilters
              showSort
              showPagination
            />
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {lang === "en"
                    ? "Quick Links for Interactive Flat Panel"
                    : "តំណរហ័សសម្រាប់ Interactive Flat Panel"}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {lang === "en"
                    ? "Jump to the buying guide, decision matrix, specs, and support details."
                    : "ចូលទៅមគ្គុទ្ទេសក៍ទិញ តារាងសម្រេចចិត្ត ការប្រៀបធៀបលក្ខណៈបច្ចេកទេស និងព័ត៌មានគាំទ្រ។"}
                </div>
              </div>
              <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 sm:block">
                {lang === "en" ? "Quick Links" : "តំណរហ័ស"}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(
                lang === "en"
                  ? [
                      { label: "Buying Guide", href: "#buying-guide" },
                      { label: "Decision Matrix", href: "#decision-matrix" },
                      { label: "Specs Comparison", href: "#specs-comparison" },
                      { label: "Installation", href: "#installation" },
                      { label: "Case Studies", href: "#case-studies" },
                      { label: "Warranty & Support", href: "#warranty-support" },
                      { label: "FAQ", href: "#faq" },
                    ]
                  : [
                      { label: "មគ្គុទ្ទេសក៍ទិញ", href: "#buying-guide" },
                      { label: "តារាងសម្រេចចិត្ត", href: "#decision-matrix" },
                      { label: "ប្រៀបធៀបលក្ខណៈបច្ចេកទេស", href: "#specs-comparison" },
                      { label: "ការដំឡើង", href: "#installation" },
                      { label: "ករណីប្រើប្រាស់", href: "#case-studies" },
                      { label: "ការធានា និងការគាំទ្រ", href: "#warranty-support" },
                      { label: "សំណួរញឹកញាប់", href: "#faq" },
                    ]
              ).map((item) => (
                <a
                  key={item.href}
                  href={toLangHref(item.href)}
                  className="quick-link rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS IFP */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {lang === "en" ? "Interactive Flat Panel Basics" : "មូលដ្ឋានអំពី Interactive Flat Panel"}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "What Is an Interactive Flat Panel (IFP)?"
                  : "តើ Interactive Flat Panel (IFP) ជាអ្វី?"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "An interactive flat panel is a large 4K touchscreen display that combines a digital whiteboard, presentation screen, and collaboration tools in one device. It is commonly used in classrooms, meeting rooms, training centers, and healthcare briefings because it supports real-time writing, annotation, and wireless screen sharing."
                  : "Interactive Flat Panel គឺជាអេក្រង់ touchscreen 4K ទំហំធំ ដែលរួមបញ្ចូល whiteboard ឌីជីថល អេក្រង់បង្ហាញ និងឧបករណ៍សហការនៅក្នុងឧបករណ៍តែមួយ។ វាត្រូវបានប្រើយ៉ាងទូលំទូលាយនៅថ្នាក់រៀន បន្ទប់ប្រជុំ មជ្ឈមណ្ឌលបណ្តុះបណ្តាល និងការបង្ហាញផ្នែកសុខាភិបាល ពីព្រោះវាគាំទ្រការសរសេរតាមពេលវេលាជាក់ស្តែង annotation និង wireless screen sharing។"}
              </p>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "How Does an Interactive Flat Panel Work?"
                  : "Interactive Flat Panel ដំណើរការយ៉ាងដូចម្តេច?"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "The panel uses a high-resolution LCD with a multi-touch layer that detects finger or stylus input. Built-in Android software runs whiteboard and collaboration apps, while HDMI/USB-C/LAN ports and wireless casting allow laptops and phones to share content instantly. Optional OPS/Windows modules turn the screen into a full PC for advanced applications."
                  : "អេក្រង់នេះប្រើ LCD resolution ខ្ពស់ ជាមួយស្រទាប់ multi-touch ដែលអាចចាប់សញ្ញាពីម្រាមដៃ ឬ stylus។ Software Android ដែលភ្ជាប់មកក្នុងម៉ាស៊ីន អាចដំណើរការ whiteboard និងកម្មវិធីសហការ ខណៈ HDMI/USB-C/LAN និង wireless casting អនុញ្ញាតឱ្យ laptop និងទូរស័ព្ទចែករំលែកមាតិកាបានភ្លាមៗ។ ជម្រើស OPS/Windows module អាចបម្លែងអេក្រង់នេះឱ្យក្លាយជា PC ពេញលេញ សម្រាប់ការប្រើប្រាស់កម្រិតខ្ពស់។"}
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:mt-20">
              <div className="text-sm font-semibold text-slate-900">
                {lang === "en" ? "Key Benefits for Cambodia Buyers" : "អត្ថប្រយោជន៍សំខាន់ៗសម្រាប់អ្នកទិញនៅកម្ពុជា"}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {(lang === "en"
                  ? [
                      "4K UHD clarity for classrooms and meetings",
                      "Multi-touch writing and annotation",
                      "Wireless screen sharing and plug-and-play ports",
                      "Android built-in with optional OPS/Windows",
                      "Lower maintenance than projector systems",
                    ]
                  : [
                      "ភាពច្បាស់ 4K UHD សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ",
                      "ការសរសេរ multi-touch និង annotation",
                      "Wireless screen sharing និង port ប្រើភ្លាមៗ (plug-and-play)",
                      "Android ភ្ជាប់មកក្នុងម៉ាស៊ីន ជាមួយជម្រើស OPS/Windows",
                      "ថែទាំទាបជាងប្រព័ន្ធ projector",
                    ]).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DECISION MATRIX */}
      <section id="decision-matrix" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Interactive Flat Panel Use-Case Selection Guide"
              : "មគ្គុទ្ទេសក៍ជ្រើសរើសការប្រើប្រាស់ Interactive Flat Panel"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Match your environment to the best screen size and features. This quick matrix helps you shortlist the right interactive flat panel."
              : "ផ្គូផ្គងបរិយាកាសប្រើប្រាស់របស់អ្នកជាមួយទំហំអេក្រង់ និងមុខងារដែលសមស្របបំផុត។ តារាងខ្លីនេះជួយអ្នកជ្រើសរើស Interactive Flat Panel ដែលត្រឹមត្រូវ។"}
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
              <div className="p-3">{lang === "en" ? "Use Case" : "ករណីប្រើប្រាស់"}</div>
              <div className="p-3">{lang === "en" ? "Recommended Size" : "ទំហំដែលណែនាំ"}</div>
              <div className="p-3">{lang === "en" ? "Key Focus" : "ចំណុចសំខាន់"}</div>
            </div>
            {(lang === "en"
              ? [
                  ["Classrooms", "65 - 86 inch", "4K clarity, multi-touch, whiteboard tools"],
                  ["Meeting Rooms", "65 - 75 inch", "Wireless sharing, HDMI/USB-C"],
                  ["Training Centers", "75 - 98 inch", "Large visibility, multi-user touch"],
                  ["Auditoriums", "98 - 110 inch", "Ultra-large screen, wide viewing angle"],
                  ["Hospitals", "65 - 86 inch", "Clean visuals, quick annotation"],
                ]
              : [
                  ["ថ្នាក់រៀន", "65 - 86 inch", "ភាពច្បាស់ 4K, multi-touch, ឧបករណ៍ whiteboard"],
                  ["បន្ទប់ប្រជុំ", "65 - 75 inch", "Wireless sharing, HDMI/USB-C"],
                  ["មជ្ឈមណ្ឌលបណ្តុះបណ្តាល", "75 - 98 inch", "ការមើលឃើញធំទូលាយ, multi-user touch"],
                  ["សាលប្រជុំធំ", "98 - 110 inch", "អេក្រង់ធំខ្លាំង, មុំមើលទូលាយ"],
                  ["មន្ទីរពេទ្យ", "65 - 86 inch", "រូបភាពស្អាត, annotation រហ័ស"],
                ]).map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-1 border-t border-slate-200 text-sm text-slate-700 sm:grid-cols-3"
              >
                <div className="p-3 font-semibold text-slate-900">{row[0]}</div>
                <div className="p-3">{row[1]}</div>
                <div className="p-3">{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* SPECS COMPARISON */}
      <section id="specs-comparison" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Interactive Flat Panel Specifications Comparison by Size"
              : "ការប្រៀបធៀបលក្ខណៈបច្ចេកទេស Interactive Flat Panel តាមទំហំ"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Compare size, 4K resolution, touch points, OS support, and connectivity to select the best interactive flat panel for classrooms, meeting rooms, and training centers in Cambodia."
              : "ប្រៀបធៀបទំហំ កម្រិតបង្ហាញ 4K ចំនួន touch points ការគាំទ្រ OS និងការតភ្ជាប់ ដើម្បីជ្រើសរើស Interactive Flat Panel ដែលសមស្របបំផុត សម្រាប់ថ្នាក់រៀន បន្ទប់ប្រជុំ និងមជ្ឈមណ្ឌលបណ្តុះបណ្តាលនៅកម្ពុជា។"}
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white">
            <div className="hidden sm:block">
              <div className="grid grid-cols-3 bg-slate-100 text-sm font-semibold text-slate-900">
                <div className="p-3">{lang === "en" ? "Model" : "ម៉ូដែល"}</div>
                <div className="p-3">{lang === "en" ? "Best Use" : "ការប្រើប្រាស់សមស្រប"}</div>
                <div className="p-3">{lang === "en" ? "Highlights" : "ចំណុចពិសេស"}</div>
              </div>
              {ifpProducts.map((p) => {
                const highlights = (lang === "en" ? p.featuresEn : p.featuresKm).slice(0, 2).join(" | ");
                return (
                  <div
                    key={p.id}
                    className="grid grid-cols-3 border-t border-slate-200 text-sm text-slate-700"
                  >
                    <div className="p-3 font-semibold text-slate-900">{lang === "en" ? p.titleEn : p.titleKm}</div>
                    <div className="p-3">{lang === "en" ? p.shortDescEn : p.shortDescKm}</div>
                    <div className="p-3">{highlights}</div>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-3 p-3 sm:hidden">
              {ifpProducts.map((p) => (
                <div
                  key={p.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700"
                >
                  <div className="text-sm font-semibold text-slate-900">{lang === "en" ? p.titleEn : p.titleKm}</div>
                  <div className="mt-2 grid gap-2">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold text-slate-700">{lang === "en" ? "Best Use" : "ការប្រើប្រាស់សមស្រប"}</span>
                      <span className="text-right">{lang === "en" ? p.shortDescEn : p.shortDescKm}</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold text-slate-700">{lang === "en" ? "Highlights" : "ចំណុចពិសេស"}</span>
                      <span className="text-right">
                        {(lang === "en" ? p.featuresEn : p.featuresKm).slice(0, 2).join(" | ")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section id="buying-guide" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {lang === "en" ? "Buying Guide" : "មគ្គុទ្ទេសក៍ទិញ"}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "Screen Size & Viewing Distance Guide"
                  : "មគ្គុទ្ទេសក៍ទំហំអេក្រង់ និងចម្ងាយមើល"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "Choose the screen size based on seating distance, room size, and content type. Classroom environments often use 65-86 inch, while auditoriums and large training halls prefer 98-110 inch panels."
                  : "ជ្រើសទំហំអេក្រង់ដោយផ្អែកលើចម្ងាយអង្គុយ ទំហំបន្ទប់ និងប្រភេទមាតិកា។ បរិយាកាសថ្នាក់រៀនជាញឹកញាប់ប្រើ 65-86 inch ខណៈសាលប្រជុំធំ និងសាលបណ្តុះបណ្តាលធំៗ ចូលចិត្តបន្ទះ 98-110 inch។"}
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
                  <div className="p-3">{lang === "en" ? "Viewing Distance" : "ចម្ងាយមើល"}</div>
                  <div className="p-3">{lang === "en" ? "Recommended Size" : "ទំហំដែលណែនាំ"}</div>
                  <div className="p-3">{lang === "en" ? "Typical Room" : "ប្រភេទបន្ទប់ទូទៅ"}</div>
                </div>
                {(lang === "en"
                  ? [
                      ["1.5 - 2 m", "55 - 65 inch", "Small classrooms"],
                      ["2 - 3 m", "65 - 75 inch", "Standard classrooms"],
                      ["3 - 4 m", "75 - 86 inch", "Training rooms"],
                      ["4 - 5 m", "86 - 98 inch", "Large classrooms"],
                      ["5 m+", "98 - 110 inch", "Auditoriums & halls"],
                    ]
                  : [
                      ["1.5 - 2 m", "55 - 65 inch", "ថ្នាក់រៀនតូច"],
                      ["2 - 3 m", "65 - 75 inch", "ថ្នាក់រៀនស្តង់ដារ"],
                      ["3 - 4 m", "75 - 86 inch", "បន្ទប់បណ្តុះបណ្តាល"],
                      ["4 - 5 m", "86 - 98 inch", "ថ្នាក់រៀនធំ"],
                      ["5 m+", "98 - 110 inch", "សាលប្រជុំ និងសាលធំៗ"],
                    ]).map((row) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-1 border-t border-slate-200 text-sm text-slate-700 sm:grid-cols-3"
                  >
                    <div className="p-3 font-semibold text-slate-900">{row[0]}</div>
                    <div className="p-3">{row[1]}</div>
                    <div className="p-3">{row[2]}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                {lang === "en" ? "Quick Recommendation Calculator" : "ឧបករណ៍គណនាណែនាំរហ័ស"}
              </div>
              <p className="mt-2 text-xs text-slate-600">
                {lang === "en"
                  ? "Enter the approximate viewing distance (meters). We will suggest a screen size range."
                  : "បញ្ចូលចម្ងាយមើលប្រហាក់ប្រហែល (ម៉ែត្រ)។ យើងនឹងណែនាំជួរទំហំអេក្រង់សមស្រប។"}
              </p>
              <label htmlFor="view_distance_m" className="mt-4 block text-xs font-semibold text-slate-700">
                {lang === "en" ? "Viewing distance (m)" : "ចម្ងាយមើល (m)"}
              </label>
              <input
                id="view_distance_m"
                name="view_distance_m"
                value={viewDistance}
                onChange={(e) => setViewDistance(e.target.value)}
                inputMode="decimal"
                placeholder={lang === "en" ? "e.g. 3.5" : "ឧ. 3.5"}
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
              />
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 shadow-sm">
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-slate-900 via-sky-500 to-cyan-500" />
                <div className="mt-3">
                  {recommendedSize
                    ? (lang === "en"
                        ? `Recommended size: ${recommendedSize}`
                        : `ទំហំដែលណែនាំ៖ ${recommendedSize}`)
                    : (lang === "en"
                        ? "Enter a viewing distance to get a recommendation."
                        : "សូមបញ្ចូលចម្ងាយមើល ដើម្បីទទួលបានការណែនាំ។")}
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                {lang === "en"
                  ? "Final size depends on content type, audience seating, and room lighting."
                  : "ទំហំចុងក្រោយអាស្រ័យលើប្រភេទមាតិកា ការរៀបចំកន្លែងអង្គុយអ្នកមើល និងពន្លឺក្នុងបន្ទប់។"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SETUP */}
      <section id="installation" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.setupTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "End-to-end installation for interactive flat panels in Cambodia includes site survey, mounting, cabling, network setup, and user training. We optimize the screen height, viewing angle, and cable routing to ensure reliable daily use for classrooms, meeting rooms, and training centers."
              : "ការដំឡើង Interactive Flat Panel ពេញលេញនៅកម្ពុជា រួមមានការស្ទង់ទីតាំង ការដំឡើងម៉ោន ការរៀបខ្សែ ការរៀបចំបណ្តាញ និងការបណ្តុះបណ្តាលអ្នកប្រើ។ យើងធ្វើឱ្យប្រសើរឡើងនូវកម្ពស់អេក្រង់ មុំមើល និងផ្លូវខ្សែ ដើម្បីធានាការប្រើប្រាស់ប្រចាំថ្ងៃដែលទុកចិត្តបាន សម្រាប់ថ្នាក់រៀន បន្ទប់ប្រជុំ និងមជ្ឈមណ្ឌលបណ្តុះបណ្តាល។"}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard
              n="01"
              title={lang === "en" ? "Site survey and room assessment" : "ស្ទង់ទីតាំង និងវាយតម្លៃបន្ទប់"}
              desc={lang === "en"
                ? "Measure room size, seating distance, wall strength, and lighting. Confirm the best screen size, mounting height, and cable path."
                : "វាស់ទំហំបន្ទប់ ចម្ងាយអង្គុយ កម្លាំងជញ្ជាំង និងពន្លឺ។ បញ្ជាក់ឱ្យច្បាស់ពីទំហំអេក្រង់សមស្រប កម្ពស់ដំឡើង និងផ្លូវខ្សែ។"}
            />
            <StepCard
              n="02"
              title={lang === "en" ? "Wall mount or floor stand setup" : "ដំឡើង wall mount ឬ floor stand"}
              desc={lang === "en"
                ? "Install wall brackets or floor stand with safe load rating, correct tilt, and clean finishing for professional presentation spaces."
                : "ដំឡើងជើងជញ្ជាំង ឬជើងឈរជាន់ ដោយគោរពសុវត្ថិភាពទម្ងន់ កំណត់មុំឱ្យត្រឹមត្រូវ និងបញ្ចប់ការងារឱ្យស្អាត សម្រាប់កន្លែងបង្ហាញអាជីព។"}
            />
            <StepCard
              n="03"
              title={lang === "en" ? "Power, network, and OPS setup" : "រៀបចំថាមពល បណ្តាញ និង OPS"}
              desc={lang === "en"
                ? "Connect power, LAN/Wi-Fi, HDMI/USB-C, and configure Android or OPS/Windows for content sharing and classroom apps."
                : "ភ្ជាប់ថាមពល LAN/Wi-Fi HDMI/USB-C និងកំណត់រចនាសម្ព័ន្ធ Android ឬ OPS/Windows សម្រាប់ចែករំលែកមាតិកា និងកម្មវិធីសិក្សា។"}
            />
            <StepCard
              n="04"
              title={lang === "en" ? "User training and handover" : "បណ្តុះបណ្តាលអ្នកប្រើ និងប្រគល់ការងារ"}
              desc={lang === "en"
                ? "Hands-on training for whiteboard tools, wireless casting, file sharing, and daily maintenance checks for smooth operation."
                : "បណ្តុះបណ្តាលជាក់ស្តែងអំពីឧបករណ៍ whiteboard, wireless casting, file sharing និងការត្រួតពិនិត្យថែទាំប្រចាំថ្ងៃ ដើម្បីឱ្យដំណើរការរលូន។"}
            />
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Interactive Flat Panel Use Cases in Cambodia (Education, Corporate, Healthcare)"
              : "ករណីប្រើប្រាស់ Interactive Flat Panel នៅកម្ពុជា (អប់រំ សាជីវកម្ម និងសុខាភិបាល)"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Real-world scenarios where interactive flat panels improve teaching, training, and presentation workflows across Cambodia schools, offices, and hospitals."
              : "ឧទាហរណ៍ការប្រើប្រាស់ជាក់ស្តែង ដែល Interactive Flat Panel ជួយបង្កើនប្រសិទ្ធភាពការបង្រៀន ការបណ្តុះបណ្តាល និងលំហូរការងារបង្ហាញ នៅសាលារៀន ការិយាល័យ និងមន្ទីរពេទ្យទូទាំងកម្ពុជា។"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
                  [
                    "School Classroom Upgrade",
                    "65-86 inch 4K smart boards with multi-touch writing, annotation, and wireless casting for daily lessons. Supports whiteboard apps, lesson playback, and interactive teaching.",
                    ["Education", "Whiteboard", "4K"],
                  ],
                  [
                    "Corporate Meeting Room",
                    "65-75 inch interactive panels with HDMI/USB-C, LAN/Wi-Fi, and screen sharing for presentations, brainstorming, and hybrid meetings.",
                    ["Meeting", "Wireless", "USB-C"],
                  ],
                  [
                    "Training Center",
                    "75-98 inch panels for clear visibility, multi-user collaboration, and hands-on demonstrations during workshops and onboarding.",
                    ["Training", "Multi-touch", "Large screen"],
                  ],
                  [
                    "Hospital Briefing Room",
                    "65-86 inch panels for clinical training, medical briefings, and patient education with quick annotation and reliable daily use.",
                    ["Healthcare", "Briefing", "Reliable"],
                  ],
                ]
              : [
                  [
                    "ការអាប់ដេតថ្នាក់រៀន",
                    "Smart board 4K ទំហំ 65-86 inch ជាមួយការសរសេរ multi-touch, annotation និង wireless casting សម្រាប់មេរៀនប្រចាំថ្ងៃ។ គាំទ្រ whiteboard apps, lesson playback និងការបង្រៀនអន្តរកម្ម។",
                    ["អប់រំ", "Whiteboard", "4K"],
                  ],
                  [
                    "បន្ទប់ប្រជុំក្រុមហ៊ុន",
                    "Interactive panel ទំហំ 65-75 inch ជាមួយ HDMI/USB-C, LAN/Wi-Fi និង screen sharing សម្រាប់ការបង្ហាញ គំនិតច្នៃប្រឌិត និងកិច្ចប្រជុំ hybrid។",
                    ["ប្រជុំ", "ឥតខ្សែ", "USB-C"],
                  ],
                  [
                    "មជ្ឈមណ្ឌលបណ្តុះបណ្តាល",
                    "Panel ទំហំ 75-98 inch សម្រាប់ការមើលឃើញច្បាស់ ការសហការច្រើនអ្នកប្រើ និងការបង្ហាញជាក់ស្តែងពេល workshop និង onboarding។",
                    ["បណ្តុះបណ្តាល", "Multi-touch", "អេក្រង់ធំ"],
                  ],
                  [
                    "បន្ទប់បង្ហាញព័ត៌មានមន្ទីរពេទ្យ",
                    "Panel ទំហំ 65-86 inch សម្រាប់បណ្តុះបណ្តាលវេជ្ជសាស្ត្រ ការបង្ហាញព័ត៌មានវេជ្ជសាស្ត្រ និងការអប់រំអ្នកជំងឺ ជាមួយ annotation រហ័ស និងការប្រើប្រាស់ប្រចាំថ្ងៃដែលទុកចិត្តបាន។",
                    ["សុខាភិបាល", "បង្ហាញព័ត៌មាន", "ទុកចិត្តបាន"],
                  ],
                ]).map((item, idx) => {
              const [title, desc, chips] = item as [string, string, string[]];
              return (
              <div
                key={`${title}-${idx}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WARRANTY & POLICY */}
      <section id="warranty-support" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Interactive Flat Panel Warranty, Support & After-Sales Service in Cambodia"
              : "ការធានា ការគាំទ្រ និងសេវាកម្មបន្ទាប់ពីលក់ Interactive Flat Panel នៅកម្ពុជា"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Our interactive flat panel service in Cambodia covers quotation, delivery, installation, training, and long-term support. We focus on reliable classroom and meeting room operations with clear warranty terms, responsive on-site service, and optional maintenance plans."
              : "សេវាកម្ម Interactive Flat Panel របស់យើងនៅកម្ពុជា គ្របដណ្តប់ចាប់ពីការផ្តល់សម្រង់តម្លៃ ការដឹកជញ្ជូន ការដំឡើង ការបណ្តុះបណ្តាល និងការគាំទ្ររយៈពេលវែង។ យើងផ្តោតលើការប្រើប្រាស់ដែលទុកចិត្តបានសម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ ជាមួយលក្ខខណ្ឌធានាច្បាស់លាស់ សេវាកម្ម on-site ឆាប់រហ័ស និងជម្រើសផែនការថែទាំបន្ថែម។"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(lang === "en"
              ? [
                  [
                    "Warranty Coverage & Documentation",
                    "Warranty depends on the chosen model, configuration, and usage. We provide clear coverage details, warranty duration, and scope during quotation and handover.",
                  ],
                  [
                    "On-site Support & Troubleshooting",
                    "Our team handles installation, calibration, firmware checks, and troubleshooting to keep smart boards stable for daily classroom and office use.",
                  ],
                  [
                    "Maintenance & AMC Plans",
                    "Preventive maintenance, cleaning guidance, and AMC plans are available for schools, universities, and corporate deployments.",
                  ],
                ]
              : [
                  [
                    "វិសាលភាពធានា និងឯកសារ",
                    "ការធានាអាស្រ័យលើម៉ូដែល ការកំណត់រចនាសម្ព័ន្ធ និងការប្រើប្រាស់ដែលបានជ្រើស។ យើងផ្តល់ព័ត៌មានលម្អិតអំពីវិសាលភាពធានា រយៈពេលធានា និងលក្ខខណ្ឌពាក់ព័ន្ធយ៉ាងច្បាស់ នៅពេលផ្តល់តម្លៃ និងពេលប្រគល់ការងារ។",
                  ],
                  [
                    "ការគាំទ្រ On-site និងដោះស្រាយបញ្ហា",
                    "ក្រុមការងារយើងអនុវត្តការដំឡើង ការកែតម្រូវ calibration ការត្រួតពិនិត្យ firmware និងការដោះស្រាយបញ្ហា ដើម្បីរក្សាឱ្យ smart board មានស្ថិរភាពសម្រាប់ការប្រើប្រាស់ប្រចាំថ្ងៃនៅថ្នាក់រៀន និងការិយាល័យ។",
                  ],
                  [
                    "ផែនការថែទាំ និង AMC",
                    "សេវាថែទាំបង្ការ ការណែនាំសម្អាត និងផែនការ AMC មានសម្រាប់សាលារៀន សាកលវិទ្យាល័យ និងការដំឡើងក្នុងស្ថាប័នអាជីវកម្ម។",
                  ],
                ]).map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + FINAL CTA */}
      <section id="faq" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.faqTitle}
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqs.map((f) => (
              <details
                key={f.qEn}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-900">
                      {lang === "en" ? f.qEn : f.qKm}
                    </div>
                    <span className="mt-0.5 text-slate-400 transition group-open:rotate-180">
                      v
                    </span>
                  </div>
                  <div className="mt-2 hidden h-px w-full bg-slate-100 group-open:block" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {lang === "en" ? f.aEn : f.aKm}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">{t.finalTitle}</h3>
            <p className="mt-2 text-slate-600">{t.finalSub}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={toLangHref("/contact/")}
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {t.finalCta}
              </Link>
              <Link
                href={toLangHref("/interactive-flat-panel#models")}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ======================
   Small UI components
   ====================== */

function StepCard({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-semibold text-slate-500">{n}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{title}</div>
      {desc ? <p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p> : null}
    </div>
  );
}






