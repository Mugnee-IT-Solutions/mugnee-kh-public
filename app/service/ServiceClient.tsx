import Link from "next/link";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const pillars = [
  {
    title: "Site Survey, Audit, and Service Planning",
    desc:
      "We assess installation quality, power conditions, cabling health, and system risks before recommending the right service scope.",
  },
  {
    title: "Installation, Re-Installation, and Commissioning",
    desc:
      "Our engineers handle mounting, wiring, software setup, and commissioning for stable operation and cleaner long-term serviceability.",
  },
  {
    title: "Preventive Maintenance and AMC Execution",
    desc:
      "Routine checks, cleaning, calibration, and firmware/controller validation help prevent failures and extend system lifespan.",
  },
  {
    title: "Corrective Repair and Fault Resolution",
    desc:
      "Rapid diagnosis, component replacement, and configuration recovery for LED, signage, PA, and access control systems.",
  },
  {
    title: "Operator Training and SOP Handover",
    desc:
      "Hands-on training and documentation for daily operation, first-level troubleshooting, and escalation flow.",
  },
  {
    title: "Warranty, Spare Parts, and Lifecycle Support",
    desc:
      "Structured warranty handling and spare-part readiness to minimize disruptions and keep mission-critical systems running.",
  },
];

const processSteps = [
  {
    title: "Service Request and Technical Intake",
    detail:
      "We collect system details, issue symptoms, and business impact to prioritize and assign the right engineering response.",
  },
  {
    title: "Diagnosis, Scope Confirmation, and SLA Plan",
    detail:
      "Our team defines root-cause path, confirms onsite or remote scope, and shares the response timeline with clear next actions.",
  },
  {
    title: "Onsite Service, Repair, and System Optimization",
    detail:
      "Technicians perform repair, replacement, tuning, and integration checks to restore performance and operational stability.",
  },
  {
    title: "Testing, Handover, and Maintenance Recommendation",
    detail:
      "Final validation, service report, and preventive recommendations are shared for smooth operations after closure.",
  },
];

const coverageCards = [
  {
    city: "Phnom Penh",
    detail:
      "Corporate offices, malls, campuses, and high-priority commercial service coverage.",
  },
  {
    city: "Siem Reap",
    detail:
      "Hospitality, tourism, and mixed-use venue support with scheduled preventive visits.",
  },
  {
    city: "Sihanoukville",
    detail:
      "Industrial and port-related sites with robust service planning and rapid fault response.",
  },
  {
    city: "Nationwide Service",
    detail:
      "Province-based support availability for multi-branch businesses and government projects.",
  },
];

const serviceTiers = [
  {
    title: "Standard Support",
    detail:
      "Ideal for routine AMC in Cambodia, including scheduled inspections, preventive maintenance, software checks, and non-critical fault resolution for LED display, PA, and access control systems.",
  },
  {
    title: "Priority Support",
    detail:
      "Best for business-critical operations that need faster SLA response, rapid onsite troubleshooting, and higher uptime assurance for digital signage networks and security entry infrastructure.",
  },
  {
    title: "Emergency Support",
    detail:
      "Designed for urgent outages, safety incidents, and access-control failures requiring immediate intervention, escalation handling, and high-priority technical recovery support.",
  },
];

const commonIssues = [
  {
    title: "LED Display Black Screen or Module Failure",
    detail:
      "Diagnosis for power, controller, receiving card, and module-level faults with targeted replacement and stability checks.",
  },
  {
    title: "Digital Signage Content or CMS Sync Problems",
    detail:
      "Playback error fixes, scheduler correction, network connectivity checks, and CMS synchronization recovery for reliable content delivery.",
  },
  {
    title: "Access Control, Biometric, and Turnstile Errors",
    detail:
      "Reader failure, credential mismatch, controller communication issues, and gate logic troubleshooting with integration validation.",
  },
  {
    title: "PA System Audio Zone and Paging Faults",
    detail:
      "Amplifier diagnostics, speaker line testing, zone routing correction, and voice clarity optimization for critical announcements.",
  },
  {
    title: "Power, Cabling, and Signal Integrity Issues",
    detail:
      "Grounding, surge protection, structured cabling, and interference checks to reduce recurring faults and unstable performance.",
  },
  {
    title: "Firmware, Configuration, and Integration Drift",
    detail:
      "Version alignment, parameter rollback, and cross-system integration testing to restore expected operations and reporting.",
  },
];

const slaMatrix = [
  {
    tier: "Standard",
    response: "Planned response window",
    bestFor: "Routine maintenance, non-critical faults, scheduled health checks",
  },
  {
    tier: "Priority",
    response: "Accelerated response and escalation",
    bestFor: "Business-critical systems with tighter uptime requirements",
  },
  {
    tier: "Emergency",
    response: "Immediate intervention workflow",
    bestFor: "Safety incidents, major outages, and high-impact failures",
  },
];

const pricingFactors = [
  "System type and size (LED area, number of controllers/readers/zones)",
  "SLA tier selection (Standard, Priority, or Emergency support)",
  "Preventive visit frequency and service scope depth",
  "Onsite location, travel requirements, and branch coverage model",
  "Spare-part readiness level and warranty handling requirements",
  "Integration complexity with CMS, HR, visitor, or security platforms",
];

const outcomes = [
  "Reduced unplanned downtime through preventive maintenance and faster fault isolation",
  "Improved operational continuity with SLA-based escalation and response planning",
  "Cleaner compliance records using structured service reports and technical checklists",
  "Longer system lifespan from proper calibration, firmware control, and part replacement",
];

const checklist = [
  "Power quality, grounding, and surge-protection validation before service closure",
  "Controller, receiving card, and firmware version alignment for stable operations",
  "Network and remote-access readiness for monitoring and faster troubleshooting",
  "Access control and emergency release logic test for safety compliance",
  "PA zoning, paging path, and audio clarity verification across key areas",
  "Service documentation, fault logs, and maintenance schedule handover",
];

const faqs = [
  {
    q: "What does your AMC service in Cambodia include?",
    a: "Our AMC service typically includes scheduled preventive maintenance, health checks, cleaning, calibration, firmware/controller verification, fault diagnostics, and service reporting for LED, signage, PA, and access control systems.",
  },
  {
    q: "Do you provide AMC for systems installed by other vendors?",
    a: "Yes. We can support many third-party installations after a technical assessment of hardware condition, wiring quality, software environment, and parts availability.",
  },
  {
    q: "How fast is your service response for urgent system failures?",
    a: "Response depends on SLA tier, location, and issue severity. Priority and emergency plans are designed for faster intervention on business-critical outages and safety-related incidents.",
  },
  {
    q: "Do you offer onsite troubleshooting for LED display and digital signage issues?",
    a: "Yes. Our engineers provide onsite troubleshooting for display failure, controller issues, pixel faults, communication errors, content display problems, and related infrastructure faults.",
  },
  {
    q: "Can you handle access control and turnstile repair with software integration checks?",
    a: "Yes. We diagnose and repair access controllers, readers, locks, and turnstile gates, and verify integration with attendance, visitor management, and HR-connected workflows.",
  },
  {
    q: "Do you provide PA system maintenance and audio zone testing?",
    a: "Yes. We perform PA amplifier checks, speaker line testing, zone verification, paging clarity validation, and configuration tuning for stable announcement performance.",
  },
  {
    q: "How do you reduce downtime during maintenance or repair?",
    a: "We follow structured diagnosis, pre-checklists, prioritized issue handling, and validated handover procedures to minimize disruption and restore system uptime faster.",
  },
  {
    q: "Is training included after service completion?",
    a: "Yes. We provide practical operator training and SOP guidance so your team can run daily operations, handle first-level checks, and escalate issues correctly.",
  },
  {
    q: "Which cities in Cambodia do you cover for service support?",
    a: "We provide service across Phnom Penh, Siem Reap, Sihanoukville, and additional provinces based on project scope, SLA level, and onsite access requirements.",
  },
  {
    q: "How can we request a quotation for AMC, repair, or support SLA?",
    a: "Share your system type, location, issue profile, and uptime target. We will propose a suitable AMC or support plan with scope, SLA options, and service cost details.",
  },
];

const uiKm = {
  eyebrow: "សេវាកម្ម & គាំទ្រ",
  heroTitle: "សេវាកម្ម និងការគាំទ្រនៅកម្ពុជា សម្រាប់ LED, PA និង Access Control",
  heroDesc:
    "Mugnee Cambodia ផ្តល់សេវាបច្ចេកទេសបែប end-to-end នៅកម្ពុជា សម្រាប់ LED display, digital signage, PA systems និង access control infrastructure។ ក្រុមវិស្វករក្នុងតំបន់របស់យើងគ្រប់គ្រងការត្រួតពិនិត្យទីតាំង ការដំឡើង ការបើកប្រើប្រាស់ ការថែទាំបង្ការ ការដោះស្រាយបញ្ហាបន្ទាន់ ការជំនួសគ្រឿងបន្លាស់ និងការធានា ដើម្បីកាត់បន្ថយ downtime និងបង្កើនភាពជឿជាក់ប្រព័ន្ធ។",
  cta1: "ស្នើសុំសេវាកម្ម",
  cta2: "មើលផលិតផល",
  coverageLine: "បម្រើសេវា៖ ភ្នំពេញ - សៀមរាប - ព្រះសីហនុ និងការហៅសេវាទូទាំងប្រទេស",
  pillarsTitle: "សសរគ្រឹះសេវាកម្ម LED, PA និង Access Control នៅកម្ពុជា",
  pillarsDesc:
    "គំរូសេវាកម្មរបស់យើងត្រូវបានរចនាសម្រាប់សុខភាពប្រព័ន្ធរយៈពេលវែង កាត់បន្ថយ downtime និងបង្កើនភាពជឿជាក់ដែលវាស់វែងបាន។",
  issuesTitle: "បញ្ហាទូទៅ LED, Signage, PA និង Access Control ដែលយើងដោះស្រាយ",
  issuesDesc:
    "សំណើសេវាកម្មភាគច្រើនចាប់ផ្តើមពីបញ្ហាបច្ចេកទេសកើតឡើងម្តងហើយម្តងទៀត។ យើងដោះស្រាយទាំង root cause និងបញ្ហាដដែលៗ។",
  coverageTitle: "ការឆ្លើយតបសេវាកម្ម Onsite នៅកម្ពុជា សម្រាប់ LED, Signage, PA និង Access",
  coverageDesc:
    "យើងរៀបចំការគាំទ្រតាមទីតាំង និងកម្រិតបន្ទាន់ ដើម្បីធានាការឆ្លើយតបបានរហ័សនៅតំបន់អាជីវកម្មសំខាន់ៗ។",
  processTitle: "លំហូរសេវាកម្មនៅកម្ពុជា៖ វិនិច្ឆ័យ ជួសជុល និងប្រគល់ប្រព័ន្ធ",
  processDesc:
    "ដំណើរការរៀបចំរចនាសម្ព័ន្ធរបស់យើងជួយអតិថិជនតាមដានវឌ្ឍនភាពសេវាកម្មដោយមានពេលវេលាច្បាស់លាស់ និងការផ្ទៀងផ្ទាត់ចុងក្រោយ។",
  amcTitle: "គម្រោង AMC និងជម្រើសឆ្លើយតប Priority Support នៅកម្ពុជា",
  amcDesc:
    "ជ្រើសរើសគំរូគាំទ្រដែលសមស្របនឹងហានិភ័យ តម្រូវការប្រើប្រាស់ និងកម្រិតសារៈសំខាន់ប្រព័ន្ធរបស់អ្នក។",
  amcDesc2:
    "ជម្រើស AMC នៅកម្ពុជា ត្រូវបានរៀបចំសម្រាប់ LED display, digital signage, PA systems និង access control ដែលត្រូវការស្ថិរភាព និងថ្លៃថែទាំគ្រប់គ្រងបាន។",
  amcDesc3:
    "យើងរៀបចំរចនាសម្ព័ន្ធ SLA តាមបរិបទអាជីវកម្ម ចាប់ពីលក់រាយ និងការិយាល័យ ទៅរោងចក្រ មន្ទីរពេទ្យ និងស្ថាប័នសាធារណៈ។",
  supportTier: "កម្រិតគាំទ្រ",
  responseModel: "គំរូឆ្លើយតប",
  bestFor: "សមស្របសម្រាប់",
  pricingTitle: "កត្តារៀបចំតម្លៃ AMC និងវិសាលភាពសេវាកម្មនៅកម្ពុជា",
  pricingDesc:
    "តម្លៃ AMC និងសេវាគាំទ្រ អាស្រ័យលើវិសាលភាពបច្ចេកទេស កម្រិត SLA និងតំបន់គ្របដណ្តប់។",
  checklistTitle: "បញ្ជីត្រួតពិនិត្យស្តង់ដារបច្ចេកទេស និងភាពរួចរាល់សេវាកម្មនៅកម្ពុជា",
  checklistDesc:
    "មុនបិទការងារ យើងផ្ទៀងផ្ទាត់ចំណុចបច្ចេកទេស និងសុវត្ថិភាព ដើម្បីធានាប្រតិបត្តិការមានស្ថិរភាព និងតាមស្តង់ដារ។",
  checklistDesc2:
    "បញ្ជីនេះជួយក្រុម Facility, IT និង Operations ផ្ទៀងផ្ទាត់គុណភាពដំឡើង ភាពរួចរាល់សេវាកម្ម និងស្តង់ដារថែទាំរយៈពេលវែង មុនអនុម័តបិទគម្រោង។",
  checklistDesc3:
    "ដោយផ្ទៀងផ្ទាត់ថាមពល Firmware បណ្តាញ លោជីកបន្ទាន់ និងឯកសារ អង្គភាពអាចកាត់បន្ថយបញ្ហាដដែលៗ និងបង្កើន uptime បានច្បាស់។",
  outcomesTitle: "លទ្ធផលសេវាកម្ម សម្រាប់ Uptime និងភាពជឿជាក់ប្រព័ន្ធ",
  outcomesDesc:
    "Framework សេវាកម្មរបស់យើងត្រូវបានរៀបចំដើម្បីបង្កើនភាពបន្តប្រតិបត្តិការ កាត់បន្ថយបញ្ហាកើតឡើងដដែលៗ និងរក្សាប្រព័ន្ធឱ្យដំណើរការស្ថិរភាព។",
  faqTitle: "សំណួរញឹកញាប់អំពីសេវាកម្ម និងគាំទ្រនៅកម្ពុជា៖ AMC, Repair, Warranty និង SLA",
  finalTitle: "ស្នើសុំផែនការសេវាកម្ម AMC, Repair និង Maintenance នៅកម្ពុជា",
  finalDesc:
    "សូមចែករំលែកប្រភេទប្រព័ន្ធ ប្រភេទបញ្ហា និងទីតាំងគម្រោងរបស់អ្នក។ យើងនឹងណែនាំវិសាលភាពគាំទ្រ និងកាលវិភាគសេវាកម្មសមស្រប។",
  finalCta1: "ទាក់ទង Mugnee Cambodia",
  finalCta2: "មើលផលិតផល",
};

const pillarsKm = [
  { title: "ការស្ទង់ទីតាំង ការត្រួតពិនិត្យ និងផែនការសេវាកម្ម", desc: "វាយតម្លៃគុណភាពដំឡើង លក្ខខណ្ឌថាមពល ស្ថានភាពខ្សែ និងហានិភ័យប្រព័ន្ធ មុនណែនាំវិសាលភាពសេវាសមស្រប។" },
  { title: "ការដំឡើង ដំឡើងឡើងវិញ និងបើកប្រើប្រាស់", desc: "វិស្វកររបស់យើងគ្រប់គ្រងការតម្លើង រៀបខ្សែ កំណត់កម្មវិធី និងបើកប្រើប្រាស់ ដើម្បីឱ្យប្រព័ន្ធដំណើរការស្ថិរភាព។" },
  { title: "ការថែទាំបង្ការ និងអនុវត្ត AMC", desc: "ការត្រួតពិនិត្យទៀងទាត់ ការសម្អាត ការកាលីប្រេ និងការផ្ទៀងផ្ទាត់ firmware/controller ជួយបង្ការការខូចខាត។" },
  { title: "ជួសជុលកែតម្រូវ និងដោះស្រាយបញ្ហា", desc: "វិនិច្ឆ័យរហ័ស ជំនួសគ្រឿងបន្លាស់ និងស្ដារការកំណត់ សម្រាប់ LED, signage, PA និង access control។" },
  { title: "បណ្តុះបណ្តាលអ្នកប្រើ និងប្រគល់ SOP", desc: "បណ្តុះបណ្តាលជាក់ស្តែង និងឯកសារសម្រាប់ប្រតិបត្តិការប្រចាំថ្ងៃ ការត្រួតពិនិត្យកម្រិតដំបូង និងលំហូរបញ្ជូនបញ្ហា។" },
  { title: "ការធានា គ្រឿងបន្លាស់ និងសេវាគាំទ្រវដ្តជីវិត", desc: "គ្រប់គ្រងការធានាជារចនាសម្ព័ន្ធ និងភាពរួចរាល់គ្រឿងបន្លាស់ ដើម្បីកាត់បន្ថយការរំខានប្រតិបត្តិការ។" },
];

const processStepsKm = [
  { title: "ទទួលសំណើសេវាកម្ម និងប្រមូលទិន្នន័យបច្ចេកទេស", detail: "ប្រមូលព័ត៌មានប្រព័ន្ធ រោគសញ្ញាបញ្ហា និងផលប៉ះពាល់អាជីវកម្ម ដើម្បីកំណត់អាទិភាពឆ្លើយតបឱ្យត្រឹមត្រូវ។" },
  { title: "វិនិច្ឆ័យ បញ្ជាក់វិសាលភាព និងផែនការ SLA", detail: "កំណត់ផ្លូវ root cause បញ្ជាក់ថាត្រូវ onsite ឬ remote និងចែករំលែកពេលវេលាឆ្លើយតបជំហានបន្ទាប់។" },
  { title: "សេវា Onsite ជួសជុល និងលៃតម្រូវប្រព័ន្ធ", detail: "អនុវត្តជួសជុល ជំនួស លៃតម្រូវ និងពិនិត្យការភ្ជាប់ ដើម្បីស្ដារសមត្ថភាពប្រព័ន្ធ។" },
  { title: "សាកល្បង ប្រគល់ និងណែនាំថែទាំ", detail: "ផ្ទៀងផ្ទាត់ចុងក្រោយ របាយការណ៍សេវាកម្ម និងអនុសាសន៍ថែទាំបង្ការ ត្រូវបានប្រគល់សម្រាប់ប្រតិបត្តិការរលូន។" },
];

const coverageCardsKm = [
  { city: "ភ្នំពេញ", detail: "គាំទ្រសេវាកម្មសម្រាប់ការិយាល័យក្រុមហ៊ុន ផ្សារទំនើប បរិវេណសិក្សា និងតំបន់ពាណិជ្ជកម្មអាទិភាពខ្ពស់។" },
  { city: "សៀមរាប", detail: "គាំទ្រសម្រាប់បដិសណ្ឋារកិច្ច ទេសចរណ៍ និងទីតាំងចម្រុះ ជាមួយកាលវិភាគថែទាំបង្ការ។" },
  { city: "ព្រះសីហនុ", detail: "គាំទ្រទីតាំងឧស្សាហកម្ម និងកំពង់ផែ ជាមួយផែនការសេវាកម្មរឹងមាំ និងឆ្លើយតបបញ្ហារហ័ស។" },
  { city: "សេវាទូទាំងប្រទេស", detail: "សេវាគាំទ្រតាមខេត្ត សម្រាប់អាជីវកម្មច្រើនសាខា និងគម្រោងរដ្ឋ។" },
];

const serviceTiersKm = [
  { title: "គាំទ្រស្តង់ដារ", detail: "សមស្របសម្រាប់ AMC ប្រចាំ រួមមានការត្រួតពិនិត្យតាមកាលវិភាគ ថែទាំបង្ការ ពិនិត្យកម្មវិធី និងដោះស្រាយបញ្ហាមិនបន្ទាន់។" },
  { title: "គាំទ្រអាទិភាព", detail: "សម្រាប់ប្រព័ន្ធសំខាន់ដែលត្រូវការឆ្លើយតប SLA លឿន ជួសជុល onsite រហ័ស និងធានា uptime ខ្ពស់។" },
  { title: "គាំទ្របន្ទាន់", detail: "សម្រាប់ការខូចខាតបន្ទាន់ ឧប្បត្តិហេតុសុវត្ថិភាព និងបញ្ហា access control ដែលត្រូវការអន្តរាគមន៍ភ្លាមៗ។" },
];

const commonIssuesKm = [
  { title: "អេក្រង់ LED មិនបង្ហាញ ឬ Module ខូច", detail: "វិនិច្ឆ័យបញ្ហាថាមពល controller receiving card និង module ជាមួយការជំនួសត្រឹមត្រូវ និងពិនិត្យស្ថិរភាព។" },
  { title: "បញ្ហាមាតិកា Digital Signage ឬ CMS Sync", detail: "ជួសជុលបញ្ហា playback កែ scheduler ពិនិត្យបណ្តាញ និងស្ដារ CMS sync ដើម្បីឱ្យបង្ហាញមាតិកាជាប់លាប់។" },
  { title: "បញ្ហា Access Control, Biometric និង Turnstile", detail: "ដោះស្រាយបញ្ហា reader credential mismatch controller communication និង gate logic ជាមួយការផ្ទៀងផ្ទាត់ integration។" },
  { title: "បញ្ហាតំបន់សំឡេង និង Paging របស់ PA System", detail: "វិនិច្ឆ័យ amplifier ពិនិត្យខ្សែ speaker កែ routing តំបន់ និងលៃតម្រូវភាពច្បាស់សំឡេង។" },
  { title: "បញ្ហាថាមពល ខ្សែ និង Signal Integrity", detail: "ពិនិត្យ grounding surge protection structured cabling និងការរំខាន signal ដើម្បីកាត់បន្ថយបញ្ហាកើតឡើងដដែល។" },
  { title: "បញ្ហា Firmware, Configuration និង Integration Drift", detail: "សម្រប version ស្ដារការកំណត់ និងសាកល្បងការភ្ជាប់អន្តរប្រព័ន្ធ ដើម្បីស្ដារប្រតិបត្តិការត្រឹមត្រូវ។" },
];

const slaMatrixKm = [
  { tier: "Standard", response: "រយៈពេលឆ្លើយតបតាមផែនការ", bestFor: "ការថែទាំប្រចាំ និងបញ្ហាមិនសំខាន់ខ្លាំង" },
  { tier: "Priority", response: "ឆ្លើយតបលឿន និងបញ្ជូនអាទិភាព", bestFor: "ប្រព័ន្ធសំខាន់ដែលត្រូវការ uptime ខ្ពស់" },
  { tier: "Emergency", response: "លំហូរអន្តរាគមន៍ភ្លាមៗ", bestFor: "ឧប្បត្តិហេតុសុវត្ថិភាព ការរអាក់រអួលធំ និងបញ្ហាផលប៉ះពាល់ខ្ពស់" },
];

const pricingFactorsKm = [
  "ប្រភេទ និងទំហំប្រព័ន្ធ (ផ្ទៃ LED ចំនួន controller/reader/zone)",
  "ជម្រើសកម្រិត SLA (Standard, Priority ឬ Emergency)",
  "ប្រេកង់ចុះត្រួតពិនិត្យបង្ការ និងជម្រៅវិសាលភាពសេវា",
  "ទីតាំង Onsite តម្រូវការធ្វើដំណើរ និងម៉ូដែលគ្របដណ្តប់សាខា",
  "កម្រិតរួចរាល់គ្រឿងបន្លាស់ និងតម្រូវការគ្រប់គ្រងការធានា",
  "ស្មុគស្មាញនៃ integration ជាមួយ CMS, HR, visitor ឬ security platform",
];

const outcomesKm = [
  "កាត់បន្ថយ downtime មិនបានគ្រោងទុក តាមរយៈថែទាំបង្ការ និងដាច់បញ្ហាបានលឿន",
  "បង្កើនភាពបន្តប្រតិបត្តិការ ជាមួយផែនការឆ្លើយតប និងបញ្ជូនបញ្ហាតាម SLA",
  "ឯកសារអនុលោមតាមស្តង់ដារច្បាស់លាស់ ដោយប្រើរបាយការណ៍សេវាកម្ម និងបញ្ជីត្រួតពិនិត្យបច្ចេកទេស",
  "បន្ថែមអាយុកាលប្រព័ន្ធ ពីការកាលីប្រេត្រឹមត្រូវ ការគ្រប់គ្រង firmware និងការជំនួសគ្រឿងបន្លាស់",
];

const checklistKm = [
  "ផ្ទៀងផ្ទាត់គុណភាពថាមពល grounding និង surge protection មុនបិទការងារ",
  "ផ្ទៀងផ្ទាត់ឱ្យស្របគ្នា controller receiving card និង firmware version សម្រាប់ស្ថិរភាពប្រតិបត្តិការ",
  "ត្រួតពិនិត្យភាពរួចរាល់ network និង remote access សម្រាប់តាមដាន និងដោះស្រាយបញ្ហាលឿន",
  "សាកល្បងលោជីក access control និង emergency release សម្រាប់អនុលោមសុវត្ថិភាព",
  "ផ្ទៀងផ្ទាត់ PA zoning paging path និងភាពច្បាស់សំឡេងនៅតំបន់សំខាន់",
  "ប្រគល់ឯកសារសេវា fault logs និងកាលវិភាគថែទាំ",
];

const faqsKm = [
  { q: "តើសេវា AMC របស់អ្នកនៅកម្ពុជា រួមមានអ្វីខ្លះ?", a: "AMC រួមមានថែទាំបង្ការតាមកាលវិភាគ ពិនិត្យសុខភាពប្រព័ន្ធ សម្អាត កាលីប្រេ ផ្ទៀងផ្ទាត់ វិនិច្ឆ័យបញ្ហា និងរបាយការណ៍សេវាកម្ម។" },
  { q: "តើអ្នកផ្តល់ AMC សម្រាប់ប្រព័ន្ធដែលដំឡើងដោយអ្នកផ្គត់ផ្គង់ផ្សេងដែរឬទេ?", a: "បាទ/ចាស។ យើងអាចគាំទ្រប្រព័ន្ធភាគីទីបីជាច្រើន បន្ទាប់ពីវាយតម្លៃបច្ចេកទេស។" },
  { q: "ការឆ្លើយតបសេវាកម្មសម្រាប់បញ្ហាបន្ទាន់លឿនប៉ុណ្ណា?", a: "ល្បឿនឆ្លើយតបអាស្រ័យលើកម្រិត SLA ទីតាំង និងកម្រិតធ្ងន់ធ្ងរនៃបញ្ហា។" },
  { q: "តើមានសេវា onsite troubleshooting សម្រាប់ LED display និង digital signage ទេ?", a: "មាន។ វិស្វករយើងចុះ onsite ដោះស្រាយបញ្ហាអេក្រង់ controller ការភ្ជាប់ និងមាតិកាបង្ហាញ។" },
  { q: "តើអ្នកអាចជួសជុល access control និង turnstile ជាមួយការផ្ទៀងផ្ទាត់ integration បានទេ?", a: "បាន។ យើងជួសជុល controller reader lock និង turnstile ជាមួយការត្រួតពិនិត្យការភ្ជាប់ប្រព័ន្ធ។" },
  { q: "តើអ្នកផ្តល់សេវាថែទាំ PA និងតេស្តតំបន់សំឡេងដែរឬទេ?", a: "មាន។ យើងពិនិត្យ amplifier speaker zone និងលៃតម្រូវសំឡេង។" },
  { q: "អ្នកកាត់បន្ថយ downtime ពេលថែទាំ ឬជួសជុលយ៉ាងដូចម្តេច?", a: "យើងអនុវត្តវិនិច្ឆ័យមានរចនាសម្ព័ន្ធ កំណត់អាទិភាពបញ្ហា និងប្រគល់ការងារដែលបានផ្ទៀងផ្ទាត់។" },
  { q: "បន្ទាប់ពីបញ្ចប់សេវា តើមានការបណ្តុះបណ្តាលដែរឬទេ?", a: "មាន។ យើងផ្តល់ការបណ្តុះបណ្តាលអ្នកប្រើ និងណែនាំ SOP ជាក់ស្តែង។" },
  { q: "តើអ្នកគ្របដណ្តប់ទីក្រុងណាខ្លះសម្រាប់សេវាគាំទ្រនៅកម្ពុជា?", a: "យើងផ្តល់សេវានៅភ្នំពេញ សៀមរាប ព្រះសីហនុ និងខេត្តផ្សេងៗ តាមវិសាលភាពគម្រោង។" },
  { q: "តើយើងអាចស្នើសុំតម្លៃសម្រាប់ AMC, repair ឬ SLA ដោយរបៀបណា?", a: "សូមផ្ញើប្រភេទប្រព័ន្ធ ទីតាំង និងប្រភេទបញ្ហា។ យើងនឹងណែនាំផែនការសមស្រប និងជម្រើស SLA។" },
];

export default function ServiceClient({ forcedLang }: { forcedLang?: "en" | "km" }) {
  const lang = forcedLang ?? "en";
  const toLangHref = (href: string) =>
    lang === "km" && href.startsWith("/") && !href.startsWith("/km/") ? `/km${href}` : href;
  const isKm = lang === "km";
  const t = isKm
    ? uiKm
    : {
        eyebrow: "Service & Support",
        heroTitle: "Cambodia Service & Support for LED, PA & Access Control",
        heroDesc:
          "Mugnee Cambodia provides end-to-end technical service in Cambodia for LED display, digital signage, PA systems, and access control infrastructure. Our local engineers handle site audit, installation, commissioning, preventive maintenance, emergency troubleshooting, component replacement, and warranty support to reduce downtime and improve system reliability. From retail and corporate offices to factories, schools, hospitals, and public-sector sites, we deliver structured support plans that keep critical communication and security systems safe, compliant, and fully operational.",
        cta1: "Request Service",
        cta2: "View Products",
        coverageLine:
          "Serving Phnom Penh - Siem Reap - Sihanoukville and nationwide service calls",
        pillarsTitle: "Core LED, PA & Access Control Service Pillars in Cambodia",
        pillarsDesc:
          "Our service model is designed for long-term system health, reduced downtime, and measurable reliability improvements for business and public-sector deployments.",
        issuesTitle: "Common LED, Signage, PA & Access Control Issues We Resolve",
        issuesDesc:
          "High-intent service requests usually start with recurring technical faults. Our team resolves both root-cause issues and repeat failure patterns to stabilize operations.",
        coverageTitle: "Cambodia Onsite Service Response for LED, Signage, PA & Access",
        coverageDesc:
          "We align field support by location and urgency to ensure responsive service across key Cambodia business zones.",
        processTitle: "Service Workflow in Cambodia: Diagnosis, Repair & Handover",
        processDesc:
          "Our structured process helps clients track service progress with clear timelines, technical accountability, and final validation.",
        amcTitle: "Cambodia AMC Plans and Priority Support Response Options",
        amcDesc:
          "Choose the support model that matches your risk profile, uptime needs, and business criticality.",
        amcDesc2:
          "Our Annual Maintenance Contract (AMC) options in Cambodia are designed for LED display, digital signage, PA systems, and access control infrastructure that require predictable uptime and controlled maintenance cost. Each plan defines response priority, preventive-visit frequency, reporting scope, and escalation workflow so operations teams can reduce unplanned downtime and service uncertainty.",
        amcDesc3:
          "We align SLA structure by business environment, from retail and office sites to factories, hospitals, and public facilities. This helps organizations choose the right balance of routine maintenance, fast fault response, and emergency coverage based on system criticality and compliance requirements.",
        supportTier: "Support Tier",
        responseModel: "Response Model",
        bestFor: "Best For",
        pricingTitle: "Cambodia AMC Pricing and Service Scope Planning Factors",
        pricingDesc:
          "AMC and support pricing is shaped by technical scope, SLA expectations, and coverage requirements. We use transparent scope mapping so procurement teams can compare plans clearly.",
        checklistTitle: "Cambodia Technical Service Compliance & Readiness Checklist",
        checklistDesc:
          "Before closure, we validate technical and safety checkpoints to ensure stable, compliant, and maintainable operation.",
        checklistDesc2:
          "This compliance checklist is built for Cambodia service environments where LED display, digital signage, PA systems, and access control infrastructure must meet operational safety, reliability, and audit requirements. It helps facility, IT, and operations teams confirm that installation quality, service readiness, and long-term maintenance standards are fully aligned before project sign-off.",
        checklistDesc3:
          "By validating power integrity, firmware consistency, network health, emergency logic, and documentation, organizations can reduce repeat faults, improve system uptime, and maintain clearer compliance records for internal governance and external reviews.",
        outcomesTitle: "Service Outcomes for Business Uptime and System Reliability",
        outcomesDesc:
          "Our service framework is designed to improve continuity, reduce repeat incidents, and keep communication and security systems operational across Cambodia sites.",
        faqTitle: "Cambodia Service & Support FAQs: AMC, Repair, Warranty, and SLA",
        finalTitle: "Request a Cambodia AMC, Repair & Maintenance Service Plan",
        finalDesc:
          "Share your system type, issue category, and site location. We will recommend the right support scope and service schedule.",
        finalCta1: "Contact Mugnee Cambodia",
        finalCta2: "View Products",
      };
  const pillarsData = isKm ? pillarsKm : pillars;
  const processData = isKm ? processStepsKm : processSteps;
  const coverageData = isKm ? coverageCardsKm : coverageCards;
  const tierData = isKm ? serviceTiersKm : serviceTiers;
  const issuesData = isKm ? commonIssuesKm : commonIssues;
  const slaData = isKm ? slaMatrixKm : slaMatrix;
  const pricingData = isKm ? pricingFactorsKm : pricingFactors;
  const outcomesData = isKm ? outcomesKm : outcomes;
  const checklistData = isKm ? checklistKm : checklist;
  const faqData = isKm ? faqsKm : faqs;
  const pagePath = isKm ? "/km/service/" : "/service/";
  const pageUrl = `${SITE_URL}${pagePath}`;
  const areaServed = ["Phnom Penh", "Siem Reap", "Sihanoukville", "Cambodia"].map((name) => ({
    "@type": "AdministrativeArea",
    name,
  }));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: isKm ? "ទំព័រដើម" : "Home",
          item: isKm ? `${SITE_URL}/km/` : `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: isKm ? "សេវា" : "Service",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: isKm
        ? "សេវាដំឡើង AMC ថែទាំ និងគាំទ្របច្ចេកទេសនៅកម្ពុជា"
        : "Cambodia Installation, AMC, Repair & Support Service",
      serviceType: isKm
        ? "សេវាដំឡើង ថែទាំ AMC ជួសជុល និងគាំទ្របច្ចេកទេស"
        : "Installation, AMC, maintenance, repair, and technical support",
      description: t.heroDesc,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed,
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div>
            <div className="text-xs text-slate-500">
              <span className="font-semibold text-slate-700">{t.eyebrow}</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.heroTitle}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base [text-align:justify]">
              {t.heroDesc}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={toLangHref("/contact")}
                className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                {t.cta1}
              </Link>
              <Link
                href={toLangHref("/products")}
                className="rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md"
              >
                {t.cta2}
              </Link>
            </div>
            <div className="mt-4 text-xs text-slate-500">
              {t.coverageLine}
            </div>
            <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-4">
              <p className="text-sm font-semibold text-slate-900">
                {isKm
                  ? "សម្រាប់គម្រោងអេក្រង់ LED ថ្មី ឬកែលម្អប្រព័ន្ធ"
                  : "Planning a new LED display project in Cambodia?"}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                {isKm
                  ? "មើលមគ្គុទ្ទេសក៍តម្លៃ ការរៀបចំ BOQ និងដំណើរការដំឡើងអេក្រង់ LED មុនពេលស្នើសុំសេវា។"
                  : "Use our LED Display Cambodia hub for price factors, BOQ planning, and installation workflow before requesting service."}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href={toLangHref("/led-display")}
                  className="rounded-full border border-sky-300 bg-white px-3 py-1.5 text-xs font-semibold text-sky-900 transition hover:bg-sky-100"
                >
                  {isKm ? "មើលទំព័រ អេក្រង់ LED កម្ពុជា" : "Explore LED Display Cambodia Hub"}
                </Link>
                <Link
                  href={toLangHref("/led-display/indoor-led-display")}
                  className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  {isKm ? "អេក្រង់ LED ក្នុងអគារ" : "Indoor LED Display Guide"}
                </Link>
                <Link
                  href={toLangHref("/led-display/outdoor-led-display")}
                  className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  {isKm ? "អេក្រង់ LED ខាងក្រៅ" : "Outdoor LED Billboard Guide"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.pillarsTitle}
          </h2>
          <p className="mt-2 text-slate-600">
            {t.pillarsDesc}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillarsData.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.issuesTitle}
          </h2>
          <p className="mt-2 text-slate-600">
            {t.issuesDesc}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {issuesData.map((item) => (
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.coverageTitle}
          </h2>
          <p className="mt-2 text-slate-600">
            {t.coverageDesc}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coverageData.map((item) => (
              <div
                key={item.city}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.city}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.processTitle}
          </h2>
          <p className="mt-2 text-slate-600">
            {t.processDesc}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processData.map((item) => (
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

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.amcTitle}
          </h2>
          <p className="mt-2 text-slate-600">
            {t.amcDesc}
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            {t.amcDesc2}
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            {t.amcDesc3}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tierData.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600 sm:grid-cols-3">
              <div className="px-4 py-3">{t.supportTier}</div>
              <div className="px-4 py-3">{t.responseModel}</div>
              <div className="px-4 py-3">{t.bestFor}</div>
            </div>
            {slaData.map((row) => (
              <div
                key={row.tier}
                className="grid grid-cols-1 border-b border-slate-100 text-sm text-slate-700 last:border-b-0 sm:grid-cols-3"
              >
                <div className="px-4 py-3 font-semibold text-slate-900">{row.tier}</div>
                <div className="px-4 py-3">{row.response}</div>
                <div className="px-4 py-3">{row.bestFor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.pricingTitle}
          </h2>
          <p className="mt-2 text-slate-600">
            {t.pricingDesc}
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {pricingData.map((item) => (
                <li key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.checklistTitle}
          </h2>
          <p className="mt-2 text-slate-600">
            {t.checklistDesc}
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            {t.checklistDesc2}
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            {t.checklistDesc3}
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {checklistData.map((item) => (
                <li key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.outcomesTitle}
          </h2>
          <p className="mt-2 text-slate-600">
            {t.outcomesDesc}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {outcomesData.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.faqTitle}
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqData.map((item) => (
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
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {t.finalTitle}
            </h2>
            <p className="mt-2 text-slate-600">
              {t.finalDesc}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={toLangHref("/contact")}
                className="inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                {t.finalCta1}
              </Link>
              <Link
                href={toLangHref("/products")}
                className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
              >
                {t.finalCta2}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
