"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLang } from "../../components/layout/LanguageProvider";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function LedDisplayClient() {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      badge: "Cambodia • LED Display • Digital Signage",
      h1: "LED Display Solutions in Cambodia",
      sub:
        "Indoor LED video walls and outdoor LED billboards—engineered for clear visuals, reliable performance and long-term support. From site survey to installation and after-sales, we handle everything locally.",
      cta1: "Get a Free Quotation",
      cta2: "Explore Indoor & Outdoor",
      serving: "Serving: Phnom Penh • Siem Reap • Sihanoukville",

      quickTitle: "Quick Access",
      quickSub: "Go directly to the most requested LED display solutions.",
      indoor: "Indoor LED Display",
      outdoor: "Outdoor LED Display",
      controller: "LED Controller",
      accessories: "Accessories",

      processTitle: "Our Delivery Process",
      processSub:
        "A structured workflow that keeps your project on-time and ensures clean installation and stable performance.",
      p1: "Site Survey & Requirement",
      p2: "Screen Design & Proposal",
      p3: "Installation & Commissioning",
      p4: "Training & After-Sales Support",

      useTitle: "Where LED Displays Work Best",
      useSub:
        "Popular use-cases across Cambodia—planned with the right brightness, pixel pitch and structure.",
      u1: "Retail & Shopping Malls",
      u2: "Hotels, Resorts & Hospitality",
      u3: "Roadside & Rooftop Advertising",
      u4: "Corporate, Banks & Showrooms",
      u5: "Events, Rental & Stage Setup",
      u6: "Education & Smart Campuses",

      chooseTitle: "How to Choose the Right LED Display",
      chooseSub:
        "Simple guidelines to match pixel pitch and brightness with viewing distance and environment.",
      c1: "Viewing distance & pixel pitch",
      c1d: "Close viewing: fine pitch. Roadside viewing: larger pitch for budget efficiency.",
      c2: "Brightness & environment",
      c2d: "Indoor needs balanced brightness. Outdoor needs high brightness and glare control.",
      c3: "Cabinet size & structure",
      c3d: "Confirm screen size, mounting method and structure before ordering and fabrication.",
      c4: "IP rating & protection",
      c4d: "Outdoor installations should be weather-protected and dust-resistant for long life.",

      whyTitle: "Why Mugnee Cambodia",
      whySub:
        "Engineering-first delivery with local support—built for reliability, safety and long-term service.",
      w1: "Local installation team & on-site support",
      w2: "Proper wiring, grounding & clean structure finishing",
      w3: "Stable performance in heat, dust & humidity (project-based design)",
      w4: "Spare parts planning and maintenance options (AMC)",

      faqTitle: "FAQ",
      faqSub: "Common questions customers ask before buying an LED display in Cambodia.",

      finalTitle: "Plan Your LED Display Project",
      finalSub:
        "Tell us your location, size and use-case. We’ll recommend the right pixel pitch, brightness and structure with a project-based quotation.",
      finalCta: "Contact & Get Quote",
      seeProjects: "See Projects",
      breadcrumb: "Products",
    };

    const km = {
      badge: "កម្ពុជា • អេក្រង់ LED • Digital Signage",
      h1: "ដំណោះស្រាយអេក្រង់ LED នៅកម្ពុជា",
      sub:
        "អេក្រង់ LED សម្រាប់ក្នុងអគារ និងប៊ីលបត LED ក្រៅអគារ—រចនា និងដំឡើងដោយក្រុមវិស្វករជំនាញ។ យើងគ្រប់គ្រងទាំងអស់ចាប់ពីស្ទង់ទីតាំង ដំឡើង Commissioning និងសេវាកម្មបន្ទាប់ពីលក់នៅក្នុងកម្ពុជា។",
      cta1: "ស្នើសុំតម្លៃ (Free)",
      cta2: "មើល Indoor & Outdoor",
      serving: "សេវាកម្ម៖ Phnom Penh • Siem Reap • Sihanoukville",

      quickTitle: "ចូលរហ័ស",
      quickSub: "ចូលទៅកាន់ដំណោះស្រាយអេក្រង់ LED ដែលត្រូវការច្រើនបំផុត។",
      indoor: "អេក្រង់ LED ក្នុងអគារ",
      outdoor: "អេក្រង់ LED ក្រៅអគារ",
      controller: "LED Controller",
      accessories: "គ្រឿងបន្លាស់",

      processTitle: "ដំណើរការដឹកជញ្ជូនគម្រោង",
      processSub:
        "ដំណើរការត្រឹមត្រូវសម្រាប់គម្រោងឆាប់រហ័ស ដំឡើងស្អាត និងដំណើរការស្ថេរភាព។",
      p1: "ស្ទង់ទីតាំង & តម្រូវការ",
      p2: "រចនា & សំណើ",
      p3: "ដំឡើង & Commissioning",
      p4: "បង្រៀនប្រើប្រាស់ & After-Sales",

      useTitle: "កន្លែងដែលអេក្រង់ LED សមស្រប",
      useSub:
        "ករណីប្រើប្រាស់ពេញនិយមនៅកម្ពុជា—ជ្រើសរើស pixel pitch, brightness និងរចនាសម្ព័ន្ធឲ្យត្រឹមត្រូវ។",
      u1: "ហាងលក់រាយ & ផ្សារ",
      u2: "សណ្ឋាគារ & Hospitality",
      u3: "ពាណិជ្ជកម្មក្រៅអគារ (Billboard)",
      u4: "ការិយាល័យ ក្រុមហ៊ុន & Showroom",
      u5: "ព្រឹត្តិការណ៍ & Rental LED",
      u6: "សាលារៀន & Smart Campus",

      chooseTitle: "របៀបជ្រើសរើសអេក្រង់ LED",
      chooseSub:
        "គន្លឹះសាមញ្ញសម្រាប់ជ្រើស pixel pitch និង brightness តាមចម្ងាយមើល និងបរិយាកាស។",
      c1: "ចម្ងាយមើល & Pixel Pitch",
      c1d: "មើលជិត៖ pitch តូច។ មើលឆ្ងាយ/ផ្លូវធំ៖ pitch ធំ សមស្របថវិកា។",
      c2: "Brightness & បរិយាកាស",
      c2d: "Indoor ត្រូវសមរម្យភ្លឺ។ Outdoor ត្រូវការភ្លឺខ្ពស់ និងការការពារពន្លឺ។",
      c3: "ទំហំ Cabinet & រចនាសម្ព័ន្ធ",
      c3d: "កំណត់ទំហំ screen និងរបៀបដំឡើង មុនពេលផលិត/បញ្ជាទិញ។",
      c4: "IP Rating & ការការពារ",
      c4d: "Outdoor គួរមានការពារទឹក/ធូលី សម្រាប់អាយុកាលយូរ។",

      whyTitle: "ហេតុអ្វីជ្រើស Mugnee Cambodia",
      whySub:
        "ដឹកនាំដោយវិស្វករ + សេវាកម្មក្នុងស្រុក—គោលដៅស្ថេរភាព សុវត្ថិភាព និងសេវាកម្មយូរអង្វែង។",
      w1: "ក្រុមដំឡើងក្នុងស្រុក & On-site support",
      w2: "Wiring/grounding ត្រឹមត្រូវ និង finishing ស្អាត",
      w3: "រចនាតាមគម្រោង សមស្របអាកាសធាតុ (ធូលី/សំណើម/កំដៅ)",
      w4: "ជម្រើសថែទាំ (AMC) និងការរៀបចំ spare parts",

      faqTitle: "សំណួរញឹកញាប់",
      faqSub: "សំណួរដែលអតិថិជនសួរញឹកញាប់ មុនទិញអេក្រង់ LED នៅកម្ពុជា។",

      finalTitle: "រៀបចំគម្រោងអេក្រង់ LED របស់អ្នក",
      finalSub:
        "ប្រាប់យើងទីតាំង ទំហំ និងគោលបំណងប្រើប្រាស់—យើងនឹងណែនាំ pixel pitch, brightness និងរចនាសម្ព័ន្ធជាមួយ quotation តាមគម្រោង។",
      finalCta: "ទំនាក់ទំនង & ស្នើសុំតម្លៃ",
      seeProjects: "មើលគម្រោង",
      breadcrumb: "ផលិតផល",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs: FAQ[] = [
    {
      qEn: "Which LED display is best for indoor use?",
      aEn:
        "Indoor LED video walls are best for close viewing—choose pixel pitch based on distance, content and budget. We recommend after a site survey.",
      qKm: "អេក្រង់ LED មួយណាសមស្របសម្រាប់ក្នុងអគារ?",
      aKm:
        "Indoor LED video wall សមស្របសម្រាប់មើលជិត—ជ្រើស pixel pitch តាមចម្ងាយមើល និងថវិកា។ យើងណែនាំក្រោយស្ទង់ទីតាំង។",
    },
    {
      qEn: "What should I consider for outdoor LED billboards?",
      aEn:
        "Outdoor screens need high brightness, weather protection (IP-rated) and proper structure/grounding for safe long-term operation.",
      qKm: "Outdoor billboard ត្រូវគិតអ្វីខ្លះ?",
      aKm:
        "Outdoor ត្រូវការភ្លឺខ្ពស់ ការពារទឹក/ធូលី (IP-rated) និងរចនាសម្ព័ន្ធ/grounding ត្រឹមត្រូវសម្រាប់សុវត្ថិភាព។",
    },
    {
      qEn: "Do you provide installation and after-sales support in Cambodia?",
      aEn:
        "Yes. We handle survey, installation, commissioning and provide maintenance options with local support.",
      qKm: "មានដំឡើង និងសេវាកម្មបន្ទាប់ពីលក់នៅកម្ពុជាដែរឬទេ?",
      aKm:
        "មាន។ យើងស្ទង់ទីតាំង ដំឡើង commissioning និងមានជម្រើសថែទាំជាមួយ support ក្នុងស្រុក។",
    },
    {
      qEn: "How do I choose pixel pitch?",
      aEn:
        "Pixel pitch depends on viewing distance. Closer viewing needs smaller pitch; far viewing can use larger pitch for cost efficiency.",
      qKm: "ជ្រើស Pixel Pitch ដូចម្តេច?",
      aKm:
        "ពឹងផ្អែកលើចម្ងាយមើល។ មើលជិត៖ pitch តូច។ មើលឆ្ងាយ៖ pitch ធំ សន្សំថវិកា។",
    },
    {
      qEn: "Can you recommend the right screen size and structure?",
      aEn:
        "Yes. We propose size, cabinet layout and mounting/structure after checking site measurements and viewing angles.",
      qKm: "អាចណែនាំទំហំ និងរចនាសម្ព័ន្ធបានទេ?",
      aKm:
        "បាន។ យើងស្នើទំហំ cabinet layout និងរបៀបដំឡើងក្រោយពិនិត្យទីតាំង និងមុំមើល។",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* ================= HERO (Gradient placeholder — future banner image ready) ================= */}
<section className="relative isolate overflow-hidden border-b border-slate-200">
  {/* ✅ Background gradient (WILL BE VISIBLE now) */}
  <div className="absolute inset-0 z-0">
    {/* Base soft gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

    {/* Top glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.14),transparent_55%)]" />

    {/* Bottom depth */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.07),transparent_60%)]" />

    {/* Subtle texture */}
    <div className="absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_1px_1px,rgba(0,0,0,.28)_1px,transparent_0)] [background-size:18px_18px]" />
  </div>

  {/* ✅ Content above background */}
  <div className="relative z-10 mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
    {/* breadcrumb */}
    <div className="text-xs text-slate-500">
      {t.breadcrumb} <span className="mx-1">/</span>
      <span className="font-semibold text-slate-700">LED Display</span>
    </div>

    {/* badge */}
    <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] text-slate-700 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
      {t.badge}
    </div>

    <div className="mt-3 grid gap-5 lg:grid-cols-12 lg:items-start">
      {/* Left */}
      <div className="lg:col-span-7">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.h1}
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-slate-700/90 sm:text-base">
          {t.sub}
        </p>

        {/* badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            Local Installation Team
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            Site Survey & Proposal
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Warranty & Maintenance (AMC)
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Project-based Quotation
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-3 flex flex-wrap items-center gap-2.5">
          <Link
            href="/contact"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {t.cta1}
          </Link>

          <a
            href="#quick"
            className="rounded-xl border border-slate-200 bg-white/85 px-4 py-2.5 text-sm font-semibold text-slate-900 backdrop-blur hover:bg-white"
          >
            {t.cta2}
          </a>
        </div>

        {/* highlights */}
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white/85 p-3 backdrop-blur">
            <div className="text-xs font-semibold text-slate-900">Best for</div>
            <div className="mt-1 text-sm text-slate-700">
              Retail, hotels, events, outdoor advertising
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white/85 p-3 backdrop-blur">
            <div className="text-xs font-semibold text-slate-900">We deliver</div>
            <div className="mt-1 text-sm text-slate-700">
              Indoor video walls + outdoor billboard screens
            </div>
          </div>
        </div>

        <div className="mt-3 text-xs text-slate-600">{t.serving}</div>
      </div>

      {/* Right */}
      <div className="lg:col-span-5">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
          <div className="text-base font-bold text-slate-900">{t.chooseTitle}</div>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">{t.chooseSub}</p>

          <div className="mt-3 grid gap-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3">
              <div className="text-sm font-bold text-slate-900">{t.c1}</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-700">{t.c1d}</div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3">
              <div className="text-sm font-bold text-slate-900">{t.c2}</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-700">{t.c2d}</div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3">
              <div className="text-sm font-bold text-slate-900">{t.c4}</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-700">{t.c4d}</div>
            </div>
          </div>

          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {t.finalCta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* QUICK ACCESS */}
<section id="quick" className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {t.quickTitle}
        </h2>
        <p className="mt-1 text-slate-600">{t.quickSub}</p>
      </div>
    </div>

    {/* ✅ Premium panel */}
    <div className="mt-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 shadow-sm sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <QuickCard
          icon="🟦"
          title={t.indoor}
          desc="Fine pitch for close viewing"
          href="/products/indoor-led-display"
        />
        <QuickCard
          icon="🌤️"
          title={t.outdoor}
          desc="High brightness + weather proof"
          href="/products/outdoor-led-display"
        />
        <QuickCard
          icon="🎛️"
          title={t.controller}
          desc="Processor / sending box options"
          href="/products/led-controller"
        />
        <QuickCard
          icon="🧩"
          title={t.accessories}
          desc="Power, cables & mounting items"
          href="/products/access-control-system"
        />
      </div>
    </div>
  </div>
</section>


      {/* USE CASES (SEO + informative) */}
<section className="border-t border-slate-200 bg-slate-50">
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
      {/* Left header */}
      <div className="lg:col-span-5">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {t.useTitle}
        </h2>

        <p className="mt-2 text-slate-600">
          {t.useSub}
        </p>

        {/* ✅ SEO paragraph (indexable content) */}
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          LED display and digital signage in Cambodia are widely used for{" "}
          <span className="font-semibold text-slate-900">
            retail advertising, hotel lobbies, roadside billboards, events and corporate showrooms
          </span>
          . Choosing the right LED screen depends on viewing distance, brightness (nits),
          pixel pitch, and whether the installation is indoor or outdoor with IP-rated protection.
        </p>

        {/* quick tips */}
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">
            Quick guidance (Cambodia)
          </div>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Indoor: balanced brightness + fine pitch for close viewers.
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Outdoor: high brightness + IP protection + strong structure.
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
              We recommend specs after a site survey and measurement.
            </li>
          </ul>
        </div>
      </div>

      {/* Right cards */}
      <div className="lg:col-span-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <UseCaseCard
            icon="🛍️"
            title={t.u1}
            desc="Indoor LED video wall for promotions, price campaigns and brand content—ideal for high foot-traffic areas."
            chips={["Indoor", "Fine pitch", "Balanced brightness"]}
            bestFor="Malls, retail stores, supermarkets"
          />

          <UseCaseCard
            icon="🏨"
            title={t.u2}
            desc="Lobby and reception displays for welcome screens, menus and event schedules—clean visuals with 24/7 stability."
            chips={["Indoor", "24/7 use", "Quiet cooling"]}
            bestFor="Hotels, resorts, hospitality venues"
          />

          <UseCaseCard
            icon="🛣️"
            title={t.u3}
            desc="Outdoor LED billboard for maximum visibility—requires high brightness, weather protection and safe structure."
            chips={["Outdoor", "High brightness", "IP rated"]}
            bestFor="Roadside, rooftop, highway advertising"
          />

          <UseCaseCard
            icon="🏦"
            title={t.u4}
            desc="Showroom screens for product demos, brand storytelling and announcements—premium look with sharp content."
            chips={["Indoor", "Professional", "Color accuracy"]}
            bestFor="Corporate, banks, showrooms"
          />

          <UseCaseCard
            icon="🎤"
            title={t.u5}
            desc="Rental LED wall for stage backdrops and live events—fast setup, modular cabinets and easy maintenance."
            chips={["Rental", "Fast setup", "Modular cabinet"]}
            bestFor="Events, concerts, conference stages"
          />

          <UseCaseCard
            icon="🎓"
            title={t.u6}
            desc="Campus displays for notices, digital signage and auditorium visuals—optimized for readability and long sessions."
            chips={["Indoor", "Wide viewing", "Long runtime"]}
            bestFor="Schools, universities, smart campuses"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* PROCESS */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">{t.processTitle}</h2>
          <p className="mt-2 text-slate-600">{t.processSub}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n="01" title={t.p1} />
            <StepCard n="02" title={t.p2} />
            <StepCard n="03" title={t.p3} />
            <StepCard n="04" title={t.p4} />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">{t.whyTitle}</h2>
          <p className="mt-2 text-slate-600">{t.whySub}</p>

          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            <BulletCard text={t.w1} />
            <BulletCard text={t.w2} />
            <BulletCard text={t.w3} />
            <BulletCard text={t.w4} />
          </div>
        </div>
      </section>

      {/* FAQ + FINAL CTA */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">{t.faqTitle}</h2>
          <p className="mt-2 text-slate-600">{t.faqSub}</p>

          <div className="mt-6 grid gap-3">
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
                      ▾
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

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">{t.finalTitle}</h3>
            <p className="mt-2 text-slate-600">{t.finalSub}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {t.finalCta}
              </Link>

              <Link
                href="/projects"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                {t.seeProjects}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================
   Small UI blocks (light)
   ========================= */

function QuickCard({
  icon,
  title,
  desc,
  href,
}: {
  icon: string;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition
                 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-900/20"
    >
      {/* subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-slate-900/5 blur-2xl" />
        <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-slate-900/5 blur-2xl" />
      </div>

      <div className="relative flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-xl ring-1 ring-slate-200">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <div className="truncate text-sm font-semibold text-slate-900">
              {title}
            </div>
            <span className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700">
              →
            </span>
          </div>

          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600">
            {desc}
          </p>

          <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span className="underline-offset-2 group-hover:underline">
              View details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}


function StepCard({ n, title }: { n: string; title: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-semibold text-slate-500">{n}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{title}</div>
    </div>
  );
}

function UseCaseCard({
  icon,
  title,
  desc,
  chips,
  bestFor,
}: {
  icon: string;
  title: string;
  desc: string;
  chips: string[];
  bestFor: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-slate-900/5 blur-2xl" />
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-slate-900/5 blur-2xl" />
      </div>

      <div className="relative flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-xl ring-1 ring-slate-200">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {desc}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <div className="text-[11px] font-semibold text-slate-500">
              Best for
            </div>
            <div className="text-xs font-semibold text-slate-900">
              {bestFor}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function BulletCard({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-2 text-sm text-slate-700">
        <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900" />
        <span>{text}</span>
      </div>
    </div>
  );
}
