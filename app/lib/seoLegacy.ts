import type { Metadata } from "next";
import { SITE_URL } from "./site";

type LegacyAliasMetadataOptions = {
  canonicalPath: string;
  kmPath?: string | null;
};

function withTrailingSlash(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

export function buildLegacyAliasMetadata({
  canonicalPath,
  kmPath,
}: LegacyAliasMetadataOptions): Metadata {
  const canonicalRoute = withTrailingSlash(canonicalPath);
  const kmRoute = kmPath === null ? null : withTrailingSlash(kmPath ?? `/km${canonicalRoute}`);

  return {
    alternates: {
      canonical: `${SITE_URL}${canonicalRoute}`,
      languages: {
        en: canonicalRoute,
        ...(kmRoute ? { km: kmRoute } : {}),
        "x-default": canonicalRoute,
      },
    },
    robots: { index: false, follow: true },
  };
}

