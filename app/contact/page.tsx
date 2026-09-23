import ContactPageContent from "@/components/ContactPageContent";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";
import "./contact.css";

export const metadata = pageMetadata(
  `무료 견적 상담 | ${siteConfig.name}`,
  "우리 집 주소로 시작하는 창호 교체 상담. 평형과 교체 범위를 알려주시면 공간에 맞는 시공을 안내합니다.",
  "/contact",
);

export default function ContactPage() {
  return <ContactPageContent />;
}
