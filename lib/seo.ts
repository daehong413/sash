import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export function getSiteOrigin(): string | undefined {
  const value = process.env.SITE_URL?.trim();
  if (!value) return undefined;
  const url = new URL(value);
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL에는 경로 없는 실제 사이트 주소를 입력하세요. 예: https://your-domain.kr",
    );
  }
  return url.origin;
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const origin = getSiteOrigin();
  const url = origin ? new URL(path, origin).href : undefined;
  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "ko_KR",
      type: "website",
    },
    twitter: { card: "summary", title, description },
    robots: { index: Boolean(origin), follow: true },
  };
}
