import type { Metadata } from "next";
import LedDisplayClient from "../../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../../data/products";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/led-display/power-supply/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Power Supply សម្រាប់អេក្រង់ LED | តម្លៃ និងគាំទ្រ",
  description:
    "ជ្រើសរើស Power Supply ត្រឹមត្រូវសម្រាប់ LED Module នៅកម្ពុជា ដើម្បីធានាស្ថិរភាព ប្រសិទ្ធភាពថាមពល និងអាយុកាលប្រព័ន្ធ ជាមួយសេវាបច្ចេកទេសពី Mugnee Cambodia។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/power-supply/",
      "km-kh": PAGE_PATH,
      "x-default": "/led-display/power-supply/",
    },
  },
  openGraph: {
    title: "Power Supply សម្រាប់អេក្រង់ LED នៅកម្ពុជា | តម្លៃ និងជ្រើសរើស",
    description:
      "Power Supply សម្រាប់ LED Module នៅកម្ពុជា ដើម្បីធានាស្ថិរភាព ប្រសិទ្ធភាពថាមពល និងការគាំទ្របច្ចេកទេស។",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "LED power supply in Cambodia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Supply សម្រាប់អេក្រង់ LED នៅកម្ពុជា | Mugnee Cambodia",
    description: "ជ្រើសរើស Power Supply ត្រឹមត្រូវ កំណត់កម្លាំង និងគាំទ្របច្ចេកទេសនៅកម្ពុជា។",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function KhmerPowerSupplyPage() {
  const accessoryProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("power_supply")
  ).slice(0, 8);

  const productQuickChips = accessoryProducts.map((p) => ({
    label: p.titleEn,
    labelKm: p.titleKm || p.titleEn,
    href: `/km/products/${p.slug}`,
  }));

  const faqItemsKm = [
    {
      q: "ហេតុអ្វីបានជា​គុណភាព Power Supply សំខាន់សម្រាប់អេក្រង់ LED?",
      a: "Power Supply ដែលមានស្ថិរភាពជួយរក្សាពន្លឺឱ្យស្មើ ការពារផ្នែកសំខាន់ៗ និងកាត់បន្ថយហានិភ័យនៃការឈប់ដំណើរការរបស់អេក្រង់ LED។",
    },
    {
      q: "តើត្រូវគណនាកម្លាំង SMPS យ៉ាងដូចម្តេច?",
      a: "គួរគណនាតាម cabinet load តម្រូវការ voltage និង headroom ផ្នែកកម្តៅ ហើយមិនគួរប្រើឱ្យដល់ load អតិបរមាជាបន្តបន្ទាប់។",
    },
    {
      q: "តើមានសេវារៀបចំប្រព័ន្ធថាមពល និងដំឡើងនៅកម្ពុជាទេ?",
      a: "មាន។ យើងគាំទ្រការជ្រើសរើស Power Supply ការត្រួតពិនិត្យខ្សែ ការរៀបសមតុល្យ load និងការត្រួតពិនិត្យដំណើរការ។",
    },
  ];

  return (
    <LedDisplayClient
      forcedLang="km"
      productGridOverride={{
        allowedCategoryIds: ["power_supply"],
        filterCategoryIds: ["power_supply"],
        categoryOrderIds: ["power_supply"],
      }}
      productQuickChips={productQuickChips}
      faqItemsOverrideKm={faqItemsKm}
      schemaPathOverride="/km/led-display/power-supply"
      schemaNameOverride="Power Supply សម្រាប់អេក្រង់ LED"
      schemaServiceNameOverride="សេវា Power Supply សម្រាប់ LED នៅកម្ពុជា"
      schemaServiceDescOverride="សេវាជ្រើសរើស Power Supply ការរៀបចំការពារ និងការគាំទ្រការដំឡើងសម្រាប់អេក្រង់ LED នៅកម្ពុជា។"
      breadcrumbOverrideKm="Power Supply សម្រាប់អេក្រង់ LED"
      heroTitleOverrideKm="Power Supply សម្រាប់អេក្រង់ LED នៅកម្ពុជា"
      heroIntroOverrideKm="Power Supply គឺជាផ្នែកសំខាន់សម្រាប់ផ្គត់ផ្គង់ថាមពលឱ្យ LED Module និង Controller ដោយមានស្ថិរភាព។ Mugnee Cambodia គាំទ្រការជ្រើសរើស SMPS សមស្រប ការគណនាកម្លាំង ការរៀបចំការពារ និងការគាំទ្រការដំឡើងសម្រាប់គម្រោង LED ក្នុងអគារ និងខាងក្រៅនៅកម្ពុជា។"
      pixelPitchSectionOverrideKm={
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              មូលដ្ឋានសំខាន់ៗអំពី Power Supply
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Power Supply ត្រឹមត្រូវជួយឱ្យអេក្រង់ LED ដំណើរការបានមានស្ថិរភាព កាត់បន្ថយបញ្ហាភ្លឺមិនស្មើ
              ការឡើងកម្តៅខ្លាំង និងការខូចឧបករណ៍។ ការជ្រើស capacity និងមុខងារការពារឱ្យសមរម្យ
              ជាផ្នែកសំខាន់សម្រាប់អាយុកាលប្រព័ន្ធ។
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                [
                  "Capacity និង Headroom",
                  "គួរជ្រើស Power Supply ដែលមាន headroom លើសពី load គណនា ដើម្បីបង្កើនស្ថិរភាព និងកាត់បន្ថយភាពតានតឹងពេលដំណើរការ។",
                ],
                [
                  "មុខងារការពារ",
                  "OVP, OCP, SCP និង OTP ជួយការពារ LED module និង controller ពីបញ្ហាវ៉ុល ឬសីតុណ្ហភាពខ្ពស់។",
                ],
                [
                  "Cooling និងការដំឡើង",
                  "ការរៀបចំខ្យល់ចេញចូល និងទីតាំងដំឡើងល្អ ជួយឱ្យ Power Supply ប្រើបានយូរ និងមានស្ថិរភាព។",
                ],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">{title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
