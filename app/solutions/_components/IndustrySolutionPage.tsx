"use client";

import Link from "next/link";

import { SITE_URL } from "../../lib/site";
import {
  INDUSTRY_SOLUTIONS,
  type IndustrySolution,
} from "../_data/industrySolutions";
import { useLang } from "../../components/layout/LanguageProvider";

type Props = {
  solution: IndustrySolution;
};

export default function IndustrySolutionPage({ solution }: Props) {
  const { lang } = useLang();
  const isKm = lang === "km";
  const toLangHref = (href: string) =>
    isKm && href.startsWith("/") && !href.startsWith("/km/") ? `/km${href}` : href;

  const indoorCommunicationKm =
    solution.slug === "indoor-communication-solutions-cambodia"
      ? {
          title: "ដំណោះស្រាយទំនាក់ទំនងក្នុងអគារនៅកម្ពុជា",
          description:
            "ការរៀបចំដំណោះស្រាយទំនាក់ទំនងក្នុងអគារនៅកម្ពុជា សម្រាប់ឡប់ប៊ី តំបន់សន្និសីទ តំបន់រង់ចាំ និងតំបន់ទទួលភ្ញៀវ ជាមួយការអនុវត្តន៍គម្រោងក្នុងស្រុក។",
          heroIntro:
            "រចនាឡើងសម្រាប់អង្គភាពដែលត្រូវការលំហូរសារក្នុងអគារឱ្យច្បាស់លាស់ សម្រាប់ភ្ញៀវ បុគ្គលិក និងអ្នកមកទស្សនា នៅតំបន់ទទួលភ្ញៀវ តំបន់ប្រជុំ និងតំបន់ព្រឹត្តិការណ៍។",
          problemContext: [
            "ចំណុចទំនាក់ទំនងក្នុងអគារជាច្រើនត្រូវបានដាក់ដោយមិនគិតពីលំហូរអ្នកទស្សនា បណ្តាលឱ្យសារមើលឃើញមិនច្បាស់។",
            "មូលដ្ឋានជាច្រើនប្រើប្រព័ន្ធបង្ហាញចម្រុះ ដែលធ្វើឱ្យគុណភាពទំនាក់ទំនងមិនស្មើគ្នាតាមតំបន់។",
            "ក្រុមប្រតិបត្តិការត្រូវការគំរូប្រគល់ការងារដែលអនុវត្តបានពិត ដើម្បីឱ្យការអាប់ដេតមាតិកាប្រចាំថ្ងៃមានស្ថិរភាពក្រោយដាក់ឱ្យដំណើរការ។",
          ],
          deploymentWorkflow: [
            "ស្ទង់មើលតំបន់ក្នុងអគារ សម្រាប់ឡប់ប៊ី ទទួលភ្ញៀវ តំបន់រង់ចាំ ច្រកដើរ និងតំបន់ប្រជុំ។",
            "រៀបចំលំដាប់សារ និងទីតាំងបង្ហាញ តាមរយៈពេលស្នាក់នៅ និងទិសចលនារបស់អ្នកទស្សនា។",
            "ដំឡើង ធ្វើតេស្តការបង្ហាញ និងពិនិត្យការមើលឃើញពីទីតាំងប្រើប្រាស់ពិត។",
            "បណ្តុះបណ្តាលអ្នកប្រើ សម្រាប់ការរៀបចំកាលវិភាគប្រចាំថ្ងៃ និងប្រគល់ផែនការគាំទ្រសម្រាប់ដំណើរការបន្ត។",
          ],
          integrationScope: [
            "កំណត់របៀបគ្រប់គ្រងសារ តាមនាយកដ្ឋានប្រតិបត្តិការ តុទទួលភ្ញៀវ និងក្រុមទីផ្សារ។",
            "សម្របសម្រួលកាលវិភាគមាតិកា សម្រាប់ការអាប់ដេតប្រចាំថ្ងៃ និងថ្ងៃព្រឹត្តិការណ៍។",
            "អាចរួមបញ្ចូលជាមួយដំណើរការប្រជុំ និងចំណុចទំនាក់ទំនងខាងក្នុងតាមតម្រូវការ។",
          ],
          budgetFactors: [
            "ចំនួនតំបន់ក្នុងអគារ និងចំណុចទំនាក់ទំនងក្នុងមួយជាន់។",
            "វិធីដំឡើង ភាពស្មុគស្មាញនៃការរៀបចំខ្សែ និងភាពរួចរាល់នៃទីតាំង។",
            "គំរូប្រតិបត្តិការមាតិកាប្រចាំថ្ងៃ និងតម្រូវការប្រគល់ការងារ។",
            "វិសាលភាព SLA សេវាគាំទ្រ និងផែនការពង្រីកតំបន់បន្ថែម។",
          ],
          faqs: [
            {
              q: "តើដំណោះស្រាយនេះសមស្របសម្រាប់តុទទួលភ្ញៀវការិយាល័យ និងឡប់ប៊ីសណ្ឋាគារទេ?",
              a: "បាទ/ចាស។ វាត្រូវបានរចនាសម្រាប់តំបន់ទទួលភ្ញៀវក្នុងអគារ ដែលត្រូវការភាពច្បាស់លាស់ និងស្ថិរភាពនៃការបញ្ជូនសារ។",
            },
            {
              q: "តើយើងអាចដាក់ដំណើរការតែតំបន់ចម្បងមុនបានទេ?",
              a: "បាន។ អាចចាប់ផ្តើមពីតំបន់អាទិភាព ហើយពង្រីកជាដំណាក់កាល ដោយប្រើស្តង់ដាររៀបចំដូចគ្នា។",
            },
            {
              q: "តើអ្នកផ្តល់ការណែនាំប្រតិបត្តិការបន្ទាប់ពីដំឡើងទេ?",
              a: "បាទ/ចាស។ យើងផ្តល់ការបណ្តុះបណ្តាលពេលប្រគល់ការងារ និងសេវាគាំទ្រក្នុងស្រុក ដើម្បីរក្សាប្រតិបត្តិការប្រចាំថ្ងៃឱ្យមានស្ថិរភាព។",
            },
          ],
          internalLinks: [
            { label: "ដំណោះស្រាយអេក្រង់សណ្ឋាគារ", href: "/solutions/hotel-display-solutions-cambodia" },
            { label: "អេក្រង់ LED ក្នុងអគារ", href: "/led-display/indoor-led-display" },
            { label: "ផលិតផល Digital Signage", href: "/led-display" },
            { label: "អេក្រង់អន្តរកម្ម (IFP)", href: "/interactive-flat-panel" },
            { label: "ស្នើសុំតម្លៃ", href: "/contact" },
          ],
        }
      : null;

  const outdoorCampaignKm =
    solution.slug === "outdoor-campaign-solutions-cambodia"
      ? {
          title: "ដំណោះស្រាយយុទ្ធនាការផ្សព្វផ្សាយក្រៅអគារនៅកម្ពុជា",
          description:
            "ការរៀបចំ និងដាក់ឲ្យដំណើរការដំណោះស្រាយយុទ្ធនាការផ្សព្វផ្សាយក្រៅអគារនៅកម្ពុជា សម្រាប់មុខហាង តំបន់តាមផ្លូវ និងកន្លែងចរាចរខ្ពស់ ជាមួយការគាំទ្រអនុវត្តក្នុងស្រុក។",
          heroIntro:
            "បង្កើតសម្រាប់ម៉ាក និងអាជីវកម្មលក់រាយដែលត្រូវការផលប៉ះពាល់យុទ្ធនាការក្រៅអគារខ្លាំងជាងមុន ស្តង់ដារដាក់ឲ្យដំណើរការសាខាដែលអាចធ្វើឡើងវិញបាន និងប្រតិបត្តិការស្ថិរភាពតាមលក្ខខណ្ឌក្នុងស្រុក។",
          problemContext: [
            "ភាពមើលឃើញយុទ្ធនាការជាញឹកញាប់ធ្លាក់ចុះ ព្រោះទីតាំងដាក់មិនស្របទិសចរាចរ និងចម្ងាយមើលឃើញ។",
            "ការរក្សាភាពស្មើគ្នានៃយុទ្ធនាការតាមសាខាច្រើន ពិបាកធ្វើបាន បើគ្មាន workflow ស្តង់ដារសម្រាប់ដាក់ឲ្យដំណើរការ និងប្រតិបត្តិការ។",
            "ក្រុមការងារត្រូវការការគាំទ្រក្នុងស្រុក សម្រាប់ការផ្លាស់ប្តូរប្រូម៉ូសិនជាប្រចាំ និងប្រតិបត្តិការក្រៅអគារដែលមានស្ថិរភាព។",
          ],
          deploymentWorkflow: [
            "វាយតម្លៃលំហូរចរាចរ និងផ្ទៃមុខហាង ដើម្បីកំណត់ចំណុចមើលឃើញសំខាន់សម្រាប់យុទ្ធនាការ។",
            "រៀបចំផែនការទីតាំង និងការដាក់ឲ្យដំណើរការ សម្រាប់ប្រូម៉ូសិនជាប្រចាំ នៅទីតាំងមួយ ឬច្រើនទីតាំង។",
            "ដំឡើង និងធ្វើតេស្តកម្រិតពន្លឺ ការអានឃើញ និងការទទួលស្គាល់ស្តង់ដារ តាមម៉ោងប្រតិបត្តិការ។",
            "ប្រគល់ប្រតិបត្តិការយុទ្ធនាការ និងរៀបចំគាំទ្រ សម្រាប់វដ្តមាតិកាដែលធ្វើឡើងវិញ។",
          ],
          integrationScope: [
            "សម្របសម្រួលប្រតិទិនយុទ្ធនាការ តាមសាខា និងចំណុចប៉ះពាល់មុខហាង។",
            "សម្របសម្រួល workflow ប្រូម៉ូសិន រវាងក្រុមទីផ្សារ និងក្រុមប្រតិបត្តិការ។",
            "អាចរួមបញ្ចូលជាមួយការកំណត់ពេលវេលាមាតិកាកណ្ដាល និង workflow រាយការណ៍ តាមតម្រូវការ។",
          ],
          budgetFactors: [
            "ចំនួនទីតាំងយុទ្ធនាការ និងចំណុចទំនាក់ទំនងក្នុងមួយទីតាំង។",
            "លក្ខខណ្ឌដំឡើងក្រៅអគារ តម្រូវការរចនាសម្ព័ន្ធ និងស្ថានភាពត្រៀមថាមពល។",
            "ភាពញឹកញាប់នៃការផ្លាស់ប្តូរយុទ្ធនាការ និងម៉ូដែលគាំទ្រប្រតិបត្តិការដែលត្រូវការ។",
            "ផែនការពង្រីកទៅសាខាបន្ថែម និងវិសាលភាពគាំទ្ររយៈពេលវែង។",
          ],
          faqs: [
            {
              q: "តើដំណោះស្រាយនេះអាចគាំទ្រប្រូម៉ូសិនជាប្រចាំរៀងរាល់ខែបានទេ?",
              a: "បាន។ workflow នេះត្រូវបានរៀបចំសម្រាប់វដ្តយុទ្ធនាការដែលធ្វើឡើងវិញ ដោយរក្សាស្តង់ដារអនុវត្តតាមសាខាឲ្យស្មើគ្នា។",
            },
            {
              q: "តើសាកសមតែសម្រាប់ខ្សែសង្វាក់ហាងធំៗទេ ឬហាងតែមួយក៏អាចប្រើបាន?",
              a: "ទាំងពីរបាន។ គំរូនេះអាចប្រើបានសម្រាប់យុទ្ធនាការហាងតែមួយ និងកម្មវិធីដាក់ឲ្យដំណើរការតាមសាខាច្រើន។",
            },
            {
              q: "តើមានការគាំទ្រក្នុងស្រុកនៅពេលយុទ្ធនាការកំពុងដំណើរការទេ?",
              a: "មាន។ យើងគាំទ្រការបន្តប្រតិបត្តិការ និងដោះស្រាយបញ្ហាក្នុងស្រុក ក្នុងអំឡុងពេលយុទ្ធនាការកំពុងដំណើរការ។",
            },
          ],
          internalLinks: [
            { label: "ដំណោះស្រាយ Digital Signage សម្រាប់លក់រាយ", href: "/solutions/retail-digital-signage-cambodia" },
            { label: "អេក្រង់ LED ខាងក្រៅ", href: "/led-display/outdoor-led-display" },
            { label: "ទំព័រមេ LED Display", href: "/led-display" },
            { label: "Video Processor", href: "/led-display/video-processor" },
            { label: "ទាក់ទងក្រុមគម្រោង", href: "/contact" },
          ],
        }
      : null;

  const retailDigitalSignageKm =
    solution.slug === "retail-digital-signage-cambodia"
      ? {
          title: "ដំណោះស្រាយ Retail Digital Signage នៅកម្ពុជា",
          description:
            "ការរៀបចំផែនការ និងដាក់ឲ្យដំណើរការ Retail Digital Signage នៅកម្ពុជា សម្រាប់ផ្សារទំនើប បន្ទប់តាំង និងមុខហាង ជាមួយការអនុវត្តក្នុងស្រុក និងសេវាគាំទ្របន្ទាប់ពីដំឡើង។",
          heroIntro:
            "ដំណោះស្រាយនេះបង្កើតសម្រាប់អាជីវកម្មលក់រាយដែលត្រូវការការទំនាក់ទំនងក្នុងហាងឲ្យកាន់តែច្បាស់ ពង្រឹងភាពមើលឃើញយុទ្ធនាការ និងរក្សាស្តង់ដារដាក់ឲ្យដំណើរការតាមសាខាឲ្យស្មើគ្នា។",
          problemContext: [
            "ក្រុមលក់រាយជាច្រើនជួបបញ្ហាគុណភាពបង្ហាញយុទ្ធនាការមិនស្មើគ្នារវាងសាខា។",
            "ការទំនាក់ទំនងនៅមុខហាងជាញឹកញាប់មិនស្របនឹងដំណើរអតិថិជន និងតំបន់ដែលអតិថិជនស្នាក់នៅ។",
            "ក្រុមប្រតិបត្តិការត្រូវការដំណើរការដាក់ឲ្យដំណើរការដែលអាចធ្វើឡើងវិញបាន សម្រាប់សាខាថ្មី និងប្រូម៉ូសិនតាមរដូវកាល។",
          ],
          deploymentWorkflow: [
            "ស្ទង់ទីតាំង និងផែនទីលំហូរអតិថិជនតាមតំបន់ (ច្រកចូល ធ្នើទំនិញ គណនេយ្យ កន្លែងរង់ចាំ)។",
            "រៀបចំផែនការទីតាំងបង្ហាញ និង workflow មាតិកា ដោយកំណត់ស្តង់ដារតាមសាខា។",
            "ដំឡើង ធ្វើតេស្តមាតិកា និងពិនិត្យបញ្ជីទទួលស្គាល់មុនដាក់ឲ្យប្រើប្រាស់។",
            "បណ្តុះបណ្តាលក្រុមការងារ និងផ្ទេរសេវាគាំទ្រក្នុងស្រុក សម្រាប់ប្រតិបត្តិការយុទ្ធនាការប្រចាំថ្ងៃ។",
          ],
          integrationScope: [
            "ការកំណត់ពេលមាតិកាកណ្ដាល និងការគ្រប់គ្រងមាតិកាតាមសាខា។",
            "សម្របពេលវេលាយុទ្ធនាការឲ្យស្របគ្នាតាមទីតាំងលក់រាយច្រើន។",
            "អាចរួមបញ្ចូលជាមួយប្រតិទិនព្រឹត្តិការណ៍ និង workflow ប្រូម៉ូសិន តាមតម្រូវការ។",
          ],
          budgetFactors: [
            "ចំនួនសាខា និងចំនួនតំបន់បង្ហាញក្នុងមួយសាខា។",
            "ភាពស្មុគស្មាញនៃការតម្លើង ការត្រៀមអគ្គិសនី និងភាពរួចរាល់នៃបណ្ដាញ។",
            "គំរូប្រតិបត្តិការមាតិកា (គ្រប់គ្រងកណ្ដាល ឬគ្រប់គ្រងតាមសាខា)។",
            "កម្រិត SLA សេវាគាំទ្រ និងពេលវេលាផែនការពង្រីក។",
          ],
          faqs: [
            {
              q: "តើដំណោះស្រាយនេះសាកសមសម្រាប់ទាំងផ្សារទំនើប និងហាងឯករាជ្យទេ?",
              a: "សាកសម។ គំរូដាក់ឲ្យដំណើរការអាចបត់បែនបានទាំងសម្រាប់ហាងតែមួយ និងការដាក់ជាច្រើនតំបន់ក្នុងផ្សារទំនើប។",
            },
            {
              q: "តើយើងអាចចាប់ផ្តើមពីសាខាមួយមុន ហើយពង្រីកពេលក្រោយបានទេ?",
              a: "បាន។ workflow នេះគាំទ្រការដាក់ឲ្យដំណើរការជាដំណាក់កាល ដើម្បីសាកល្បងមុន ហើយពង្រីកដោយរក្សាស្តង់ដារដដែល។",
            },
            {
              q: "តើអ្នកគាំទ្រប្រតិបត្តិការយុទ្ធនាការបន្ទាប់ពីដំឡើងទេ?",
              a: "មាន។ យើងផ្តល់ការណែនាំប្រតិបត្តិការ និងការគាំទ្រក្នុងស្រុក ដើម្បីរក្សាយុទ្ធនាការឲ្យដំណើរការបានស្ថិរភាព។",
            },
          ],
          internalLinks: [
            { label: "អេក្រង់ LED ក្នុងអគារ", href: "/led-display/indoor-led-display" },
            { label: "អេក្រង់ LED ខាងក្រៅ", href: "/led-display/outdoor-led-display" },
            { label: "ផលិតផល Digital Signage", href: "/led-display" },
            { label: "ជម្រើស Video Processor", href: "/led-display/video-processor" },
            { label: "ទាក់ទងក្រុមគម្រោង", href: "/contact" },
          ],
        }
      : null;

  const hotelDisplayKm =
    solution.slug === "hotel-display-solutions-cambodia"
      ? {
          title: "ដំណោះស្រាយអេក្រង់សណ្ឋាគារនៅកម្ពុជា",
          description:
            "ការរៀបចំផែនការ និងដាក់ឲ្យដំណើរការដំណោះស្រាយអេក្រង់សម្រាប់សណ្ឋាគារនៅកម្ពុជា សម្រាប់ឡប់ប៊ី កន្លែងព្រឹត្តិការណ៍ ចំណុចព័ត៌មានភ្ញៀវ និងប្រព័ន្ធជូនដំណឹងទូទាំងអចលនទ្រព្យ។",
          heroIntro:
            "បង្កើតសម្រាប់សណ្ឋាគារដែលត្រូវការការទំនាក់ទំនងភ្ញៀវកម្រិតខ្ពស់ ភាពមើលឃើញព្រឹត្តិការណ៍ និងភាពស្មើគ្នានៃម៉ាក ចាប់ពីការទទួលភ្ញៀវនៅឡប់ប៊ីរហូតដល់ប្រតិបត្តិការសាលពិធី។",
          problemContext: [
            "ក្រុមសណ្ឋាគារត្រូវការការទំនាក់ទំនងច្បាស់លាស់សម្រាប់ភ្ញៀវ ដោយមិនប៉ះពាល់បទពិសោធន៍ផ្នែកខាងក្នុងដែលមានគុណភាពខ្ពស់។",
            "តំបន់ព្រឹត្តិការណ៍ និងសាលជប់លៀង ត្រូវការដំណើរការបង្ហាញដែលអាចទុកចិត្តបាន សម្រាប់ការប្តូរកាលវិភាគញឹកញាប់។",
            "នាយកដ្ឋានច្រើនត្រូវការគំរូសម្របសម្រួលតែមួយ សម្រាប់ការអាប់ដេតព័ត៌មានភ្ញៀវ។",
          ],
          deploymentWorkflow: [
            "ដើរត្រួតពិនិត្យអចលនទ្រព្យ ដើម្បីកំណត់ចំណុចទំនាក់ទំនងសំខាន់ៗសម្រាប់ភ្ញៀវ។",
            "រៀបចំផែនការដាក់ឲ្យដំណើរការតាមតំបន់ សម្រាប់ឡប់ប៊ី ភោជនីយដ្ឋាន កន្លែងព្រឹត្តិការណ៍ និងតំបន់សន្និសីទ។",
            "ដំឡើង និងកំណត់ workflow មាតិកា ជាមួយការកំណត់តួនាទីទទួលខុសត្រូវតាមនាយកដ្ឋាន។",
            "បណ្តុះបណ្តាលអ្នកប្រើសម្រាប់ក្រុម Front Office និងក្រុមព្រឹត្តិការណ៍ ព្រមទាំងផ្ទេរសេវាគាំទ្រ។",
          ],
          integrationScope: [
            "សមកាលកម្មកាលវិភាគព្រឹត្តិការណ៍ និងសេចក្តីជូនដំណឹងសន្និសីទ។",
            "គំរូគ្រប់គ្រងមាតិកាតាមនាយកដ្ឋាន សម្រាប់ប្រតិបត្តិការ ព្រឹត្តិការណ៍ និងទីផ្សារ។",
            "អាចតភ្ជាប់ជាមួយប្រព័ន្ធទំនាក់ទំនងកណ្ដាល និង workflow ប្រកាសសំឡេង តាមតម្រូវការ។",
          ],
          budgetFactors: [
            "ចំនួនតំបន់ប៉ះពាល់ភ្ញៀវ និងភាពស្មុគស្មាញនៃប្លង់អចលនទ្រព្យ។",
            "ប្រភេទការតម្លើង និងតម្រូវការត្រៀមទីតាំងតាមតំបន់។",
            "តម្រូវការប្រតិបត្តិការ សម្រាប់សណ្ឋាគារដែលមានព្រឹត្តិការណ៍ញឹកញាប់ ប្រៀបធៀបនឹងសណ្ឋាគារទូទៅ។",
            "គំរូសេវាគាំទ្រ សម្រាប់រដូវកាលកំពូល និងអត្រាកាន់កាប់ខ្ពស់។",
          ],
          faqs: [
            {
              q: "តើដំណោះស្រាយនេះអាចគាំទ្រទាំងការទំនាក់ទំនងភ្ញៀវប្រចាំថ្ងៃ និងព្រឹត្តិការណ៍បានទេ?",
              a: "បាន។ ស្ថាបត្យកម្មនេះគាំទ្រទាំងសារជូនដំណឹងប្រចាំថ្ងៃសម្រាប់ភ្ញៀវ និងការអាប់ដេតព្រឹត្តិការណ៍បានរហ័ស។",
            },
            {
              q: "តើវាសាកសមសម្រាប់ទាំងសណ្ឋាគារប៊ូទីក និងអចលនទ្រព្យធំៗទេ?",
              a: "សាកសម។ យើងអាចរៀបចំវិសាលភាពបានទាំងសម្រាប់សណ្ឋាគារប៊ូទីកតែមួយ និងសណ្ឋាគារធំៗច្រើនតំបន់។",
            },
            {
              q: "តើអ្នកផ្តល់ការគាំទ្រនៅទីតាំង ក្នុងដំណាក់កាលដំណើរការដំបូងទេ?",
              a: "មាន។ យើងផ្តល់ការគាំទ្រដើម្បីធ្វើឲ្យប្រព័ន្ធស្ថិរភាព និងការណែនាំប្រតិបត្តិការ បន្ទាប់ពីប្រគល់ការងារ។",
            },
          ],
          internalLinks: [
            { label: "អេក្រង់ LED ក្នុងអគារ", href: "/led-display/indoor-led-display" },
            { label: "អេក្រង់អន្តរកម្ម (IFP)", href: "/interactive-flat-panel" },
            { label: "ប្រព័ន្ធ PA", href: "/pa-system" },
            { label: "ផលិតផល Digital Signage", href: "/led-display" },
            { label: "ស្នើសុំតម្លៃ", href: "/contact" },
          ],
        }
      : null;

  const factoryPaAnnouncementKm =
    solution.slug === "factory-pa-announcement-cambodia"
      ? {
          title: "ដំណោះស្រាយប្រកាសសំឡេង PA សម្រាប់រោងចក្រនៅកម្ពុជា",
          description:
            "ការរៀបចំផែនការដំណោះស្រាយប្រព័ន្ធ PA និងការប្រកាសទូទាំងរោងចក្រនៅកម្ពុជា ជាមួយការបែងចែកតំបន់ workflow សារបន្ទាន់ និងការគាំទ្រប្រតិបត្តិការនៅទីតាំង។",
          heroIntro:
            "រចនាសម្រាប់តំបន់ឧស្សាហកម្មដែលត្រូវការការគ្របដណ្តប់សំឡេងប្រកាសដែលអាចទុកចិត្តបាន ការទំនាក់ទំនងតាមវេនការងារ និង workflow ផ្សាយសំឡេងផ្តោតលើសុវត្ថិភាព។",
          problemContext: [
            "រោងចក្រត្រូវការការគ្របដណ្តប់សំឡេងឲ្យស្មើគ្នា នៅតំបន់ផលិតដែលមានសំឡេងរំខានខ្ពស់ និងបែកចែកធំទូលាយ។",
            "ក្រុមសុវត្ថិភាព និងប្រតិបត្តិការ ត្រូវការបំបែកច្បាស់រវាងការផ្សាយសារបន្ទាន់ និងការប្រកាសប្រចាំថ្ងៃ។",
            "ទីតាំងធំៗជាច្រើន ត្រូវការការដាក់ឲ្យដំណើរការជាដំណាក់កាល និងផែនការថែទាំស្តង់ដារ។",
          ],
          deploymentWorkflow: [
            "វាយតម្លៃកម្រិតសំឡេងរំខាន និងតំបន់រោងចក្រ សម្រាប់ផែនការគ្របដណ្តប់សំឡេងប្រកាសដែលសមរម្យ។",
            "កំណត់រចនាសម្ព័ន្ធការផ្សាយសំឡេង តាមលំដាប់សារ៖ ប្រចាំថ្ងៃ អាទិភាព និងបន្ទាន់។",
            "ដំឡើង និងcommissioning ជាមួយតេស្តទទួលស្គាល់តាមតំបន់ និងលក្ខខណ្ឌវេនការងារ។",
            "ប្រគល់ SOP សម្រាប់អ្នកប្រើ ជាមួយផែនការថែទាំ និង workflow បញ្ជូនបន្តបញ្ហា។",
          ],
          integrationScope: [
            "ជម្រើស paging តាមតំបន់ និងការផ្សាយសំឡេងទូទាំងរោងចក្រ។",
            "សម្របសម្រួលការទំនាក់ទំនងបន្ទាន់ ឲ្យស្របនឹងនីតិវិធីប្រតិបត្តិការរបស់រោងចក្រ។",
            "អាចរួមបញ្ចូលជាមួយ workflow ច្រកចូល និងការគ្រប់គ្រងប្រតិបត្តិការកណ្ដាល តាមតម្រូវការ។",
          ],
          budgetFactors: [
            "ទំហំទីតាំង ចំនួនតំបន់ និងភាពស្មុគស្មាញបរិស្ថាន។",
            "តម្រូវការបម្រុងទុក (redundancy) និងលក្ខខណ្ឌបន្តដំណើរការ។",
            "ទម្រង់ប្រតិបត្តិការវេន និងភាពញឹកញាប់នៃសារ។",
            "កម្រិត SLA សេវាគាំទ្រ និងវិសាលភាពថែទាំបង្ការ។",
          ],
          faqs: [
            {
              q: "តើដំណោះស្រាយនេះអាចបំបែកការប្រកាសប្រចាំថ្ងៃ និងសារបន្ទាន់បានទេ?",
              a: "បាន។ យើងកំណត់ message priority logic និងឥរិយាបថតាមតំបន់ សម្រាប់ការប្រើប្រាស់ប្រចាំថ្ងៃ និងពេលបន្ទាន់។",
            },
            {
              q: "តើវាអាចគាំទ្រការពង្រីករោងចក្រជាដំណាក់កាលបានទេ?",
              a: "បាន។ គំរូដាក់ឲ្យដំណើរការគាំទ្រការពង្រីកជាជំហានៗ ដោយរក្សាតក្កប្រតិបត្តិការស្តង់ដារ។",
            },
            {
              q: "តើមានសេវាគាំទ្របច្ចេកទេសបន្ទាប់ពីដំឡើងនៅកម្ពុជាទេ?",
              a: "មាន។ សេវាគាំទ្រក្នុងស្រុកត្រូវបានផ្តល់សម្រាប់ការធ្វើឲ្យប្រព័ន្ធស្ថិរភាព និងផែនការថែទាំរយៈពេលវែង។",
            },
          ],
          internalLinks: [
            { label: "ទំព័រមេ PA System", href: "/pa-system" },
            { label: "កាតាឡុកផលិតផល PA System", href: "/pa-system" },
            { label: "IP Paging Microphones", href: "/pa-system" },
            { label: "ការរួមបញ្ចូល Turnstile Gate", href: "/turnstile-gate" },
            { label: "ទាក់ទងក្រុមគម្រោង", href: "/contact" },
          ],
        }
      : null;

  const officeAccessControlKm =
    solution.slug === "office-access-control-cambodia"
      ? {
          title: "ដំណោះស្រាយគ្រប់គ្រងសិទ្ធិចូលប្រើការិយាល័យនៅកម្ពុជា",
          description:
            "ការរៀបចំផែនការដំណោះស្រាយគ្រប់គ្រងសិទ្ធិចូលប្រើសម្រាប់ការិយាល័យនៅកម្ពុជា សម្រាប់ការចូលចេញដែលបានគ្រប់គ្រង ដំណើរការភ្ញៀវ និងសន្តិសុខប្រតិបត្តិការដែលស្របនឹងគោលការណ៍ក្រុមហ៊ុន។",
          heroIntro:
            "បង្កើតសម្រាប់ការិយាល័យ និងអគារពាណិជ្ជកម្មដែលត្រូវការការគ្រប់គ្រងច្រកចូលមានសុវត្ថិភាព ប៉ុន្តែងាយស្រួលប្រើ ការគ្រប់គ្រងចលនាបុគ្គលិក និងដំណើរការទទួលភ្ញៀវឲ្យមានរបៀប។",
          problemContext: [
            "ក្រុមការិយាល័យត្រូវការគ្រប់គ្រងសិទ្ធិចូលប្រើ ដោយមិនបង្កកកស្ទះនៅពេលម៉ោងមមាញឹក។",
            "ដំណើរការភ្ញៀវ និងតំបន់ចូលប្រើខាងក្នុង ជាញឹកញាប់ត្រូវបានគ្រប់គ្រងដោយដៃ និងមិនស្មើគ្នា។",
            "ថ្នាក់គ្រប់គ្រងត្រូវការ workflow ចូលប្រើដែលអាចត្រួតពិនិត្យបាន និងស្របតាមគោលការណ៍ក្រុមហ៊ុន។",
          ],
          deploymentWorkflow: [
            "វាយតម្លៃចំណុចចូល និងផ្គូផ្គងគោលការណ៍សិទ្ធិចូលប្រើ សម្រាប់បុគ្គលិក និងភ្ញៀវ។",
            "រៀបចំផែនការច្រក និងចំណុចត្រួតពិនិត្យ ជាមួយការផ្ទៀងផ្ទាត់លំហូរចលនាដែលអនុវត្តបានពិត។",
            "ដំឡើង រួមបញ្ចូលប្រព័ន្ធ និងធ្វើតេស្តសិទ្ធិចូលប្រើតាមសេណារីយ៉ូ។",
            "ប្រគល់គោលការណ៍ បណ្តុះបណ្តាល admin និងរៀបចំភាពរួចរាល់សេវាគាំទ្រ។",
          ],
          integrationScope: [
            "ជម្រើសរួមបញ្ចូល RFID, biometric និង workflow ភ្ញៀវ។",
            "តក្កសិទ្ធិចូលប្រើតាមតួនាទី សម្រាប់តំបន់ការិយាល័យ និងតំបន់កំណត់សិទ្ធិ។",
            "អាចធ្វើសមកាលកម្មជាមួយប្រព័ន្ធវត្តមាន និងworkflow រដ្ឋបាល តាមតម្រូវការ។",
          ],
          budgetFactors: [
            "ចំនួនចំណុចចូល និងចំនួនតំបន់ត្រូវការគ្រប់គ្រងសិទ្ធិចូលប្រើ។",
            "វិធីសាស្ត្រផ្ទៀងផ្ទាត់អត្តសញ្ញាណដែលចង់បាន និងកម្រិតស្មុគស្មាញគោលការណ៍។",
            "ជម្រៅនៃការរួមបញ្ចូលជាមួយប្រព័ន្ធ និងworkflow ការិយាល័យដែលមានស្រាប់។",
            "កម្រិត SLA សេវាគាំទ្រ និងផែនការពង្រីកសម្រាប់ជាន់ ឬសាខាថ្មី។",
          ],
          faqs: [
            {
              q: "តើដំណោះស្រាយនេះអាចគ្រប់គ្រងទាំងសិទ្ធិចូលប្រើរបស់បុគ្គលិក និងភ្ញៀវបានទេ?",
              a: "បាន។ workflow នេះត្រូវបានរចនាឡើងដើម្បីបែងចែកច្បាស់រវាងសិទ្ធិបុគ្គលិក និងដំណើរការចូលរបស់ភ្ញៀវ។",
            },
            {
              q: "តើយើងអាចចាប់ផ្តើមពីជាន់ការិយាល័យមួយមុនបានទេ?",
              a: "បាន។ អាចចាប់ផ្តើមពីតំបន់មួយមុន ហើយពង្រីកជាដំណាក់កាលដោយរក្សារចនាសម្ព័ន្ធគោលការណ៍ដដែល។",
            },
            {
              q: "តើមានសេវាគាំទ្រក្នុងស្រុកបន្ទាប់ពីប្រគល់ការងារទេ?",
              a: "មាន។ យើងផ្តល់សេវាគាំទ្របច្ចេកទេសក្នុងស្រុក និងជំនួយកែតម្រូវគោលការណ៍បន្ទាប់ពីដាក់ឲ្យប្រើប្រាស់។",
            },
          ],
          internalLinks: [
            { label: "Turnstile Gate", href: "/turnstile-gate" },
            { label: "ផលិតផល Access Control", href: "/solutions/office-access-control-cambodia" },
            { label: "កាតាឡុកផលិតផល Turnstile", href: "/turnstile-gate" },
            { label: "សេវា និងគាំទ្រ", href: "/service" },
            { label: "ទាក់ទងក្រុមគម្រោង", href: "/contact" },
          ],
        }
      : null;

  const educationSmartClassroomKm =
    solution.slug === "education-smart-classroom-cambodia"
      ? {
          title: "ដំណោះស្រាយថ្នាក់រៀនឆ្លាតវៃសម្រាប់អប់រំនៅកម្ពុជា",
          description:
            "ការរៀបចំផែនការ និងដាក់ឲ្យដំណើរការដំណោះស្រាយថ្នាក់រៀនឆ្លាតវៃសម្រាប់វិស័យអប់រំនៅកម្ពុជា សម្រាប់បរិយាកាសបង្រៀន ការបណ្តុះបណ្តាល និងការទំនាក់ទំនងកម្រិតសាលា។",
          heroIntro:
            "រចនាសម្រាប់សាលារៀន វិទ្យាស្ថាន និងមជ្ឈមណ្ឌលបណ្តុះបណ្តាល ដែលត្រូវការការបង្រៀនទំនើប workflow គ្រូបង្រៀនកាន់តែល្អ និងស្តង់ដារដាក់ឲ្យដំណើរការកម្រិតស្ថាប័នដែលអាចពង្រីកបាន។",
          problemContext: [
            "ស្ថាប័នជាច្រើនប្រើបច្ចេកវិទ្យាថ្នាក់រៀនចម្រុះ ដែលបង្កឲ្យបទពិសោធន៍បង្រៀនមិនស្មើគ្នា។",
            "មជ្ឈមណ្ឌលបណ្តុះបណ្តាលត្រូវការស្តង់ដាររៀបចំដែលអាចធ្វើឡើងវិញបាន សម្រាប់បន្ទប់ច្រើន និងក្រុមសិក្សាច្រើន។",
            "ក្រុមអប់រំត្រូវការការបណ្តុះបណ្តាលជាក់ស្តែង ដើម្បីឲ្យគ្រូអាចប្រើប្រព័ន្ធបានដោយទំនុកចិត្ត។",
          ],
          deploymentWorkflow: [
            "វាយតម្លៃថ្នាក់រៀន និងកន្លែងបណ្តុះបណ្តាល សម្រាប់កំណត់ use case ការបង្រៀន។",
            "រៀបចំផែនការដាក់ឲ្យដំណើរការតាមបន្ទប់ និងកំណត់កាលវិភាគអនុវត្ត។",
            "ដំឡើង ធ្វើតេស្តភាពរួចរាល់ថ្នាក់រៀន និងផ្ទៀងផ្ទាត់ការបញ្ជូនមាតិកាបង្រៀន។",
            "បណ្តុះបណ្តាលគ្រូ ប្រគល់ឯកសារ និងផ្ទេរទៅសេវាគាំទ្រប្រតិបត្តិការ។",
          ],
          integrationScope: [
            "រៀបចំ workflow បង្រៀនអន្តរកម្ម សម្រាប់ថ្នាក់រៀន និងការបណ្តុះបណ្តាល។",
            "អាចរួមបញ្ចូលជាមួយប្រព័ន្ធទំនាក់ទំនង និងប្រកាសនៅក្នុងសាលា តាមតម្រូវការ។",
            "សម្របប្រតិបត្តិការ សម្រាប់ការគ្រប់គ្រងកាលវិភាគបន្ទប់ច្រើន និងសេវាគាំទ្រ។",
          ],
          budgetFactors: [
            "ចំនួនថ្នាក់រៀន និងភាពខុសគ្នានៃបរិយាកាសបង្រៀន។",
            "វិសាលភាពដាក់ឲ្យដំណើរការ សម្រាប់ pilot ជាជាន់ ឬដាក់ពេញទាំងស្ថាប័ន។",
            "តម្រូវការបណ្តុះបណ្តាលគ្រូ និងជម្រៅ SOP របស់ស្ថាប័ន។",
            "គំរូសេវាគាំទ្រ សម្រាប់វគ្គសិក្សា និងផែនការពង្រីកបន្ថែម។",
          ],
          faqs: [
            {
              q: "តើដំណោះស្រាយនេះអាចដាក់ឲ្យដំណើរការជាបន្តបន្ទាប់តាមថ្នាក់រៀនបានទេ?",
              a: "បាន។ យើងគាំទ្រការដាក់ឲ្យដំណើរការជាដំណាក់កាល ដើម្បីឲ្យស្ថាប័នអាចសាកល្បង ផ្ទៀងផ្ទាត់ ហើយពង្រីកបន្ត។",
            },
            {
              q: "តើមានការបណ្តុះបណ្តាលគ្រូ និងអ្នកប្រតិបត្តិការទេ?",
              a: "មាន។ ការបណ្តុះបណ្តាលគ្រូ និងការប្រគល់ប្រតិបត្តិការ ត្រូវបានរួមបញ្ចូលក្នុង workflow បិទគម្រោង។",
            },
            {
              q: "តើមានសេវាគាំទ្រក្នុងស្រុកបន្ទាប់ពីដាក់ឲ្យប្រើប្រាស់ទេ?",
              a: "មាន។ យើងផ្តល់សេវាគាំទ្រក្នុងស្រុក ដើម្បីធានាឲ្យប្រព័ន្ធបង្រៀនដំណើរការបានស្ថិរភាពរយៈពេលវែង។",
            },
          ],
          internalLinks: [
            { label: "ទំព័រមេ Interactive Flat Panel", href: "/interactive-flat-panel" },
            { label: "កាតាឡុកផលិតផល Interactive Panel", href: "/interactive-flat-panel" },
            { label: "កាតាឡុក Smart Board", href: "/interactive-flat-panel" },
            { label: "ដំណោះស្រាយ Indoor Communication", href: "/solutions/indoor-communication-solutions-cambodia" },
            { label: "ទាក់ទងក្រុមគម្រោង", href: "/contact" },
          ],
        }
      : null;

  const localizedSolution: IndustrySolution =
    isKm &&
    (indoorCommunicationKm ||
      outdoorCampaignKm ||
      retailDigitalSignageKm ||
      hotelDisplayKm ||
      factoryPaAnnouncementKm ||
      officeAccessControlKm ||
      educationSmartClassroomKm)
      ? {
          ...solution,
          ...(indoorCommunicationKm ||
            outdoorCampaignKm ||
            retailDigitalSignageKm ||
            hotelDisplayKm ||
            factoryPaAnnouncementKm ||
            officeAccessControlKm ||
            educationSmartClassroomKm),
        }
      : solution;

  const ui = isKm
    ? {
        home: "ទំព័រដើម",
        solutions: "ដំណោះស្រាយ",
        industry: "ដំណោះស្រាយតាមវិស័យនៅកម្ពុជា",
        requestQuotation: "ស្នើសុំតម្លៃ",
        backToHub: "ត្រឡប់ទៅទំព័រដំណោះស្រាយ",
        problemContext: "បរិបទបញ្ហា",
        deploymentWorkflow: "ដំណើរការអនុវត្ត",
        step: "ជំហាន",
        integrationScope: "វិសាលភាពរួមបញ្ចូល",
        budgetFactors: "កត្តាថវិកា",
        relatedProducts: "ទំព័រផលិតផលពាក់ព័ន្ធ",
        relatedProductsDesc: "ប្រើតំណទាំងនេះ ដើម្បីមើលព័ត៌មានលម្អិតកម្រិតផលិតផល និងផែនការទិញឱ្យបានត្រឹមត្រូវ។",
        intentCluster: "តំណរុករកតាមគោលបំណងស្វែងរក",
        intentClusterDesc: "សម្រាប់គោលបំណងស្វែងរកនេះ សូមប្រើទំព័រមេដំបូង មុនពេលជ្រើសផលិតផលជាក់លាក់។",
        relatedIndustry: "ទំព័រដំណោះស្រាយវិស័យពាក់ព័ន្ធ",
        relatedIndustryDesc: "ស្វែងរកវិស័យដែលពាក់ព័ន្ធ ដើម្បីបញ្ជូនសំណួរអាជីវកម្មទៅទំព័រត្រឹមត្រូវ។",
        faqFor: "សំណួរញឹកញាប់សម្រាប់",
      }
    : {
        home: "Home",
        solutions: "Solutions",
        industry: "Cambodia Industry Solution",
        requestQuotation: "Request Quotation",
        backToHub: "Back to Solutions Hub",
        problemContext: "Problem Context",
        deploymentWorkflow: "Deployment Workflow",
        step: "Step",
        integrationScope: "Integration Scope",
        budgetFactors: "Budget Factors",
        relatedProducts: "Related Product Pages",
        relatedProductsDesc: "Use these dedicated pages for exact product-level details and procurement planning.",
        intentCluster: "Intent Cluster Navigation",
        intentClusterDesc: "For this query intent, use these primary hub pages before selecting exact products.",
        relatedIndustry: "Related Industry Solution Pages",
        relatedIndustryDesc: "Explore nearby industry intents to route broader business queries to the right page.",
        faqFor: "FAQ for",
      };

  const pageUrl = `${SITE_URL}/solutions/${solution.slug}`;
  const currentPath = `/solutions/${solution.slug}`;

  const solutionClusters: Record<string, "display" | "audio" | "security" | "education"> = {
    "indoor-communication-solutions-cambodia": "display",
    "outdoor-campaign-solutions-cambodia": "display",
    "retail-digital-signage-cambodia": "display",
    "hotel-display-solutions-cambodia": "display",
    "factory-pa-announcement-cambodia": "audio",
    "office-access-control-cambodia": "security",
    "education-smart-classroom-cambodia": "education",
  };

  const clusterAnchors: Record<
    "display" | "audio" | "security" | "education",
    { label: string; href: string }[]
  > = {
    display: [
      { label: "LED Display Hub", href: "/led-display" },
      { label: "Indoor LED Display", href: "/led-display/indoor-led-display" },
      { label: "Outdoor LED Display", href: "/led-display/outdoor-led-display" },
    ],
    audio: [
      { label: "PA System Hub", href: "/pa-system" },
      { label: "PA Product Catalog", href: "/pa-system" },
      { label: "IP Paging Microphones", href: "/pa-system" },
    ],
    security: [
      { label: "Turnstile Gate Hub", href: "/turnstile-gate" },
      { label: "Access Control Catalog", href: "/solutions/office-access-control-cambodia" },
      { label: "Turnstile Catalog", href: "/turnstile-gate" },
    ],
    education: [
      { label: "Interactive Flat Panel Hub", href: "/interactive-flat-panel" },
      { label: "Interactive Panel Catalog", href: "/interactive-flat-panel" },
      { label: "Smart Board Catalog", href: "/interactive-flat-panel" },
    ],
  };

  const clusterAnchorsKm: Record<
    "display" | "audio" | "security" | "education",
    { label: string; href: string }[]
  > = {
    display: [
      { label: "ទំព័រមេ LED Display", href: "/led-display" },
      { label: "អេក្រង់ LED ក្នុងអគារ", href: "/led-display/indoor-led-display" },
      { label: "អេក្រង់ LED ខាងក្រៅ", href: "/led-display/outdoor-led-display" },
    ],
    audio: [
      { label: "ទំព័រមេ PA System", href: "/pa-system" },
      { label: "កាតាឡុកផលិតផល PA", href: "/pa-system" },
      { label: "មីក្រូហ្វូន IP Paging", href: "/pa-system" },
    ],
    security: [
      { label: "ទំព័រមេ Turnstile Gate", href: "/turnstile-gate" },
      { label: "កាតាឡុក Access Control", href: "/solutions/office-access-control-cambodia" },
      { label: "កាតាឡុក Turnstile", href: "/turnstile-gate" },
    ],
    education: [
      { label: "ទំព័រមេ Interactive Flat Panel", href: "/interactive-flat-panel" },
      { label: "កាតាឡុក Interactive Panel", href: "/interactive-flat-panel" },
      { label: "កាតាឡុក Smart Board", href: "/interactive-flat-panel" },
    ],
  };

  const currentCluster = solutionClusters[solution.slug];
  const relatedSolutions = INDUSTRY_SOLUTIONS.filter(
    (item) => item.slug !== solution.slug && solutionClusters[item.slug] === currentCluster
  );
  const supplementalSolutions = INDUSTRY_SOLUTIONS.filter((item) => item.slug !== solution.slug).slice(
    0,
    3
  );
  const crossIntentLinks = (isKm ? clusterAnchorsKm : clusterAnchors)[currentCluster] ?? [];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
      { "@type": "ListItem", position: 3, name: solution.title, item: pageUrl },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: solution.title,
    serviceType: "Business Technology Solution",
    provider: {
      "@id": `${SITE_URL}#organization`,
    },
    areaServed: { "@type": "Country", name: "Cambodia" },
    url: pageUrl,
    description: solution.description,
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <li>
                <Link href={toLangHref("/")} className="hover:text-slate-700">
                  {ui.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={toLangHref("/solutions")} className="hover:text-slate-700">
                  {ui.solutions}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-slate-700">{localizedSolution.title}</li>
            </ol>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {ui.industry}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {localizedSolution.title}
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {localizedSolution.heroIntro}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={toLangHref("/contact")}
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {ui.requestQuotation}
            </Link>
            <Link
              href={toLangHref("/solutions")}
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
            >
              {ui.backToHub}
            </Link>
            <Link
              href={toLangHref("/led-display")}
              className="rounded-xl border border-sky-300 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-900 transition hover:border-sky-400 hover:bg-sky-100"
            >
              {isKm ? "មើល LED Display Cambodia Hub" : "Open LED Display Cambodia Hub"}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{ui.problemContext}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localizedSolution.problemContext.map((item) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm leading-relaxed text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{ui.deploymentWorkflow}</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {localizedSolution.deploymentWorkflow.map((item, idx) => (
              <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{ui.step} {idx + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">{ui.integrationScope}</h2>
              <ul className="mt-4 space-y-3">
                {localizedSolution.integrationScope.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">{ui.budgetFactors}</h2>
              <ul className="mt-4 space-y-3">
                {localizedSolution.budgetFactors.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{ui.relatedProducts}</h2>
          <p className="mt-2 text-sm text-slate-600">
            {ui.relatedProductsDesc}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {localizedSolution.internalLinks.map((item, idx) => (
              <Link
                key={item.href}
                href={toLangHref(item.href)}
                className={[
                  "rounded-full border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5",
                  idx % 2 === 0
                    ? "border-cyan-200 bg-cyan-50 text-cyan-900 hover:border-cyan-300 hover:bg-cyan-100"
                    : "border-indigo-200 bg-indigo-50 text-indigo-900 hover:border-indigo-300 hover:bg-indigo-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {ui.intentCluster}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {ui.intentClusterDesc}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {crossIntentLinks.map((item) => (
              <Link
                key={item.href}
                href={toLangHref(item.href)}
                className="rounded-full border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-900 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {ui.relatedIndustry}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {ui.relatedIndustryDesc}
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {(relatedSolutions.length > 0 ? relatedSolutions : supplementalSolutions).map((item) => (
              <Link
                key={item.slug}
                href={toLangHref(`/solutions/${item.slug}`)}
                className={`rounded-2xl border p-4 shadow-sm transition hover:-translate-y-0.5 ${
                  `/solutions/${item.slug}` === currentPath
                    ? "border-slate-300 bg-slate-100"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {ui.faqFor} {localizedSolution.title}
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {localizedSolution.faqs.map((item) => (
              <details key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

