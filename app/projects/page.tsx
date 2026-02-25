/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects in Cambodia | Mugnee Cambodia",
  description:
    "Explore Mugnee Cambodia project references for LED display, digital signage, PA systems, and access control implementations.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-slate-600">Projects</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Cambodia Project References
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
          This page is being prepared with live project highlights. For immediate references and
          case details, contact our team.
        </p>
      </section>
    </main>
  );
}
