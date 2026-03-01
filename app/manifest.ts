import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mugnee Cambodia",
    short_name: "Mugnee KH",
    description: "LED Display & Smart Solutions in Cambodia",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/images/fav.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/images/fav.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
