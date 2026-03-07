import { permanentRedirect } from "next/navigation";

export default function LegacyAliasRedirectPage() {
  permanentRedirect("/turnstile-gate/");
}