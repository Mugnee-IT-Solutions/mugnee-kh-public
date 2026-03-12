type MetaOverride = {
  title: string;
  description: string;
};

const SOLUTION_META_OVERRIDES_EN: Record<string, MetaOverride> = {
  "indoor-communication-solutions-cambodia": {
    title: "Indoor Communication Cambodia | LED & Signage",
    description:
      "Indoor communication in Cambodia with LED display, digital signage, CMS planning, installation, and local support for offices and hotels.",
  },
  "outdoor-campaign-solutions-cambodia": {
    title: "Outdoor Campaign Solutions Cambodia | LED Billboard Planning",
    description:
      "Outdoor campaign solutions in Cambodia for LED billboard visibility, roadside placement strategy, installation workflow, and maintenance support.",
  },
  "retail-digital-signage-cambodia": {
    title: "Retail Digital Signage Cambodia | Store Display",
    description:
      "Retail digital signage solutions for Cambodia stores and malls with content workflow, LED display selection, installation, and local support.",
  },
  "hotel-display-solutions-cambodia": {
    title: "Hotel Display Cambodia | Guest Communication",
    description:
      "Hotel display solutions in Cambodia for lobby communication, event schedules, wayfinding, and branded digital display deployment.",
  },
  "factory-pa-announcement-cambodia": {
    title: "Factory PA Cambodia | Industrial Audio",
    description:
      "Factory PA announcement systems in Cambodia with zone planning, amplifier and speaker design, installation, and service support.",
  },
  "office-access-control-cambodia": {
    title: "Office Access Control Cambodia | Entry Security Solutions",
    description:
      "Office access control solutions in Cambodia with RFID, biometric, turnstile integration, deployment planning, and ongoing support.",
  },
  "education-smart-classroom-cambodia": {
    title: "Smart Classroom Cambodia | Interactive Learning",
    description:
      "Smart classroom solutions in Cambodia with interactive flat panels, classroom AV planning, installation, and training support.",
  },
};

const SOLUTION_META_OVERRIDES_KM: Record<string, MetaOverride> = {
  "indoor-communication-solutions-cambodia": {
    title: "ដំណោះស្រាយទំនាក់ទំនងក្នុងអគារ នៅកម្ពុជា | LED និង Digital Signage",
    description:
      "ដំណោះស្រាយទំនាក់ទំនងក្នុងអគារនៅកម្ពុជា សម្រាប់ការិយាល័យ សណ្ឋាគារ និងតំបន់សាធារណៈ ជាមួយការរៀបចំ LED Display, CMS, ដំឡើង និងសេវាគាំទ្រ។",
  },
  "outdoor-campaign-solutions-cambodia": {
    title: "ដំណោះស្រាយយុទ្ធនាការក្រៅអគារ នៅកម្ពុជា | LED Billboard",
    description:
      "ដំណោះស្រាយយុទ្ធនាការក្រៅអគារនៅកម្ពុជា សម្រាប់ LED Billboard ជាមួយផែនការទីតាំង ភាពមើលឃើញ ការដំឡើង និងសេវាបន្ទាប់ពីលក់។",
  },
  "retail-digital-signage-cambodia": {
    title: "ដំណោះស្រាយ Digital Signage សម្រាប់លក់រាយ នៅកម្ពុជា",
    description:
      "ដំណោះស្រាយ Digital Signage សម្រាប់ហាង និងផ្សារទំនើបនៅកម្ពុជា ជាមួយការរៀបចំមាតិកា ជ្រើស LED Display និងការដំឡើងតាមទីតាំង។",
  },
  "hotel-display-solutions-cambodia": {
    title: "ដំណោះស្រាយប្រព័ន្ធបង្ហាញ សម្រាប់សណ្ឋាគារ នៅកម្ពុជា",
    description:
      "ដំណោះស្រាយប្រព័ន្ធបង្ហាញសម្រាប់សណ្ឋាគារនៅកម្ពុជា សម្រាប់ Lobby, Event Schedule, Wayfinding និងការទំនាក់ទំនងភ្ញៀវ។",
  },
  "factory-pa-announcement-cambodia": {
    title: "ដំណោះស្រាយ PA ប្រកាសក្នុងរោងចក្រ នៅកម្ពុជា",
    description:
      "ដំណោះស្រាយប្រព័ន្ធផ្សាយសំឡេងប្រកាសក្នុងរោងចក្រ នៅកម្ពុជា ជាមួយការរៀបចំតំបន់សំឡេង ការដំឡើង និងសេវាគាំទ្របច្ចេកទេស។",
  },
  "office-access-control-cambodia": {
    title: "ដំណោះស្រាយគ្រប់គ្រងការចូលចេញការិយាល័យ នៅកម្ពុជា",
    description:
      "ដំណោះស្រាយគ្រប់គ្រងការចូលចេញការិយាល័យនៅកម្ពុជា ជាមួយ RFID, Biometric, Turnstile Integration និងផែនការដាក់ប្រើប្រាស់។",
  },
  "education-smart-classroom-cambodia": {
    title: "ដំណោះស្រាយថ្នាក់រៀនឆ្លាតវៃ នៅកម្ពុជា | Interactive Learning",
    description:
      "ដំណោះស្រាយថ្នាក់រៀនឆ្លាតវៃនៅកម្ពុជា ជាមួយ Interactive Flat Panel, Classroom AV Planning, ដំឡើង និងបណ្តុះបណ្តាលអ្នកប្រើ។",
  },
};

const CATALOG_META_OVERRIDES_EN: Record<string, MetaOverride> = {
  "led-display": {
    title: "LED Display Solutions in Cambodia | Indoor, Outdoor & Video Wall",
    description:
      "Explore LED display solutions in Cambodia including indoor LED, outdoor billboards, rental screens, pricing factors, and installation support.",
  },
  "indoor-led-display": {
    title: "Indoor LED Display in Cambodia | Fine Pixel Pitch Solutions",
    description:
      "Indoor LED display solutions for Cambodia boardrooms, retail, and control rooms with pixel pitch guidance, installation, and BOQ planning.",
  },
  "outdoor-led-display": {
    title: "Outdoor LED Display in Cambodia | Billboard & Advertising Screens",
    description:
      "Outdoor LED display solutions for Cambodia advertising with high brightness, weather-resistant cabinets, and safe installation workflow.",
  },
  "rental-led-display": {
    title: "Rental LED Display in Cambodia | Events & Stage Video Wall",
    description:
      "Rental LED display systems for Cambodia events, conferences, and stages with modular setup, fast deployment, and onsite technical support.",
  },
  "p2-5-indoor-led-display-module": {
    title: "P2.5 Indoor LED Display Module Price in Cambodia",
    description:
      "P2.5 indoor LED display module for clear close-view visuals in Cambodia. Ideal for retail, meeting rooms, and showroom video wall projects.",
  },
  "p3-indoor-led-display-module": {
    title: "P3 Indoor LED Display Module in Cambodia | Price & Specs",
    description:
      "P3 indoor LED display module with balanced clarity and budget for Cambodia businesses. Compare specs and request project quotation.",
  },
  "p2-5-outdoor-led-display": {
    title: "P2.5 Outdoor LED Display in Cambodia | High Clarity Billboard",
    description:
      "P2.5 outdoor LED display for Cambodia projects requiring high clarity, strong brightness, and reliable weather-ready performance.",
  },
  "p3-outdoor-led-display-module": {
    title: "P3 Outdoor LED Module Cambodia | Brightness",
    description:
      "P3 outdoor LED display module for Cambodia with strong brightness and durable cabinet compatibility for commercial advertising screens.",
  },
  "p4-outdoor-led-display-screen-panel-module": {
    title: "P4 Outdoor LED Display Module in Cambodia | Billboard Solution",
    description:
      "P4 outdoor LED display module for Cambodia billboard projects with practical viewing distance, stable output, and installation support.",
  },
  "p10-outdoor-led-sign-board-price-in-cambodia": {
    title: "P10 Outdoor LED Sign Board Price in Cambodia | Roadside Display",
    description:
      "P10 outdoor LED sign board solution in Cambodia for long-distance viewing, roadside advertising, and cost-effective large format display.",
  },
};

const CATALOG_META_OVERRIDES_KM: Record<string, MetaOverride> = {
  "led-display": {
    title: "ដំណោះស្រាយអេក្រង់ LED នៅកម្ពុជា | ក្នុងអគារ និងខាងក្រៅ",
    description:
      "ស្វែងយល់ដំណោះស្រាយអេក្រង់ LED នៅកម្ពុជា រួមមានអេក្រង់ក្នុងអគារ អេក្រង់ខាងក្រៅ Video Wall កត្តាតម្លៃ និងសេវាដំឡើង។",
  },
  "indoor-led-display": {
    title: "អេក្រង់ LED ក្នុងអគារ នៅកម្ពុជា | ជម្រើស Pixel Pitch",
    description:
      "អេក្រង់ LED ក្នុងអគារ សម្រាប់ការិយាល័យ ហាង និងបន្ទប់បញ្ជា ជាមួយការណែនាំ Pixel Pitch ការដំឡើង និង BOQ។",
  },
  "outdoor-led-display": {
    title: "អេក្រង់ LED ខាងក្រៅ នៅកម្ពុជា | Billboard និងផ្សព្វផ្សាយ",
    description:
      "អេក្រង់ LED ខាងក្រៅ សម្រាប់ការផ្សព្វផ្សាយនៅកម្ពុជា ជាមួយកម្រិតពន្លឺខ្ពស់ កាប៊ីណេតការពារអាកាសធាតុ និងដំណើរការដំឡើងត្រឹមត្រូវ។",
  },
  "rental-led-display": {
    title: "អេក្រង់ LED សម្រាប់ជួល នៅកម្ពុជា | ព្រឹត្តិការណ៍ និងឆាក",
    description:
      "ប្រព័ន្ធអេក្រង់ LED សម្រាប់ជួលនៅកម្ពុជា សម្រាប់ព្រឹត្តិការណ៍ សន្និសីទ និងឆាក ជាមួយការដំឡើងរហ័ស និងគាំទ្របច្ចេកទេស។",
  },
  "p2-5-indoor-led-display-module": {
    title: "ម៉ូឌុលអេក្រង់ LED P2.5 ក្នុងអគារ នៅកម្ពុជា",
    description:
      "ម៉ូឌុល P2.5 LED ក្នុងអគារ សម្រាប់រូបភាពច្បាស់នៅចម្ងាយជិត សមស្របសម្រាប់ហាង បន្ទប់ប្រជុំ និងបន្ទប់តាំងបង្ហាញ។",
  },
  "p3-indoor-led-display-module": {
    title: "ម៉ូឌុលអេក្រង់ LED P3 ក្នុងអគារ នៅកម្ពុជា",
    description:
      "ម៉ូឌុល P3 LED ក្នុងអគារ ជាជម្រើសតុល្យភាពរវាងភាពច្បាស់ និងថវិកា សម្រាប់គម្រោងអាជីវកម្មនៅកម្ពុជា។",
  },
  "p2-5-outdoor-led-display": {
    title: "អេក្រង់ LED P2.5 ខាងក្រៅ នៅកម្ពុជា",
    description:
      "អេក្រង់ P2.5 LED ខាងក្រៅ សម្រាប់គម្រោងដែលត្រូវការរូបភាពច្បាស់ខ្ពស់ និងកម្រិតពន្លឺខ្លាំងនៅកម្ពុជា។",
  },
  "p3-outdoor-led-display-module": {
    title: "ម៉ូឌុលអេក្រង់ LED P3 ខាងក្រៅ នៅកម្ពុជា",
    description:
      "ម៉ូឌុល P3 LED ខាងក្រៅ ជាមួយកម្រិតពន្លឺល្អ និងភាពធន់ សម្រាប់អេក្រង់ផ្សព្វផ្សាយពាណិជ្ជកម្ម។",
  },
  "p4-outdoor-led-display-screen-panel-module": {
    title: "ម៉ូឌុលអេក្រង់ LED P4 ខាងក្រៅ នៅកម្ពុជា",
    description:
      "ម៉ូឌុល P4 LED ខាងក្រៅ សម្រាប់គម្រោង Billboard នៅកម្ពុជា ជាមួយចម្ងាយមើលសមស្រប និងដំណើរការស្ថិរភាព។",
  },
  "p10-outdoor-led-sign-board-price-in-cambodia": {
    title: "តម្លៃបន្ទះសញ្ញា LED P10 ខាងក្រៅ នៅកម្ពុជា",
    description:
      "អេក្រង់បន្ទះសញ្ញា LED P10 សម្រាប់ការមើលឃើញពីចម្ងាយ និងការផ្សព្វផ្សាយតាមដងផ្លូវ ជាជម្រើសសន្សំថវិកាសម្រាប់ទំហំធំ។",
  },
};

export function getSolutionMetaOverride(slug: string, lang: "en" | "km") {
  return lang === "km"
    ? SOLUTION_META_OVERRIDES_KM[slug]
    : SOLUTION_META_OVERRIDES_EN[slug];
}

export function getCatalogMetaOverride(slug: string, lang: "en" | "km") {
  return lang === "km"
    ? CATALOG_META_OVERRIDES_KM[slug]
    : CATALOG_META_OVERRIDES_EN[slug];
}
