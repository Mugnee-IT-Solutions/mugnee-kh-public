/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import { buildLegacyAliasMetadata } from "../lib/seoLegacy";

export const metadata: Metadata = buildLegacyAliasMetadata({
  canonicalPath: "/led-display/power-supply/",
});

export { default } from "../led-display/power-supply/page";
