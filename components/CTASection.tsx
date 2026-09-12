import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section className="bg-paper">
      <div className="container-content py-16 md:py-20 text-center border-t border-line">
        <h2 className="text-ink text-[24px] md:text-[30px] font-bold tracking-tight2 leading-snug">
          지금 창틀 상태, 무료로 점검해드릴게요
        </h2>
        <p className="mt-3 text-muted text-[15px]">
          실측 후 견적까지 비용 부담 없이 안내해드립니다.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-pill bg-primary px-7 py-3.5 text-[15px] font-bold text-white hover:bg-primary-dark transition-colors"
          >
            견적 문의하기
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="rounded-pill border border-line px-7 py-3.5 text-[15px] font-bold text-ink hover:bg-cloud transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
