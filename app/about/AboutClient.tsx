"use client";

import Link from "next/link";
import { useLang } from "../components/layout/LanguageProvider";

const heroTags = [
  "LED Display",
  "Digital Signage",
  "Smart Board",
  "PA System",
  "Turnstile Gate",
  "Access Control",
];

const highlights = [
  {
    title: "Our Vision",
    desc:
      "To become a trusted technology leader for LED display, digital signage, PA system, smart classroom, and access control solutions in Cambodia by building future-ready, secure, and high-performance environments for business and public institutions.",
  },
  {
    title: "Our Mission",
    desc:
      "Our mission is to deliver end-to-end, dependable, and scalable system integration services from site survey, design, and installation to commissioning, training, AMC, and after-sales support with transparent execution and measurable client outcomes.",
  },
  {
    title: "Our Strength",
    desc:
      "Our strength comes from experienced engineers, structured project management, genuine components, compliance-focused installation standards, and long-term maintenance capability that helps clients achieve higher uptime and lower operational risk.",
  },
];

const values = [
  {
    title: "Integrity",
    desc:
      "We maintain transparent communication, ethical project practices, and genuine product sourcing so clients receive reliable LED, signage, PA, and access control solutions with long-term trust and accountability.",
  },
  {
    title: "Innovation",
    desc:
      "We continuously adopt modern controllers, automation workflows, and integration best practices to improve system performance, scalability, and operational efficiency for Cambodia business environments.",
  },
  {
    title: "Excellence",
    desc:
      "We follow strict quality assurance, safety compliance, and disciplined project execution standards from design to commissioning, ensuring stable performance and high service quality at every stage.",
  },
  {
    title: "Customer Commitment",
    desc:
      "Our team provides responsive after-sales support, practical user training, preventive maintenance, and AMC continuity to help clients reduce downtime and protect long-term technology investment.",
  },
];

const storyPoints = [
  "Founded in 2014 to deliver engineering-grade LED and smart technology solutions.",
  "End-to-end execution: design, supply, installation, integration, commissioning, and support.",
  "Direct operations in Cambodia through Mugnee Multiple Co., Ltd with consistent service standards.",
];

const storyMilestones = [
  {
    phase: "Foundation",
    detail:
      "Started with a clear engineering-first model focused on reliable LED display and digital signage project delivery.",
  },
  {
    phase: "Execution Growth",
    detail:
      "Expanded into complete solution lifecycle delivery including site survey, technical design, installation, integration, and commissioning.",
  },
  {
    phase: "Cambodia Expansion",
    detail:
      "Established direct Cambodia operations with local technical support, faster response, and structured after-sales service continuity.",
  },
];

const presence = [
  {
    title: "Bangladesh",
    desc:
      "Our Bangladesh presence supports nationwide project delivery with structured planning, professional installation, and long-term maintenance for LED display, signage, audio, and control systems.",
  },
  {
    title: "Cambodia",
    desc:
      "In Cambodia, Mugnee Multiple Co., Ltd operates with a local engineering team for site survey, system integration, commissioning, and responsive after-sales support across Phnom Penh and other key cities.",
  },
];

const authorizedDistributor = [
  "Authorized distribution and project support in Cambodia through Mugnee Multiple Co., Ltd.",
  "Ensures authentic products, proper technical documentation, and compliance-focused installation standards.",
  "Provides local pre-sales consultation, engineering coordination, and after-sales service continuity for Cambodia clients.",
];

const whatWeDo = [
  {
    title: "Requirement Analysis & Site Survey",
    detail:
      "We evaluate power, networking, structure, traffic flow, and viewing distance to define a technically accurate project scope for Cambodia sites.",
  },
  {
    title: "Solution Engineering & System Design",
    detail:
      "Our team designs LED display, signage, PA, and access control architecture including module selection, controller planning, and performance targets.",
  },
  {
    title: "Supply, Installation & Safe Execution",
    detail:
      "We deliver genuine products with professional mounting, clean cable management, safety-focused installation practices, and structured quality checks.",
  },
  {
    title: "Integration, Configuration & Commissioning",
    detail:
      "We complete system integration, configuration, calibration, and functional testing to ensure stable operation, usability, and readiness for daily use.",
  },
  {
    title: "Training, AMC & Lifecycle Support",
    detail:
      "After handover, we provide user training, troubleshooting, preventive maintenance, AMC options, and continuous technical support for long-term reliability.",
  },
];

const cambodiaOps = [
  {
    title: "Local Engineering Execution in Cambodia",
    detail:
      "Projects are delivered through local technical coordination for site survey, design validation, installation, integration, and commissioning across Cambodia.",
  },
  {
    title: "Faster Onsite Response and Support Continuity",
    detail:
      "A Cambodia-based support workflow enables quicker troubleshooting, maintenance planning, and operational stabilization for business-critical systems.",
  },
  {
    title: "Standardized Delivery and Quality Control",
    detail:
      "We follow structured SOPs, technical checklists, and compliance-focused practices to maintain consistent quality from project kickoff to handover.",
  },
  {
    title: "Lifecycle Reliability and AMC Readiness",
    detail:
      "Post-installation plans include training, preventive maintenance, and AMC support to improve uptime, reduce repeat faults, and protect long-term investment.",
  },
];

const offers = [
  {
    title: "LED Display & Video Wall",
    desc: "Indoor and outdoor LED displays, fine-pitch video walls, rental LED, control room displays.",
  },
  {
    title: "Digital Signage",
    desc: "Commercial signage for malls, campuses, showrooms, and roadside advertising networks.",
  },
  {
    title: "Smart Board / Smart Classroom",
    desc: "Interactive displays for education and meeting environments with OPS/PC integration.",
  },
  {
    title: "PA System & Audio",
    desc: "Public address systems for institutions, factories, mosques, and large venues.",
  },
  {
    title: "Access Control Solutions",
    desc: "Turnstile gates, door access, attendance systems, biometrics, and visitor control.",
  },
  {
    title: "Custom Integration & Support",
    desc: "Networking, power distribution, mounting, commissioning, and AMC support.",
  },
];

const achievements = [
  {
    title: "Institutional & Government Delivery",
    desc: "Projects executed with compliant documentation and professional handover.",
  },
  {
    title: "Long-Term Client Trust",
    desc: "Built on transparency, genuine products, and reliable support.",
  },
  {
    title: "Support & Maintenance Capability",
    desc: "Dedicated support team, spare parts planning, and preventive maintenance systems.",
  },
  {
    title: "Cambodia Market-Focused Solution Engineering",
    desc: "Site-ready solution design tailored for Phnom Penh, Siem Reap, Sihanoukville, and nationwide operating conditions.",
  },
  {
    title: "End-to-End LED, Signage & Access Integration",
    desc: "Successful delivery of integrated LED display, digital signage, PA, and access control systems for business-critical environments.",
  },
  {
    title: "Faster Deployment With Structured Project Workflow",
    desc: "Survey-to-commissioning process with BOQ planning, testing, documentation, and post-install support for long-term performance.",
  },
];

const faqs = [
  {
    q: "Who is Mugnee Cambodia and what does your company specialize in?",
    a: "Mugnee Cambodia is a technology solutions provider specializing in LED display, digital signage, smart classroom systems, PA systems, and access control integration with end-to-end project delivery.",
  },
  {
    q: "Do you provide complete project delivery from design to commissioning?",
    a: "Yes. Our team handles requirement analysis, site survey, technical design, product supply, installation, integration, commissioning, training, and after-sales support.",
  },
  {
    q: "Which solutions does Mugnee Cambodia offer for business and public sites?",
    a: "We offer indoor and outdoor LED displays, digital signage networks, interactive smart boards, PA and announcement systems, turnstile gates, and access control solutions for multiple industries.",
  },
  {
    q: "Can Mugnee Cambodia customize solutions based on site and budget?",
    a: "Yes. We customize system architecture based on site size, traffic flow, viewing distance, security requirements, integration scope, and budget priorities.",
  },
  {
    q: "Do you provide local installation and support in Cambodia?",
    a: "Yes. We provide local engineering support in Cambodia for installation, troubleshooting, preventive maintenance, and long-term AMC-based service continuity.",
  },
  {
    q: "What industries do you typically serve in Cambodia?",
    a: "We support retail, corporate offices, factories, education institutions, healthcare facilities, hospitality venues, and public-sector projects.",
  },
  {
    q: "How do you ensure quality and reliability in project execution?",
    a: "We follow structured project workflows, quality checkpoints, safe installation standards, system testing, and technical handover procedures to ensure stable and reliable operation.",
  },
  {
    q: "Do you provide training and documentation after project handover?",
    a: "Yes. We provide operator training, basic troubleshooting guidance, and project documentation so client teams can manage daily system operations confidently.",
  },
  {
    q: "Can your systems integrate with existing software or control platforms?",
    a: "Yes. Depending on project scope, we integrate with CMS, attendance, visitor management, and other operational platforms to improve workflow efficiency.",
  },
  {
    q: "How can we contact Mugnee Cambodia for a quotation?",
    a: "You can contact us through the website contact page with your site details, project goals, and required solution type to receive a structured proposal and quotation.",
  },
];

const heroTagsKm = [
  "អេក្រង់ LED",
  "ផ្លាកឌីជីថល",
  "Smart Board",
  "ប្រព័ន្ធ PA",
  "ទ្វារ Turnstile",
  "គ្រប់គ្រងច្រកចូល",
];

const highlightsKm = [
  {
    title: "ចក្ខុវិស័យរបស់យើង",
    desc:
      "ក្លាយជាក្រុមហ៊ុនបច្ចេកវិទ្យាដែលអាចទុកចិត្តបាន សម្រាប់ LED display, digital signage, PA, smart classroom និង access control នៅកម្ពុជា។",
  },
  {
    title: "បេសកកម្មរបស់យើង",
    desc:
      "ផ្តល់សេវា end-to-end ដែលមានស្ថិរភាព និងអាចពង្រីកបាន ចាប់ពីស្ទង់ទីតាំង រចនា ដំឡើង បើកប្រើប្រាស់ បណ្តុះបណ្តាល AMC និងសេវាបន្ទាប់ពីលក់។",
  },
  {
    title: "កម្លាំងរបស់យើង",
    desc:
      "ក្រុមវិស្វករមានបទពិសោធន៍ ការគ្រប់គ្រងគម្រោងមានរចនាសម្ព័ន្ធ សម្ភារៈស្តង់ដារ និងសមត្ថភាពថែទាំរយៈពេលវែង។",
  },
];

const valuesKm = [
  { title: "សុចរិតភាព", desc: "យើងទំនាក់ទំនងច្បាស់លាស់ អនុវត្តតាមវិជ្ជាជីវៈ និងប្រើផលិតផលពិតប្រាកដ ដើម្បីបង្កើតទំនុកចិត្តរយៈពេលវែង។" },
  { title: "នវានុវត្តន៍", desc: "យើងអនុវត្តបច្ចេកវិទ្យាទំនើប និង integration best practice ដើម្បីបង្កើនសមត្ថភាពប្រព័ន្ធ។" },
  { title: "គុណភាពខ្ពស់", desc: "យើងអនុវត្តស្តង់ដារ QA សុវត្ថិភាព និងដំណើរការគម្រោងយ៉ាងម៉ត់ចត់ចាប់ពីរចនាដល់បើកប្រើប្រាស់។" },
  { title: "ការប្តេជ្ញាចំពោះអតិថិជន", desc: "យើងផ្តល់គាំទ្រឆ្លើយតបលឿន បណ្តុះបណ្តាលអ្នកប្រើ ថែទាំបង្ការ និង AMC សម្រាប់ការប្រើប្រាស់មានស្ថិរភាព។" },
];

const storyPointsKm = [
  "បង្កើតឡើងក្នុងឆ្នាំ 2014 ដើម្បីផ្តល់ដំណោះស្រាយបច្ចេកវិទ្យាដែលមានស្តង់ដារវិស្វកម្ម។",
  "អនុវត្តគម្រោង end-to-end: រចនា ផ្គត់ផ្គង់ ដំឡើង បញ្ចូលប្រព័ន្ធ បើកប្រើប្រាស់ និងគាំទ្រ។",
  "ដំណើរការផ្ទាល់នៅកម្ពុជា តាមរយៈ Mugnee Multiple Co., Ltd ជាមួយស្តង់ដារសេវាដែលមានស្ថិរភាព។",
];

const storyMilestonesKm = [
  { phase: "ការចាប់ផ្តើម", detail: "ចាប់ផ្តើមដោយគំរូ engineering-first ផ្តោតលើគុណភាពអនុវត្ត LED និង digital signage។" },
  { phase: "ការពង្រីកការអនុវត្ត", detail: "ពង្រីកទៅជាវដ្តសេវាពេញលេញ រួមមានស្ទង់ទីតាំង រចនា ដំឡើង បញ្ចូលប្រព័ន្ធ និងបើកប្រើប្រាស់។" },
  { phase: "ពង្រីកនៅកម្ពុជា", detail: "បង្កើតប្រតិបត្តិការផ្ទាល់នៅកម្ពុជា ដើម្បីគាំទ្របច្ចេកទេសលឿន និងបន្តសេវាបន្ទាប់ពីលក់។" },
];

const presenceKm = [
  { title: "បង់ក្លាដែស", desc: "ប្រតិបត្តិការនៅបង់ក្លាដែស គាំទ្រការអនុវត្តគម្រោងទូទាំងប្រទេស ជាមួយការរៀបចំ ដំឡើង និងថែទាំរយៈពេលវែង។" },
  { title: "កម្ពុជា", desc: "នៅកម្ពុជា Mugnee Multiple Co., Ltd ដំណើរការជាមួយក្រុមវិស្វករក្នុងតំបន់ សម្រាប់ស្ទង់ទីតាំង បញ្ចូលប្រព័ន្ធ បើកប្រើប្រាស់ និងគាំទ្របន្ទាប់ពីលក់។" },
];

const authorizedDistributorKm = [
  "អនុញ្ញាតចែកចាយ និងគាំទ្រគម្រោងនៅកម្ពុជា តាមរយៈ Mugnee Multiple Co., Ltd។",
  "ធានាផលិតផលពិតប្រាកដ ឯកសារបច្ចេកទេសត្រឹមត្រូវ និងស្តង់ដារដំឡើងផ្តោតលើសុវត្ថិភាព។",
  "ផ្តល់ពិគ្រោះមុនលក់ សម្របសម្រួលវិស្វកម្ម និងបន្តសេវាបន្ទាប់ពីលក់សម្រាប់អតិថិជនកម្ពុជា។",
];

const whatWeDoKm = [
  { title: "វិភាគតម្រូវការ និងស្ទង់ទីតាំង", detail: "វាយតម្លៃថាមពល បណ្តាញ រចនាសម្ព័ន្ធ ចរាចរណ៍ និងចម្ងាយមើល ដើម្បីកំណត់វិសាលភាពគម្រោងត្រឹមត្រូវ។" },
  { title: "វិស្វកម្មដំណោះស្រាយ និងរចនាប្រព័ន្ធ", detail: "រចនាស្ថាបត្យកម្ម LED, signage, PA និង access control រួមទាំងការជ្រើស module និង controller planning។" },
  { title: "ផ្គត់ផ្គង់ ដំឡើង និងអនុវត្តប្រកបដោយសុវត្ថិភាព", detail: "ផ្គត់ផ្គង់ផលិតផលស្តង់ដារ ជាមួយការតម្លើងវិជ្ជាជីវៈ ការរៀបខ្សែស្អាត និងការត្រួតពិនិត្យគុណភាពជាក់លាក់។" },
  { title: "បញ្ចូលប្រព័ន្ធ កំណត់រចនា និងបើកប្រើប្រាស់", detail: "អនុវត្ត integration កំណត់រចនា calibration និងសាកល្បងមុខងារ ដើម្បីធានាប្រព័ន្ធរួចរាល់ប្រើប្រាស់។" },
  { title: "បណ្តុះបណ្តាល AMC និងគាំទ្រវដ្តជីវិត", detail: "បន្ទាប់ពីប្រគល់ការងារ យើងផ្តល់បណ្តុះបណ្តាល ថែទាំបង្ការ AMC និងគាំទ្របច្ចេកទេសបន្ត។" },
];

const cambodiaOpsKm = [
  { title: "អនុវត្តវិស្វកម្មក្នុងតំបន់កម្ពុជា", detail: "គម្រោងត្រូវបានអនុវត្តតាមក្រុមបច្ចេកទេសក្នុងតំបន់ ចាប់ពីស្ទង់ទីតាំង ដល់បើកប្រើប្រាស់។" },
  { title: "ឆ្លើយតប Onsite លឿន និងបន្តសេវា", detail: "workflow គាំទ្រនៅកម្ពុជាជួយដោះស្រាយបញ្ហាបានលឿន និងរក្សាស្ថិរភាពប្រតិបត្តិការ។" },
  { title: "ការដឹកជញ្ជូនមានស្តង់ដារ និងគ្រប់គ្រងគុណភាព", detail: "យើងអនុវត្ត SOP និង checklist បច្ចេកទេស ដើម្បីរក្សាគុណភាពឯកសណ្ឋានពីចាប់ផ្តើមដល់ប្រគល់ការងារ។" },
  { title: "ភាពជឿជាក់រយៈពេលវែង និង AMC readiness", detail: "ផែនការបន្ទាប់ពីដំឡើង រួមមានបណ្តុះបណ្តាល ថែទាំបង្ការ និង AMC ដើម្បីបង្កើន uptime និងកាត់បន្ថយបញ្ហាដដែល។" },
];

const offersKm = [
  { title: "LED Display & Video Wall", desc: "អេក្រង់ LED ខាងក្នុង/ខាងក្រៅ Fine-pitch video wall Rental LED និងអេក្រង់បន្ទប់គ្រប់គ្រង។" },
  { title: "Digital Signage", desc: "Digital signage សម្រាប់ផ្សារទំនើប បរិវេណសិក្សា បន្ទប់បង្ហាញ និងបណ្ដាញផ្សាយពាណិជ្ជកម្មតាមផ្លូវ។" },
  { title: "Smart Board / Smart Classroom", desc: "អេក្រង់អន្តរកម្មសម្រាប់អប់រំ និងបន្ទប់ប្រជុំ ជាមួយការភ្ជាប់ OPS/PC។" },
  { title: "PA System & Audio", desc: "ប្រព័ន្ធផ្សាយសំឡេងសាធារណៈ សម្រាប់ស្ថាប័ន រោងចក្រ វិហារ និងទីតាំងធំៗ។" },
  { title: "Access Control Solutions", desc: "Turnstile gate Door access Attendance Biometric និងការគ្រប់គ្រងភ្ញៀវ។" },
  { title: "Custom Integration & Support", desc: "បណ្តាញ ចែកចាយថាមពល ការតម្លើង ការបើកប្រើប្រាស់ និង AMC support។" },
];

const achievementsKm = [
  { title: "ការអនុវត្តគម្រោងស្ថាប័ន និងរដ្ឋាភិបាល", desc: "គម្រោងអនុវត្តជាមួយឯកសារត្រឹមត្រូវ និងការប្រគល់ការងារដោយវិជ្ជាជីវៈ។" },
  { title: "ទំនុកចិត្តអតិថិជនរយៈពេលវែង", desc: "កើតចេញពីភាពថ្លៃថ្នូរ ផលិតផលពិតប្រាកដ និងសេវាគាំទ្រជឿជាក់។" },
  { title: "សមត្ថភាពគាំទ្រ និងថែទាំ", desc: "ក្រុមគាំទ្រពិសេស ផែនការគ្រឿងបន្លាស់ និងប្រព័ន្ធថែទាំបង្ការ។" },
  { title: "វិស្វកម្មដំណោះស្រាយផ្តោតទីផ្សារកម្ពុជា", desc: "រចនាដំណោះស្រាយសមស្របសម្រាប់ភ្នំពេញ សៀមរាប ព្រះសីហនុ និងលក្ខខណ្ឌប្រតិបត្តិការទូទាំងប្រទេស។" },
  { title: "ការបញ្ចូលប្រព័ន្ធ LED, Signage និង Access ពេញលេញ", desc: "អនុវត្តបានជោគជ័យនូវប្រព័ន្ធរួមសម្រាប់បរិស្ថានអាជីវកម្មសំខាន់ៗ។" },
  { title: "ដាក់ប្រើប្រាស់លឿនជាមួយ workflow មានរចនាសម្ព័ន្ធ", desc: "ដំណើរការពីស្ទង់ទីតាំងដល់បើកប្រើប្រាស់ ជាមួយ BOQ testing documentation និងគាំទ្របន្ទាប់ពីដំឡើង។" },
];

const faqsKm = [
  { q: "Mugnee Cambodia ជាអ្វី ហើយឯកទេសលើអ្វីខ្លះ?", a: "Mugnee Cambodia ជាក្រុមហ៊ុនដំណោះស្រាយបច្ចេកវិទ្យា ឯកទេសលើ LED display, digital signage, smart classroom, PA និង access control ជាមួយការអនុវត្តគម្រោង end-to-end។" },
  { q: "តើអ្នកផ្តល់សេវាគម្រោងពេញលេញពីរចនាដល់បើកប្រើប្រាស់ដែរ ឬទេ?", a: "បាទ/ចាស។ ក្រុមរបស់យើងគ្រប់គ្រង requirement analysis, site survey, technical design, product supply, installation, integration, commissioning, training និង after-sales support។" },
  { q: "Mugnee Cambodia ផ្តល់ដំណោះស្រាយអ្វីខ្លះសម្រាប់អាជីវកម្ម និងស្ថាប័នសាធារណៈ?", a: "យើងផ្តល់ indoor/outdoor LED display, digital signage network, smart board, PA/announcement system, turnstile gate និង access control សម្រាប់វិស័យជាច្រើន។" },
  { q: "តើអាចកែសម្រួលដំណោះស្រាយតាមទីតាំង និងថវិកាបានទេ?", a: "បាន។ យើងកែសម្រួល architecture តាមទំហំទីតាំង ចរាចរណ៍ ចម្ងាយមើល តម្រូវការសុវត្ថិភាព integration scope និងថវិកា។" },
  { q: "តើអ្នកផ្តល់ដំឡើង និងគាំទ្រក្នុងតំបន់កម្ពុជាដែរឬទេ?", a: "បាទ/ចាស។ យើងផ្តល់គាំទ្រវិស្វកម្មក្នុងតំបន់កម្ពុជា សម្រាប់ដំឡើង troubleshooting ថែទាំបង្ការ និង AMC រយៈពេលវែង។" },
  { q: "តើអ្នកធ្វើការជាមួយវិស័យណាខ្លះនៅកម្ពុជា?", a: "យើងគាំទ្រវិស័យលក់រាយ ការិយាល័យក្រុមហ៊ុន រោងចក្រ អប់រំ សុខាភិបាល បដិសណ្ឋារកិច្ច និងគម្រោងសាធារណៈ។" },
  { q: "តើអ្នកធានាគុណភាព និងភាពជឿជាក់ក្នុងការអនុវត្តគម្រោងយ៉ាងដូចម្តេច?", a: "យើងអនុវត្ត workflow មានរចនាសម្ព័ន្ធ quality checkpoints ស្តង់ដារដំឡើងសុវត្ថិភាព system testing និង technical handover។" },
  { q: "តើមានបណ្តុះបណ្តាល និងឯកសារបន្ទាប់ពីប្រគល់គម្រោងដែរឬទេ?", a: "មាន។ យើងផ្តល់បណ្តុះបណ្តាលអ្នកប្រើ ណែនាំ troubleshooting មូលដ្ឋាន និងឯកសារគម្រោងសម្រាប់ប្រតិបត្តិការប្រចាំថ្ងៃ។" },
  { q: "តើប្រព័ន្ធរបស់អ្នកអាចភ្ជាប់ជាមួយ software/control platform ដែលមានស្រាប់បានទេ?", a: "បាន។ អាស្រ័យលើវិសាលភាពគម្រោង យើងអាចភ្ជាប់ជាមួយ CMS attendance visitor management និង platform ប្រតិបត្តិការផ្សេងៗ។" },
  { q: "តើយើងអាចទាក់ទង Mugnee Cambodia ដើម្បីស្នើសុំតម្លៃដោយរបៀបណា?", a: "អ្នកអាចទាក់ទងតាមទំព័រ contact របស់វេបសាយ ជាមួយព័ត៌មានទីតាំង គោលដៅគម្រោង និងប្រភេទដំណោះស្រាយដែលត្រូវការ។" },
];

const uiKm = {
  eyebrow: "អំពី Mugnee Cambodia",
  heroTitle: "Mugnee Cambodia",
  heroDesc:
    "Mugnee Cambodia គឺជាក្រុមហ៊ុនដំណោះស្រាយបច្ចេកវិទ្យាអាជីវកម្ម ផ្តោតលើ LED display, digital signage, smart classroom, PA audio និង access control នៅកម្ពុជា។ យើងផ្តល់សេវាអនុវត្តគម្រោងពេញលេញ ចាប់ពីស្ទង់ទីតាំង រចនា ផ្គត់ផ្គង់ ដំឡើង បើកប្រើប្រាស់ បណ្តុះបណ្តាល និងគាំទ្របន្ទាប់ពីលក់រយៈពេលវែង។",
  ctaContact: "ទាក់ទងយើង",
  ctaService: "សេវាកម្ម & គាំទ្រ",
  coverage: "បម្រើសេវា៖ ភ្នំពេញ - សៀមរាប - ព្រះសីហនុ",
  sec1: "បេសកកម្ម ចក្ខុវិស័យ និងកម្លាំង",
  sec2: "តម្លៃស្នូលរបស់យើង",
  sec3: "រឿងរ៉ាវរបស់យើង",
  sec4: "វត្តមានរបស់យើង",
  sec5: "អ្នកចែកចាយដែលបានអនុញ្ញាត (កម្ពុជា)",
  sec6: "អ្វីដែលយើងធ្វើ",
  sec6p:
    "គំរូអនុវត្តរបស់យើងបញ្ចូលវិស្វកម្ម បច្ចេកទេស ការអនុវត្តគម្រោង និងសេវាបន្ទាប់ពីលក់ ដើម្បីឱ្យអាជីវកម្មនៅកម្ពុជាអាចដាក់ប្រើប្រាស់ប្រព័ន្ធបានជាប់លាប់។",
  sec7: "ប្រតិបត្តិការនៅកម្ពុជា",
  sec7p:
    "គំរូប្រតិបត្តិការរបស់យើងនៅកម្ពុជា ត្រូវបានរចនាសម្រាប់ការអនុវត្តគម្រោងជឿជាក់ មានភាពទទួលខុសត្រូវក្នុងតំបន់ និងការគាំទ្រឆ្លើយតបលឿន។",
  sec8: "អ្វីដែលយើងផ្តល់",
  sec9: "សមិទ្ធផលរបស់យើង",
  sec10: "សំណួរញឹកញាប់",
  sec11: "សាងសង់អនាគតជាមួយគ្នា",
  sec11p: "សូមចែករំលែកគោលដៅគម្រោង និងទីតាំងរបស់អ្នក។ យើងនឹងណែនាំដំណោះស្រាយសមស្រប និងផ្តល់តម្លៃច្បាស់លាស់។",
  sec11c: "ទាក់ទង Mugnee Cambodia",
  note: "ចំណាំ៖ ការចែកចាយ ការអនុវត្តគម្រោង និងការសម្របសម្រួលគាំទ្រនៅកម្ពុជា ត្រូវបានគ្រប់គ្រងក្នុងតំបន់ដោយ Mugnee Multiple Co., Ltd។",
};

export default function AboutClient() {
  const { lang } = useLang();
  const isKm = lang === "km";
  const tags = isKm ? heroTagsKm : heroTags;
  const highlightsData = isKm ? highlightsKm : highlights;
  const valuesData = isKm ? valuesKm : values;
  const storyPointsData = isKm ? storyPointsKm : storyPoints;
  const storyMilestonesData = isKm ? storyMilestonesKm : storyMilestones;
  const presenceData = isKm ? presenceKm : presence;
  const distributorData = isKm ? authorizedDistributorKm : authorizedDistributor;
  const whatWeDoData = isKm ? whatWeDoKm : whatWeDo;
  const cambodiaOpsData = isKm ? cambodiaOpsKm : cambodiaOps;
  const offersData = isKm ? offersKm : offers;
  const achievementsData = isKm ? achievementsKm : achievements;
  const faqsData = isKm ? faqsKm : faqs;

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div>
            <div>
              <div className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">{isKm ? uiKm.eyebrow : "About Mugnee Cambodia"}</span>
              </div>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{isKm ? uiKm.heroTitle : "Mugnee Cambodia"}</h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {isKm
                  ? uiKm.heroDesc
                  : "Mugnee Cambodia is a business technology solutions company focused on LED display, digital signage, smart classroom systems, PA audio systems, and access control integration in Cambodia. We provide complete project delivery from technical site survey and solution design to product supply, installation, commissioning, user training, and long-term after-sales support. Our engineering team helps retail, corporate, industrial, education, hospitality, and public-sector organizations improve communication quality, brand visibility, operational efficiency, and site security with reliable, scalable, and maintenance-ready systems built for real Cambodia market conditions."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                >
                  {isKm ? uiKm.ctaContact : "Contact Us"}
                </Link>
                <Link
                  href="/service"
                  className="rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md"
                >
                  {isKm ? uiKm.ctaService : "Service & Support"}
                </Link>
              </div>
              <div className="mt-4 text-xs text-slate-500">
                {isKm ? uiKm.coverage : "Serving Phnom Penh - Siem Reap - Sihanoukville"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec1 : "Mission, Vision & Strength"}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlightsData.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec2 : "Our Core Values"}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valuesData.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec3 : "Our Story"}</h2>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            {isKm
              ? "Mugnee Cambodia បានរីកចម្រើនពីក្រុមហ៊ុនផ្តោតលើវិស្វកម្ម ទៅជាដៃគូដំណោះស្រាយ end-to-end ដែលអាចទុកចិត្តបាន សម្រាប់ LED display, digital signage, smart classroom, PA និង access control។ ដំណើររបស់យើងផ្អែកលើគុណភាពអនុវត្តជាក់ស្តែង ការយល់ដឹងទីផ្សារក្នុងតំបន់ និងការប្តេជ្ញាបម្រើសេវារយៈពេលវែង។"
              : "Mugnee Cambodia grew from an engineering-driven technology company into a trusted end-to-end solutions partner for LED display, digital signage, smart classroom, PA systems, and access control infrastructure. Our journey is built on practical implementation quality, local market understanding, and long-term service commitment for businesses and institutions across Cambodia."}
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-3">
              {storyMilestonesData.map((item) => (
                <div
                  key={item.phase}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    {item.phase}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {storyPointsData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec4 : "Our Presence"}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {presenceData.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec5 : "Authorized Distributor (Cambodia)"}</h2>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
              {distributorData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              {isKm ? uiKm.note : "Note: Cambodia distribution, project execution, and support coordination are managed locally by Mugnee Multiple Co., Ltd."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec6 : "What We Do"}</h2>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            {isKm
              ? uiKm.sec6p
              : "Our delivery model combines technical engineering, project execution, and after-sales continuity so businesses in Cambodia can deploy LED display, digital signage, smart classroom, PA, and access control systems with predictable performance and lower risk."}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDoData.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec7 : "Cambodia Operations"}</h2>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            {isKm
              ? uiKm.sec7p
              : "Our Cambodia operations model is designed for reliable execution of LED display, digital signage, PA, smart classroom, and access control projects with local accountability, faster support response, and long-term service continuity."}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cambodiaOpsData.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec8 : "What We Offer"}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offersData.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec9 : "Our Achievements"}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievementsData.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec10 : "Frequently Asked Questions"}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqsData.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 open:border-sky-300 open:shadow-md"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.q}</span>
                    <span className="text-slate-400 transition-transform duration-300 group-open:rotate-180">
                      v
                    </span>
                  </div>
                </summary>
                <p className="mt-3 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">{isKm ? uiKm.sec11 : "Let's Build Together"}</h2>
            <p className="mt-2 text-slate-600">
              {isKm ? uiKm.sec11p : "Share your project goals and location. We'll recommend the right solution and provide a clear quotation."}
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                {isKm ? uiKm.sec11c : "Contact Mugnee Cambodia"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
