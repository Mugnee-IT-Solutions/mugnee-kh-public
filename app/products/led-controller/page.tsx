import { permanentRedirect } from "next/navigation";

export default function LedControllerLegacyRedirectPage() {
  permanentRedirect("/led-display/");
}
