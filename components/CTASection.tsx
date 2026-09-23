import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";
export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container-content">
        <Reveal className="cta-inner">
          <div>
            <p className="eyebrow light">창호 교체 상담</p>
            <h2>
              시공 범위와 비용,
              <br className="mobile-break" /> 상담으로 확인하세요.
            </h2>
            <p>어떤 시공이 필요할지, 실측부터 차근차근 안내해드립니다.</p>
          </div>
          <Link href="/contact" className="button button-white">
            무료 견적 상담하기
            <Arrow diagonal />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
