import type { BlogPost, BlogCategory, BlogSection, BlogFAQ } from "./posts";
import { BLOG_POSTS } from "./posts";

export const BLOG_CATEGORY_LABELS_KM: Record<BlogCategory, string> = {
  guides: "មគ្គុទេសក៍",
  pricing: "តម្លៃ",
  installation: "ការដំឡើង",
  "indoor-led": "Indoor LED",
  "outdoor-led": "Outdoor LED",
  "video-wall": "Video Wall",
  "digital-signage": "Digital Signage",
  "phnom-penh": "ភ្នំពេញ",
  maintenance: "ការថែទាំ",
  comparisons: "ការប្រៀបធៀប",
};

const KM_TITLES: Record<string, string> = {
  "led-display-cambodia-guide": "LED Display នៅកម្ពុជា: មគ្គុទេសក៍ទិញពេញលេញ",
  "led-display-price-cambodia": "តម្លៃ LED Display នៅកម្ពុជា: អ្វីខ្លះប៉ះពាល់ដល់ថ្លៃក្នុងឆ្នាំ 2026",
  "indoor-vs-outdoor-led-display": "Indoor vs Outdoor LED Display: តើមួយណាសមស្របសម្រាប់គម្រោងរបស់អ្នក?",
  "pixel-pitch-led-display-guide": "របៀបជ្រើសរើស Pixel Pitch ដែលត្រឹមត្រូវសម្រាប់ LED Display",
  "led-screen-installation-phnom-penh": "ការដំឡើង LED Screen នៅភ្នំពេញ: ដំណើរការ ពេលវេលា និង Checklist",
  "digital-signage-cambodia": "ដំណោះស្រាយ Digital Signage នៅកម្ពុជា សម្រាប់ Retail, Office និង Hospitality",
  "outdoor-led-billboard-cambodia": "Outdoor LED Billboard នៅកម្ពុជា: ការប្រើប្រាស់ល្អបំផុតសម្រាប់ផ្សព្វផ្សាយ",
  "led-display-vs-lcd-vs-oled": "LED Display vs LCD vs OLED: មួយណាសមស្របជាងសម្រាប់អាជីវកម្ម?",
  "led-display-maintenance-cambodia": "មគ្គុទេសក៍ថែទាំ LED Display សម្រាប់អាកាសធាតុកម្ពុជា",
  "led-display-power-consumption-guide": "មគ្គុទេសក៍ការប្រើប្រាស់ថាមពល LED Display សម្រាប់ផែនការអាជីវកម្ម",
  "led-video-wall-conference-room": "LED Video Wall សម្រាប់បន្ទប់ប្រជុំ: មគ្គុទេសក៍ដំឡើងល្អបំផុត",
  "led-display-for-retail-stores-cambodia": "LED Display សម្រាប់ហាងលក់រាយនៅកម្ពុជា: អត្ថប្រយោជន៍ ទំហំ និងទីតាំង",
};

const KM_EXCERPTS: Record<string, string> = {
  "led-display-cambodia-guide": "មគ្គុទេសក៍ជាក់ស្តែងសម្រាប់ជ្រើសរើស និងអនុវត្តគម្រោង LED Display នៅកម្ពុជា។",
  "led-display-price-cambodia": "ស្វែងយល់ពីតម្លៃ LED Display នៅកម្ពុជា ដោយផ្តោតលើ BOQ, quotation និងកត្តាចំណាយសំខាន់ៗ។",
  "indoor-vs-outdoor-led-display": "ប្រៀបធៀប Indoor និង Outdoor LED ដោយផ្អែកលើលក្ខខណ្ឌអនុវត្តជាក់ស្តែង។",
  "pixel-pitch-led-display-guide": "ជ្រើស Pixel Pitch ដោយផ្អែកលើចម្ងាយមើល ប្រភេទមាតិកា និងថវិកា។",
  "led-screen-installation-phnom-penh": "មគ្គុទេសក៍ដំឡើង LED Screen នៅភ្នំពេញជាចំណុចជាក់ស្តែង។",
  "digital-signage-cambodia": "របៀបរៀបចំ Digital Signage ឱ្យមានប្រសិទ្ធភាពសម្រាប់អាជីវកម្មនៅកម្ពុជា។",
  "outdoor-led-billboard-cambodia": "យល់អំពីយុទ្ធសាស្ត្រ និងការអនុវត្ត Billboard ខាងក្រៅនៅកម្ពុជា។",
  "led-display-vs-lcd-vs-oled": "ការប្រៀបធៀបបច្ចេកវិទ្យាអេក្រង់សម្រាប់តម្រូវការអាជីវកម្ម។",
  "led-display-maintenance-cambodia": "សិក្សាពីការថែទាំប្រកបដោយផែនការដើម្បីរក្សា uptime ខ្ពស់។",
  "led-display-power-consumption-guide": "គណនាថាមពលប្រើប្រាស់ និងគ្រប់គ្រងថ្លៃដំណើរការឱ្យមានប្រសិទ្ធភាព។",
  "led-video-wall-conference-room": "រៀបចំ Video Wall បន្ទប់ប្រជុំឱ្យអានច្បាស់ និងប្រើប្រាស់ងាយស្រួល។",
  "led-display-for-retail-stores-cambodia": "រៀបចំ LED Display សម្រាប់ Retail ដើម្បីបង្កើនការចាប់អារម្មណ៍ និងលក់។",
};

const KM_DESCRIPTIONS: Record<string, string> = {
  "led-display-cambodia-guide":
    "មគ្គុទេសក៍ជ្រើសរើស LED Display នៅកម្ពុជា ដោយផ្តោតលើបច្ចេកទេស ថវិកា និងការអនុវត្តជាក់ស្តែង។",
  "led-display-price-cambodia":
    "ពន្យល់តម្លៃ LED Display នៅកម្ពុជា ដោយបំបែកកត្តាចំណាយសំខាន់ៗក្នុង BOQ និង quotation: pixel pitch, indoor vs outdoor specs, installation scope, commissioning និងសេវាកម្មក្រោយលក់។",
  "indoor-vs-outdoor-led-display":
    "ប្រៀបធៀប Indoor និង Outdoor LED Display តាមបរិយាកាស កម្រិតពន្លឺ និងថ្លៃដំណើរការ។",
  "pixel-pitch-led-display-guide":
    "រៀនជ្រើស Pixel Pitch តាមចម្ងាយមើល និងប្រភេទមាតិកា ដើម្បីជួយសម្រេចចិត្តបានត្រឹមត្រូវ។",
  "led-screen-installation-phnom-penh":
    "មគ្គុទេសក៍ដំណើរការដំឡើង LED Screen នៅភ្នំពេញ ចាប់ពីស្ទង់ទីតាំងដល់ការប្រគល់ប្រើប្រាស់។",
  "digital-signage-cambodia":
    "ដំណោះស្រាយ Digital Signage សម្រាប់ Retail, Office និង Hospitality នៅកម្ពុជា ជាមួយផែនការអនុវត្ត។",
  "outdoor-led-billboard-cambodia":
    "មគ្គុទេសក៍ Outdoor LED Billboard នៅកម្ពុជា សម្រាប់ visibility ខ្ពស់ និងការគ្រប់គ្រងប្រតិបត្តិការល្អ។",
  "led-display-vs-lcd-vs-oled":
    "ប្រៀបធៀប LED, LCD និង OLED សម្រាប់ករណីប្រើប្រាស់អាជីវកម្ម ដោយផ្អែកលើបរិយាកាស និង ROI។",
  "led-display-maintenance-cambodia":
    "គន្លឹះថែទាំ LED Display សម្រាប់លក្ខខណ្ឌអាកាសធាតុកម្ពុជា ដើម្បីកាត់បន្ថយ downtime។",
  "led-display-power-consumption-guide":
    "មគ្គុទេសក៍គណនាការប្រើប្រាស់ថាមពល LED Display និងវិធីកាត់បន្ថយចំណាយប្រតិបត្តិការ។",
  "led-video-wall-conference-room":
    "របៀបរៀបចំ LED Video Wall សម្រាប់បន្ទប់ប្រជុំ ដើម្បីបានភាពច្បាស់ និងការគ្រប់គ្រងងាយស្រួល។",
  "led-display-for-retail-stores-cambodia":
    "មគ្គុទេសក៍ LED Display សម្រាប់ហាងលក់រាយនៅកម្ពុជា ដោយផ្តោតលើ placement និងការបំលែងលក់។",
};

function kmSections(title: string): BlogSection[] {
  return [
    {
      heading: "សេចក្តីផ្តើម",
      content:
        `${title} គឺជាប្រធានបទសំខាន់សម្រាប់ក្រុមហ៊ុនដែលចង់អភិវឌ្ឍការផ្សព្វផ្សាយ និងទំនាក់ទំនងអតិថិជន។ ការសម្រេចចិត្តត្រឹមត្រូវមិនមែនស្ថិតលើតម្លៃប៉ុណ្ណោះទេ ប៉ុន្តែស្ថិតលើការធ្វើផែនការបច្ចេកទេស និងការគ្រប់គ្រងប្រតិបត្តិការរយៈពេលវែងផងដែរ។\n\nអត្ថបទនេះរៀបចំឡើងសម្រាប់អ្នកសម្រេចចិត្តអាជីវកម្ម ដើម្បីជួយឱ្យការស្រាវជ្រាវទៅកាន់ការអនុវត្តមានភាពច្បាស់។`,
    },
    {
      heading: "ចម្លើយខ្លី",
      content:
        "ជំហានល្អបំផុតគឺកំណត់តម្រូវការជាក់ស្តែងមុនស្នើសុំ quotation: ទំហំអេក្រង់ ចម្ងាយមើល កម្រិតពន្លឺ បរិយាកាសដំឡើង និងម៉ោងដំណើរការ។\n\nពេលមាន baseline ច្បាស់ ការប្រៀបធៀបអ្នកផ្គត់ផ្គង់នឹងមានភាពត្រឹមត្រូវ និងកាត់បន្ថយការកែប្រែថ្លៃនៅពេលក្រោយ។",
    },
    {
      heading: "ហេតុអ្វីវាសំខាន់នៅកម្ពុជា",
      content:
        "បរិយាកាសកម្ពុជា មានកម្តៅ សំណើម ធូលី និងចរាចរណ៍ខ្លាំង ដែលប៉ះពាល់ដល់ការអានឃើញ និងអាយុកាលប្រព័ន្ធ។ ដូច្នេះការរចនាត្រូវផ្អែកលើទីតាំងពិត មិនមែនផ្អែកលើ catalog ប៉ុណ្ណោះទេ។\n\nគម្រោងនៅភ្នំពេញ សៀមរាប និងព្រះសីហនុ អាចមានលក្ខខណ្ឌខុសគ្នា ដូច្នេះការស្ទង់ទីតាំងមុនទិញគឺជាជំហានចាំបាច់។",
    },
    {
      heading: "ការពន្យល់ស្នូល",
      content:
        "ដំណើរការដែលមានប្រសិទ្ធភាពរួមមាន: discovery, technical scope, procurement alignment, installation, commissioning និង support handover។\n\nរចនាសម្ព័ន្ធនេះជួយឱ្យក្រុមគ្រប់គ្រង ក្រុមទិញ និងក្រុមបច្ចេកទេសធ្វើការលើ assumptions ដូចគ្នា។",
      subSections: [
        {
          heading: "ការសម្រេចចិត្តបច្ចេកទេស",
          content:
            "គួរប្រើចម្ងាយមើល ប្រភេទមាតិកា និងបរិយាកាសដំឡើងជាគោល។ អ្នកអាចពិនិត្យ [LED Display in Cambodia](/led-display/) និងប្រៀបធៀប [indoor LED display solutions](/led-display/indoor-led-display/) ជាមួយ [outdoor LED billboard solutions](/led-display/outdoor-led-display/) ដើម្បីជ្រើសជម្រើសត្រឹមត្រូវ។",
        },
        {
          heading: "ការគ្រប់គ្រងអនុវត្ត និងប្រតិបត្តិការ",
          content:
            "ក្រោយដំឡើង ត្រូវមាន commissioning checklist, training និង fault escalation path។ ការត្រៀមនេះជួយកាត់បន្ថយ downtime និងធានាថាក្រុមការងារប្រើប្រាស់ប្រព័ន្ធបានមានប្រសិទ្ធភាព។",
        },
      ],
    },
    {
      heading: "កត្តាទិញ និងថ្លៃដើម",
      content:
        "គួរវាយតម្លៃលើ total project scope មិនមែនតម្លៃ panel ប៉ុណ្ណោះ។\n\nChecklist សំខាន់:\n\n- បញ្ជាក់របាយការណ៍ស្ទង់ទីតាំង\n- ពិនិត្យ BOQ និង excluded items\n- បញ្ជាក់ commissioning និង training scope\n- កំណត់ SLA និងផែនការថែទាំ\n- កំណត់អ្នកទទួលខុសត្រូវប្រតិបត្តិការ",
    },
    {
      heading: "កំហុសដែលជួបញឹកញាប់",
      content:
        "កំហុសទូទៅគឺជ្រើសរើសឧបករណ៍មុនពេលមាន requirement ច្បាស់ និងប្រៀបធៀប quotation ដែល scope មិនស្មើគ្នា។\n\nកំហុសផ្សេងទៀតរួមមាន ការមិនមាន content owner និងមិនមាន support escalation ដែលនាំឱ្យ downtime កើន។",
    },
    {
      heading: "Use Cases ដែលណែនាំ",
      content:
        "ប្រធានបទនេះសមស្របសម្រាប់ corporate lobby, retail store, conference room, control room, hospitality venue និង outdoor advertising។\n\nគោលការណ៍សំខាន់គឺ កំណត់ KPI ច្បាស់ និងវាស់លទ្ធផលជាប្រចាំ។",
    },
    {
      heading: "ហេតុអ្វីអាជីវកម្មជ្រើសរើស Mugnee Cambodia",
      content:
        "Mugnee ផ្តល់ការគាំទ្រចាប់ពី consultation, site survey, product matching, installation, commissioning ដល់ after-sales support។\n\nប្រសិនបើអ្នកចង់ចាប់ផ្តើមគម្រោង អាច [request a quotation](/contact/) ឬពិនិត្យ [service and support in Cambodia](/service/)។",
    },
    {
      heading: "សេចក្តីសន្និដ្ឋាន",
      content:
        "សម្រេចចិត្តល្អត្រូវផ្អែកលើ scope clarity + local context + operational readiness។\n\nLooking for LED Display solutions in Cambodia? Explore Mugnee's LED Display page: https://mugneekh.com/led-display/",
    },
  ];
}

function kmFaq(title: string): BlogFAQ[] {
  return [
    { q: `តើជំហានដំបូងមុនចាប់ផ្តើម ${title} គឺអ្វី?`, a: "ត្រូវស្ទង់ទីតាំង និងកំណត់ requirement ជាក់ស្តែងជាមុន។" },
    { q: "តើគួរប្រៀបធៀបតែតម្លៃមែនទេ?", a: "មិនគួរទេ។ ត្រូវប្រៀបធៀប scope, installation, commissioning និង support SLA ផងដែរ។" },
    { q: "តើការថែទាំមានសារៈសំខាន់ប៉ុណ្ណា?", a: "សំខាន់ណាស់ ព្រោះ preventive maintenance ជួយរក្សា uptime និងកាត់បន្ថយចំណាយកើតហេតុ។" },
    { q: "តើ Mugnee អាចគាំទ្រក្រៅភ្នំពេញទេ?", a: "បាទ/ចាស អាចគាំទ្រភ្នំពេញ សៀមរាប និងព្រះសីហនុ។" },
    { q: "តើអត្ថបទប្លក់អាចជួយ conversion បានយ៉ាងដូចម្តេច?", a: "ដោយផ្តល់ចម្លើយលម្អិត និងភ្ជាប់ internal links ទៅទំព័រដំណោះស្រាយ/សេវាកម្ម/ទំនាក់ទំនង។" },
  ];
}

const KM_SECTION_OVERRIDES: Record<string, BlogSection[]> = {
  "indoor-vs-outdoor-led-display": [
    {
      heading: "សេចក្តីផ្តើម",
      content:
        "ការជ្រើសរើស Indoor ឬ Outdoor LED Display មិនមែនគ្រាន់តែជារឿងទំហំអេក្រង់ទេ។ នៅកម្ពុជា វាពាក់ព័ន្ធជាមួយពន្លឺថ្ងៃ កម្តៅ ភ្លៀង ធូលី ចម្ងាយមើល និងគោលបំណងប្រើប្រាស់ជាក់ស្តែង។\n\nបើជ្រើសខុស ប្រព័ន្ធអាចអានមិនច្បាស់ ចំណាយថាមពលខ្ពស់ ឬថ្លៃថែទាំកើនឡើង។ ដូច្នេះការប្រៀបធៀបត្រូវធ្វើតាមបរិបទគម្រោង មិនមែនមើលតាម catalog ប៉ុណ្ណោះទេ។",
    },
    {
      heading: "ចម្លើយខ្លី",
      content:
        "Indoor LED សមស្របសម្រាប់កន្លែងបិទជិត ដូចជា showroom, boardroom, retail interior និង conference room ដែលត្រូវការភាពច្បាស់ពីចម្ងាយជិត។ Outdoor LED សមស្របសម្រាប់ facade, roadside billboard, storefront និងទីតាំងដែលប៉ះពាល់ដោយពន្លឺថ្ងៃ និងអាកាសធាតុខាងក្រៅ។\n\nបើអ្នកមិនប្រាកដថាគម្រោងរបស់អ្នកស្ថិតក្នុងក្រុមណា ត្រូវវាស់ចម្ងាយមើល ស្ថានភាពពន្លឺ និងម៉ោងដំណើរការជាមុន។",
    },
    {
      heading: "បរិយាកាសនៅកម្ពុជាដែលប៉ះពាល់ការជ្រើសរើស",
      content:
        "ទីតាំងក្នុងភ្នំពេញ សៀមរាប ឬតំបន់បើកចំហខាងក្រៅ អាចមានពន្លឺថ្ងៃខ្លាំង កម្តៅខ្ពស់ និងធូលីច្រើន។ Outdoor LED ត្រូវការកម្រិតពន្លឺខ្ពស់ ការការពារទឹក និងរចនាសម្ព័ន្ធដែលធន់ជាង Indoor LED។\n\nផ្ទុយទៅវិញ Indoor LED អាចប្រើ pixel pitch ល្អជាង ដើម្បីបង្ហាញអក្សរ ក្រាហ្វិក និងមាតិកាលម្អិតឱ្យបានច្បាស់នៅចម្ងាយជិត ដោយមិនចំណាយថាមពលលើសតម្រូវការ។",
    },
    {
      heading: "តើគួរវាយតម្លៃតាមអ្វីខ្លះ",
      content:
        "មានចំណុចសំខាន់ 5 យ៉ាងដែលត្រូវវាយតម្លៃមុនសម្រេចចិត្ត:\n\n- ចម្ងាយមើលជាក់ស្តែង\n- បរិយាកាសពន្លឺ និងពន្លឺថ្ងៃផ្ទាល់\n- គោលបំណងមាតិកា: branding, promotion, menu, dashboard ឬ video\n- ម៉ោងប្រើប្រាស់ប្រចាំថ្ងៃ\n- សមត្ថភាពថែទាំ និងចូលដំណើរការជួសជុល\n\nបើគម្រោងចង់ប្រើសម្រាប់ក្នុងអគារ អ្នកអាចមើល [indoor LED display solutions](/led-display/indoor-led-display/)។ បើជាគម្រោងខាងក្រៅ អ្នកគួរប្រៀបធៀបជាមួយ [outdoor LED billboard solutions](/led-display/outdoor-led-display/)។",
    },
    {
      heading: "Indoor LED សមស្របពេលណា",
      content:
        "Indoor LED ល្អសម្រាប់កន្លែងដែលអ្នកមើលនៅចម្ងាយជិត និងត្រូវការភាពច្បាស់ខ្ពស់ ដូចជា meeting room, showroom, shopping mall interior, control room និង school auditorium។\n\nក្នុងករណីទាំងនេះ ការជ្រើស pixel pitch ល្អជាង និង brightness សមរម្យ នឹងផ្តល់បទពិសោធន៍មើលល្អជាងការជ្រើសម៉ូឌុល outdoor ដែលភ្លឺខ្លាំងពេក និងមិនសន្សំថាមពល។",
    },
    {
      heading: "Outdoor LED សមស្របពេលណា",
      content:
        "Outdoor LED ត្រូវបានរចនាសម្រាប់បរិយាកាសបើកចំហ ដូចជា building facade, roadside billboard, shop frontage និង public information screen។ វាត្រូវការការពារទឹក ការគ្រប់គ្រងកម្តៅ និងភាពភ្លឺគ្រប់គ្រាន់ដើម្បីឱ្យអានបាននៅពេលថ្ងៃ។\n\nបើគម្រោងរបស់អ្នកប៉ះពាល់ដោយភ្លៀង ធូលី ឬពន្លឺថ្ងៃផ្ទាល់ ការប្រើ Indoor LED ជាទូទៅនឹងធ្វើឱ្យអាយុកាលប្រព័ន្ធខ្លី និងថ្លៃថែទាំកើនឡើង។",
    },
    {
      heading: "កំហុសដែលជួបញឹកញាប់",
      content:
        "កំហុសធម្មតាគឺយកតម្លៃជាចំណុចសម្រេចចិត្តតែមួយ ហើយមិនវាយតម្លៃបរិយាកាសពិត។ កំហុសផ្សេងទៀតរួមមាន ការជ្រើស brightness មិនត្រូវ ការមិនរៀបចំ structure និង electrical protection ឱ្យសមស្រប និងការមិនកំណត់អ្នកថែទាំប្រចាំ។\n\nវិធីកាត់បន្ថយហានិភ័យគឺធ្វើ site survey មុនស្នើ quotation និងស្នើឱ្យអ្នកផ្គត់ផ្គង់បង្ហាញ BOQ, installation scope និង commissioning plan ឱ្យច្បាស់។",
    },
    {
      heading: "ជំហានបន្ទាប់សម្រាប់ការសម្រេចចិត្ត",
      content:
        "ចាប់ផ្តើមពីការកំណត់ទីតាំង ប្រភេទមាតិកា និង KPI របស់គម្រោង។ បន្ទាប់មកប្រៀបធៀបជម្រើសលើ [LED Display in Cambodia](/led-display/) និងភ្ជាប់ជាមួយ [service and support in Cambodia](/service/) ដើម្បីដឹងថាអ្នកនឹងគ្រប់គ្រងប្រព័ន្ធបែបណាបន្ទាប់ពីដំឡើង។\n\nបើអ្នកចង់បានការណែនាំតាមទីតាំងពិត អ្នកអាច [request a quotation](/contact/) ដើម្បីទទួលបានសំណើដែលសមនឹងគម្រោងរបស់អ្នក។",
    },
  ],
  "led-display-for-retail-stores-cambodia": [
    {
      heading: "សេចក្តីផ្តើម",
      content:
        "LED Display សម្រាប់ហាងលក់រាយមានប្រសិទ្ធភាពបំផុត នៅពេលការដាក់តាំងអេក្រង់ស្របតាម shopper journey។ បើដាក់ត្រឹមតែទីតាំងទំនេរ តែមិនគិតពីទិសមើល លំហូរអតិថិជន និងប្រភេទមាតិកា អេក្រង់អាចមិនជួយបង្កើនការចាប់អារម្មណ៍ ឬការលក់បានឡើយ។\n\nសម្រាប់ហាងនៅកម្ពុជា កត្តាដូចជា storefront visibility, ពន្លឺថ្ងៃ, ភាសាខ្មែរ-អង់គ្លេស និងល្បឿនចរាចរណ៍របស់អតិថិជន សុទ្ធតែប៉ះពាល់លទ្ធផលរបស់អេក្រង់។",
    },
    {
      heading: "ចម្លើយខ្លី",
      content:
        "ហាងលក់រាយគួរជ្រើសអេក្រង់តាមតំបន់ប្រើប្រាស់ មិនមែនជ្រើសមួយទំហំសម្រាប់គ្រប់កន្លែងទេ។ តំបន់មុខហាងត្រូវការភាពទាក់ទាញពីចម្ងាយ ខណៈតំបន់ក្នុងហាងត្រូវការភាពច្បាស់សម្រាប់ price, promotion និង product storytelling។\n\nការកំណត់ placement, size និង content cadence ត្រឹមត្រូវ ជាអ្វីដែលធ្វើឱ្យ retail LED មាន ROI មិនមែនត្រឹមតែទំហំអេក្រង់ធំប៉ុណ្ណោះទេ។",
    },
    {
      heading: "ទីតាំងដាក់អេក្រង់ដែលមានប្រសិទ្ធភាព",
      content:
        "Retail LED ជាទូទៅអនុវត្តបានល្អនៅ 4 តំបន់សំខាន់:\n\n- មុខហាង ឬ window-facing zone សម្រាប់ទាញអតិថិជនចូល\n- Promotion island សម្រាប់ campaign ឬ new arrival\n- Checkout queue សម្រាប់ upsell និង reminder offer\n- Brand wall ក្នុងហាង សម្រាប់ storytelling និង social proof\n\nតំបន់នីមួយៗត្រូវការមាតិកា និង tempo ខុសគ្នា។ អ្វីដែលដំណើរការល្អនៅ storefront មិនមែនជាជម្រើសល្អសម្រាប់ក្នុងហាងជានិច្ចទេ។",
    },
    {
      heading: "របៀបជ្រើសទំហំ និងភាពច្បាស់",
      content:
        "ទំហំអេក្រង់ត្រូវសមនឹងចម្ងាយមើល និងកម្រិតព័ត៌មានដែលចង់បង្ហាញ។ បើអតិថិជនឈរជិត អ្នកត្រូវការភាពច្បាស់ល្អជាងសម្រាប់អក្សរ តម្លៃ និង promotion details។ បើអេក្រង់សម្រាប់មុខហាងពីចម្ងាយ អ្នកអាចផ្តោតលើ visual impact និង motion clarity ជាង detail ឆ្មាំៗ។\n\nសម្រាប់ planning បន្ថែម អ្នកអាចមើល [indoor LED display solutions](/led-display/indoor-led-display/) និងប្រៀបធៀបជាមួយ [LED Display in Cambodia](/led-display/) ដើម្បីកំណត់ specification សមរម្យ។",
    },
    {
      heading: "មាតិកាដែលសមនឹង retail environment",
      content:
        "Retail content គួរតែខ្លី ច្បាស់ និងមើលចាប់បានភ្លាម។ Promotion headline, product benefit 1-2 ចំណុច, price cue, limited-time offer និង directional cue ជាមាតិកាដែលអាចដំណើរការល្អក្នុងហាង។\n\nបើដាក់អត្ថបទវែងពេក ឬ slide មួយមានព័ត៌មានច្រើនពេក អតិថិជនភាគច្រើននឹងមើលមិនទាន់។ Retail LED គួរបម្រើការសម្រេចចិត្តរហ័ស មិនមែនធ្វើជាបណ្ណាល័យព័ត៌មានទេ។",
    },
    {
      heading: "កំហុសដែលហាងជួបញឹកញាប់",
      content:
        "កំហុសដែលជួបញឹកញាប់រួមមាន ដាក់អេក្រង់ខ្ពស់ពេក សរសេរអក្សរច្រើនពេក មិនធ្វើ content refresh តាម campaign calendar និងមិនមានអ្នកទទួលខុសត្រូវលើ playback issue។\n\nហាងជាច្រើនក៏ភ្លេចរៀបចំ fallback content សម្រាប់ពេល stock change ឬ urgent promotion ដែលធ្វើឱ្យអេក្រង់បន្តបង្ហាញមាតិកាចាស់ ហើយបាត់បង់ឱកាសលក់។",
    },
    {
      heading: "របៀបវាស់លទ្ធផល",
      content:
        "Retail LED គួរត្រូវបានវាស់លទ្ធផលតាម zone-based KPI ដូចជា footfall capture, promotion response, dwell-time uplift, queue upsell និង campaign refresh discipline។\n\nបើអេក្រង់មិនភ្ជាប់ជាមួយ KPI របស់ហាង វានឹងក្លាយជាអេក្រង់តុបតែង មិនមែន channel ផ្នែកលក់។ ដូច្នេះត្រូវកំណត់ objective មុនដំឡើង និង review ជាប្រចាំបន្ទាប់ពី launch។",
    },
    {
      heading: "ជំហានបន្ទាប់សម្រាប់ម្ចាស់ហាង",
      content:
        "ចាប់ផ្តើមពីការគូស shopper path របស់ហាង: អតិថិជនមើលឃើញទីណាមុន ឈប់នៅទីណា និងសម្រេចទិញនៅតំបន់ណា។ បន្ទាប់មកកំណត់អេក្រង់តាម zone, content type និង refresh cadence។\n\nបើអ្នកចង់បាន guidance លើ size, placement និង installation plan អ្នកអាចមើល [service and support in Cambodia](/service/) ឬ [request a quotation](/contact/) ដើម្បីទទួលបានសំណើសមរម្យសម្រាប់ retail project របស់អ្នក។",
    },
  ],
};

const KM_FAQ_OVERRIDES: Record<string, BlogFAQ[]> = {
  "indoor-vs-outdoor-led-display": [
    { q: "តើចំណុចសំខាន់បំផុតក្នុងការជ្រើស Indoor ឬ Outdoor LED គឺអ្វី?", a: "ត្រូវចាប់ផ្តើមពីបរិយាកាសពិត ចម្ងាយមើល និងគោលបំណងមាតិកា មិនមែនពីតម្លៃតែប៉ុណ្ណោះទេ។" },
    { q: "តើអាចយក Indoor LED ទៅប្រើខាងក្រៅបានទេ?", a: "ជាទូទៅមិនគួរទេ ព្រោះវាមិនបានរចនាសម្រាប់ពន្លឺថ្ងៃ ភ្លៀង ធូលី និងកម្តៅខ្លាំងដូច Outdoor LED ទេ។" },
    { q: "តើ Outdoor LED តែងតែប្រសើរជាង Indoor LED មែនទេ?", a: "មិនមែនទេ។ សម្រាប់កន្លែងក្នុងអគារ និងការមើលជិត Indoor LED ជាជម្រើសល្អជាង ព្រោះវាផ្តល់ភាពច្បាស់ និងសន្សំថាមពលសមរម្យជាង។" },
    { q: "តើត្រូវធ្វើ site survey មុនស្នើ quotation ដែរឬទេ?", a: "បាទ/ចាស។ Site survey ជួយកំណត់ពន្លឺ បរិយាកាសដំឡើង structure access និង requirement ពិតរបស់គម្រោង។" },
    { q: "តើ Mugnee អាចជួយប្រៀបធៀប specification តាមទីតាំងបានទេ?", a: "បាន។ ក្រុមការងារ Mugnee អាចជួយវាយតម្លៃ location, content use case និងផែនការដំឡើង ដើម្បីណែនាំជម្រើសដែលត្រឹមត្រូវជាងមុន។" },
  ],
  "led-display-for-retail-stores-cambodia": [
    { q: "តើទីតាំងណាដែលគួរដាក់ retail LED មុនគេ?", a: "ជាទូទៅគឺ storefront zone ឬតំបន់ដែលអតិថិជនឃើញមុនគេ ព្រោះវាជួយទាញការចាប់អារម្មណ៍ចូលហាងបានល្អ។" },
    { q: "តើអេក្រង់ធំជាងតែងតែលក់បានល្អជាងមែនទេ?", a: "មិនមែនទេ។ Placement និង content relevance សំខាន់ជាងទំហំ។ អេក្រង់តូចនៅទីតាំងត្រឹមត្រូវ អាចមានប្រសិទ្ធភាពជាងអេក្រង់ធំនៅទីតាំងខុស។" },
    { q: "តើ retail content គួរប្តូរញឹកញាប់ប៉ុណ្ណា?", a: "វាគួរតែអាប់ដេតតាម campaign calendar, stock change និង promotion period ដើម្បីរក្សាភាពទាក់ទាញ និងភាពទាន់សម័យ។" },
    { q: "តើ queue area អាចប្រើ LED សម្រាប់ upsell បានទេ?", a: "បាន។ Queue area ជាតំបន់ល្អសម្រាប់ reminder offer, add-on item និង short promotion message។" },
    { q: "តើ Mugnee អាចជួយរៀបចំ retail placement plan បានទេ?", a: "បាន។ Mugnee អាចជួយកំណត់ zone, size, content objective និង installation scope សម្រាប់ហាងលក់រាយនៅកម្ពុជា។" },
  ],
};

function toKmPost(post: BlogPost): BlogPost {
  const kmTitle = KM_TITLES[post.slug] || post.title;
  return {
    ...post,
    title: kmTitle,
    excerpt: KM_EXCERPTS[post.slug] || post.excerpt,
    description: KM_DESCRIPTIONS[post.slug] || post.description,
    sections: KM_SECTION_OVERRIDES[post.slug] || kmSections(kmTitle),
    faq: KM_FAQ_OVERRIDES[post.slug] || kmFaq(kmTitle),
  };
}

export const BLOG_POSTS_KM: BlogPost[] = BLOG_POSTS.map(toKmPost);

export function getAllKmBlogPosts() {
  return [...BLOG_POSTS_KM].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getKmBlogPostBySlug(slug: string) {
  return BLOG_POSTS_KM.find((post) => post.slug === slug);
}

export function getFeaturedKmBlogPosts(limit = 3) {
  return getAllKmBlogPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getAllKmBlogSlugs() {
  return BLOG_POSTS_KM.map((post) => post.slug);
}

export function getRelatedKmBlogPosts(post: BlogPost, limit = 3) {
  const posts = getAllKmBlogPosts().filter((item) => item.slug !== post.slug);
  const mapped =
    post.relatedSlugs?.map((slug) => posts.find((item) => item.slug === slug)).filter((item): item is BlogPost => Boolean(item)) ||
    [];
  const sameCategory = posts.filter((item) => item.category === post.category && !mapped.some((x) => x.slug === item.slug));
  return [...mapped, ...sameCategory, ...posts.filter((item) => !mapped.some((x) => x.slug === item.slug))].slice(0, limit);
}
