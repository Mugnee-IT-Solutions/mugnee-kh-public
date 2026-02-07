export type ProductSpec = {
  labelEn: string;
  labelKm: string;
  valueEn: string;
  valueKm: string;
};

export type Product = {
  id: string;
  slug: string;
  categoryIds: string[];
  primaryCategoryId: string;
  titleEn: string;
  titleKm: string;
  shortDescEn: string;
  shortDescKm: string;
  descriptionEn: string;
  descriptionKm: string;
  featuresEn: string[];
  featuresKm: string[];
  applicationsEn: string[];
  applicationsKm: string[];
  specs: ProductSpec[];
  heroImage: string;
  gallery: string[];
  tagsEn: string[];
  tagsKm: string[];
  seoTitleEn: string;
  seoTitleKm: string;
  seoDescEn: string;
  seoDescKm: string;
};

export type ProductCategory = {
  id: string;
  parentId?: string;
  labelEn: string;
  labelKm: string;
  slug: string;
  descriptionEn: string;
  descriptionKm: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "led_display",
    labelEn: "LED Display",
    labelKm: "អេក្រង់ LED",
    slug: "led-display",
    descriptionEn: "Indoor, outdoor and rental LED display systems.",
    descriptionKm: "ប្រព័ន្ធអេក្រង់ LED សម្រាប់ក្នុង អក្រៅ និងជួល។",
  },
  {
    id: "indoor_led_display",
    parentId: "led_display",
    labelEn: "Indoor LED Display",
    labelKm: "អេក្រង់ LED ខាងក្នុង",
    slug: "indoor-led-display",
    descriptionEn: "Fine pitch and indoor LED modules.",
    descriptionKm: "ម៉ូឌុល LED ខាងក្នុង និង Fine Pitch។",
  },
  {
    id: "outdoor_led_display",
    parentId: "led_display",
    labelEn: "Outdoor LED Display",
    labelKm: "អេក្រង់ LED ខាងក្រៅ",
    slug: "outdoor-led-display",
    descriptionEn: "Weather-ready LED modules for outdoor use.",
    descriptionKm: "ម៉ូឌុល LED ខាងក្រៅ សម្រាប់អាកាសធាតុខាងក្រៅ។",
  },
  {
    id: "rental_led_display",
    parentId: "led_display",
    labelEn: "Rental LED Display",
    labelKm: "អេក្រង់ LED សម្រាប់ជួល",
    slug: "rental-led-display",
    descriptionEn: "Rental LED panels for events and stage.",
    descriptionKm: "បន្ទះ LED សម្រាប់ជួល និងព្រឹត្តិការណ៍។",
  },
  {
    id: "led_accessories",
    parentId: "led_display",
    labelEn: "LED Accessories",
    labelKm: "គ្រឿងបន្លាស់ LED",
    slug: "led-accessories",
    descriptionEn: "Controllers, receiving cards, power supplies and cabinets.",
    descriptionKm: "កុងត្រូល러, receiving card, power supply និង cabinet។",
  },
  {
    id: "smart_board",
    labelEn: "Smart Board",
    labelKm: "ស្មាតបូដ",
    slug: "smart-board",
    descriptionEn: "Interactive flat panels and smart classroom displays.",
    descriptionKm: "អេក្រង់អន្តរកម្មសម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
  },
  {
    id: "digital_signage",
    labelEn: "Digital Signage",
    labelKm: "ស្លាកឌីជីថល",
    slug: "digital-signage",
    descriptionEn: "Commercial digital signage displays and kiosks.",
    descriptionKm: "អេក្រង់ស្លាកឌីជីថល និងក្យូសសម្រាប់ពាណិជ្ជកម្ម។",
  },
  {
    id: "pa_system",
    labelEn: "PA System",
    labelKm: "ប្រព័ន្ធ PA",
    slug: "pa-system",
    descriptionEn: "Public address sound systems and audio solutions.",
    descriptionKm: "ប្រព័ន្ធផ្សព្វផ្សាយសំឡេង និងaudio solutions។",
  },
  {
    id: "smart_home",
    labelEn: "Smart Home",
    labelKm: "ស្មាតហោម",
    slug: "smart-home",
    descriptionEn: "Smart home automation devices.",
    descriptionKm: "ឧបករណ៍ស្មាតហោម និង automation។",
  },
  {
    id: "smart_office",
    labelEn: "Smart Office",
    labelKm: "ស្មាតការិយាល័យ",
    slug: "smart-office",
    descriptionEn: "Office automation and meeting solutions.",
    descriptionKm: "ការិយាល័យឆ្លាតវៃ និងសម្ភារៈបន្ទប់ប្រជុំ។",
  },
  {
    id: "security",
    labelEn: "Security",
    labelKm: "សុវត្ថិភាព",
    slug: "security",
    descriptionEn: "Security monitoring and surveillance devices.",
    descriptionKm: "ឧបករណ៍សុវត្ថិភាព និងសម្ងាត់គ្រប់គ្រង។",
  },
  {
    id: "access_control",
    labelEn: "Access Control",
    labelKm: "ប្រព័ន្ធគ្រប់គ្រងចូលចេញ",
    slug: "access-control",
    descriptionEn: "RFID, biometric and access control systems.",
    descriptionKm: "ប្រព័ន្ធ RFID, biometric និងការគ្រប់គ្រងចូលចេញ។",
  },
  {
    id: "turnstile_gate",
    labelEn: "Turnstile Gate",
    labelKm: "ច្រកទ្វារ Turnstile",
    slug: "turnstile-gate",
    descriptionEn: "Entry control turnstile gates and barriers.",
    descriptionKm: "ច្រកទ្វារ និងទ្វាររារាំងសម្រាប់គ្រប់គ្រងចូលចេញ។",
  },
  {
    id: "industrial_solution",
    labelEn: "Industrial Solution",
    labelKm: "ដំណោះស្រាយឧស្សាហកម្ម",
    slug: "industrial-solution",
    descriptionEn: "Industrial equipment and project solutions.",
    descriptionKm: "ឧបករណ៍ឧស្សាហកម្ម និងដំណោះស្រាយគម្រោង។",
  },
  {
    id: "machineries",
    labelEn: "Machineries",
    labelKm: "ម៉ាស៊ីនឧស្សាហកម្ម",
    slug: "machineries",
    descriptionEn: "Industrial machineries and hardware.",
    descriptionKm: "ម៉ាស៊ីនឧស្សាហកម្ម និងឧបករណ៍ពាក់ព័ន្ធ។",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "p2-5-indoor-led-module",
    slug: "p2-5-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P2.5 Indoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្នុង P2.5",
    shortDescEn: "Fine pitch indoor LED module for control rooms and showrooms.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្នុង Fine Pitch សម្រាប់បន្ទប់បញ្ជា និង showroom។",
    descriptionEn:
      "P2.5 indoor LED display module with fine pixel pitch for sharp visuals in meeting rooms, showrooms and control rooms. Suitable for close viewing distance and high clarity content.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្នុង P2.5 ជាមួយ pixel pitch តូច សម្រាប់រូបភាពច្បាស់ក្នុងបន្ទប់ប្រជុំ showroom និងបន្ទប់បញ្ជា។",
    featuresEn: [
      "Fine pixel pitch for close viewing distance",
      "Clear grayscale and smooth refresh",
      "Stable cabinet compatibility for long-term use",
    ],
    featuresKm: [
      "Pixel pitch តូចសម្រាប់មើលជិត",
      "Grayscale ច្បាស់ និង refresh រលូន",
      "ស្ថេរភាពល្អសម្រាប់ប្រើប្រាស់រយៈពេលវែង",
    ],
    applicationsEn: ["Control room", "Showroom", "Meeting room", "Indoor stage"],
    applicationsKm: ["បន្ទប់បញ្ជា", "Showroom", "បន្ទប់ប្រជុំ", "ឆាកក្នុងអគារ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "2.5 mm",
        valueKm: "2.5 មម",
      },
      {
        labelEn: "Module Size",
        labelKm: "ទំហំម៉ូឌុល",
        valueEn: "320 × 160 mm",
        valueKm: "320 × 160 មម",
      },
      {
        labelEn: "Module Resolution",
        labelKm: "គុណភាពបង្ហាញម៉ូឌុល",
        valueEn: "128 × 64 dots",
        valueKm: "128 × 64 dot",
      },
      {
        labelEn: "LED Type",
        labelKm: "ប្រភេទ LED",
        valueEn: "SMD2121",
        valueKm: "SMD2121",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "≥800 cd/m²",
        valueKm: "≥800 cd/m²",
      },
      {
        labelEn: "IP Rating",
        labelKm: "កម្រិតការការពារ",
        valueEn: "IP50",
        valueKm: "IP50",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Indoor", "Fine Pitch", "Control Room"],
    tagsKm: ["ខាងក្នុង", "Fine Pitch", "បន្ទប់បញ្ជា"],
    seoTitleEn: "P2.5 Indoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្នុង P2.5 នៅកម្ពុជា",
    seoDescEn:
      "P2.5 indoor LED module with fine pixel pitch for control rooms, showrooms and meeting spaces in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្នុង P2.5 សម្រាប់បន្ទប់បញ្ជា showroom និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "p3-indoor-led-module",
    slug: "p3-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P3 Indoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្នុង P3",
    shortDescEn: "Balanced indoor LED module for showrooms and events.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្នុងសម្រាប់ showroom និងព្រឹត្តិការណ៍។",
    descriptionEn:
      "P3 indoor LED module for stable performance and clear visuals at mid-range viewing distances. Suitable for retail, showrooms and indoor events.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្នុង P3 សម្រាប់ការមើលចម្ងាយមធ្យម មានរូបភាពច្បាស់។",
    featuresEn: ["Balanced pixel pitch", "Stable performance", "Indoor use"],
    featuresKm: ["Pixel pitch សមស្រប", "ស្ថេរភាពល្អ", "សម្រាប់ខាងក្នុង"],
    applicationsEn: ["Retail", "Showroom", "Indoor events"],
    applicationsKm: ["ហាងលក់រាយ", "Showroom", "ព្រឹត្តិការណ៍ក្នុងអគារ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "3.0 mm",
        valueKm: "3.0 មម",
      },
      {
        labelEn: "Module Size",
        labelKm: "ទំហំម៉ូឌុល",
        valueEn: "320 × 160 mm",
        valueKm: "320 × 160 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "Configuration dependent",
        valueKm: "អាស្រ័យលើ configuration",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Indoor", "Retail"],
    tagsKm: ["ខាងក្នុង", "ហាងលក់រាយ"],
    seoTitleEn: "P3 Indoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្នុង P3 នៅកម្ពុជា",
    seoDescEn:
      "P3 indoor LED module for retail and showroom LED video walls in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្នុង P3 សម្រាប់ LED video wall នៅហាង និង showroom នៅកម្ពុជា។",
  },
  {
    id: "p4-indoor-led-module",
    slug: "p4-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P4 Indoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្នុង P4",
    shortDescEn: "Cost-effective indoor LED module for wider viewing distance.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្នុងថ្លៃសមរម្យសម្រាប់មើលចម្ងាយ។",
    descriptionEn:
      "P4 indoor LED module suitable for halls, conference rooms and large indoor displays. A cost-effective choice for medium to long viewing distances.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្នុង P4 សមស្របសម្រាប់សាល និងបន្ទប់ប្រជុំធំៗ។",
    featuresEn: ["Cost-effective", "Stable indoor performance", "Wide view"],
    featuresKm: ["តម្លៃសមរម្យ", "ស្ថេរភាពខាងក្នុង", "មើលបានទូលំទូលាយ"],
    applicationsEn: ["Conference hall", "Auditorium", "Indoor signage"],
    applicationsKm: ["សាលប្រជុំ", "Auditorium", "ផ្ទាំងបង្ហាញក្នុងអគារ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "4.0 mm",
        valueKm: "4.0 មម",
      },
      {
        labelEn: "Module Size",
        labelKm: "ទំហំម៉ូឌុល",
        valueEn: "320 × 160 mm",
        valueKm: "320 × 160 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "Configuration dependent",
        valueKm: "អាស្រ័យលើ configuration",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Indoor", "Cost-effective"],
    tagsKm: ["ខាងក្នុង", "តម្លៃសមរម្យ"],
    seoTitleEn: "P4 Indoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្នុង P4 នៅកម្ពុជា",
    seoDescEn:
      "P4 indoor LED module for conference halls and large indoor displays in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្នុង P4 សម្រាប់សាលប្រជុំ និងអេក្រង់ធំក្នុងអគារ នៅកម្ពុជា។",
  },
  {
    id: "p5-indoor-led-module",
    slug: "p5-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P5 Indoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្នុង P5",
    shortDescEn: "Indoor LED module for medium-distance viewing.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្នុងសម្រាប់ចម្ងាយមធ្យម។",
    descriptionEn:
      "P5 indoor LED module for malls, churches and indoor advertising. Reliable and cost-effective for wide-area indoor screens.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្នុង P5 សម្រាប់ផ្សារ វិហារ និងការផ្សព្វផ្សាយក្នុងអគារ។",
    featuresEn: ["Wide viewing area", "Stable indoor brightness", "Cost-effective"],
    featuresKm: ["មើលបានទូលំទូលាយ", "ពន្លឺស្ថេរភាព", "តម្លៃសមរម្យ"],
    applicationsEn: ["Mall", "Church", "Indoor advertising"],
    applicationsKm: ["ផ្សារ", "វិហារ", "ការផ្សព្វផ្សាយក្នុងអគារ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "5.0 mm",
        valueKm: "5.0 មម",
      },
      {
        labelEn: "Module Size",
        labelKm: "ទំហំម៉ូឌុល",
        valueEn: "320 × 160 mm",
        valueKm: "320 × 160 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "Configuration dependent",
        valueKm: "អាស្រ័យលើ configuration",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Indoor", "Advertising"],
    tagsKm: ["ខាងក្នុង", "ការផ្សព្វផ្សាយ"],
    seoTitleEn: "P5 Indoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្នុង P5 នៅកម្ពុជា",
    seoDescEn:
      "P5 indoor LED module for mall, church and indoor advertising screens in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្នុង P5 សម្រាប់ផ្សារ និងការផ្សព្វផ្សាយក្នុងអគារ នៅកម្ពុជា។",
  },
  {
    id: "p2-0-indoor-led-module",
    slug: "p2-0-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P2.0 Indoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្នុង P2.0",
    shortDescEn: "Fine pitch indoor LED module for sharp, close viewing.",
    shortDescKm: "ម៉ូឌុល LED Fine Pitch សម្រាប់មើលជិត និងរូបភាពច្បាស់។",
    descriptionEn:
      "P2.0 indoor LED module for premium display quality in control rooms, studios and boardrooms. Best for close viewing distance.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្នុង P2.0 សម្រាប់បន្ទប់បញ្ជា ស្ទូឌីយោ និងបន្ទប់ប្រជុំ។",
    featuresEn: ["Fine pitch clarity", "Smooth refresh", "Premium indoor use"],
    featuresKm: ["Pixel pitch តូច", "Refresh រលូន", "សម្រាប់ខាងក្នុងគុណភាពខ្ពស់"],
    applicationsEn: ["Boardroom", "Studio", "Control room"],
    applicationsKm: ["បន្ទប់ប្រជុំ", "ស្ទូឌីយោ", "បន្ទប់បញ្ជា"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "2.0 mm",
        valueKm: "2.0 មម",
      },
      {
        labelEn: "Module Size",
        labelKm: "ទំហំម៉ូឌុល",
        valueEn: "320 × 160 mm",
        valueKm: "320 × 160 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "Configuration dependent",
        valueKm: "អាស្រ័យលើ configuration",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Indoor", "Fine Pitch"],
    tagsKm: ["ខាងក្នុង", "Fine Pitch"],
    seoTitleEn: "P2.0 Indoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្នុង P2.0 នៅកម្ពុជា",
    seoDescEn:
      "P2.0 indoor LED module for premium close-viewing display in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្នុង P2.0 សម្រាប់ការមើលជិត និងគុណភាពខ្ពស់ នៅកម្ពុជា។",
  },
  {
    id: "p2-5-outdoor-led-module",
    slug: "p2-5-outdoor-led-display-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P2.5 Outdoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្រៅ P2.5",
    shortDescEn: "High clarity outdoor LED module for close viewing.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្រៅសម្រាប់មើលជិត និងរូបភាពច្បាស់។",
    descriptionEn:
      "P2.5 outdoor LED module for premium outdoor signage where closer viewing distance is required.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្រៅ P2.5 សម្រាប់ signage ខាងក្រៅដែលត្រូវការមើលជិត។",
    featuresEn: ["High brightness", "Outdoor protection", "Fine pitch"],
    featuresKm: ["ពន្លឺខ្ពស់", "ការការពារខាងក្រៅ", "Fine pitch"],
    applicationsEn: ["Outdoor signage", "Storefront", "Public display"],
    applicationsKm: ["ផ្ទាំងបង្ហាញក្រៅ", "ផ្ទៃមុខហាង", "តំបន់សាធារណៈ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "2.5 mm",
        valueKm: "2.5 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "High brightness (configuration dependent)",
        valueKm: "ពន្លឺខ្ពស់ (អាស្រ័យលើ configuration)",
      },
      {
        labelEn: "IP Rating",
        labelKm: "កម្រិតការការពារ",
        valueEn: "Outdoor rated",
        valueKm: "សម្រាប់ក្រៅអាគារ",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Outdoor", "Fine Pitch"],
    tagsKm: ["ក្រៅអាគារ", "Fine Pitch"],
    seoTitleEn: "P2.5 Outdoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្រៅ P2.5 នៅកម្ពុជា",
    seoDescEn:
      "P2.5 outdoor LED module for close-viewing outdoor signage in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្រៅ P2.5 សម្រាប់ signage មើលជិត នៅកម្ពុជា។",
  },
  {
    id: "p3-outdoor-led-module",
    slug: "p3-outdoor-led-display-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P3 Outdoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្រៅ P3",
    shortDescEn: "Outdoor LED module for clear daylight viewing.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្រៅសម្រាប់មើលច្បាស់ក្រៅថ្ងៃ។",
    descriptionEn:
      "P3 outdoor LED module designed for high-visibility outdoor signage and billboards.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្រៅ P3 សម្រាប់ signage និងប៊ីលបតខាងក្រៅ។",
    featuresEn: ["Daylight visibility", "Outdoor rated", "Stable cabinet"],
    featuresKm: ["មើលឃើញក្រៅថ្ងៃ", "សម្រាប់ក្រៅអាគារ", "cabinet ស្ថេរភាព"],
    applicationsEn: ["Billboard", "Outdoor signage"],
    applicationsKm: ["ប៊ីលបត", "ផ្ទាំងបង្ហាញក្រៅអាគារ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "3.0 mm",
        valueKm: "3.0 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "High brightness (configuration dependent)",
        valueKm: "ពន្លឺខ្ពស់ (អាស្រ័យលើ configuration)",
      },
      {
        labelEn: "IP Rating",
        labelKm: "កម្រិតការការពារ",
        valueEn: "Outdoor rated",
        valueKm: "សម្រាប់ក្រៅអាគារ",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Outdoor", "Billboard"],
    tagsKm: ["ក្រៅអាគារ", "ប៊ីលបត"],
    seoTitleEn: "P3 Outdoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្រៅ P3 នៅកម្ពុជា",
    seoDescEn:
      "P3 outdoor LED module for billboards and outdoor signage in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្រៅ P3 សម្រាប់ប៊ីលបត និង signage នៅកម្ពុជា។",
  },
  {
    id: "led-display-cabinet-500x1000",
    slug: "led-display-cabinet-500x1000-lampro",
    categoryIds: ["led_display", "led_accessories"],
    primaryCategoryId: "led_accessories",
    titleEn: "LED Display Cabinet 500×1000 mm (Lampro)",
    titleKm: "LED Display Cabinet 500×1000 មម (Lampro)",
    shortDescEn: "Standard cabinet size for LED display installations.",
    shortDescKm: "ទំហំ cabinet ស្តង់ដារសម្រាប់អេក្រង់ LED។",
    descriptionEn:
      "Lampro 500×1000 mm LED display cabinet for indoor or outdoor configurations. Suitable for modular LED wall builds.",
    descriptionKm:
      "Cabinet LED 500×1000 មម (Lampro) សម្រាប់ការតម្លើងអេក្រង់ LED។",
    featuresEn: ["Standard cabinet size", "Modular build", "Installation ready"],
    featuresKm: ["ទំហំស្តង់ដារ", "អាចបង្កើត modular", "រួចរាល់សម្រាប់ដំឡើង"],
    applicationsEn: ["LED wall", "Video wall", "Billboard structure"],
    applicationsKm: ["LED wall", "Video wall", "រចនាសម្ព័ន្ធប៊ីលបត"],
    specs: [
      {
        labelEn: "Cabinet Size",
        labelKm: "ទំហំ cabinet",
        valueEn: "500 × 1000 mm",
        valueKm: "500 × 1000 មម",
      },
      {
        labelEn: "Usage",
        labelKm: "ការប្រើប្រាស់",
        valueEn: "Indoor / Outdoor (configuration dependent)",
        valueKm: "ខាងក្នុង / ខាងក្រៅ (អាស្រ័យលើ configuration)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Cabinet", "Lampro"],
    tagsKm: ["Cabinet", "Lampro"],
    seoTitleEn: "LED Display Cabinet 500x1000 mm in Cambodia",
    seoTitleKm: "LED Display Cabinet 500x1000 មម នៅកម្ពុជា",
    seoDescEn:
      "Lampro 500x1000 mm LED display cabinet for modular LED wall installations in Cambodia.",
    seoDescKm:
      "Cabinet LED 500x1000 មម សម្រាប់ការតម្លើង LED wall នៅកម្ពុជា។",
  },
  {
    id: "led-display-cabinet-500x500",
    slug: "led-display-cabinet-500x500-lampro",
    categoryIds: ["led_display", "led_accessories"],
    primaryCategoryId: "led_accessories",
    titleEn: "LED Display Cabinet 500×500 mm (Lampro)",
    titleKm: "LED Display Cabinet 500×500 មម (Lampro)",
    shortDescEn: "Compact cabinet size for flexible LED wall builds.",
    shortDescKm: "Cabinet តូចសម្រាប់ LED wall ផ្លាស់ប្ដូរបានងាយ។",
    descriptionEn:
      "Lampro 500×500 mm LED display cabinet for flexible LED wall configurations. Suitable for rental or permanent setups.",
    descriptionKm:
      "Cabinet LED 500×500 មម (Lampro) សម្រាប់ការរៀបចំ LED wall ផ្លាស់ប្ដូរបានងាយ។",
    featuresEn: ["Compact size", "Flexible configuration", "Installation ready"],
    featuresKm: ["ទំហំតូច", "កែតម្រូវបានងាយ", "រួចរាល់សម្រាប់ដំឡើង"],
    applicationsEn: ["LED wall", "Rental LED", "Stage setup"],
    applicationsKm: ["LED wall", "LED សម្រាប់ជួល", "ឆាក"],
    specs: [
      {
        labelEn: "Cabinet Size",
        labelKm: "ទំហំ cabinet",
        valueEn: "500 × 500 mm",
        valueKm: "500 × 500 មម",
      },
      {
        labelEn: "Usage",
        labelKm: "ការប្រើប្រាស់",
        valueEn: "Indoor / Outdoor (configuration dependent)",
        valueKm: "ខាងក្នុង / ខាងក្រៅ (អាស្រ័យលើ configuration)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Cabinet", "Lampro"],
    tagsKm: ["Cabinet", "Lampro"],
    seoTitleEn: "LED Display Cabinet 500x500 mm in Cambodia",
    seoTitleKm: "LED Display Cabinet 500x500 មម នៅកម្ពុជា",
    seoDescEn:
      "Lampro 500x500 mm LED display cabinet for modular LED wall builds in Cambodia.",
    seoDescKm:
      "Cabinet LED 500x500 មម សម្រាប់ LED wall modular នៅកម្ពុជា។",
  },
  {
    id: "flight-case-4in1",
    slug: "flight-case-4-in-1",
    categoryIds: ["led_display", "led_accessories"],
    primaryCategoryId: "led_accessories",
    titleEn: "Flight Case 4 in 1",
    titleKm: "Flight Case 4 in 1",
    shortDescEn: "Transport case for LED panels and accessories.",
    shortDescKm: "ប្រអប់ដឹកសម្រាប់ LED panels និង accessories។",
    descriptionEn:
      "4-in-1 flight case for safe transport of LED cabinets and accessories. Ideal for rental LED and events.",
    descriptionKm:
      "Flight case 4-in-1 សម្រាប់ដឹកជញ្ជូន LED cabinet និង accessories។",
    featuresEn: ["Durable transport", "Protective case", "Rental friendly"],
    featuresKm: ["ធន់សម្រាប់ដឹក", "ការពារ safety", "សម្រាប់ rental"],
    applicationsEn: ["Rental LED", "Events", "Stage transport"],
    applicationsKm: ["LED សម្រាប់ជួល", "ព្រឹត្តិការណ៍", "ដឹកឧបករណ៍ឆាក"],
    specs: [
      {
        labelEn: "Type",
        labelKm: "ប្រភេទ",
        valueEn: "4-in-1 flight case",
        valueKm: "Flight case 4-in-1",
      },
      {
        labelEn: "Usage",
        labelKm: "ការប្រើប្រាស់",
        valueEn: "LED cabinet transport",
        valueKm: "ដឹក LED cabinet",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Flight Case", "Rental"],
    tagsKm: ["Flight Case", "Rental"],
    seoTitleEn: "LED Flight Case 4 in 1 in Cambodia",
    seoTitleKm: "LED Flight Case 4 in 1 នៅកម្ពុជា",
    seoDescEn:
      "4-in-1 flight case for LED cabinet transport and rental projects in Cambodia.",
    seoDescKm:
      "Flight case 4-in-1 សម្រាប់ដឹក LED cabinet និង rental projects នៅកម្ពុជា។",
  },
  {
    id: "p10-outdoor-led-sign-board",
    slug: "p10-outdoor-led-sign-board",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P10 Outdoor LED Sign Board",
    titleKm: "ផ្ទាំងស្លាក LED ខាងក្រៅ P10",
    shortDescEn: "Outdoor LED sign board for long-distance viewing.",
    shortDescKm: "ផ្ទាំងស្លាក LED ខាងក្រៅសម្រាប់មើលចម្ងាយឆ្ងាយ។",
    descriptionEn:
      "P10 outdoor LED sign board for large signage, public messages and outdoor advertising.",
    descriptionKm:
      "ផ្ទាំងស្លាក LED ខាងក្រៅ P10 សម្រាប់ signage ធំៗ និងការផ្សព្វផ្សាយក្រៅ។",
    featuresEn: ["Large signage", "Outdoor durability", "Long-distance view"],
    featuresKm: ["signage ធំ", "ទ្រាំអាកាសធាតុ", "មើលចម្ងាយឆ្ងាយ"],
    applicationsEn: ["Outdoor signage", "Public message", "Billboard"],
    applicationsKm: ["signage ខាងក្រៅ", "ព័ត៌មានសាធារណៈ", "ប៊ីលបត"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "10.0 mm",
        valueKm: "10.0 មម",
      },
      {
        labelEn: "Use",
        labelKm: "ការប្រើប្រាស់",
        valueEn: "Outdoor sign board",
        valueKm: "ផ្ទាំងស្លាកក្រៅអាគារ",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Outdoor", "Sign Board"],
    tagsKm: ["ក្រៅអាគារ", "Sign Board"],
    seoTitleEn: "P10 Outdoor LED Sign Board in Cambodia",
    seoTitleKm: "ផ្ទាំងស្លាក LED ខាងក្រៅ P10 នៅកម្ពុជា",
    seoDescEn:
      "P10 outdoor LED sign board for large signage and public messaging in Cambodia.",
    seoDescKm:
      "ផ្ទាំងស្លាក LED ខាងក្រៅ P10 សម្រាប់ signage ធំៗ នៅកម្ពុជា។",
  },
  {
    id: "p4-outdoor-led-module",
    slug: "p4-outdoor-led-display-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P4 Outdoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្រៅ P4",
    shortDescEn: "Outdoor LED module for daylight visibility.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្រៅសម្រាប់មើលពន្លឺថ្ងៃ។",
    descriptionEn:
      "P4 outdoor LED module designed for bright daylight visibility with weather-ready build. Suitable for roadside and billboard projects.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្រៅ P4 សម្រាប់មើលបានច្បាស់ក្រៅថ្ងៃ និងការប្រើប្រាស់ក្រៅអាគារ។",
    featuresEn: ["High brightness", "Weather ready", "Outdoor use"],
    featuresKm: ["ពន្លឺខ្ពស់", "ទ្រាំអាកាសធាតុ", "សម្រាប់ក្រៅអាគារ"],
    applicationsEn: ["Roadside", "Billboard", "Outdoor advertising"],
    applicationsKm: ["ចិញ្ចើមផ្លូវ", "ប៊ីលបត", "ការផ្សព្វផ្សាយក្រៅអាគារ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "4.0 mm",
        valueKm: "4.0 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "High brightness (configuration dependent)",
        valueKm: "ពន្លឺខ្ពស់ (អាស្រ័យលើ configuration)",
      },
      {
        labelEn: "IP Rating",
        labelKm: "កម្រិតការការពារ",
        valueEn: "Outdoor rated",
        valueKm: "សម្រាប់ក្រៅអាគារ",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Outdoor", "Billboard"],
    tagsKm: ["ក្រៅអាគារ", "ប៊ីលបត"],
    seoTitleEn: "P4 Outdoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្រៅ P4 នៅកម្ពុជា",
    seoDescEn:
      "P4 outdoor LED module for billboard and roadside advertising screens in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្រៅ P4 សម្រាប់ប៊ីលបត និងផ្លូវ នៅកម្ពុជា។",
  },
  {
    id: "p5-outdoor-led-module",
    slug: "p5-outdoor-led-display-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P5 Outdoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្រៅ P5",
    shortDescEn: "Outdoor LED module for billboards and rooftops.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្រៅសម្រាប់ប៊ីលបត និងដំបូល។",
    descriptionEn:
      "P5 outdoor LED module for high-visibility advertising and outdoor screens. Suitable for rooftops and large billboards.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្រៅ P5 សម្រាប់ការផ្សព្វផ្សាយក្រៅ និងប៊ីលបតធំៗ។",
    featuresEn: ["Outdoor durability", "High visibility", "Stable cabinet"],
    featuresKm: ["ទ្រាំអាកាសធាតុ", "មើលឃើញច្បាស់", "cabinet ស្ថេរភាព"],
    applicationsEn: ["Billboard", "Rooftop", "Outdoor signage"],
    applicationsKm: ["ប៊ីលបត", "ដំបូល", "ផ្ទាំងបង្ហាញក្រៅអាគារ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "5.0 mm",
        valueKm: "5.0 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "High brightness (configuration dependent)",
        valueKm: "ពន្លឺខ្ពស់ (អាស្រ័យលើ configuration)",
      },
      {
        labelEn: "IP Rating",
        labelKm: "កម្រិតការការពារ",
        valueEn: "Outdoor rated",
        valueKm: "សម្រាប់ក្រៅអាគារ",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Outdoor", "Billboard"],
    tagsKm: ["ក្រៅអាគារ", "ប៊ីលបត"],
    seoTitleEn: "P5 Outdoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្រៅ P5 នៅកម្ពុជា",
    seoDescEn:
      "P5 outdoor LED module for rooftop and billboard advertising screens in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្រៅ P5 សម្រាប់ប៊ីលបត និងដំបូល នៅកម្ពុជា។",
  },
  {
    id: "p6-outdoor-led-module",
    slug: "p6-outdoor-led-display-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P6 Outdoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្រៅ P6",
    shortDescEn: "Outdoor LED module for large viewing distances.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្រៅសម្រាប់មើលចម្ងាយឆ្ងាយ។",
    descriptionEn:
      "P6 outdoor LED module built for large-format displays and long-distance viewing. Suitable for high-traffic roads and public spaces.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្រៅ P6 សម្រាប់អេក្រង់ធំ និងមើលចម្ងាយឆ្ងាយ។",
    featuresEn: ["Long-distance viewing", "High brightness", "Outdoor use"],
    featuresKm: ["មើលចម្ងាយឆ្ងាយ", "ពន្លឺខ្ពស់", "សម្រាប់ក្រៅអាគារ"],
    applicationsEn: ["Roadside billboard", "Public square", "Outdoor ads"],
    applicationsKm: ["ប៊ីលបតចិញ្ចើមផ្លូវ", "ទីសាធារណៈ", "ការផ្សព្វផ្សាយក្រៅ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "6.0 mm",
        valueKm: "6.0 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "High brightness (configuration dependent)",
        valueKm: "ពន្លឺខ្ពស់ (អាស្រ័យលើ configuration)",
      },
      {
        labelEn: "IP Rating",
        labelKm: "កម្រិតការការពារ",
        valueEn: "Outdoor rated",
        valueKm: "សម្រាប់ក្រៅអាគារ",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Outdoor", "Large format"],
    tagsKm: ["ក្រៅអាគារ", "អេក្រង់ធំ"],
    seoTitleEn: "P6 Outdoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្រៅ P6 នៅកម្ពុជា",
    seoDescEn:
      "P6 outdoor LED module for large-format billboards and long-distance viewing in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្រៅ P6 សម្រាប់ប៊ីលបតធំ និងមើលចម្ងាយឆ្ងាយ នៅកម្ពុជា។",
  },
  {
    id: "p8-outdoor-led-module",
    slug: "p8-outdoor-led-display-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P8 Outdoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្រៅ P8",
    shortDescEn: "Outdoor LED module for billboards and large signage.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្រៅសម្រាប់ប៊ីលបត និង signage ធំៗ។",
    descriptionEn:
      "P8 outdoor LED module for large billboard screens and outdoor signage with strong daylight visibility.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្រៅ P8 សម្រាប់ប៊ីលបត និង signage ធំៗ ដែលមើលឃើញច្បាស់ក្រៅថ្ងៃ។",
    featuresEn: ["High brightness", "Outdoor durability", "Large signage"],
    featuresKm: ["ពន្លឺខ្ពស់", "ទ្រាំអាកាសធាតុ", "signage ធំ"],
    applicationsEn: ["Billboard", "Highway", "Outdoor signage"],
    applicationsKm: ["ប៊ីលបត", "ផ្លូវល្បឿនលឿន", "ផ្ទាំងបង្ហាញក្រៅអាគារ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "8.0 mm",
        valueKm: "8.0 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "High brightness (configuration dependent)",
        valueKm: "ពន្លឺខ្ពស់ (អាស្រ័យលើ configuration)",
      },
      {
        labelEn: "IP Rating",
        labelKm: "កម្រិតការការពារ",
        valueEn: "Outdoor rated",
        valueKm: "សម្រាប់ក្រៅអាគារ",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Outdoor", "Billboard"],
    tagsKm: ["ក្រៅអាគារ", "ប៊ីលបត"],
    seoTitleEn: "P8 Outdoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្រៅ P8 នៅកម្ពុជា",
    seoDescEn:
      "P8 outdoor LED module for highway billboards and large signage in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្រៅ P8 សម្រាប់ប៊ីលបតផ្លូវល្បឿនលឿន និង signage ធំ នៅកម្ពុជា។",
  },
  {
    id: "p10-outdoor-led-module",
    slug: "p10-outdoor-led-display-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P10 Outdoor LED Display Module",
    titleKm: "ម៉ូឌុល LED ខាងក្រៅ P10",
    shortDescEn: "Outdoor LED module for large billboards.",
    shortDescKm: "ម៉ូឌុល LED ខាងក្រៅសម្រាប់ប៊ីលបតធំ។",
    descriptionEn:
      "P10 outdoor LED module for large billboard screens and long-distance viewing. Suitable for budget-friendly outdoor advertising.",
    descriptionKm:
      "ម៉ូឌុល LED ខាងក្រៅ P10 សម្រាប់ប៊ីលបតធំ និងការមើលចម្ងាយឆ្ងាយ។",
    featuresEn: ["Large format", "Outdoor rated", "Budget-friendly"],
    featuresKm: ["អេក្រង់ធំ", "សម្រាប់ក្រៅអាគារ", "តម្លៃសមរម្យ"],
    applicationsEn: ["Billboard", "Outdoor advertising"],
    applicationsKm: ["ប៊ីលបត", "ការផ្សព្វផ្សាយក្រៅ"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "ចម្ងាយភីកសែល",
        valueEn: "10.0 mm",
        valueKm: "10.0 មម",
      },
      {
        labelEn: "Brightness",
        labelKm: "ពន្លឺ",
        valueEn: "High brightness (configuration dependent)",
        valueKm: "ពន្លឺខ្ពស់ (អាស្រ័យលើ configuration)",
      },
      {
        labelEn: "IP Rating",
        labelKm: "កម្រិតការការពារ",
        valueEn: "Outdoor rated",
        valueKm: "សម្រាប់ក្រៅអាគារ",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2020/07/P2.5-Indoor-LED-Display-Module.jpg",
    ],
    tagsEn: ["Outdoor", "Billboard"],
    tagsKm: ["ក្រៅអាគារ", "ប៊ីលបត"],
    seoTitleEn: "P10 Outdoor LED Display Module in Cambodia",
    seoTitleKm: "ម៉ូឌុល LED ខាងក្រៅ P10 នៅកម្ពុជា",
    seoDescEn:
      "P10 outdoor LED module for large billboards and long-distance viewing in Cambodia.",
    seoDescKm:
      "ម៉ូឌុល LED ខាងក្រៅ P10 សម្រាប់ប៊ីលបតធំ និងមើលចម្ងាយឆ្ងាយ នៅកម្ពុជា។",
  },
  {
    id: "interactive-screen-98",
    slug: "premium-quality-interactive-screen-98",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Premium Quality Interactive Screen 98\"",
    titleKm: "អេក្រង់អន្តរកម្មគុណភាពខ្ពស់ 98\"",
    shortDescEn: "Large format interactive flat panel for classrooms and boardrooms.",
    shortDescKm: "អេក្រង់អន្តរកម្មទំហំធំ សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    descriptionEn:
      "Premium 98-inch interactive screen designed for smart classrooms, training rooms and large meeting spaces with multi-touch collaboration.",
    descriptionKm:
      "អេក្រង់អន្តរកម្ម 98\" សម្រាប់ថ្នាក់រៀន ឬបន្ទប់ប្រជុំធំៗ ជាមួយ multi-touch។",
    featuresEn: ["Large 98\" display", "Multi-touch collaboration", "Smart classroom use"],
    featuresKm: ["អេក្រង់ 98\"", "Multi-touch", "សម្រាប់ថ្នាក់រៀនឆ្លាតវៃ"],
    applicationsEn: ["Classroom", "Training room", "Boardroom"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់បណ្តុះបណ្តាល", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "98 inch",
        valueKm: "98 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (ជាទូទៅ)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["ស្មាតបូដ", "ការអប់រំ"],
    seoTitleEn: "98\" Interactive Smart Board in Cambodia",
    seoTitleKm: "ស្មាតបូដ 98\" នៅកម្ពុជា",
    seoDescEn:
      "Premium 98-inch interactive screen for smart classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "អេក្រង់អន្តរកម្ម 98\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "interactive-screen-85",
    slug: "premium-quality-interactive-screen-85",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Premium Quality Interactive Screen 85\"",
    titleKm: "អេក្រង់អន្តរកម្មគុណភាពខ្ពស់ 85\"",
    shortDescEn: "Large interactive screen for classrooms and boardrooms.",
    shortDescKm: "អេក្រង់អន្តរកម្មទំហំធំ សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    descriptionEn:
      "Premium 85-inch interactive screen for smart classrooms and meeting rooms.",
    descriptionKm:
      "អេក្រង់អន្តរកម្ម 85\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    featuresEn: ["85\" display", "Multi-touch", "Smart classroom"],
    featuresKm: ["អេក្រង់ 85\"", "Multi-touch", "សម្រាប់ថ្នាក់រៀនឆ្លាតវៃ"],
    applicationsEn: ["Classroom", "Training room", "Boardroom"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់បណ្តុះបណ្តាល", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "85 inch",
        valueKm: "85 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (ជាទូទៅ)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["ស្មាតបូដ", "ការអប់រំ"],
    seoTitleEn: "85\" Interactive Smart Board in Cambodia",
    seoTitleKm: "ស្មាតបូដ 85\" នៅកម្ពុជា",
    seoDescEn:
      "Premium 85-inch interactive screen for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "អេក្រង់អន្តរកម្ម 85\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "interactive-screen-75",
    slug: "premium-quality-interactive-screen-75",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Premium Quality Interactive Screen 75\"",
    titleKm: "អេក្រង់អន្តរកម្មគុណភាពខ្ពស់ 75\"",
    shortDescEn: "Interactive screen for classrooms and meetings.",
    shortDescKm: "អេក្រង់អន្តរកម្មសម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    descriptionEn:
      "Premium 75-inch interactive screen for smart classrooms and meeting rooms.",
    descriptionKm:
      "អេក្រង់អន្តរកម្ម 75\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    featuresEn: ["75\" display", "Multi-touch", "Smart classroom"],
    featuresKm: ["អេក្រង់ 75\"", "Multi-touch", "សម្រាប់ថ្នាក់រៀនឆ្លាតវៃ"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "75 inch",
        valueKm: "75 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (ជាទូទៅ)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["ស្មាតបូដ", "ការអប់រំ"],
    seoTitleEn: "75\" Interactive Smart Board in Cambodia",
    seoTitleKm: "ស្មាតបូដ 75\" នៅកម្ពុជា",
    seoDescEn:
      "Premium 75-inch interactive screen for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "អេក្រង់អន្តរកម្ម 75\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "interactive-screen-65",
    slug: "premium-quality-interactive-screen-65",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Premium Quality Interactive Screen 65\"",
    titleKm: "អេក្រង់អន្តរកម្មគុណភាពខ្ពស់ 65\"",
    shortDescEn: "Interactive screen for classrooms and meetings.",
    shortDescKm: "អេក្រង់អន្តរកម្មសម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    descriptionEn:
      "Premium 65-inch interactive screen for smart classrooms and meeting rooms.",
    descriptionKm:
      "អេក្រង់អន្តរកម្ម 65\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    featuresEn: ["65\" display", "Multi-touch", "Smart classroom"],
    featuresKm: ["អេក្រង់ 65\"", "Multi-touch", "សម្រាប់ថ្នាក់រៀនឆ្លាតវៃ"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "65 inch",
        valueKm: "65 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (ជាទូទៅ)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["ស្មាតបូដ", "ការអប់រំ"],
    seoTitleEn: "65\" Interactive Smart Board in Cambodia",
    seoTitleKm: "ស្មាតបូដ 65\" នៅកម្ពុជា",
    seoDescEn:
      "Premium 65-inch interactive screen for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "អេក្រង់អន្តរកម្ម 65\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "interactive-screen-55",
    slug: "premium-quality-interactive-screen-55",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Premium Quality Interactive Screen 55\"",
    titleKm: "អេក្រង់អន្តរកម្មគុណភាពខ្ពស់ 55\"",
    shortDescEn: "Compact interactive screen for small rooms.",
    shortDescKm: "អេក្រង់អន្តរកម្មទំហំតូច សម្រាប់បន្ទប់តូច។",
    descriptionEn:
      "Premium 55-inch interactive screen for small classrooms and meeting rooms.",
    descriptionKm:
      "អេក្រង់អន្តរកម្ម 55\" សម្រាប់ថ្នាក់រៀនតូច និងបន្ទប់ប្រជុំតូច។",
    featuresEn: ["55\" display", "Multi-touch", "Compact size"],
    featuresKm: ["អេក្រង់ 55\"", "Multi-touch", "ទំហំតូច"],
    applicationsEn: ["Small classroom", "Meeting room"],
    applicationsKm: ["ថ្នាក់រៀនតូច", "បន្ទប់ប្រជុំតូច"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "55 inch",
        valueKm: "55 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (ជាទូទៅ)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["ស្មាតបូដ", "ការអប់រំ"],
    seoTitleEn: "55\" Interactive Smart Board in Cambodia",
    seoTitleKm: "ស្មាតបូដ 55\" នៅកម្ពុជា",
    seoDescEn:
      "Premium 55-inch interactive screen for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "អេក្រង់អន្តរកម្ម 55\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "vanwinda-75",
    slug: "vanwinda-smart-board-4k-75",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "VANWINDA Smart Board 4K UHD 75\"",
    titleKm: "VANWINDA Smart Board 4K UHD 75\"",
    shortDescEn: "Smart board for classrooms and meeting rooms.",
    shortDescKm: "ស្មាតបូដសម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    descriptionEn:
      "VANWINDA 75-inch 4K smart board with multi-touch features for education and collaboration.",
    descriptionKm:
      "VANWINDA 75\" 4K សម្រាប់ការសហការនិងការអប់រំ។",
    featuresEn: ["4K UHD", "Multi-touch", "Screen sharing support"],
    featuresKm: ["4K UHD", "Multi-touch", "Screen sharing"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "75 inch",
        valueKm: "75 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD",
        valueKm: "4K UHD",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["ស្មាតបូដ", "ការអប់រំ"],
    seoTitleEn: "VANWINDA 75\" 4K Smart Board in Cambodia",
    seoTitleKm: "VANWINDA 75\" 4K ស្មាតបូដ នៅកម្ពុជា",
    seoDescEn:
      "VANWINDA 75-inch 4K smart board for classrooms and meetings in Cambodia.",
    seoDescKm:
      "VANWINDA 75\" 4K សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "vanwinda-65",
    slug: "vanwinda-smart-board-4k-65",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "VANWINDA Smart Board 4K UHD 65\"",
    titleKm: "VANWINDA Smart Board 4K UHD 65\"",
    shortDescEn: "65-inch smart board for classrooms and meeting rooms.",
    shortDescKm: "ស្មាតបូដ 65\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    descriptionEn:
      "VANWINDA 65-inch 4K smart board with multi-touch for education and collaboration.",
    descriptionKm:
      "VANWINDA 65\" 4K សម្រាប់ការសហការ និងការអប់រំ។",
    featuresEn: ["4K UHD", "Multi-touch", "Screen sharing support"],
    featuresKm: ["4K UHD", "Multi-touch", "Screen sharing"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "65 inch",
        valueKm: "65 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD",
        valueKm: "4K UHD",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["ស្មាតបូដ", "ការអប់រំ"],
    seoTitleEn: "VANWINDA 65\" 4K Smart Board in Cambodia",
    seoTitleKm: "VANWINDA 65\" 4K ស្មាតបូដ នៅកម្ពុជា",
    seoDescEn:
      "VANWINDA 65-inch 4K smart board for classrooms and meetings in Cambodia.",
    seoDescKm:
      "VANWINDA 65\" 4K សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "vanwinda-86",
    slug: "vanwinda-smart-board-4k-86",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "VANWINDA Smart Board 4K UHD 86\"",
    titleKm: "VANWINDA Smart Board 4K UHD 86\"",
    shortDescEn: "Large 86-inch smart board for big classrooms.",
    shortDescKm: "ស្មាតបូដ 86\" សម្រាប់ថ្នាក់រៀនធំៗ។",
    descriptionEn:
      "VANWINDA 86-inch 4K smart board with multi-touch for training and large meeting rooms.",
    descriptionKm:
      "VANWINDA 86\" 4K សម្រាប់ការបណ្តុះបណ្តាល និងបន្ទប់ប្រជុំធំៗ។",
    featuresEn: ["Large 86\" display", "Multi-touch", "4K UHD"],
    featuresKm: ["អេក្រង់ 86\"", "Multi-touch", "4K UHD"],
    applicationsEn: ["Training room", "Conference room"],
    applicationsKm: ["បន្ទប់បណ្តុះបណ្តាល", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "86 inch",
        valueKm: "86 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD",
        valueKm: "4K UHD",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Training"],
    tagsKm: ["ស្មាតបូដ", "បណ្តុះបណ្តាល"],
    seoTitleEn: "VANWINDA 86\" 4K Smart Board in Cambodia",
    seoTitleKm: "VANWINDA 86\" 4K ស្មាតបូដ នៅកម្ពុជា",
    seoDescEn:
      "VANWINDA 86-inch 4K smart board for large classrooms and training rooms in Cambodia.",
    seoDescKm:
      "VANWINDA 86\" 4K សម្រាប់ថ្នាក់រៀនធំ និងបន្ទប់បណ្តុះបណ្តាល នៅកម្ពុជា។",
  },
  {
    id: "skyworth-86",
    slug: "skyworth-smart-board-4k-86",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Skyworth Smart Board 4K 86\"",
    titleKm: "Skyworth Smart Board 4K 86\"",
    shortDescEn: "Large 86-inch smart board for premium classrooms.",
    shortDescKm: "ស្មាតបូដ 86\" សម្រាប់ថ្នាក់រៀនគុណភាពខ្ពស់។",
    descriptionEn:
      "Skyworth 86-inch 4K smart board for premium classrooms and large meeting rooms.",
    descriptionKm:
      "Skyworth 86\" 4K សម្រាប់ថ្នាក់រៀនគុណភាពខ្ពស់ និងបន្ទប់ប្រជុំធំៗ។",
    featuresEn: ["Large screen", "4K UHD", "Multi-touch"],
    featuresKm: ["អេក្រង់ធំ", "4K UHD", "Multi-touch"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "86 inch",
        valueKm: "86 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD",
        valueKm: "4K UHD",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["ស្មាតបូដ", "ការអប់រំ"],
    seoTitleEn: "Skyworth 86\" 4K Smart Board in Cambodia",
    seoTitleKm: "Skyworth 86\" 4K ស្មាតបូដ នៅកម្ពុជា",
    seoDescEn:
      "Skyworth 86-inch 4K smart board for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "Skyworth 86\" 4K សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "skyworth-75",
    slug: "skyworth-smart-board-4k-75",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Skyworth Smart Board 4K 75\"",
    titleKm: "Skyworth Smart Board 4K 75\"",
    shortDescEn: "75-inch smart board for classrooms and training rooms.",
    shortDescKm: "ស្មាតបូដ 75\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់បណ្តុះបណ្តាល។",
    descriptionEn:
      "Skyworth 75-inch 4K smart board for education, training and meeting spaces.",
    descriptionKm:
      "Skyworth 75\" 4K សម្រាប់ការអប់រំ និងបន្ទប់ប្រជុំ។",
    featuresEn: ["4K UHD", "Multi-touch", "Classroom ready"],
    featuresKm: ["4K UHD", "Multi-touch", "សម្រាប់ថ្នាក់រៀន"],
    applicationsEn: ["Classroom", "Training room"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់បណ្តុះបណ្តាល"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "75 inch",
        valueKm: "75 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD",
        valueKm: "4K UHD",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["ស្មាតបូដ", "ការអប់រំ"],
    seoTitleEn: "Skyworth 75\" 4K Smart Board in Cambodia",
    seoTitleKm: "Skyworth 75\" 4K ស្មាតបូដ នៅកម្ពុជា",
    seoDescEn:
      "Skyworth 75-inch 4K smart board for classrooms and training rooms in Cambodia.",
    seoDescKm:
      "Skyworth 75\" 4K សម្រាប់ថ្នាក់រៀន និងបន្ទប់បណ្តុះបណ្តាល នៅកម្ពុជា។",
  },
  {
    id: "smart-board-86",
    slug: "smart-board-86",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Smart Board 86\"",
    titleKm: "ស្មាតបូដ 86\"",
    shortDescEn: "86-inch interactive smart board.",
    shortDescKm: "ស្មាតបូដអន្តរកម្ម 86\"។",
    descriptionEn:
      "General-purpose 86-inch smart board for classrooms and meeting spaces.",
    descriptionKm:
      "ស្មាតបូដ 86\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    featuresEn: ["Large screen", "Interactive", "4K UHD (typical)"],
    featuresKm: ["អេក្រង់ធំ", "អន្តរកម្ម", "4K UHD (ជាទូទៅ)"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "86 inch",
        valueKm: "86 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (ជាទូទៅ)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board"],
    tagsKm: ["ស្មាតបូដ"],
    seoTitleEn: "Smart Board 86\" in Cambodia",
    seoTitleKm: "ស្មាតបូដ 86\" នៅកម្ពុជា",
    seoDescEn:
      "86-inch interactive smart board for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "ស្មាតបូដ 86\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "smart-board-75",
    slug: "smart-board-75",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Smart Board 75\"",
    titleKm: "ស្មាតបូដ 75\"",
    shortDescEn: "75-inch interactive smart board.",
    shortDescKm: "ស្មាតបូដអន្តរកម្ម 75\"។",
    descriptionEn:
      "General-purpose 75-inch smart board for classrooms and meeting spaces.",
    descriptionKm:
      "ស្មាតបូដ 75\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    featuresEn: ["Interactive display", "4K UHD (typical)", "Classroom ready"],
    featuresKm: ["អន្តរកម្ម", "4K UHD (ជាទូទៅ)", "សម្រាប់ថ្នាក់រៀន"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "75 inch",
        valueKm: "75 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (ជាទូទៅ)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board"],
    tagsKm: ["ស្មាតបូដ"],
    seoTitleEn: "Smart Board 75\" in Cambodia",
    seoTitleKm: "ស្មាតបូដ 75\" នៅកម្ពុជា",
    seoDescEn:
      "75-inch interactive smart board for classrooms and meetings in Cambodia.",
    seoDescKm:
      "ស្មាតបូដ 75\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "smart-board-65",
    slug: "smart-board-65",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Smart Board 65\"",
    titleKm: "ស្មាតបូដ 65\"",
    shortDescEn: "65-inch interactive smart board.",
    shortDescKm: "ស្មាតបូដអន្តរកម្ម 65\"។",
    descriptionEn:
      "General-purpose 65-inch smart board for classrooms and meeting spaces.",
    descriptionKm:
      "ស្មាតបូដ 65\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ។",
    featuresEn: ["Interactive display", "4K UHD (typical)", "Compact size"],
    featuresKm: ["អន្តរកម្ម", "4K UHD (ជាទូទៅ)", "ទំហំសមរម្យ"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["ថ្នាក់រៀន", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "65 inch",
        valueKm: "65 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (ជាទូទៅ)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board"],
    tagsKm: ["ស្មាតបូដ"],
    seoTitleEn: "Smart Board 65\" in Cambodia",
    seoTitleKm: "ស្មាតបូដ 65\" នៅកម្ពុជា",
    seoDescEn:
      "65-inch interactive smart board for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "ស្មាតបូដ 65\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "smart-board-55",
    slug: "smart-board-55",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Smart Board 55\"",
    titleKm: "ស្មាតបូដ 55\"",
    shortDescEn: "55-inch interactive smart board.",
    shortDescKm: "ស្មាតបូដអន្តរកម្ម 55\"។",
    descriptionEn:
      "Compact 55-inch smart board for small classrooms and meeting rooms.",
    descriptionKm:
      "ស្មាតបូដ 55\" សម្រាប់ថ្នាក់រៀនតូច និងបន្ទប់ប្រជុំតូច។",
    featuresEn: ["Compact size", "Interactive", "4K UHD (typical)"],
    featuresKm: ["ទំហំតូច", "អន្តរកម្ម", "4K UHD (ជាទូទៅ)"],
    applicationsEn: ["Small classroom", "Meeting room"],
    applicationsKm: ["ថ្នាក់រៀនតូច", "បន្ទប់ប្រជុំ"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ទំហំអេក្រង់",
        valueEn: "55 inch",
        valueKm: "55 អ៊ីញ",
      },
      {
        labelEn: "Resolution",
        labelKm: "គុណភាពបង្ហាញ",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (ជាទូទៅ)",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    gallery: [
      "https://www.mugnee.com/wp-content/uploads/2024/09/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board"],
    tagsKm: ["ស្មាតបូដ"],
    seoTitleEn: "Smart Board 55\" in Cambodia",
    seoTitleKm: "ស្មាតបូដ 55\" នៅកម្ពុជា",
    seoDescEn:
      "55-inch interactive smart board for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "ស្មាតបូដ 55\" សម្រាប់ថ្នាក់រៀន និងបន្ទប់ប្រជុំ នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-q20",
    slug: "ds-q20-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-Q20 Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-Q20",
    shortDescEn: "Full-height turnstile gate for secure entry control.",
    shortDescKm: "ច្រកទ្វារកម្ពស់ពេញ សម្រាប់គ្រប់គ្រងចូលចេញ។",
    descriptionEn:
      "DS-Q20 full-height turnstile gate for secure entry control in factories, offices and restricted areas. Durable design with smooth pedestrian flow.",
    descriptionKm:
      "ច្រកទ្វារ DS-Q20 កម្ពស់ពេញ សម្រាប់គ្រប់គ្រងចូលចេញនៅរោងចក្រ ការិយាល័យ និងតំបន់មានការការពារ។",
    featuresEn: ["Full-height security", "Durable construction", "Smooth flow"],
    featuresKm: ["សុវត្ថិភាពកម្ពស់ពេញ", "រចនាអាយុកាលវែង", "ចលនារលូន"],
    applicationsEn: ["Factory", "Office", "Restricted area"],
    applicationsKm: ["រោងចក្រ", "ការិយាល័យ", "តំបន់មានការការពារ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Full-height turnstile",
        valueKm: "Turnstile កម្ពស់ពេញ",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Security", "Turnstile"],
    tagsKm: ["សុវត្ថិភាព", "Turnstile"],
    seoTitleEn: "DS-Q20 Full Height Turnstile in Cambodia",
    seoTitleKm: "DS-Q20 Turnstile កម្ពស់ពេញ នៅកម្ពុជា",
    seoDescEn:
      "DS-Q20 full-height turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-Q20 សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-306",
    slug: "ds-306-double-side-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-306 Double Side Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-306",
    shortDescEn: "Double side turnstile for controlled entry.",
    shortDescKm: "Turnstile ពីរផ្លូវសម្រាប់គ្រប់គ្រងចូលចេញ។",
    descriptionEn:
      "DS-306 double side turnstile gate for secure entry control in offices, factories and venues.",
    descriptionKm:
      "ច្រកទ្វារ DS-306 សម្រាប់គ្រប់គ្រងចូលចេញក្នុងការិយាល័យ និងរោងចក្រ។",
    featuresEn: ["Double side passage", "Durable build", "Access control ready"],
    featuresKm: ["ច្រកពីរផ្លូវ", "ធន់នឹងការប្រើប្រាស់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Office", "Factory", "Venue"],
    applicationsKm: ["ការិយាល័យ", "រោងចក្រ", "ទីតាំងសាធារណៈ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Double side turnstile",
        valueKm: "Turnstile ពីរផ្លូវ",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "សុវត្ថិភាព"],
    seoTitleEn: "DS-306 Turnstile Gate in Cambodia",
    seoTitleKm: "ច្រកទ្វារ DS-306 នៅកម្ពុជា",
    seoDescEn:
      "DS-306 double side turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-306 សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-1500f",
    slug: "ds-1500f-full-height-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-1500F Full Height Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-1500F",
    shortDescEn: "Full height turnstile for secure areas.",
    shortDescKm: "Turnstile កម្ពស់ពេញសម្រាប់តំបន់មានការការពារ។",
    descriptionEn:
      "DS-1500F full height turnstile gate for secure access control in restricted areas.",
    descriptionKm:
      "ច្រកទ្វារ DS-1500F កម្ពស់ពេញ សម្រាប់តំបន់មានការការពារ។",
    featuresEn: ["Full height security", "Durable frame", "Access control ready"],
    featuresKm: ["សុវត្ថិភាពកម្ពស់ពេញ", "គ្រឿងធន់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Factory", "Industrial site", "Restricted area"],
    applicationsKm: ["រោងចក្រ", "ទីតាំងឧស្សាហកម្ម", "តំបន់មានការការពារ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Full height turnstile",
        valueKm: "Turnstile កម្ពស់ពេញ",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Full Height", "Security"],
    tagsKm: ["កម្ពស់ពេញ", "សុវត្ថិភាព"],
    seoTitleEn: "DS-1500F Full Height Turnstile in Cambodia",
    seoTitleKm: "DS-1500F Turnstile កម្ពស់ពេញ នៅកម្ពុជា",
    seoDescEn:
      "DS-1500F full height turnstile gate for secure access control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-1500F សម្រាប់ការគ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-2000d",
    slug: "ds-2000d-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-2000D Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-2000D",
    shortDescEn: "Durable turnstile for entry control.",
    shortDescKm: "Turnstile ធន់សម្រាប់គ្រប់គ្រងចូលចេញ។",
    descriptionEn:
      "DS-2000D turnstile gate for secure access control in offices and public venues.",
    descriptionKm:
      "ច្រកទ្វារ DS-2000D សម្រាប់គ្រប់គ្រងចូលចេញនៅការិយាល័យ និងទីតាំងសាធារណៈ។",
    featuresEn: ["Secure entry", "Durable design", "Access control ready"],
    featuresKm: ["ចូលចេញមានសុវត្ថិភាព", "រចនាធន់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Office", "Public venue"],
    applicationsKm: ["ការិយាល័យ", "ទីតាំងសាធារណៈ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "សុវត្ថិភាព"],
    seoTitleEn: "DS-2000D Turnstile Gate in Cambodia",
    seoTitleKm: "ច្រកទ្វារ DS-2000D នៅកម្ពុជា",
    seoDescEn:
      "DS-2000D turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-2000D សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-2000f",
    slug: "ds-2000f-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-2000F Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-2000F",
    shortDescEn: "Turnstile gate for controlled entry.",
    shortDescKm: "Turnstile សម្រាប់គ្រប់គ្រងចូលចេញ។",
    descriptionEn:
      "DS-2000F turnstile gate for reliable access control in offices and facilities.",
    descriptionKm:
      "ច្រកទ្វារ DS-2000F សម្រាប់គ្រប់គ្រងចូលចេញនៅការិយាល័យ និងអគារ។",
    featuresEn: ["Reliable entry control", "Durable build", "Access control ready"],
    featuresKm: ["គ្រប់គ្រងចូលចេញមានស្ថេរភាព", "រចនាធន់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Office", "Facility"],
    applicationsKm: ["ការិយាល័យ", "អគារ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "សុវត្ថិភាព"],
    seoTitleEn: "DS-2000F Turnstile Gate in Cambodia",
    seoTitleKm: "ច្រកទ្វារ DS-2000F នៅកម្ពុជា",
    seoDescEn:
      "DS-2000F turnstile gate for secure access control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-2000F សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-2000h",
    slug: "ds-2000h-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-2000H Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-2000H",
    shortDescEn: "Turnstile gate for secure flow control.",
    shortDescKm: "Turnstile សម្រាប់គ្រប់គ្រងចលនា។",
    descriptionEn:
      "DS-2000H turnstile gate for secure entry flow in commercial and public facilities.",
    descriptionKm:
      "ច្រកទ្វារ DS-2000H សម្រាប់គ្រប់គ្រងចូលចេញនៅទីតាំងពាណិជ្ជកម្ម។",
    featuresEn: ["Secure flow", "Durable structure", "Access control ready"],
    featuresKm: ["គ្រប់គ្រងចលនា", "រចនាធន់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Commercial", "Public facility"],
    applicationsKm: ["ពាណិជ្ជកម្ម", "ទីតាំងសាធារណៈ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "សុវត្ថិភាព"],
    seoTitleEn: "DS-2000H Turnstile Gate in Cambodia",
    seoTitleKm: "ច្រកទ្វារ DS-2000H នៅកម្ពុជា",
    seoDescEn:
      "DS-2000H turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-2000H សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-2000r",
    slug: "ds-2000r-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-2000R Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-2000R",
    shortDescEn: "Turnstile gate for controlled access.",
    shortDescKm: "Turnstile សម្រាប់គ្រប់គ្រងចូលចេញ។",
    descriptionEn:
      "DS-2000R turnstile gate for access control in offices and public venues.",
    descriptionKm:
      "ច្រកទ្វារ DS-2000R សម្រាប់គ្រប់គ្រងចូលចេញនៅការិយាល័យ និងទីតាំងសាធារណៈ។",
    featuresEn: ["Secure entry", "Durable", "Access control ready"],
    featuresKm: ["ចូលចេញមានសុវត្ថិភាព", "ធន់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Office", "Public venue"],
    applicationsKm: ["ការិយាល័យ", "ទីតាំងសាធារណៈ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "សុវត្ថិភាព"],
    seoTitleEn: "DS-2000R Turnstile Gate in Cambodia",
    seoTitleKm: "ច្រកទ្វារ DS-2000R នៅកម្ពុជា",
    seoDescEn:
      "DS-2000R turnstile gate for secure access control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-2000R សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-2100s",
    slug: "ds-2100s-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-2100S Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-2100S",
    shortDescEn: "Turnstile gate for secure access flow.",
    shortDescKm: "Turnstile សម្រាប់ការគ្រប់គ្រងចូលចេញ។",
    descriptionEn:
      "DS-2100S turnstile gate for high-traffic access control in offices and facilities.",
    descriptionKm:
      "ច្រកទ្វារ DS-2100S សម្រាប់គ្រប់គ្រងចូលចេញនៅទីតាំងមានចរាចរច្រើន។",
    featuresEn: ["High traffic ready", "Durable", "Access control ready"],
    featuresKm: ["សម្រាប់ចរាចរច្រើន", "ធន់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Office", "Facility"],
    applicationsKm: ["ការិយាល័យ", "អគារ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "សុវត្ថិភាព"],
    seoTitleEn: "DS-2100S Turnstile Gate in Cambodia",
    seoTitleKm: "ច្រកទ្វារ DS-2100S នៅកម្ពុជា",
    seoDescEn:
      "DS-2100S turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-2100S សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-8000h",
    slug: "ds-8000h-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-8000H Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-8000H",
    shortDescEn: "Turnstile gate for secure access control.",
    shortDescKm: "Turnstile សម្រាប់គ្រប់គ្រងចូលចេញ។",
    descriptionEn:
      "DS-8000H turnstile gate for secure entry control in commercial areas.",
    descriptionKm:
      "ច្រកទ្វារ DS-8000H សម្រាប់គ្រប់គ្រងចូលចេញនៅតំបន់ពាណិជ្ជកម្ម។",
    featuresEn: ["Secure access", "Durable build", "Access control ready"],
    featuresKm: ["ចូលចេញមានសុវត្ថិភាព", "រចនាធន់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Commercial", "Office"],
    applicationsKm: ["ពាណិជ្ជកម្ម", "ការិយាល័យ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "សុវត្ថិភាព"],
    seoTitleEn: "DS-8000H Turnstile Gate in Cambodia",
    seoTitleKm: "ច្រកទ្វារ DS-8000H នៅកម្ពុជា",
    seoDescEn:
      "DS-8000H turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-8000H សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-tm",
    slug: "ds-tm-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-TM Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-TM",
    shortDescEn: "Turnstile gate for controlled access.",
    shortDescKm: "Turnstile សម្រាប់គ្រប់គ្រងចូលចេញ។",
    descriptionEn:
      "DS-TM turnstile gate for reliable access control in offices and venues.",
    descriptionKm:
      "ច្រកទ្វារ DS-TM សម្រាប់គ្រប់គ្រងចូលចេញនៅការិយាល័យ និងទីតាំងសាធារណៈ។",
    featuresEn: ["Secure entry", "Durable", "Access control ready"],
    featuresKm: ["ចូលចេញមានសុវត្ថិភាព", "ធន់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Office", "Venue"],
    applicationsKm: ["ការិយាល័យ", "ទីតាំងសាធារណៈ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "សុវត្ថិភាព"],
    seoTitleEn: "DS-TM Turnstile Gate in Cambodia",
    seoTitleKm: "ច្រកទ្វារ DS-TM នៅកម្ពុជា",
    seoDescEn:
      "DS-TM turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-TM សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-tmg",
    slug: "ds-tmg-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-TMG Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-TMG",
    shortDescEn: "Turnstile gate for secure entry.",
    shortDescKm: "Turnstile សម្រាប់ចូលចេញមានសុវត្ថិភាព។",
    descriptionEn:
      "DS-TMG turnstile gate for secure access control in facilities.",
    descriptionKm:
      "ច្រកទ្វារ DS-TMG សម្រាប់គ្រប់គ្រងចូលចេញនៅអគារ។",
    featuresEn: ["Secure access", "Durable build", "Access control ready"],
    featuresKm: ["ចូលចេញមានសុវត្ថិភាព", "រចនាធន់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Facility", "Office"],
    applicationsKm: ["អគារ", "ការិយាល័យ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "សុវត្ថិភាព"],
    seoTitleEn: "DS-TMG Turnstile Gate in Cambodia",
    seoTitleKm: "ច្រកទ្វារ DS-TMG នៅកម្ពុជា",
    seoDescEn:
      "DS-TMG turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-TMG សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
  {
    id: "turnstile-ds-tms",
    slug: "ds-tms-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-TMS Turnstile Gate",
    titleKm: "ច្រកទ្វារ Turnstile DS-TMS",
    shortDescEn: "Turnstile gate for secure access.",
    shortDescKm: "Turnstile សម្រាប់ចូលចេញមានសុវត្ថិភាព។",
    descriptionEn:
      "DS-TMS turnstile gate for reliable access control in commercial spaces.",
    descriptionKm:
      "ច្រកទ្វារ DS-TMS សម្រាប់គ្រប់គ្រងចូលចេញនៅតំបន់ពាណិជ្ជកម្ម។",
    featuresEn: ["Secure entry", "Durable build", "Access control ready"],
    featuresKm: ["ចូលចេញមានសុវត្ថិភាព", "រចនាធន់", "ភ្ជាប់ Access Control បាន"],
    applicationsEn: ["Commercial", "Office"],
    applicationsKm: ["ពាណិជ្ជកម្ម", "ការិយាល័យ"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "ប្រភេទច្រក",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "ការភ្ជាប់",
        valueEn: "Access control ready",
        valueKm: "អាចភ្ជាប់ Access Control",
      },
    ],
    heroImage:
      "https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg",
    gallery: ["https://www.mugnee.com/wp-content/uploads/2024/09/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "សុវត្ថិភាព"],
    seoTitleEn: "DS-TMS Turnstile Gate in Cambodia",
    seoTitleKm: "ច្រកទ្វារ DS-TMS នៅកម្ពុជា",
    seoDescEn:
      "DS-TMS turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "ច្រកទ្វារ DS-TMS សម្រាប់គ្រប់គ្រងចូលចេញមានសុវត្ថិភាព នៅកម្ពុជា។",
  },
];

export function getAllProducts() {
  return PRODUCTS;
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string) {
  return PRODUCTS.filter((p) => p.categoryIds.includes(categoryId));
}

export function getCategoryById(categoryId: string) {
  return PRODUCT_CATEGORIES.find((c) => c.id === categoryId);
}
