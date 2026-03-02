/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import { buildLegacyAliasMetadata } from "../../lib/seoLegacy";

export const metadata: Metadata = buildLegacyAliasMetadata({
  canonicalPath: "/interactive-flat-panel/",
});

export { default } from "../../interactive-flat-panel/page";
