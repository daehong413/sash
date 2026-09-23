import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();
  return {
    rules: origin
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: origin ? `${origin}/sitemap.xml` : undefined,
  };
}
