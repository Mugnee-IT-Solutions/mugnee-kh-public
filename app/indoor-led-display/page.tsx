import { permanentRedirect } from "next/navigation";

export default function LegacyAliasRedirectPage() {
  permanentRedirect("/led-display/indoor-led-display/");
}