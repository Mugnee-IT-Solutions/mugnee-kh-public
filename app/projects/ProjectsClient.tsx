export default function ProjectsClient({ lang = "en" }: { lang?: "en" | "km" }) {

  return (
    <div className="bg-slate-50">
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-slate-600">
          {lang === "en" ? "Projects" : "គម្រោង"}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          {lang === "en" ? "Cambodia Project References" : "គម្រោងយោងនៅកម្ពុជា"}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
          {lang === "en"
            ? "This page is being prepared with live project highlights. For immediate references and case details, contact our team."
            : "ទំព័រនេះកំពុងត្រូវបានរៀបចំជាមួយគម្រោងជាក់ស្តែង។ សម្រាប់ព័ត៌មានយោងភ្លាមៗ និងព័ត៌មានលម្អិតនៃគម្រោង សូមទំនាក់ទំនងក្រុមការងាររបស់យើង។"}
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          {lang === "en"
            ? "Our project scope covers LED display installation, digital signage deployment, PA system implementation, interactive flat panel integration, and access control planning for businesses in Cambodia."
            : "វិសាលភាពគម្រោងរបស់យើងរួមមានការដំឡើងអេក្រង់ LED, Digital Signage, ប្រព័ន្ធ PA, ស្មាតបូដអន្តរកម្ម និងដំណោះស្រាយត្រួតពិនិត្យចូលចេញសម្រាប់អាជីវកម្មនៅកម្ពុជា។"}
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
          {lang === "en"
            ? "This archive will include project type, application environment, installation scope, and support details so buyers can evaluate real references before requesting a quotation."
            : "បណ្ណសារនេះនឹងបង្ហាញប្រភេទគម្រោង បរិយាកាសប្រើប្រាស់ វិសាលភាពដំឡើង និងព័ត៌មានសេវាកម្មបន្ទាប់ពីលក់ ដើម្បីជួយអតិថិជនវាយតម្លៃគម្រោងយោងមុនពេលស្នើសុំតម្លៃ។"}
        </p>
      </section>
    </div>
  );
}
