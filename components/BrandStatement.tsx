import { siteConfig } from "@/lib/site-config";

export default function BrandStatement() {
  return (
    <section className="bg-cloud">
      <div className="container-content py-20 md:py-28 text-center">
        <p className="text-[15px] text-muted mb-3">‘여닫을 때마다, 한결같이’</p>
        <h2 className="text-[26px] md:text-[34px] font-bold text-ink tracking-tight2 leading-snug">
          창호에 관한 모든 것,
          <br />
          <span className="text-primary">하나의 브랜드</span>로
        </h2>

        <div className="mt-12 max-w-md mx-auto">
          <p className="text-[15px] font-semibold text-ink">꼭 저희가 아니어도 괜찮아요</p>
          <p className="mt-2 text-[14.5px] text-muted leading-6">
            천천히 비교해보고, 우리 집에 가장 맞는 선택을 해주세요.
          </p>
        </div>

        <div className="mt-10 inline-flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M9 15h12M15 9v12" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" transform="translate(-3 -3)" />
            </svg>
          </span>
          <span className="text-[15px] font-bold text-ink">{siteConfig.name}</span>
        </div>
      </div>
    </section>
  );
}
