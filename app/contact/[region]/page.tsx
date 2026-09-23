import { notFound } from "next/navigation";
import ContactPageContent from "@/components/ContactPageContent";
import {
  contactRegions,
  getContactRegion,
  regionPath,
} from "@/lib/contact-regions";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import "../contact.css";

type Props = { params: { region: string } };

export function generateStaticParams() {
  // 광역·시·군·구는 미리 생성하고 읍·면·동은 첫 요청 시 생성해 캐시합니다.
  return contactRegions
    .filter(({ level }) => !["읍", "면", "동"].includes(level))
    .map(({ slug }) => ({ region: slug }));
}

export function generateMetadata({ params }: Props) {
  const region = getContactRegion(params.region);
  if (!region) notFound();
  return pageMetadata(
    `${region.fullName} 샤시 교체 · 창호 견적 | ${siteConfig.name}`,
    region.description,
    regionPath(region),
  );
}

export default function RegionContactPage({ params }: Props) {
  const region = getContactRegion(params.region);
  if (!region) notFound();
  return <ContactPageContent region={region} />;
}
