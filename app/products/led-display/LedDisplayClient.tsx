
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { BUSINESS_ADDRESS, BUSINESS_PHONE_E164, BUSINESS_SAME_AS, BUSINESS_NAME, SERVICE_AREAS } from "../../lib/nap";
import { SITE_URL } from "../../lib/site";
import ProductGrid from "../../components/sections/ProductGrid";

type ProductGridConfig = {
  columns?: 2 | 3 | 4;
  pageSize?: number;
  allowedCategoryIds?: string[];
  filterCategoryIds?: string[];
  categoryOrderIds?: string[];
  showCategoryFilters?: boolean;
  showSort?: boolean;
  showPagination?: boolean;
  detailBasePath?: string;
};

const LED_FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: "How much does an LED display project cost in Cambodia?",
    a: "LED project cost depends on pixel pitch, total screen size (sqm), brightness, cabinet type, structure, controller, power setup, and site access. That is why accurate pricing in Cambodia is usually provided through a project BOQ, not a single fixed list price.",
  },
  {
    q: "Which pixel pitch is right for my viewing distance?",
    a: "For close viewing (about 1.5-4m), finer pitch such as P1.5-P2.5 is common. Mid-distance use often fits P2.5-P4. Larger outdoor roadside viewing often uses P4-P10. Final selection should match real viewer distance, content type, and budget.",
  },
  {
    q: "What is the best LED display type for indoor and outdoor use in Cambodia?",
    a: "Indoor environments usually prioritize finer pixel pitch and color consistency. Outdoor screens prioritize high brightness, weather protection, and strong cabinet durability for sun, rain, and dust conditions in Cambodia.",
  },
  {
    q: "What brightness (nits) is recommended for outdoor LED billboards in Cambodia?",
    a: "Outdoor billboards typically require high brightness, often around 4,500-7,000+ nits, so content remains visible under strong daylight in Phnom Penh and other Cambodian cities.",
  },
  {
    q: "What IP rating should I choose for outdoor LED screens?",
    a: "A common recommendation is at least IP65 on the front side for rain and dust protection. For demanding sites, cabinet build quality, rear protection, and sealing quality are just as important as the IP label.",
  },
  {
    q: "What refresh rate is suitable for LED displays used with cameras?",
    a: "Many commercial installations run at 1,920Hz or above. For camera-heavy use, livestream, studio, or stage applications, 3,840Hz or higher is preferred to reduce flicker and scan lines.",
  },
  {
    q: "How much electricity does an LED display use?",
    a: "Power use depends on screen size, brightness settings, content, and operating hours. A proper quotation should include estimated max and average consumption so you can plan monthly electricity cost before purchase.",
  },
  {
    q: "How long does delivery and installation usually take in Cambodia?",
    a: "Timeline depends on model availability, structure complexity, and site readiness. A typical process includes survey, BOQ confirmation, fabrication/procurement, installation, calibration, and commissioning.",
  },
  {
    q: "What warranty and after-sales support should I expect?",
    a: "A reliable LED supplier should provide clear warranty terms, spare-part support, onsite troubleshooting, and preventive maintenance options. Ask for written scope, response process, and exclusions before confirming.",
  },
  {
    q: "Should I rent LED screens or buy a permanent installation?",
    a: "Rental LED is suitable for temporary events and short campaigns. Permanent installation is usually better for daily branding, retail, corporate communication, and long-term cost efficiency.",
  },
  {
    q: "Do outdoor LED billboards need permit or structure approval in Cambodia?",
    a: "Large roadside installations may require permit and structure compliance based on location. It is best to confirm local requirements early and include structural safety checks in the project plan.",
  },
  {
    q: "What information is needed to get an accurate LED display quotation?",
    a: "Share target use (indoor/outdoor), preferred size or wall area, viewing distance, installation location, operating hours, and timeline. This allows accurate BOQ, system design, and realistic project costing.",
  },
];

const LED_FAQS_KM: Array<{ q: string; a: string }> = [
  {
    q: "គម្រោងអេក្រង់ LED នៅកម្ពុជា តម្លៃប្រហែលប៉ុន្មាន?",
    a: "តម្លៃអាស្រ័យលើ Pixel Pitch ទំហំអេក្រង់ (sqm) កម្រិតពន្លឺ ប្រភេទកាប៊ីណេត រចនាសម្ព័ន្ធ Controller ប្រព័ន្ធភ្លើង និងលក្ខខណ្ឌទីតាំង។ ដូច្នេះការគណនាត្រឹមត្រូវគួរធ្វើតាម BOQ គម្រោង មិនមែនតារាងតម្លៃថេរតែមួយទេ។",
  },
  {
    q: "តើត្រូវជ្រើស Pixel Pitch ដូចម្តេចឱ្យសមនឹងចម្ងាយមើល?",
    a: "បើមើលជិត (ប្រហែល 1.5-4m) ជាទូទៅសមស្របជាមួយ P1.5-P2.5។ ចម្ងាយមធ្យមជាញឹកញាប់ប្រើ P2.5-P4។ សម្រាប់ការមើលឆ្ងាយខាងក្រៅភាគច្រើនប្រើ P4-P10។ ជម្រើសចុងក្រោយត្រូវអាស្រ័យលើចម្ងាយមើលពិត មាតិកា និងថវិកា។",
  },
  {
    q: "អេក្រង់ LED ប្រភេទណាល្អសម្រាប់ក្នុងអគារ និងក្រៅអគារនៅកម្ពុជា?",
    a: "ក្នុងអគារត្រូវផ្តោតលើ Pixel Pitch ល្អិត និងពណ៌មានស្ថេរភាព។ ខាងក្រៅត្រូវផ្តោតលើពន្លឺខ្ពស់ ការការពារអាកាសធាតុ និងកាប៊ីណេតរឹងមាំ ដើម្បីទប់ទល់កំដៅ ភ្លៀង និងធូលីនៅកម្ពុជា។",
  },
  {
    q: "សម្រាប់ប៊ីលបត LED ខាងក្រៅនៅកម្ពុជា ត្រូវការពន្លឺប៉ុន្មាន nits?",
    a: "អេក្រង់ខាងក្រៅភាគច្រើនត្រូវការពន្លឺខ្ពស់ ប្រហែល 4,500-7,000+ nits ដើម្បីឱ្យមាតិកាមើលឃើញច្បាស់ក្រោមពន្លឺថ្ងៃខ្លាំង នៅភ្នំពេញ និងតំបន់ផ្សេងៗ។",
  },
  {
    q: "Outdoor LED គួរតែជ្រើស IP rating ប៉ុន្មាន?",
    a: "ជាទូទៅណែនាំយ៉ាងហោចណាស់ IP65 ផ្នែកខាងមុខ សម្រាប់ការពារទឹកភ្លៀង និងធូលី។ សម្រាប់ទីតាំងតឹងរ៉ឹង គុណភាពកាប៊ីណេត ការបិទស្រោប និងការការពារផ្នែកខាងក្រោយក៏សំខាន់ដូចគ្នា។",
  },
  {
    q: "Refresh rate ប៉ុន្មានសមស្របសម្រាប់ការប្រើជាមួយកាមេរ៉ា?",
    a: "ការដំឡើងពាណិជ្ជកម្មជាច្រើនប្រើ 1,920Hz ឬខ្ពស់ជាងនេះ។ បើប្រើសម្រាប់ថតវីដេអូ Livestream ឬ Studio គួរជ្រើស 3,840Hz ឬខ្ពស់ជាងនេះ ដើម្បីកាត់បន្ថយ flicker និង scan line។",
  },
  {
    q: "អេក្រង់ LED ប្រើអគ្គិសនីប៉ុន្មាន?",
    a: "ការប្រើអគ្គិសនីអាស្រ័យលើទំហំអេក្រង់ កម្រិតពន្លឺ ប្រភេទមាតិកា និងម៉ោងដំណើរការ។ Quotation ល្អគួរបង្ហាញទាំងកម្រិតប្រើប្រាស់អតិបរមា និងមធ្យម ដើម្បីគណនាចំណាយភ្លើងប្រចាំខែបានមុនពេលទិញ។",
  },
  {
    q: "ការដឹកជញ្ជូន និងដំឡើងនៅកម្ពុជា ជាទូទៅចំណាយពេលប៉ុន្មាន?",
    a: "រយៈពេលអាស្រ័យលើស្តុកម៉ូដែល ភាពស្មុគស្មាញរចនាសម្ព័ន្ធ និងភាពរួចរាល់ទីតាំង។ ដំណើរការធម្មតារួមមានស្ទង់ទីតាំង អនុម័ត BOQ ផលិត/ផ្គត់ផ្គង់ ដំឡើង កំណត់រចនា និងបើកប្រើប្រាស់។",
  },
  {
    q: "តើ Warranty និងសេវាបន្ទាប់ពីលក់គួរមានអ្វីខ្លះ?",
    a: "អ្នកផ្គត់ផ្គង់ដែលអាចទុកចិត្តបានគួរផ្តល់លក្ខខណ្ឌ Warranty ច្បាស់លាស់ គ្រឿងបន្លាស់ជំនួស សេវាជួសជុល Onsite និងផែនការថែទាំជាប្រចាំ។ មុនបញ្ជាក់គម្រោង គួរស្នើសុំឯកសារកំណត់វិសាលភាព និងករណីមិនគ្របដណ្តប់។",
  },
  {
    q: "គួរជួលអេក្រង់ LED ឬទិញដំឡើងអចិន្ត្រៃយ៍?",
    a: "LED សម្រាប់ជួលសមស្របសម្រាប់ព្រឹត្តិការណ៍បណ្តោះអាសន្ន ឬយុទ្ធនាការខ្លី។ ការដំឡើងអចិន្ត្រៃយ៍ភាគច្រើនសមស្របសម្រាប់ការប្រើប្រចាំថ្ងៃ ការផ្សព្វផ្សាយម៉ាក និងប្រសិទ្ធភាពថ្លៃដើមរយៈពេលវែង។",
  },
  {
    q: "ប៊ីលបត LED ខាងក្រៅ ត្រូវការអាជ្ញាបណ្ណ ឬការអនុម័តរចនាសម្ព័ន្ធទេ?",
    a: "សម្រាប់គម្រោងធំតាមផ្លូវសាធារណៈ អាចត្រូវការអាជ្ញាបណ្ណ និងការអនុវត្តតាមបទប្បញ្ញត្តិក្នុងតំបន់។ គួរតែពិនិត្យតម្រូវការតាំងពីដំណាក់កាលដំបូង និងបញ្ចូលការត្រួតពិនិត្យសុវត្ថិភាពរចនាសម្ព័ន្ធក្នុងផែនការ។",
  },
  {
    q: "តើត្រូវផ្តល់ព័ត៌មានអ្វីខ្លះ ដើម្បីទទួលបានតម្លៃអេក្រង់ LED ត្រឹមត្រូវ?",
    a: "សូមផ្តល់ប្រភេទប្រើប្រាស់ (ក្នុងអគារ/ក្រៅអគារ) ទំហំឬផ្ទៃដំឡើង ចម្ងាយមើល ទីតាំងដំឡើង ម៉ោងប្រើប្រាស់ និងពេលវេលាចង់អនុវត្ត។ ព័ត៌មានទាំងនេះជួយរៀបចំ BOQ និងគណនាតម្លៃគម្រោងបានត្រឹមត្រូវ។",
  },
];

const INTERNAL_LINK_CLUSTER_EN = [
  { title: "Indoor LED Display in Cambodia", href: "/led-display/indoor-led-display" },
  { title: "Outdoor LED Billboard in Cambodia", href: "/led-display/outdoor-led-display" },
  { title: "LED Receiving Card Guide", href: "/led-display/receiving-card" },
  { title: "LED Video Processor Selection", href: "/led-display/video-processor" },
  { title: "LED Power Supply & Parts", href: "/led-display/power-supply" },
  { title: "LED Installation & Service Support", href: "/service" },
  { title: "Cambodia Solutions by Industry", href: "/solutions" },
  { title: "Get LED Project Quotation", href: "/contact" },
];

const INTERNAL_LINK_CLUSTER_KM = [
  { title: "អេក្រង់ LED ក្នុងអគារនៅកម្ពុជា", href: "/led-display/indoor-led-display" },
  { title: "ប៊ីលបត្រ LED ខាងក្រៅនៅកម្ពុជា", href: "/led-display/outdoor-led-display" },
  { title: "មគ្គុទ្ទេសក៍កាតទទួលសញ្ញា LED", href: "/led-display/receiving-card" },
  { title: "មគ្គុទ្ទេសក៍ជ្រើសរើសឧបករណ៍ដំណើរការវីដេអូ LED", href: "/led-display/video-processor" },
  { title: "ប្រព័ន្ធផ្គត់ផ្គង់ថាមពល LED និងគ្រឿងបន្លាស់", href: "/led-display/power-supply" },
  { title: "សេវាដំឡើង និងគាំទ្របច្ចេកទេស LED", href: "/service" },
  { title: "ដំណោះស្រាយតាមវិស័យនៅកម្ពុជា", href: "/solutions" },
  { title: "ស្នើសុំតម្លៃគម្រោង LED", href: "/contact" },
];

const INTERNAL_LINK_HINTS_EN = [
  { tag: "Product Type", desc: "Compare indoor pixel pitch options for close-view viewing.", cta: "View Indoor Models" },
  { tag: "Product Type", desc: "Explore high-brightness outdoor screens for roadside visibility.", cta: "View Outdoor Models" },
  { tag: "Core Component", desc: "Learn how receiving cards affect stability and signal quality.", cta: "Read Guide" },
  { tag: "Core Component", desc: "Choose the right video processor for scaling and smooth playback.", cta: "Read Guide" },
  { tag: "Core Component", desc: "Select reliable power supply and spare parts for safe operation.", cta: "Explore Parts" },
  { tag: "Service", desc: "See installation scope, commissioning, and support workflow details.", cta: "View Service Scope" },
  { tag: "Use Cases", desc: "Find solution paths by retail, corporate, public, and event projects.", cta: "View Solutions" },
  { tag: "Get Quote", desc: "Request a project-based LED quotation with BOQ and timeline.", cta: "Request Quotation" },
];

const INTERNAL_LINK_HINTS_KM = [
  { tag: "ប្រភេទផលិតផល", desc: "ប្រៀបធៀបជម្រើស Pixel Pitch ក្នុងអគារសម្រាប់ការមើលជិត។", cta: "មើលម៉ូដែលក្នុងអគារ" },
  { tag: "ប្រភេទផលិតផល", desc: "ស្វែងរកអេក្រង់ពន្លឺខ្ពស់សម្រាប់ការមើលឃើញខាងក្រៅ។", cta: "មើលម៉ូដែលខាងក្រៅ" },
  { tag: "ផ្នែកស្នូល", desc: "យល់ពីតួនាទីកាតទទួលសញ្ញា លើស្ថិរភាព និងគុណភាពសញ្ញា។", cta: "អានមគ្គុទ្ទេសក៍" },
  { tag: "ផ្នែកស្នូល", desc: "ជ្រើសឧបករណ៍ដំណើរការវីដេអូដែលសមរម្យសម្រាប់បង្ហាញរូបភាពរលូន។", cta: "អានមគ្គុទ្ទេសក៍" },
  { tag: "ផ្នែកស្នូល", desc: "ជ្រើសប្រព័ន្ធផ្គត់ផ្គង់ថាមពល និងគ្រឿងបន្លាស់ដែលទុកចិត្តបានសម្រាប់សុវត្ថិភាព។", cta: "មើលគ្រឿងបន្លាស់" },
  { tag: "សេវាកម្ម", desc: "មើលលម្អិតពីដំណើរការដំឡើង ការត្រួតពិនិត្យដំណើរការ និងការគាំទ្រ។", cta: "មើលសេវាកម្ម" },
  { tag: "ករណីប្រើប្រាស់", desc: "ស្វែងរកដំណោះស្រាយតាមវិស័យពាណិជ្ជកម្ម អាជីវកម្ម សាធារណៈ និងព្រឹត្តិការណ៍។", cta: "មើលដំណោះស្រាយ" },
  { tag: "ស្នើសុំតម្លៃ", desc: "ស្នើសុំតម្លៃគម្រោង LED ជាមួយ BOQ និងពេលវេលាអនុវត្ត។", cta: "ស្នើសុំតម្លៃ" },
];

const DEFAULT_TRUST_SIGNALS_EN = [
  "Project-fit recommendation based on site survey, viewing distance, brightness target, and real budget range",
  "Engineering BOQ with transparent component scope: LED module, power supply, controller, cabinet, and structure plan",
  "Professional installation, grounding, calibration, and commissioning for stable image quality and safe operation",
  "Post-handover maintenance support with spare-parts readiness and responsive troubleshooting for low downtime",
];

const DEFAULT_TRUST_SIGNALS_KM = [
  "វាយតម្លៃតម្រូវការគម្រោង LED តាមទីតាំង ចម្ងាយមើល កម្រិតពន្លឺ និងថវិកាពិតប្រាកដ",
  "រៀបចំ BOQ តាមវិស្វកម្មដោយច្បាស់លាស់ រួមមានម៉ូឌុល LED ថាមពល ឧបករណ៍បញ្ជា កាប៊ីណេត និងរចនាសម្ព័ន្ធ",
  "គ្របដណ្តប់ការដឹកជញ្ជូន និងសេវាកម្មក្នុងស្រុក នៅភ្នំពេញ សៀមរាប ព្រះសីហនុ និងខេត្តសំខាន់ៗ",
  "ដំណើរការពេញលេញពីការស្ទង់ទីតាំង រៀបចំផែនការ ដំឡើង ត្រួតពិនិត្យដំណើរការ ដល់សេវាគាំទ្របន្ទាប់ពីលក់",
];

const TRUST_SIGNAL_TITLES_EN = [
  "Site-Based LED Planning",
  "Transparent LED BOQ Scope",
  "Certified Install & Commissioning",
  "Low-Downtime After-Sales",
];

const TRUST_SIGNAL_TITLES_KM = [
  "ផែនការ LED តាមទីតាំង",
  "BOQ ច្បាស់លាស់សម្រាប់ LED",
  "ការដំឡើង និងត្រួតពិនិត្យដំណើរការតាមស្តង់ដារ",
  "សេវាបន្ទាប់ពីលក់ដើម្បីកាត់បន្ថយពេលឈប់ដំណើរការ",
];

const DEFAULT_TRUST_PROOF_CHIPS_EN = [
  "Indoor LED Display Solutions",
  "Outdoor LED Billboard Projects",
  "Pixel Pitch & BOQ Planning",
  "Certified Installation Workflow",
  "Calibration & Commissioning",
  "After-Sales Maintenance Support",
];

const DEFAULT_TRUST_PROOF_CHIPS_KM = [
  "អ្នកផ្គត់ផ្គង់ អេក្រង់ LED នៅកម្ពុជា",
  "ជំនាញ LED ក្នុងអគារ និងខាងក្រៅ",
  "ដំណើរការ BOQ និងវិស្វកម្ម",
  "ក្រុមដំឡើងក្នុងស្រុក",
  "គ្របដណ្តប់សេវាកម្មបន្ទាប់ពីលក់",
  "ទំព័រដែលបានបង្កើនគុណភាព SEO តាមរចនាសម្ព័ន្ធទិន្នន័យ",
];

const SEO_STRONG_TERMS_EN = [
  "LED display price in Cambodia",
  "LED screen solutions in Cambodia",
  "indoor LED display solutions in Cambodia",
  "outdoor LED display solutions in Cambodia",
  "outdoor LED display price",
  "indoor LED display price",
  "indoor LED display",
  "P1.25 to P4 indoor LED display options",
  "P2.5 to P10 outdoor LED display models",
  "outdoor LED billboard",
  "high-brightness outdoor LED billboard systems",
  "DOOH advertising",
  "public digital signage projects",
  "LED video wall",
  "fine-pitch indoor LED video wall systems",
  "digital signage screens",
  "LED advertising screen",
  "commercial advertising",
  "fine-pitch indoor LED screens",
  "high brightness",
  "seamless visuals",
  "custom screen size planning",
  "controller and power integration",
  "BOQ preparation",
  "project-based design",
  "quotation",
  "high-brightness outdoor LED panels",
  "weatherproof IP65-ready cabinet options",
  "IP65-ready outdoor options",
  "video processor setup",
  "site survey",
  "pixel-pitch planning",
  "viewing-distance optimization",
  "steel structure safety design",
  "controller and power system integration",
  "refresh-rate optimization",
  "steel structure and cabinet planning",
  "installation",
  "commissioning",
  "after-sales support",
];

const SEO_STRONG_TERMS_KM = [
  "អេក្រង់ LED",
  "ជញ្ជាំងវីដេអូ LED",
  "ផ្ទាំងផ្សព្វផ្សាយ LED",
  "ការស្ទង់ទីតាំង",
  "ភីកសែលភីច",
  "ការត្រួតពិនិត្យដំណើរការ",
  "សេវាគាំទ្របន្ទាប់ពីលក់",
  "ការដំឡើង",
];

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderStrongKeywords(text: string, terms: string[]) {
  if (!text || terms.length === 0) return text;

  const orderedTerms = [...terms].sort((a, b) => b.length - a.length);
  const termSet = new Set(orderedTerms.map((term) => term.toLowerCase()));
  const regex = new RegExp(`(${orderedTerms.map(escapeRegex).join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    termSet.has(part.toLowerCase()) ? (
      <strong key={`${part}-${index}`} className="font-semibold text-slate-800">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function DeferredSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

export default function LedDisplayClient({
  forcedLang,
  productGridOverride,
  productQuickChips,
  afterSpecsContent,
  afterSpecsContentKm,
  pixelPitchIntroOverride,
  pixelPitchIntroOverrideKm,
  pixelPitchRowsOverride,
  pixelPitchRowsOverrideKm,
  pixelPitchSectionOverride,
  pixelPitchSectionOverrideKm,
  faqItemsOverride,
  faqItemsOverrideKm,
  internalLinkClusterOverride,
  internalLinkClusterOverrideKm,
  trustSignalsOverride,
  trustSignalsOverrideKm,
  trustTitleOverride,
  trustTitleOverrideKm,
  trustDescOverride,
  trustDescOverrideKm,
  internalLinkTitleOverride,
  internalLinkTitleOverrideKm,
  internalLinkDescOverride,
  internalLinkDescOverrideKm,
  schemaPathOverride,
  schemaNameOverride,
  schemaServiceNameOverride,
  schemaServiceDescOverride,
  currentYearEn,
  heroTitleOverride,
  heroTitleOverrideKm,
  heroIntroOverride,
  heroIntroOverrideKm,
  breadcrumbOverride,
  breadcrumbOverrideKm,
}: {
  forcedLang?: "en" | "km";
  productGridOverride?: ProductGridConfig;
  productQuickChips?: Array<{ label: string; href: string; labelKm?: string }>;
  afterSpecsContent?: React.ReactNode;
  afterSpecsContentKm?: React.ReactNode;
  pixelPitchIntroOverride?: string;
  pixelPitchIntroOverrideKm?: string;
  pixelPitchRowsOverride?: [string, string, string][];
  pixelPitchRowsOverrideKm?: [string, string, string][];
  pixelPitchSectionOverride?: React.ReactNode;
  pixelPitchSectionOverrideKm?: React.ReactNode;
  faqItemsOverride?: Array<{ q: string; a: string }>;
  faqItemsOverrideKm?: Array<{ q: string; a: string }>;
  internalLinkClusterOverride?: Array<{ title: string; href: string }>;
  internalLinkClusterOverrideKm?: Array<{ title: string; href: string }>;
  trustSignalsOverride?: string[];
  trustSignalsOverrideKm?: string[];
  trustTitleOverride?: string;
  trustTitleOverrideKm?: string;
  trustDescOverride?: string;
  trustDescOverrideKm?: string;
  internalLinkTitleOverride?: string;
  internalLinkTitleOverrideKm?: string;
  internalLinkDescOverride?: string;
  internalLinkDescOverrideKm?: string;
  schemaPathOverride?: string;
  schemaNameOverride?: string;
  schemaServiceNameOverride?: string;
  schemaServiceDescOverride?: string;
  currentYearEn?: string;
  heroTitleOverride?: string;
  heroTitleOverrideKm?: string;
  heroIntroOverride?: string;
  heroIntroOverrideKm?: string;
  breadcrumbOverride?: string;
  breadcrumbOverrideKm?: string;
}) {
  const lang = forcedLang ?? (schemaPathOverride?.startsWith("/km") ? "km" : "en");
  const toLangHref = (href: string) =>
    lang === "km" && href.startsWith("/") && !href.startsWith("/km/") ? `/km${href}` : href;
  const faqItems =
    (lang === "en" ? faqItemsOverride : (faqItemsOverrideKm ?? faqItemsOverride)) ??
    (lang === "en" ? LED_FAQS_EN : LED_FAQS_KM);
  const internalLinks =
    (lang === "en"
      ? internalLinkClusterOverride
      : (internalLinkClusterOverrideKm ?? internalLinkClusterOverride)) ??
    (lang === "en" ? INTERNAL_LINK_CLUSTER_EN : INTERNAL_LINK_CLUSTER_KM);
  const internalLinkHints =
    lang === "en" ? INTERNAL_LINK_HINTS_EN : INTERNAL_LINK_HINTS_KM;
  const trustSignals =
    (lang === "en"
      ? trustSignalsOverride
      : (trustSignalsOverrideKm ?? trustSignalsOverride)) ??
    (lang === "en" ? DEFAULT_TRUST_SIGNALS_EN : DEFAULT_TRUST_SIGNALS_KM);
  const trustProofChips =
    lang === "en" ? DEFAULT_TRUST_PROOF_CHIPS_EN : DEFAULT_TRUST_PROOF_CHIPS_KM;
  const trustSignalTitles =
    lang === "en" ? TRUST_SIGNAL_TITLES_EN : TRUST_SIGNAL_TITLES_KM;
  const schemaPath =
    schemaPathOverride ?? (lang === "km" ? "/km/led-display" : "/led-display");
  const schemaName = schemaNameOverride ?? "LED Display";
  const schemaServiceName = schemaServiceNameOverride ?? "LED Display in Cambodia";
  const schemaServiceDesc =
    schemaServiceDescOverride ??
    "Indoor LED video walls, outdoor LED billboards, installation, commissioning and after-sales support in Cambodia.";
  const t = (() => {
    const en = {
      breadcrumb: "LED Display",
      h1: "LED Display Price in Cambodia - Indoor & Outdoor LED Screen",
      intro:
        "Looking for a trusted LED display supplier in Cambodia and a reliable LED screen supplier in Phnom Penh? Mugnee Cambodia supports indoor LED display, outdoor LED billboard, LED video wall, and LED advertising screen projects for retail, hospitality, corporate, education, worship, and public communication use. From site survey and pixel-pitch planning to BOQ preparation, video processor setup, structure planning, installation, testing, and commissioning, we help buyers compare the right indoor and outdoor LED screen options for long-term performance in Cambodia.",
      cta1: "WhatsApp for Quotation",
      cta2: "Request BOQ Proposal",
      cta3: "Jump to Products",
      quickTitle: "Browse LED display categories and related services",
      quickSub:
        "Use quick links to jump directly to each section of this LED display page.",
    };

    const km = {
      breadcrumb: "អេក្រង់ LED",
      h1: "អេក្រង់ LED នៅកម្ពុជា | អ្នកផ្គត់ផ្គង់ Indoor និង Outdoor LED នៅភ្នំពេញ",
      intro:
        "កំពុងស្វែងរកអ្នកផ្គត់ផ្គង់អេក្រង់ LED ដែលអាចទុកចិត្តបាននៅកម្ពុជា និងអ្នកផ្គត់ផ្គង់ LED screen នៅភ្នំពេញ មែនទេ? Mugnee Cambodia ផ្តល់ដំណោះស្រាយសម្រាប់ indoor LED display, outdoor LED billboard, LED video wall និង LED advertising screen ជាមួយសេវាស្ទង់ទីតាំង គណនា pixel pitch រៀបចំ BOQ រៀបចំរចនាសម្ព័ន្ធ ការដំឡើង ការធ្វើតេស្ត និង commissioning ដោយវិជ្ជាជីវៈ។ យើងជួយអាជីវកម្ម ប្រៀបធៀបជម្រើសអេក្រង់ LED ក្នុងអគារ និងខាងក្រៅឱ្យសមស្របនឹងទីតាំង ការប្រើប្រាស់ និងថវិកាជាក់ស្តែង។",
      cta1: "WhatsApp ស្នើសុំតម្លៃ",
      cta2: "ស្នើសុំសំណើបញ្ជីបរិមាណការងារ",
      cta3: "ចូលទៅផលិតផល",
      quickTitle: "រកមើលប្រភេទអេក្រង់ LED និងសេវាកម្មពាក់ព័ន្ធ",
      quickSub:
        "ប្រើតំណរហ័ស ដើម្បីទៅកាន់ផ្នែកនីមួយៗនៅក្នុងទំព័រអេក្រង់ LED នេះដោយផ្ទាល់។",
    };

    return lang === "en" ? en : km;
  })();

  const quickLinks =
    lang === "en"
      ? [
          { label: "Products", href: "#products" },
          { label: "Price & BOQ", href: "#price-boq" },
          { label: "Buying Flow", href: "#buyer-journey" },
          { label: "LED Basics", href: "#led-basics" },
          { label: "Types", href: "#types-cambodia" },
          { label: "Benefits", href: "#benefits-led-display" },
          { label: "Specs", href: "#specs-snapshot" },
          { label: "Pixel Pitch", href: "#pixel-pitch-guide" },
          { label: "Indoor vs Outdoor", href: "#indoor-vs-outdoor" },
          { label: "Use Cases", href: "#industry-use-cases" },
          { label: "Installation", href: "#installation-workflow" },
          { label: "Why Mugnee", href: "#why-mugnee" },
          { label: "Partners", href: "#partners" },
          { label: "Service Areas", href: "#service-areas" },
          { label: "FAQ", href: "#faq" },
        ]
      : [
          { label: "ផលិតផល", href: "#products" },
          { label: "តម្លៃ និង BOQ", href: "#price-boq" },
          { label: "ដំណើរទិញ", href: "#buyer-journey" },
          { label: "មូលដ្ឋាន LED", href: "#led-basics" },
          { label: "ប្រភេទ", href: "#types-cambodia" },
          { label: "អត្ថប្រយោជន៍", href: "#benefits-led-display" },
          { label: "លក្ខណៈបច្ចេកទេស", href: "#specs-snapshot" },
          { label: "ភីកសែលភីច", href: "#pixel-pitch-guide" },
          { label: "ក្នុងអគារ ទល់នឹង ខាងក្រៅ", href: "#indoor-vs-outdoor" },
          { label: "ករណីប្រើប្រាស់", href: "#industry-use-cases" },
          { label: "ដំណើរការដំឡើង", href: "#installation-workflow" },
          { label: "ហេតុអ្វីជ្រើស Mugnee", href: "#why-mugnee" },
          { label: "ដៃគូ", href: "#partners" },
          { label: "តំបន់សេវាកម្ម", href: "#service-areas" },
          { label: "សំណួរញឹកញាប់", href: "#faq" },
        ];

  return (
    <div className="bg-white text-slate-900">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .quick-link {
              position: relative;
              border: 1px solid rgb(203 213 225);
              background: #fff;
              transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            .quick-link:hover {
              border-color: transparent;
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
            @keyframes home-partner-marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .home-partner-marquee-track {
              animation: home-partner-marquee 24s linear infinite;
              will-change: transform;
            }
            .home-partner-marquee-track:hover {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .home-partner-marquee-track {
                animation: none;
              }
            }
          `,
        }}
      />
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: BUSINESS_NAME,
              url: `${SITE_URL}${schemaPath}`,
              image: `${SITE_URL}/images/hero/cambodia-led-hero.webp`,
              telephone: BUSINESS_PHONE_E164,
              sameAs: BUSINESS_SAME_AS,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS_ADDRESS.streetAddress,
                addressLocality: BUSINESS_ADDRESS.addressLocality,
                addressCountry: BUSINESS_ADDRESS.addressCountry,
              },
              areaServed: SERVICE_AREAS,
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: schemaServiceName,
              description: schemaServiceDesc,
              areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
              serviceType: "LED Display Solutions",
              provider: {
                "@type": "LocalBusiness",
                name: BUSINESS_NAME,
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${SITE_URL}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: schemaName,
                  item: `${SITE_URL}${schemaPath}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": `${SITE_URL}${schemaPath}#faq`,
              url: `${SITE_URL}${schemaPath}#faq`,
              name: lang === "en" ? "LED Display FAQ - Cambodia" : "សំណួរញឹកញាប់អំពីអេក្រង់ LED - កម្ពុជា",
              inLanguage: lang === "en" ? "en-KH" : "km-KH",
              about: {
                "@type": "Country",
                name: "Cambodia",
              },
              spatialCoverage: {
                "@type": "Country",
                name: "Cambodia",
              },
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ]),
        }}
      />
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">
              {(lang === "en"
                ? breadcrumbOverride
                : (breadcrumbOverrideKm ?? breadcrumbOverride)) ??
                (lang === "en" ? "LED Display" : "អេក្រង់ LED")}
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {lang === "en"
              ? (heroTitleOverride ?? t.h1)
              : (heroTitleOverrideKm ?? heroTitleOverride ?? t.h1)}
          </h1>

          <p className="mt-3 text-justify text-sm leading-relaxed text-slate-600 sm:text-base">
            {lang === "en"
              ? renderStrongKeywords(heroIntroOverride ?? t.intro, SEO_STRONG_TERMS_EN)
              : renderStrongKeywords(
                  heroIntroOverrideKm ?? heroIntroOverride ?? t.intro,
                  SEO_STRONG_TERMS_KM,
                )}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href="https://wa.me/85581580802"
              target="_blank"
              rel="noopener"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {t.cta1}
            </a>
            <Link
              href={toLangHref("/contact")}
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              {t.cta2}
            </Link>
            <a
              href="#products"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              {t.cta3}
            </a>
          </div>

        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="products" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {(productQuickChips ?? []).slice(0, 6).map((chip, index) => (
                    <span
                      key={`${chip.href}-${chip.label}-${index}`}
                      className="quick-link rounded-full px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {lang === "en" ? chip.label : (chip.labelKm ?? chip.label)}
                    </span>
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="h-40 rounded-xl bg-slate-100" />
                      <div className="mt-4 h-4 w-40 rounded bg-slate-200" />
                      <div className="mt-3 h-3 w-full rounded bg-slate-200" />
                      <div className="mt-2 h-3 w-5/6 rounded bg-slate-200" />
                    </div>
                  ))}
                </div>
              </div>
            }
          >
            <ProductGrid
              columns={3}
              pageSize={9}
              allowedCategoryIds={[
                "led_display",
                "indoor_led_display",
                "outdoor_led_display",
                "rental_led_display",
                "led_accessories",
              ]}
              filterCategoryIds={[
                "indoor_led_display",
                "outdoor_led_display",
                "rental_led_display",
                "led_accessories",
              ]}
              categoryOrderIds={[
                "indoor_led_display",
                "outdoor_led_display",
                "rental_led_display",
                "led_accessories",
              ]}
              topLeftContent={
                productQuickChips && productQuickChips.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {productQuickChips.map((chip, index) => (
                      <Link
                        key={`${chip.href}-${chip.label}-${index}`}
                        href={chip.href}
                        className="quick-link rounded-full px-3 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900"
                      >
                        {lang === "en" ? chip.label : (chip.labelKm ?? chip.label)}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div />
                )
              }
              {...productGridOverride}
            />
          </Suspense>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {t.quickTitle}
                </div>
                <div className="mt-1 text-xs text-slate-600">{t.quickSub}</div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map((item, index) => (
                <Link
                  key={`${item.href}-${item.label}-${index}`}
                  href={item.href}
                  className="quick-link rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUYER JOURNEY FLOW */}
      <section id="buyer-journey" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {lang === "en" ? "Buyer Journey" : "ដំណើរអ្នកទិញ"}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "How to Buy LED Display in Cambodia Without Confusion"
                : "របៀបទិញអេក្រង់ LED នៅកម្ពុជា ឲ្យច្បាស់លាស់មិនច្របូកច្របល់"}
            </h2>
            <p className="mt-3 w-full text-justify text-sm leading-relaxed text-slate-600">
              {lang === "en"
                ? "This buyer-first flow helps you move from idea to go-live with clear scope, transparent BOQ, and practical delivery steps. It is designed for indoor LED display, outdoor LED billboard, LED video wall, and digital signage projects in Cambodia."
                : "ផ្លូវសម្រេចចិត្តនេះ ត្រូវបានរៀបចំសម្រាប់អ្នកទិញ ដើម្បីឲ្យដំណើរពីគំនិតរហូតដល់ដំណើរការពិត មានភាពច្បាស់លាស់ ជាមួយ BOQ តម្លាភាព និងជំហានអនុវត្តអាចអនុវត្តបាន។ វាសមស្របសម្រាប់គម្រោងអេក្រង់ LED ក្នុងអគារ ខាងក្រៅ ជញ្ជាំងវីដេអូ LED និង Digital Signage នៅកម្ពុជា។"}
            </p>
          </div>

          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
                  [
                    "1) Share Requirement",
                    "You provide location, use case, screen size goal, viewing distance, and budget range.",
                    "Output: Project brief",
                  ],
                  [
                    "2) Site Survey & BOQ",
                    "We validate structure, power, heat/rain risks, then prepare pixel pitch options and transparent BOQ.",
                    "Output: Technical proposal",
                  ],
                  [
                    "3) Approve & Install",
                    "After approval, our team executes installation, cabling, calibration, and commissioning checklist.",
                    "Output: Go-live handover",
                  ],
                  [
                    "4) Operate & Support",
                    "You get operator training, preventive maintenance plan, and responsive after-sales support.",
                    "Output: Stable long-term performance",
                  ],
                ]
              : [
                  [
                    "1) ផ្តល់តម្រូវការ",
                    "អ្នកផ្តល់ទីតាំង គោលបំណងប្រើប្រាស់ ទំហំអេក្រង់ ចម្ងាយមើល និងជួរថវិកា។",
                    "លទ្ធផល៖ សង្ខេបគម្រោង",
                  ],
                  [
                    "2) ស្ទង់ទីតាំង និង BOQ",
                    "យើងពិនិត្យរចនាសម្ព័ន្ធ ថាមពល ហានិភ័យកម្តៅ/ភ្លៀង ហើយរៀបចំជម្រើស Pixel Pitch និង BOQ ច្បាស់លាស់។",
                    "លទ្ធផល៖ សំណើបច្ចេកទេស",
                  ],
                  [
                    "3) អនុម័ត និងដំឡើង",
                    "បន្ទាប់ពីអនុម័ត ក្រុមយើងដំឡើង រៀបខ្សែ កែតម្រូវពណ៌ និងត្រួតពិនិត្យដំណើរការតាម checklist។",
                    "លទ្ធផល៖ ប្រគល់ប្រើប្រាស់",
                  ],
                  [
                    "4) ប្រើប្រាស់ និងគាំទ្រ",
                    "អ្នកទទួលបានការបណ្តុះបណ្តាល ផែនការថែទាំបង្ការ និងសេវាបន្ទាប់ពីលក់ឆាប់រហ័ស។",
                    "លទ្ធផល៖ ដំណើរការស្ថិរភាពរយៈពេលវែង",
                  ],
                ]
            ).map(([title, desc, out]) => (
              <li key={String(title)} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
                <p className="mt-3 text-xs font-semibold text-sky-800">{out}</p>
              </li>
            ))}
          </ol>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={toLangHref("/contact")}
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white no-underline hover:bg-slate-800 hover:no-underline"
            >
              {lang === "en" ? "Request LED BOQ & Quotation" : "ស្នើសុំ BOQ និងតម្លៃ LED"}
            </Link>
            <Link
              href={toLangHref("/led-display/indoor-led-display")}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "Compare Indoor LED Display" : "ប្រៀបធៀប LED ក្នុងអគារ"}
            </Link>
            <Link
              href={toLangHref("/led-display/outdoor-led-display")}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "Compare Outdoor LED Billboard" : "ប្រៀបធៀប LED ខាងក្រៅ"}
            </Link>
          </div>
        </div>
      </section>

                  {/* LED TECHNOLOGY BASICS */}
      <section id="led-basics" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-2 py-12 sm:px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {lang === "en" ? "LED Technology Basics" : "មូលដ្ឋានបច្ចេកវិទ្យាអេក្រង់ LED"}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "LED Display Technology Basics & Buying Guide"
                  : "មូលដ្ឋានបច្ចេកវិទ្យាអេក្រង់ LED និងមគ្គុទ្ទេសក៍ទិញ"}
              </h2>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  {lang === "en" ? "What Is an LED Display?" : "តើអេក្រង់ LED គឺជាអ្វី?"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lang === "en"
                    ? "An LED display is a digital screen made from thousands of LED pixels arranged in modules and cabinets. These pixels light up to form images, videos, and live data. LED technology is preferred for large screens because it is seamless, bright, and scalable for both indoor and outdoor installations in Cambodia."
                    : "អេក្រង់ LED គឺជាអេក្រង់ឌីជីថលដែលបង្កើតពីភីកសែល LED ជាច្រើន រៀបចំនៅក្នុងម៉ូឌុល និងកាប៊ីណេត។ ភីកសែលទាំងនេះបញ្ចេញពន្លឺបង្កើតជារូបភាព វីដេអូ និងទិន្នន័យបន្តផ្ទាល់។ បច្ចេកវិទ្យា LED សមស្របសម្រាប់អេក្រង់ធំ ព្រោះគ្មានស៊ុមចំណុចភ្ជាប់ ភ្លឺច្បាស់ និងអាចពង្រីកទំហំបានសម្រាប់ទាំងក្នុងអគារ និងខាងក្រៅ។"}
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  {lang === "en"
                    ? "How Does an LED Display Work?"
                    : "តើអេក្រង់ LED ដំណើរការយ៉ាងដូចម្តេច?"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lang === "en"
                    ? "A controller sends video signals to each LED pixel, synchronizing color and brightness across the screen. Correct pixel pitch, brightness, IP protection, and refresh rate ensure clear visuals, smooth motion, and reliable performance under Cambodias heat, rain, and dust conditions."
                    : "ឧបករណ៍បញ្ជា ផ្ញើសញ្ញាវីដេអូទៅភីកសែល LED នីមួយៗ ដើម្បីសមកាលកម្មពណ៌ និងកម្រិតពន្លឺទូទាំងអេក្រង់។ ការជ្រើស Pixel Pitch កម្រិតពន្លឺ ការការពារ IP និង អត្រាផ្ទុកឡើងវិញ ឱ្យត្រឹមត្រូវ នឹងធានាឱ្យរូបភាពច្បាស់ ចលនារលូន និងដំណើរការមានស្ថិរភាពក្រោមលក្ខខណ្ឌក្តៅ ភ្លៀង និងធូលី។"}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                {(lang === "en"
                  ? [
                      "Pixel Pitch",
                      "Brightness (nits)",
                      "IP Rating",
                      "Refresh Rate",
                      "Cabinet Size",
                    ]
                  : [
                      "ភីកសែលភីច",
                      "កម្រិតពន្លឺ (nits)",
                      "កម្រិតការពារ IP",
                      "អត្រាផ្ទុកឡើងវិញ",
                      "ទំហំកាប៊ីណេត",
                    ]
                ).map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-24 grid gap-4 sm:grid-cols-2">
              {(lang === "en"
                ? [
                    ["LED Modules", "Small panels that create the full screen size and resolution."],
                    ["Cabinets", "Rigid frames that align modules and protect wiring."],
                    ["Controller", "Processes content and synchronizes every pixel in real time."],
                    ["Power & Signal", "Stable power, clean cabling, and grounding for safety."],
                  ]
                : [
                    ["ម៉ូឌុល LED", "ផ្ទាំងតូចៗដែលរួមគ្នាបង្កើតទំហំ និងកម្រិតភាពច្បាស់របស់អេក្រង់ទាំងមូល។"],
                    ["កាប៊ីណេត", "ស៊ុមរឹងសម្រាប់តម្រឹមម៉ូឌុល និងការពារខ្សែភ្លើង។"],
                    ["ឧបករណ៍បញ្ជា", "ដំណើរការមាតិកា និងសមកាលកម្មភីកសែលទាំងអស់ជាក់ស្តែង។"],
                    ["ថាមពល និងសញ្ញា", "ថាមពលស្ថេរភាព ការរៀបខ្សែស្អាត និងប្រព័ន្ធដីសុវត្ថិភាព។"],
                  ]
              ).map(([t, d]) => (
                <div
                  key={String(t)}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <div className="mt-1 text-xs leading-relaxed text-slate-600">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* LED MODULE TECHNOLOGY */}
      <section id="led-module-technology" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {lang === "en" ? "LED Module Technology" : "បច្ចេកវិទ្យាម៉ូឌុល LED"}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "Types of LED Display Technology – SMD, GOB & COB"
                : "ប្រភេទបច្ចេកវិទ្យាអេក្រង់ LED – SMD, GOB និង COB"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 lg:whitespace-nowrap">
              {lang === "en"
                ? "Compare SMD, GOB, and COB LED display technology for indoor LED display, outdoor LED screen, fine-pitch LED video wall, and rental LED panel projects in Cambodia."
                : "ប្រៀបធៀបបច្ចេកវិទ្យា SMD, GOB និង COB សម្រាប់គម្រោងអេក្រង់ LED ក្នុងអគារ អេក្រង់ LED ខាងក្រៅ ជញ្ជាំងវីដេអូ LED ភីកសែលល្អិត និងអេក្រង់ LED សម្រាប់ជួលនៅកម្ពុជា។"}
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="mb-2 text-xs font-semibold text-slate-500">
                  {lang === "en"
                    ? "Watch: SMD vs GOB vs COB – LED Display Technology Guide for Video Walls"
                    : "វីដេអូ៖ SMD vs GOB vs COB - មគ្គុទ្ទេសក៍បច្ចេកវិទ្យាអេក្រង់ LED សម្រាប់ Video Wall"}
                </div>
                <div className="flex-1 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <div className="relative h-full w-full overflow-hidden bg-black pt-[56.25%] lg:pt-0">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src="https://www.youtube-nocookie.com/embed/XqDWk-xHyJM?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3"
                      title="SMD vs GOB vs COB LED Display Technology"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {(lang === "en"
                  ? [
                      [
                        "GOB Technology (Extra Protection Layer)",
                        "GOB (Glue on Board) adds a clear protection layer over SMD LEDs for tougher daily use.",
                        [
                          "Best for: rental screens, school stages, and control rooms.",
                          "Protection: stronger against impact, dust, and humidity.",
                          "Maintenance: easier front cleaning with lower pixel damage risk.",
                        ],
                        ["GOB LED", "Impact resistant", "Rental ready"],
                      ],
                      [
                        "COB Technology (Premium Fine Pitch)",
                        "COB (Chip on Board) mounts LED chips directly on PCB for premium fine-pitch display quality.",
                        [
                          "Best for: boardrooms, studios, command centers, and showrooms.",
                          "Viewing: better uniformity, deeper black level, and low glare.",
                          "Durability: strong surface protection for long-term stability.",
                        ],
                        ["COB LED", "Fine pitch", "Premium indoor"],
                      ],
                    ]
                  : [
                      [
                        "បច្ចេកវិទ្យា GOB (ស្រទាប់ការពារបន្ថែម)",
                        "GOB (Glue on Board) មានស្រទាប់ការពារថ្លាលើ SMD LED ដែលសមស្របសម្រាប់ការប្រើប្រាស់ខ្ពស់ប្រចាំថ្ងៃ។",
                        [
                          "សមស្របសម្រាប់៖ អេក្រង់ជួល ឆាកសាលារៀន និងបន្ទប់បញ្ជា។",
                          "ការការពារ៖ ធន់ល្អចំពោះការប៉ះទង្គិច ធូលី និងសំណើម។",
                          "ការថែទាំ៖ សម្អាតផ្ទៃខាងមុខងាយ និងកាត់បន្ថយហានិភ័យខូចភីកសែល។",
                        ],
                        ["ការពារការប៉ះទង្គិច", "ងាយសម្អាត", "ធន់ជាងមុន"],
                      ],
                      [
                        "បច្ចេកវិទ្យា COB (Fine Pitch កម្រិតខ្ពស់)",
                        "COB (Chip on Board) ដំឡើងឈីប LED ផ្ទាល់លើ PCB ដើម្បីផ្តល់គុណភាពបង្ហាញ Fine Pitch កម្រិតខ្ពស់។",
                        [
                          "សមស្របសម្រាប់៖ បន្ទប់ប្រជុំ ស្ទូឌីយោ បន្ទប់បញ្ជា និង showroom។",
                          "ការមើល៖ ភាពស្មើរគ្នាល្អ កម្រិតខ្មៅជ្រៅ និងពន្លឺមិនចាំងពេលមើលជិត។",
                          "ភាពធន់៖ ការពារផ្ទៃបានល្អ និងរក្សាគុណភាពរូបភាពបានយូរ។",
                        ],
                        ["ភីកសែលល្អិត", "គុណភាពខ្ពស់", "មើលជិតច្បាស់"],
                      ],
                    ]
                ).map((item) => {
                  const [title, desc, bullets, chips] = item as [string, string, string[], string[]];
                  return (
                    <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                      <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                        {bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                        {chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                {lang === "en"
                  ? "SMD Technology (Most Common Type)"
                  : "បច្ចេកវិទ្យា SMD (ប្រើប្រាស់ទូលំទូលាយបំផុត)"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "SMD (Surface-Mounted Device) is the most common LED module technology for indoor LED screen and outdoor LED billboard projects, offering balanced price, brightness, and maintenance."
                  : "SMD គឺជាបច្ចេកវិទ្យាដែលប្រើប្រាស់ទូលំទូលាយសម្រាប់អេក្រង់ LED ក្នុងអគារ និងខាងក្រៅ ដោយមានតុល្យភាពល្អរវាងតម្លៃ កម្រិតពន្លឺ និងភាពងាយស្រួលថែទាំ។"}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                {(lang === "en"
                  ? [
                      "Best for: retail digital signage, roadside LED billboard, church LED wall, and stage rental screens.",
                      "Maintenance: easy LED module replacement with fast service turnaround.",
                      "Visual performance: strong brightness, wide viewing angle, and stable color output.",
                      "Cost efficiency: budget-friendly option across multiple pixel pitch ranges.",
                    ]
                  : [
                      "សមស្របសម្រាប់៖ ផ្ទាំងផ្សព្វផ្សាយខាងក្រៅ ស្លាកសញ្ញាហាងលក់រាយ និងជញ្ជាំង LED សម្រាប់ឆាកជួល។",
                      "ការថែទាំ៖ ប្តូរម៉ូឌុលងាយ និងសេវាកម្មលឿន។",
                      "រូបភាព៖ មុំមើលល្អ និងពណ៌បង្ហាញល្អសម្រាប់ការប្រើប្រាស់ភាគច្រើន។",
                      "ថវិកា៖ ជម្រើសសន្សំសំចៃជាមួយជម្រើស Pixel Pitch ទូលំទូលាយ។",
                    ]
                ).map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                {(lang === "en"
                  ? ["SMD LED", "Indoor & Outdoor", "Cost-efficient"]
                  : ["តម្លៃសមរម្យ", "ងាយថែទាំ", "ក្នុងអគារ និងខាងក្រៅ"]
                ).map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TYPES IN CAMBODIA */}
      <section id="types-cambodia" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {lang === "en" ? "LED Display Types" : "ប្រភេទអេក្រង់ LED ពេញនិយម"}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "Types of LED Displays for Different Use Cases"
                  : "ប្រភេទអេក្រង់ LED សម្រាប់ការប្រើប្រាស់ផ្សេងៗ"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "The Cambodia market typically uses four LED display types. Each type is optimized for viewing distance, brightness, and installation style. Choosing the right type ensures better visuals, lower maintenance, and longer service life."
                  : "ទីផ្សារកម្ពុជាជាទូទៅប្រើអេក្រង់ LED ៤ ប្រភេទសំខាន់ៗ។ ប្រភេទនីមួយៗត្រូវបានកំណត់សម្រាប់ចម្ងាយមើល កម្រិតពន្លឺ និងរចនាប័ទ្មដំឡើងផ្សេងៗ។ ការជ្រើសប្រភេទត្រឹមត្រូវជួយឱ្យរូបភាពល្អ កាត់បន្ថយថ្លៃថែទាំ និងបង្កើនអាយុកាលប្រើប្រាស់។"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "We help you select the right LED screen by location, budget, and content needs so your investment performs reliably."
                  : "យើងជួយអ្នកជ្រើសអេក្រង់ LED ត្រឹមត្រូវតាមទីតាំង ថវិកា និងតម្រូវការមាតិកា ដើម្បីឱ្យការវិនិយោគមានប្រសិទ្ធភាព និងស្ថិរភាព។"}
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  {lang === "en"
                    ? "Quick Selection Checklist (Cambodia)"
                    : "បញ្ជីពិនិត្យរហ័សសម្រាប់ការជ្រើសរើស"}
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Decide indoor vs outdoor based on sunlight and exposure."
                      : "សម្រេចថាជាប្រភេទក្នុងអគារ ឬខាងក្រៅ ដោយផ្អែកលើពន្លឺថ្ងៃ និងការប៉ះពាល់អាកាសធាតុ។"}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Match pixel pitch to viewing distance for clarity."
                      : "ផ្គូផ្គង Pixel Pitch ជាមួយចម្ងាយមើល ដើម្បីទទួលបានភាពច្បាស់។"}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Confirm structure method and mounting location."
                      : "បញ្ជាក់វិធីសាស្ត្ររចនាសម្ព័ន្ធ និងទីតាំងដំឡើង។"}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Plan for power, grounding, and maintenance access."
                      : "រៀបចំគម្រោងថាមពល grounding និងច្រកចូលសម្រាប់ថែទាំ។"}
                  </li>
                </ul>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                {lang === "en"
                  ? "Common Cambodia installs: mall video walls, hotel lobbies, roadside LED billboards, retail storefront screens, event stages, and public information displays."
                  : "ការដំឡើងពេញនិយមនៅកម្ពុជា៖ ជញ្ជាំងវីដេអូក្នុងផ្សារទំនើប បន្ទប់ទទួលភ្ញៀវសណ្ឋាគារ ផ្ទាំងផ្សព្វផ្សាយ LED តាមដងផ្លូវ អេក្រង់មុខហាងលក់រាយ ឆាកព្រឹត្តិការណ៍ និងអេក្រង់ព័ត៌មានសាធារណៈ។"}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {(lang === "en"
                ? [
                    [
                      "Indoor LED Screens",
                      "Fine-pitch LED for meeting rooms, showrooms, control rooms, and retail branding.",
                      ["Fine pitch", "Low glare", "Close viewing"],
                    ],
                    [
                      "Outdoor LED Billboards",
                      "High-brightness IP-rated screens for roadside, rooftop, and facade advertising.",
                      ["High nits", "IP65+", "Sunlight ready"],
                    ],
                    [
                      "Rental LED Walls",
                      "Modular panels designed for fast setup at events, concerts, and exhibitions.",
                      ["Fast setup", "Lightweight", "Stage ready"],
                    ],
                    [
                      "LED Accessories & Parts",
                      "Controllers, receiving cards, power supplies, cabinets, and spare parts.",
                      ["Controllers", "Power", "Spare parts"],
                    ],
                  ]
                : [
                    [
                      "អេក្រង់ LED ក្នុងអគារ",
                      "អេក្រង់ LED ភីកសែលល្អិត សម្រាប់បន្ទប់ប្រជុំ បន្ទប់តាំងបង្ហាញ និងបន្ទប់បញ្ជា ព្រមទាំងការបង្ហាញម៉ាកក្នុងហាងលក់រាយ។",
                      ["ភីកសែលល្អិត", "ពន្លឺមិនចាំង", "មើលជិតច្បាស់"],
                    ],
                    [
                      "ប៊ីលបត្រ LED ខាងក្រៅ",
                      "អេក្រង់មានកម្រិតពន្លឺខ្ពស់ និងការពារ IP សម្រាប់តាមដងផ្លូវ លើដំបូល និងការផ្សព្វផ្សាយលើផ្នែកខាងមុខអគារ។",
                      ["ពន្លឺខ្ពស់", "IP65+", "មើលឃើញក្រោមថ្ងៃ"],
                    ],
                    [
                      "ជញ្ជាំង LED សម្រាប់ជួល",
                      "ផ្ទាំងម៉ូឌុល រចនាសម្រាប់ដំឡើងលឿនក្នុងព្រឹត្តិការណ៍ ការប្រគុំតន្ត្រី និងពិព័រណ៍។",
                      ["ដំឡើងលឿន", "ទម្ងន់ស្រាល", "សមស្របសម្រាប់ឆាក"],
                    ],
                    [
                      "គ្រឿងបន្លាស់ និងផ្នែក LED",
                      "ឧបករណ៍បញ្ជា កាតទទួលសញ្ញា ប្រព័ន្ធផ្គត់ផ្គង់ថាមពល កាប៊ីណេត និងគ្រឿងបន្លាស់ផ្សេងៗ។",
                      ["ឧបករណ៍បញ្ជា", "ថាមពល", "គ្រឿងបន្លាស់"],
                    ],
                  ]
              ).map((item, idx) => {
                const [t, d, chips] = item as [string, string, string[]];
                return (
                <div
                  key={`${t}-${idx}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                    {chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1"
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
        </div>
      </section>

      {/* BENEFITS OF LED DISPLAY */}
      <section id="benefits-led-display" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {lang === "en" ? "Benefits of LED Display" : "អត្ថប្រយោជន៍របស់អេក្រង់ LED"}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "LED Display Benefits for Advertising & Brand Visibility"
                : "អត្ថប្រយោជន៍អេក្រង់ LED សម្រាប់ការផ្សព្វផ្សាយ និងការមើលឃើញម៉ាក"}
            </h2>
            <p className="mt-3 w-full text-justify text-sm leading-relaxed text-slate-600">
              {lang === "en"
                ? "LED display solutions are widely used for digital signage, indoor branding, outdoor advertising, and public information because they offer high brightness, energy-efficient operation, strong visibility, and flexible screen sizes. For businesses, LED screens improve audience attention, message clarity, and long-term marketing value with low maintenance and long lifespan."
                : "ដំណោះស្រាយអេក្រង់ LED ត្រូវបានប្រើយ៉ាងទូលំទូលាយសម្រាប់អេក្រង់ផ្សព្វផ្សាយឌីជីថល ការបង្ហាញម៉ាកក្នុងអគារ ការផ្សព្វផ្សាយខាងក្រៅ និងការបង្ហាញព័ត៌មានសាធារណៈ ព្រោះវាមានពន្លឺខ្ពស់ ប្រើថាមពលមានប្រសិទ្ធភាព មើលឃើញច្បាស់ និងអាចបត់បែនទំហំអេក្រង់បាន។ សម្រាប់អាជីវកម្ម អេក្រង់ LED ជួយបង្កើនការចាប់អារម្មណ៍ ការបញ្ជូនសារច្បាស់លាស់ និងតម្លៃទីផ្សាររយៈពេលវែង ជាមួយការថែទាំងាយស្រួល និងអាយុកាលយូរ។"}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(lang === "en"
              ? [
                  [
                    "High Brightness & Better Visibility",
                    "Clear content under indoor lighting and direct sunlight, ideal for storefront LED screens and outdoor LED billboards.",
                  ],
                  [
                    "Energy-Efficient Digital Signage",
                    "Modern LED panels reduce power consumption while maintaining strong brightness and stable image quality.",
                  ],
                  [
                    "Flexible Sizes for Any Project",
                    "Modular cabinets support custom screen size, aspect ratio, and layout for retail, stage, corporate, and public spaces.",
                  ],
                  [
                    "Long Lifespan & Low Maintenance",
                    "Durable LED modules with proper installation deliver long-term performance and lower maintenance cost.",
                  ],
                  [
                    "Stronger Brand Impact",
                    "Dynamic video, motion graphics, and real-time announcements improve audience engagement and message recall.",
                  ],
                  [
                    "Scalable for Future Expansion",
                    "LED display systems can be expanded or upgraded as your business grows, protecting your initial investment.",
                  ],
                ]
              : [
                  [
                    "ពន្លឺខ្ពស់ និងមើលឃើញច្បាស់",
                    "បង្ហាញមាតិកាច្បាស់ទាំងក្នុងអគារ និងក្រោមពន្លឺថ្ងៃ សមស្របសម្រាប់អេក្រង់មុខហាង និងផ្ទាំងផ្សព្វផ្សាយខាងក្រៅ។",
                  ],
                  [
                    "អេក្រង់ផ្សព្វផ្សាយឌីជីថលសន្សំថាមពល",
                    "ផ្ទាំង LED ទំនើបប្រើថាមពលមានប្រសិទ្ធភាព ខណៈរក្សាពន្លឺ និងគុណភាពរូបភាពឱ្យស្ថិរភាព។",
                  ],
                  [
                    "ទំហំអេក្រង់បត់បែនតាមគម្រោង",
                    "កាប៊ីណេតប្រភេទម៉ូឌុល អាចរៀបចំទំហំ និងប្លង់អេក្រង់បានតាមតម្រូវការ។",
                  ],
                  [
                    "អាយុកាលយូរ ថែទាំងាយស្រួល",
                    "ម៉ូឌុលគុណភាពល្អជាមួយការដំឡើងត្រឹមត្រូវ ជួយកាត់បន្ថយថ្លៃថែទាំរយៈពេលវែង។",
                  ],
                  [
                    "បង្កើនឥទ្ធិពលម៉ាក",
                    "វីដេអូ និងមាតិកាចលនា ជួយទាក់ទាញអ្នកមើល និងចងចាំសារបានល្អជាងមុន។",
                  ],
                  [
                    "ពង្រីកប្រព័ន្ធបានក្នុងអនាគត",
                    "ប្រព័ន្ធ LED អាចបន្ថែម ឬអាប់ដេតបានតាមការលូតលាស់អាជីវកម្ម។",
                  ],
                ]
            ).map(([t, d]) => (
              <div
                key={String(t)}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS SNAPSHOT */}
      <section id="specs-snapshot" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "LED Display Specifications Guide (Indoor & Outdoor)"
              : "មគ្គុទ្ទេសក៍លក្ខណៈបច្ចេកទេសអេក្រង់ LED (ក្នុងអគារ និងខាងក្រៅ)"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Use these realistic spec ranges to plan indoor and outdoor LED display projects in Cambodia. Final specs depend on viewing distance, ambient light, installation structure, and budget."
              : "សូមប្រើជួរលក្ខណៈបច្ចេកទេសខាងក្រោម សម្រាប់រៀបចំគម្រោងអេក្រង់ LED ក្នុងអគារ និងខាងក្រៅ។ លក្ខណៈបច្ចេកទេសចុងក្រោយ អាស្រ័យលើចម្ងាយមើល ពន្លឺបរិយាកាស រចនាសម្ព័ន្ធដំឡើង និងថវិកា។"}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
                  ["Pixel Pitch", "Indoor: P1.25-P3 | Outdoor: P3-P10"],
                  ["Brightness (nits)", "Indoor: 600-1,200 | Outdoor: 4,500-7,000+"],
                  ["IP Rating", "Indoor: IP30-IP40 | Outdoor: IP65+ (front)"],
                  ["Refresh Rate", ">= 1,920Hz (4,000Hz+ for camera use)"],
                  ["Viewing Angle", "H: 140-160 | V: 120-140"],
                  ["Power & Safety", "Surge protection + proper grounding"],
                  ["Cabinet Size", "Common: 500x500 / 500x1000 mm"],
                  ["Lifespan", "50,000-100,000 hours with proper maintenance"],
                ]
              : [
                  ["ភីកសែលភីច", "ក្នុងអគារ៖ P1.25-P3 | ខាងក្រៅ៖ P3-P10"],
                  ["កម្រិតពន្លឺ (nits)", "ក្នុងអគារ៖ 600-1,200 | ខាងក្រៅ៖ 4,500-7,000+"],
                  ["កម្រិតការពារ IP", "ក្នុងអគារ៖ IP30-IP40 | ខាងក្រៅ៖ IP65+ (ខាងមុខ)"],
                  ["អត្រាផ្ទុកឡើងវិញ", ">= 1,920Hz (4,000Hz+ សម្រាប់កាមេរ៉ា)"],
                  ["មុំមើល", "H: 140-160 | V: 120-140"],
                  ["ថាមពល និងសុវត្ថិភាព", "ការពារការលោតតង់ស្យុង និងប្រព័ន្ធដីសុវត្ថិភាពត្រឹមត្រូវ"],
                  ["ទំហំកាប៊ីណេត", "ទំហំពេញនិយម៖ 500x500 / 500x1000 mm"],
                  ["អាយុកាល", "50,000-100,000 ម៉ោង (ប្រសិនបើថែទាំត្រឹមត្រូវ)"],
                ]
            ).map(([t, d]) => (
              <div
                key={String(t)}
                className="spec-card rounded-2xl p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <div className="mt-2 text-xs leading-relaxed text-slate-600">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lang === "en" ? afterSpecsContent : (afterSpecsContentKm ?? afterSpecsContent)}

      <div id="pixel-pitch-guide" />
      {(lang === "en"
        ? pixelPitchSectionOverride
        : (pixelPitchSectionOverrideKm ?? pixelPitchSectionOverride)) ?? (
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "LED Pixel Pitch & Viewing Distance Selection Guide"
                : "មគ្គុទ្ទេសក៍ភីកសែលភីច និងចម្ងាយមើល"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {(lang === "en" ? pixelPitchIntroOverride : (pixelPitchIntroOverrideKm ?? pixelPitchIntroOverride)) ??
                (lang === "en"
                  ? "Choosing the right pixel pitch is the #1 factor for visual clarity and budget efficiency. Use this guide as a starting point for Cambodia installations."
                  : "ការជ្រើស Pixel Pitch ត្រឹមត្រូវ គឺជាកត្តាសំខាន់បំផុតសម្រាប់ភាពច្បាស់នៃរូបភាព និងប្រសិទ្ធភាពថវិកា។ សូមប្រើមគ្គុទ្ទេសក៍នេះជាចំណុចចាប់ផ្តើមសម្រាប់ការដំឡើង។")}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
                <div className="p-3">Pixel Pitch</div>
                <div className="p-3">{lang === "en" ? "Best Viewing Distance" : "ចម្ងាយមើលល្អបំផុត"}</div>
                <div className="p-3">{lang === "en" ? "Typical Use" : "ការប្រើប្រាស់ទូទៅ"}</div>
              </div>
              {((lang === "en" ? pixelPitchRowsOverride : (pixelPitchRowsOverrideKm ?? pixelPitchRowsOverride)) ?? [
                ...(lang === "en"
                  ? [
                      ["P1.25-P1.86", "1.5-3m", "Control room, premium boardroom"],
                      ["P2-P2.5", "2-5m", "Meeting rooms, retail, showrooms"],
                      ["P3-P4", "3-8m", "Malls, lobbies, indoor stages"],
                      ["P5-P10", "6m+", "Outdoor billboards, roadside"],
                    ]
                  : [
                      ["P1.25-P1.86", "1.5-3m", "បន្ទប់បញ្ជា និងបន្ទប់ប្រជុំកម្រិតខ្ពស់"],
                      ["P2-P2.5", "2-5m", "បន្ទប់ប្រជុំ ហាងលក់រាយ និងបន្ទប់តាំងបង្ហាញ"],
                      ["P3-P4", "3-8m", "ផ្សារទំនើប បន្ទប់ទទួលភ្ញៀវ និងឆាកក្នុងអគារ"],
                      ["P5-P10", "6m+", "ផ្ទាំងផ្សព្វផ្សាយខាងក្រៅ និងតាមដងផ្លូវ"],
                    ]),
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
      )}

      {/* INDOOR VS OUTDOOR */}
      <section id="indoor-vs-outdoor" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Indoor vs Outdoor LED Display for Cambodia Climate"
              : "ការប្រៀបធៀបអេក្រង់ LED ក្នុងអគារ និងខាងក្រៅ សម្រាប់អាកាសធាតុកម្ពុជា"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Cambodias heat, rain, and dust require correct IP rating, heat management, and structure design-especially for outdoor LED displays."
              : "កំដៅ ភ្លៀង និងធូលីនៅកម្ពុជា ទាមទារឱ្យជ្រើសកម្រិតការពារ IP ត្រឹមត្រូវ ការគ្រប់គ្រងកំដៅ និងការរចនាសម្ព័ន្ធល្អ ជាពិសេសសម្រាប់អេក្រង់ LED ខាងក្រៅ។"}
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {(lang === "en"
              ? [
                  [
                    "Indoor LED Display",
                    "Designed for close-viewing environments like corporate boardrooms, retail showrooms, control rooms, hotels and indoor events. Indoor LED uses finer pixel pitch, balanced brightness, and quiet cooling so visuals stay sharp without glare. Proper cable management and clean structure finishing improve long-term stability.",
                    "Typical IP: IP30-IP40",
                    ["Fine pitch clarity", "Low glare", "Quiet cooling", "Close viewing"],
                  ],
                  [
                    "Outdoor LED Display",
                    "Built for sun, rain, and dust in Cambodia. Outdoor LED billboards require high brightness, weatherproof cabinets, strong structures, and safe grounding. IP-rated protection, heat management, and durable components keep the screen visible and stable in harsh outdoor conditions.",
                    "Typical IP: IP65+ (front)",
                    ["High brightness", "Weatherproof", "Structure safety", "Sunlight ready"],
                  ],
                ]
              : [
                  [
                    "អេក្រង់ LED ក្នុងអគារ",
                    "សមស្របសម្រាប់ការមើលជិត ដូចជា បន្ទប់ប្រជុំ បន្ទប់តាំងបង្ហាញ បន្ទប់បញ្ជា សណ្ឋាគារ និងព្រឹត្តិការណ៍ក្នុងអគារ។ អេក្រង់ LED ក្នុងអគារ ប្រើ Pixel Pitch ល្អិត កម្រិតពន្លឺសមស្រប និងប្រព័ន្ធត្រជាក់ស្ងាត់ ដើម្បីរក្សារូបភាពឱ្យច្បាស់។ ការរៀបខ្សែ និងការបញ្ចប់រចនាសម្ព័ន្ធស្អាតជួយបង្កើនស្ថិរភាពរយៈពេលវែង។",
                    "IP ទូទៅ៖ IP30-IP40",
                    ["ភាពច្បាស់ភីកសែលល្អិត", "ពន្លឺមិនចាំង", "ប្រព័ន្ធត្រជាក់ស្ងាត់", "សមស្របសម្រាប់មើលជិត"],
                  ],
                  [
                    "អេក្រង់ LED ខាងក្រៅ",
                    "រចនាឡើងសម្រាប់ពន្លឺថ្ងៃ ភ្លៀង និងធូលីនៅកម្ពុជា។ ផ្ទាំងផ្សព្វផ្សាយ LED ខាងក្រៅ ត្រូវការកម្រិតពន្លឺខ្ពស់ កាប៊ីណេតការពារអាកាសធាតុ រចនាសម្ព័ន្ធរឹងមាំ និងប្រព័ន្ធដីសុវត្ថិភាព។ ការការពារ IP និងការគ្រប់គ្រងកំដៅល្អ នឹងធានាអេក្រង់អាចមើលឃើញច្បាស់ និងដំណើរការស្ថិរភាព។",
                    "IP ទូទៅ៖ IP65+ (ខាងមុខ)",
                    ["ពន្លឺខ្ពស់", "ការពារអាកាសធាតុ", "សុវត្ថិភាពរចនាសម្ព័ន្ធ", "មើលឃើញក្រោមថ្ងៃ"],
                  ],
                ]
            ).map((item, idx) => {
              const [t, d, ip, chips] = item as [string, string, string, string[]];
              return (
              <div
                key={`${t}-${idx}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                <div className="mt-3 text-xs font-semibold text-slate-700">{ip}</div>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1"
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

      {/* PRICE & BOQ FACTORS */}
      <DeferredSection id="price-boq" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "LED Display Price in Cambodia: Key Cost Factors & BOQ Process"
              : "តម្លៃអេក្រង់ LED នៅកម្ពុជា៖ កត្តាចំណាយសំខាន់ និងដំណើរការ BOQ"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Final project price is based on technical scope, installation condition, and reliability requirements. This framework helps buyers compare quotations using the same engineering baseline."
              : "តម្លៃចុងក្រោយសម្រាប់គម្រោង អាស្រ័យលើស៊ុមបច្ចេកទេស លក្ខខណ្ឌដំឡើង និងតម្រូវការភាពទុកចិត្តបាន។ ស៊ុមនេះជួយឱ្យអ្នកទិញប្រៀបធៀបសំណើតម្លៃលើមូលដ្ឋានវិស្វកម្មដូចគ្នា។"}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(lang === "en"
              ? [
                  ["1. Pixel Pitch & Screen Size", "Smaller pitch and larger display area increase module count and budget."],
                  ["2. Brightness & Outdoor Protection", "Higher nits, IP65+ cabinet design, and heat control raise outdoor project cost."],
                  ["3. Controller & Video Processing", "Input requirements, scaling quality, and redundancy options affect system specification."],
                  ["4. Structure, Mounting & Safety", "Steel structure design, civil prep, and grounding scope vary by site risk profile."],
                  ["5. Installation Complexity", "Height, cable route, power condition, and timeline impact labor and execution cost."],
                  ["6. After-Sales Scope", "Warranty terms, spare-parts readiness, AMC, and response SLA influence total ownership cost."],
                ]
              : [
                  ["1. Pixel Pitch និងទំហំអេក្រង់", "Pitch តូច និងទំហំអេក្រង់ធំ នាំឱ្យចំនួនម៉ូឌុលកើនឡើង និងថវិកាកើន។"],
                  ["2. កម្រិតពន្លឺ និងការពារខាងក្រៅ", "Nits ខ្ពស់ កាប៊ីណេត IP65+ និងការគ្រប់គ្រងកម្តៅ បង្កើនចំណាយគម្រោងខាងក្រៅ។"],
                  ["3. Controller និង Video Processing", "តម្រូវការ Input គុណភាពបម្លែងរូបភាព និងជម្រើសបម្រុងទុក ប៉ះពាល់ដល់ស៊ុមប្រព័ន្ធ។"],
                  ["4. រចនាសម្ព័ន្ធ និងសុវត្ថិភាព", "ការរចនាដែក ការរៀបចំទីតាំង និងប្រព័ន្ធដីសុវត្ថិភាព ផ្លាស់ប្តូរតាមហានិភ័យទីតាំង។"],
                  ["5. ភាពស្មុគស្មាញនៃការដំឡើង", "កម្ពស់ ទិសខ្សែ ស្ថានភាពថាមពល និងពេលវេលាអនុវត្ត ប៉ះពាល់ដល់ថ្លៃអនុវត្ត។"],
                  ["6. វិសាលភាពសេវាបន្ទាប់ពីលក់", "រយៈពេលធានា គម្រោងគ្រឿងបន្លាស់ AMC និង SLA ប៉ះពាល់ដល់ចំណាយសរុបរយៈពេលវែង។"],
                ]
            ).map(([title, desc]) => (
              <div
                key={String(title)}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              {lang === "en" ? "How Mugnee prepares project BOQ" : "របៀប Mugnee រៀបចំ BOQ គម្រោង"}
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {(lang === "en"
                ? [
                    ["Step 1", "Collect site data: viewing distance, target size, power readiness, and timeline."],
                    ["Step 2", "Prepare option sets: pixel pitch, brightness class, controller stack, and structure method."],
                    ["Step 3", "Share BOQ with scope split: materials, installation, commissioning, and after-sales terms."],
                  ]
                : [
                    ["ជំហាន 1", "ប្រមូលទិន្នន័យទីតាំង៖ ចម្ងាយមើល ទំហំគោលដៅ ស្ថានភាពថាមពល និងពេលវេលា។"],
                    ["ជំហាន 2", "រៀបចំជម្រើស៖ Pixel Pitch កម្រិតពន្លឺ Controller និងរបៀបរចនាសម្ព័ន្ធ។"],
                    ["ជំហាន 3", "ផ្ញើ BOQ ជាមួយការបំបែកវិសាលភាព៖ សម្ភារៈ ដំឡើង Commissioning និងលក្ខខណ្ឌបន្ទាប់ពីលក់។"],
                  ]
              ).map(([title, desc]) => (
                <div
                  key={String(title)}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-700">{title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={toLangHref("/contact")}
                className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-slate-800 hover:no-underline"
              >
                {lang === "en" ? "Request BOQ & Quotation" : "ស្នើសុំ BOQ និងសំណើតម្លៃ"}
              </Link>
              <Link
                href={toLangHref("/service")}
                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 no-underline hover:bg-slate-100 hover:no-underline"
              >
                {lang === "en" ? "View Installation Service Scope" : "មើលវិសាលភាពសេវាដំឡើង"}
              </Link>
            </div>
          </div>
        </div>
      </DeferredSection>

      {/* USE-CASE BY INDUSTRY */}
      <DeferredSection id="industry-use-cases" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "LED Display Use-Cases by Industry in Cambodia"
              : "ករណីប្រើប្រាស់អេក្រង់ LED តាមវិស័យនៅកម្ពុជា"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Popular industries using LED display, digital signage, and LED billboards in Cambodia."
              : "វិស័យពេញនិយមដែលកំពុងប្រើអេក្រង់ LED អេក្រង់ផ្សព្វផ្សាយឌីជីថល និងផ្ទាំងផ្សព្វផ្សាយ LED នៅកម្ពុជា។"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
              {
                t: "Retail & Shopping Malls",
                d: "Indoor LED video walls for promotions, storefront branding, and product launches in Phnom Penh malls.",
                chips: ["Indoor", "Fine pitch", "Branding"],
              },
              {
                t: "Hotels, Resorts & Hospitality",
                d: "Lobby welcome walls, event schedules, and banquet hall screens with clean visuals and quiet cooling.",
                chips: ["Lobby", "Events", "24/7 use"],
              },
              {
                t: "Corporate Offices & Showrooms",
                d: "Boardroom and showroom LED displays for presentations, dashboards, and premium brand storytelling.",
                chips: ["Corporate", "Control", "Showroom"],
              },
              {
                t: "Events, Stage & Rental",
                d: "Rental LED walls for concerts, exhibitions, and stage backdrops with fast setup and modular cabinets.",
                chips: ["Rental", "Stage", "Fast setup"],
              },
              {
                t: "Education & Campuses",
                d: "Auditorium screens, campus notice boards, and smart classroom displays for clear visibility.",
                chips: ["Education", "Auditorium", "Notice"],
              },
              {
                t: "Government & Public Service",
                d: "Information displays for service centers, municipal halls, and public announcements.",
                chips: ["Public", "Info", "Queue"],
              },
              {
                t: "Transportation & Terminals",
                d: "Timetable, wayfinding, and advertising screens for terminals, stations, and ports.",
                chips: ["Wayfinding", "Timetable", "Public"],
              },
              {
                t: "Outdoor Advertising & Billboards",
                d: "High-brightness LED billboards for roadside and rooftop advertising across Cambodia.",
                chips: ["Outdoor", "High nits", "IP65+"],
              },
              ]
              : [
                  {
                    t: "លក់រាយ និងផ្សារទំនើប",
                    d: "ជញ្ជាំងវីដេអូ LED ក្នុងអគារ សម្រាប់ផ្សព្វផ្សាយ បង្ហាញម៉ាក និងបើកដំណើរការផលិតផលក្នុងផ្សារទំនើប។",
                    chips: ["Indoor", "Fine pitch", "Branding"],
                  },
                  {
                    t: "សណ្ឋាគារ រីសត និងបដិសណ្ឋារកិច្ច",
                    d: "អេក្រង់ស្វាគមន៍បន្ទប់ទទួលភ្ញៀវ កាលវិភាគព្រឹត្តិការណ៍ និងអេក្រង់សាលជប់លៀង ជាមួយរូបភាពស្អាត និងប្រព័ន្ធត្រជាក់ស្ងាត់។",
                    chips: ["Lobby", "Event", "24/7"],
                  },
                  {
                    t: "ការិយាល័យ និងបន្ទប់តាំងបង្ហាញ",
                    d: "អេក្រង់ LED សម្រាប់បន្ទប់ប្រជុំ និងបន្ទប់តាំងបង្ហាញ ដើម្បីបង្ហាញបទបង្ហាញ ផ្ទាំងទិន្នន័យ និងរឿងរ៉ាវម៉ាក។",
                    chips: ["Corporate", "Control", "Showroom"],
                  },
                  {
                    t: "ព្រឹត្តិការណ៍ ឆាក និងសេវាជួល",
                    d: "ជញ្ជាំង LED សម្រាប់ជួល ក្នុងការប្រគុំតន្ត្រី ពិព័រណ៍ និងផ្ទៃខាងក្រោយឆាក ជាមួយការដំឡើងលឿន។",
                    chips: ["Rental", "Stage", "Fast setup"],
                  },
                  {
                    t: "វិស័យអប់រំ និងបរិវេណសាលា",
                    d: "អេក្រង់សាលប្រជុំ អេក្រង់ជូនដំណឹងក្នុងបរិវេណសាលា និងអេក្រង់ថ្នាក់រៀនឆ្លាតវៃ សម្រាប់ភាពមើលឃើញច្បាស់។",
                    chips: ["Education", "Auditorium", "Notice"],
                  },
                  {
                    t: "រដ្ឋាភិបាល និងសេវាសាធារណៈ",
                    d: "អេក្រង់ព័ត៌មានសម្រាប់មជ្ឈមណ្ឌលសេវា សាលារាជធានី/ខេត្ត និងសេចក្ដីជូនដំណឹងសាធារណៈ។",
                    chips: ["Public", "Info", "Queue"],
                  },
                  {
                    t: "ដឹកជញ្ជូន និងស្ថានីយ៍",
                    d: "អេក្រង់តារាងពេលវេលា អេក្រង់ណែនាំទិស និងផ្សព្វផ្សាយ សម្រាប់ស្ថានីយរថយន្ត ស្ថានីយ និងកំពង់ផែ។",
                    chips: ["Wayfinding", "Timetable", "Public"],
                  },
                  {
                    t: "ផ្សព្វផ្សាយខាងក្រៅ និងផ្ទាំងផ្សព្វផ្សាយ",
                    d: "ប៊ីលបត្រ LED ពន្លឺខ្ពស់ សម្រាប់ផ្សព្វផ្សាយតាមដងផ្លូវ និងលើដំបូលទូទាំងកម្ពុជា។",
                    chips: ["Outdoor", "High nits", "IP65+"],
                  },
                ]
            ).map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{x.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {x.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DeferredSection>

      {/* INSTALLATION PROCESS */}
      <DeferredSection id="installation-workflow" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "LED Display Solutions: Installation & After-Sales Support"
              : "ដំណើរការដំឡើងអេក្រង់ LED និងសេវាកម្មបន្ទាប់ពីលក់"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Our solution-focused workflow is built for businesses that need reliable LED display performance with low risk and clear execution. From site survey and engineering BOQ to safe installation, calibration, commissioning, operator training, and preventive after-sales support, each stage is planned to deliver stable visuals, structural safety, and long-term return on investment."
              : "ដំណើរការដឹកជញ្ជូនអេក្រង់ LED ពេញលេញរបស់យើង រួមមានការស្ទង់ទីតាំង ការរចនា ការដំឡើង ការត្រួតពិនិត្យដំណើរការ និងការគាំទ្របន្ទាប់ពីលក់។ ដំណើរការនេះជួយធានារូបភាពស្ថិរភាព រចនាសម្ព័ន្ធសុវត្ថិភាព និងអាយុកាលប្រើប្រាស់យូរ។"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
              [
                "1. Site Survey, Risk Check & Requirement Mapping",
                "We validate viewing distance, sunlight exposure, mounting points, power readiness, and safety risks before finalizing your LED display scope.",
                ["Site survey", "Risk check", "Project scope"],
              ],
              [
                "2. Engineering Design, BOQ & Technical Proposal",
                "Our team prepares pixel pitch selection, cabinet layout, structure design, controller specification, and transparent BOQ for faster approval.",
                ["Engineering BOQ", "Technical design", "Pixel pitch"],
              ],
              [
                "3. Professional Installation, Calibration & Commissioning",
                "Certified technicians complete frame installation, cabling, grounding, controller setup, color calibration, and brightness tuning for go-live readiness.",
                ["Installation", "Calibration", "Commissioning"],
              ],
              [
                "4. Operator Handover, Preventive Maintenance & After-Sales",
                "We provide operator handover, maintenance planning, spare-parts readiness, and responsive support to keep your LED screen running reliably.",
                ["Operator training", "Maintenance", "After-sales"],
              ],
              ]
              : [
                  [
                    "1. ស្ទង់ទីតាំង និងវាយតម្លៃ",
                    "វាស់វែងទីតាំងពិត ពិនិត្យចម្ងាយមើល កម្រិតពន្លឺថ្ងៃ ទីតាំងដំឡើង និងប្រភពថាមពល។",
                    ["ស្ទង់ទីតាំង", "ចម្ងាយមើល", "លក្ខខណ្ឌទីតាំង"],
                  ],
                  [
                    "2. រចនា BOQ និងអនុម័ត",
                    "ជ្រើស Pixel Pitch រៀបប្លង់កាប៊ីណេត រចនាសម្ព័ន្ធ ជ្រើសឧបករណ៍បញ្ជា និងបំបែកថ្លៃ BOQ។",
                    ["BOQ", "រចនាសម្ព័ន្ធ", "Pixel Pitch"],
                  ],
                  [
                    "3. ដំឡើង និងត្រួតពិនិត្យដំណើរការ",
                    "ដំឡើងស៊ុម រៀបខ្សែ ប្រព័ន្ធដីសុវត្ថិភាព កំណត់ឧបករណ៍បញ្ជា កែតម្រូវពណ៌ និងកំណត់កម្រិតពន្លឺ។",
                    ["ដំឡើង", "កែតម្រូវ", "សុវត្ថិភាព"],
                  ],
                  [
                    "4. បណ្តុះបណ្តាល និងសេវាបន្ទាប់ពីលក់",
                    "បណ្តុះបណ្តាលអ្នកប្រើប្រាស់ គាំទ្រមាតិកា គម្រោងគ្រឿងបន្លាស់ កាលវិភាគថែទាំ និងជម្រើសកិច្ចសន្យាថែទាំ។",
                    ["Training", "Spare parts", "AMC"],
                  ],
                ]
            ).map((item, idx) => {
              const [t, d, chips] = item as [string, string, string[]];
              return (
              <div
                key={`${t}-${idx}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <div className="mt-2 text-xs leading-relaxed text-slate-600">{d}</div>
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
      </DeferredSection>

      {/* WHY CHOOSE MUGNEE */}
      <DeferredSection id="why-mugnee" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Why Businesses Choose Mugnee for LED Display Solutions"
              : "ហេតុអ្វីគួរជ្រើស Mugnee សម្រាប់អេក្រង់ LED"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Businesses choose Mugnee for LED display solutions because we combine technical planning, transparent BOQ, certified installation, and dependable after-sales service in one execution flow. Whether you need an indoor LED display, outdoor LED billboard, or LED video wall, we focus on visual quality, safe structure design, low downtime, and long-term ROI."
              : "អតិថិជនជ្រើស Mugnee ព្រោះយើងអនុវត្តគម្រោងអេក្រង់ LED ត្រឹមត្រូវតាមវិស្វកម្ម ជាមួយរូបភាពច្បាស់ រចនាសម្ព័ន្ធសុវត្ថិភាព និងសេវាកម្មបន្ទាប់ពីលក់ដែលទុកចិត្តបាន។ ចាប់ពីការស្ទង់ទីតាំងដល់ការត្រួតពិនិត្យដំណើរការ យើងផ្តោតលើប្រសិទ្ធភាព ភាពធន់ និងតម្លៃប្រើប្រាស់រយៈពេលវែង។"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
              [
                "Local Project Team & Faster Response",
                "Dedicated on-site engineers handle survey, installation, commissioning, and priority support to keep projects on schedule.",
              ],
              [
                "Engineering-Led Specification",
                "Pixel pitch, brightness, IP rating, and structure method are selected from real viewing distance, environment, and use-case needs.",
              ],
              [
                "Reliable Components & Precision Calibration",
                "Quality control systems, stable power planning, clean cabling, and detailed calibration deliver sharp and consistent screen performance.",
              ],
              [
                "After-Sales Service That Protects Uptime",
                "Operator guidance, preventive maintenance, spare-parts planning, and responsive support reduce downtime and protect your investment.",
              ],
              ]
              : [
                  [
                    "ក្រុមដឹកជញ្ជូន និងដំឡើងក្នុងស្រុក",
                    "ការស្ទង់ទីតាំង ការដំឡើង ការត្រួតពិនិត្យដំណើរការ និងការគាំទ្រឆាប់រហ័ស សម្រាប់ភ្នំពេញ និងគម្រោងទូទាំងប្រទេស។",
                  ],
                  [
                    "ការរចនាដោយផ្អែកលើវិស្វកម្ម",
                    "ជ្រើស Pixel Pitch កម្រិតពន្លឺ រចនាសម្ព័ន្ធ និងកម្រិតការពារ IP តាមចម្ងាយមើល និងបរិស្ថានពិត។",
                  ],
                  [
                    "ផ្នែករឹង និងការកែតម្រូវដែលទុកចិត្តបាន",
                    "ឧបករណ៍បញ្ជាគុណភាព ការរៀបថាមពលស្ថេរភាព ខ្សែស្អាត និងការកែតម្រូវតាមស្តង់ដារ។",
                  ],
                  [
                    "សេវាបន្ទាប់ពីលក់ និងកិច្ចសន្យាថែទាំ",
                    "បណ្តុះបណ្តាល គម្រោងគ្រឿងបន្លាស់ ការថែទាំការពារ និងជម្រើសកិច្ចសន្យាថែទាំ សម្រាប់ស្ថិរភាពយូរអង្វែង។",
                  ],
                ]
            ).map(([t, d]) => (
              <div
                key={String(t)}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={toLangHref("/contact")}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {lang === "en" ? "Contact Mugnee Cambodia" : "ទំនាក់ទំនង Mugnee Cambodia"}
            </a>
            <a
              href="https://wa.me/85581580802"
              target="_blank"
              rel="noopener"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {lang === "en" ? "WhatsApp for Quotation" : "WhatsApp ស្នើសុំតម្លៃ"}
            </a>
          </div>
        </div>
      </DeferredSection>

      {/* AUTHORIZED DISTRIBUTOR */}
      <DeferredSection id="partners" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {lang === "en" ? "Partners" : "ដៃគូ"}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Authorized Distributor & Certified Engineering Partner"
              : "អ្នកចែកចាយផ្លូវការ និងដៃគូវិស្វកម្មដែលមានវិញ្ញាបនបត្រ"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Mugnee Cambodia supplies world-leading LED components and control systems with certified engineering support, quality assurance, and Cambodia-based service for long-term performance."
              : "Mugnee Cambodia ផ្គត់ផ្គង់គ្រឿងផ្សំ LED និងប្រព័ន្ធគ្រប់គ្រងដែលមានគុណភាពខ្ពស់ ជាមួយការគាំទ្រវិស្វកម្មដែលមានវិញ្ញាបនបត្រ ការធានាគុណភាព និងសេវាកម្មក្នុងស្រុកសម្រាប់ដំណើរការយូរអង្វែង។"}
          </p>

          <div className="mt-6 relative overflow-hidden rounded-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

            <div className="home-partner-marquee-track flex w-max gap-3 py-1">
              {[
                { label: "Mean Well", src: "/images/partners/meanwell.png" },
                { label: "G-energy", src: "/images/partners/g-energy.png" },
                { label: "Lampro", src: "/images/partners/lampro.svg" },
                { label: "NovaStar", src: "/images/partners/novastar.png" },
                { label: "Huidu", src: "/images/partners/huidu.png" },
                { label: "NationStar", src: "/images/partners/nationstar.jpg" },
                { label: "Colorlight", src: "/images/partners/colorlight.png" },
                { label: "Mean Well", src: "/images/partners/meanwell.png" },
                { label: "G-energy", src: "/images/partners/g-energy.png" },
                { label: "Lampro", src: "/images/partners/lampro.svg" },
                { label: "NovaStar", src: "/images/partners/novastar.png" },
                { label: "Huidu", src: "/images/partners/huidu.png" },
                { label: "NationStar", src: "/images/partners/nationstar.jpg" },
                { label: "Colorlight", src: "/images/partners/colorlight.png" },
              ].map((logo, idx) => (
                <div
                  key={`${logo.label}-${idx}`}
                  className="flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60 px-4 sm:w-44 lg:w-48"
                >
                  <div className={logo.label === "Lampro" ? "relative h-10 w-36" : "relative h-8 w-36"}>
                    <Image
                      src={logo.src}
                      alt={logo.label}
                      fill
                      sizes="(max-width: 640px) 120px, 144px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
            {(lang === "en"
              ? [
                  "ISO Certified Organization",
                  "ABC Certified Engineers",
                  "Industry Track-Lead",
                  "24/7 Customer Support",
                  "On-site Service",
                ]
              : [
                  "អង្គភាពទទួលស្គាល់ ISO",
                  "វិស្វករដែលមានវិញ្ញាបនបត្រ ABC",
                  "ភាពជាអ្នកនាំមុខក្នុងឧស្សាហកម្ម",
                  "ការគាំទ្រអតិថិជន 24/7",
                  "សេវាកម្ម On-site",
                ]
            ).map((x) => (
              <span
                key={x}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </DeferredSection>

      {/* SERVICE AREA */}
      <DeferredSection id="service-areas" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {lang === "en" ? "Service area" : "តំបន់សេវាកម្ម"}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en" ? "Service Areas Across Cambodia" : "តំបន់សេវាកម្មទូទាំងកម្ពុជា"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Local installation, commissioning and after-sales support across Phnom Penh, Siem Reap, Sihanoukville and nearby provinces."
              : "សេវាដំឡើង ការត្រួតពិនិត្យដំណើរការ និងការគាំទ្របន្ទាប់ពីលក់ ក្នុងភ្នំពេញ សៀមរាប ព្រះសីហនុ និងខេត្តជិតខាង។"}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
            {[
              "Phnom Penh",
              "Siem Reap",
              "Sihanoukville",
              "Battambang",
              "Kampong Cham",
              "Kampot",
              "Koh Kong",
              "Banteay Meanchey",
            ].map((x) => (
              <span
                key={x}
                className="rounded-full border border-slate-200 bg-white px-3 py-1"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </DeferredSection>

      {/* TRUST / ENTITY SIGNALS */}
      <DeferredSection className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            {lang === "en" ? "Trust Signals" : "សញ្ញានៃភាពទុកចិត្ត"}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {(lang === "en" ? trustTitleOverride : (trustTitleOverrideKm ?? trustTitleOverride)) ??
              (lang === "en"
                ? "Why Businesses Trust Mugnee for LED Display Projects"
                : "ហេតុអ្វីអាជីវកម្មទុកចិត្ត Mugnee សម្រាប់គម្រោងអេក្រង់ LED")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {(lang === "en" ? trustDescOverride : (trustDescOverrideKm ?? trustDescOverride)) ??
              (lang === "en"
                ? "Use this checklist to evaluate any LED display supplier with confidence. Mugnee combines technical planning, transparent BOQ, certified installation, and structured after-sales service for indoor LED display, outdoor LED billboard, and LED video wall projects."
                : "ផ្នែកនេះបង្ហាញមូលហេតុដែល Mugnee ត្រូវបានទុកចិត្តសម្រាប់គម្រោងអេក្រង់ LED ក្នុងអគារ ផ្ទាំងផ្សព្វផ្សាយ LED ខាងក្រៅ និងជញ្ជាំងវីដេអូ LED ដោយមានការរៀបចំបច្ចេកទេសច្បាស់ ការអនុវត្តក្នុងស្រុក និងសេវាកម្មបន្តរយៈពេលវែង។")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {trustProofChips.map((chip, index) => (
              <span
                key={`${chip}-${index}`}
                className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"
              >
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[11px] font-bold text-sky-700">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{trustSignalTitles[index] ?? `Signal ${index + 1}`}</p>
                </div>
                <p className="mt-1">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={toLangHref("/led-display/indoor-led-display")}
              className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "Explore Indoor LED Displays" : "មើលអេក្រង់ LED ក្នុងអគារ"}
            </Link>
            <Link
              href={toLangHref("/led-display/outdoor-led-display")}
              className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "Explore Outdoor LED Displays" : "មើលអេក្រង់ LED ខាងក្រៅ"}
            </Link>
            <Link
              href={toLangHref("/contact")}
              className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "Request LED Quotation" : "ស្នើសុំតម្លៃអេក្រង់ LED"}
            </Link>
          </div>
        </div>
      </DeferredSection>

      {/* INTERNAL LINK CLUSTER */}
      <DeferredSection className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/80 to-sky-50/40 p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  {(lang === "en" ? internalLinkTitleOverride : (internalLinkTitleOverrideKm ?? internalLinkTitleOverride)) ??
                    (lang === "en"
                      ? "Related LED Resources & Buying Paths in Cambodia"
                      : "ធនធាន LED ពាក់ព័ន្ធ និងផ្លូវសម្រេចចិត្តទិញ")}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {(lang === "en" ? internalLinkDescOverride : (internalLinkDescOverrideKm ?? internalLinkDescOverride)) ??
                    (lang === "en"
                      ? "Use this navigation hub to move by buying intent: product type, technical component, installation support, or direct quotation."
                      : "ប្រើមជ្ឈមណ្ឌលរុករកនេះ ដើម្បីរុករកតាមគោលបំណងទិញ៖ ប្រភេទផលិតផល ផ្នែកបច្ចេកទេស ការគាំទ្រការដំឡើង ឬស្នើសុំតម្លៃដោយផ្ទាល់។")}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {internalLinks.map((item, index) => {
                const hint = internalLinkHints[index];
                return (
                  <Link
                    key={`${item.href}-${item.title}-${index}`}
                    href={item.href}
                    className="group rounded-2xl border border-slate-200 bg-white p-4 text-slate-800 no-underline shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-md hover:no-underline"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-slate-100"
                      >
                        {hint?.tag ?? (lang === "en" ? "LED Resource" : "ធនធានអេក្រង់ LED")}
                      </span>
                      <span className="text-sm text-slate-400 group-hover:text-slate-100">→</span>
                    </div>
                    <h3 className="mt-3 text-sm font-semibold leading-snug text-slate-900 group-hover:text-white">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 group-hover:text-slate-200">
                      {hint?.desc ?? (lang === "en" ? "Explore this LED resource to support your next project decision." : "ស្វែងយល់ធនធានអេក្រង់ LED នេះ ដើម្បីជួយសម្រេចចិត្តគម្រោងបន្ទាប់របស់អ្នក។")}
                    </p>
                    <div className="mt-3 text-xs font-semibold text-sky-800 group-hover:text-white">
                      {hint?.cta ?? (lang === "en" ? "Open Resource" : "បើកធនធាន")}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </DeferredSection>

      {/* FAQ */}
      <DeferredSection id="faq" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en" ? "Frequently Asked Question (FAQ)" : "សំណួរដែលសួរញឹកញាប់"}
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqItems.map(({ q, a }, index) => (
              <details
                key={`${q}-${index}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                  {q}
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </DeferredSection>

    </div>
  );
}
