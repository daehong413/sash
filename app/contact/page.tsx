import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <>
      <section className="bg-cloud">
        <div className="container-content py-16 md:py-20 text-center">
          <p className="text-primary text-[14px] font-bold mb-3">견적 문의</p>
          <h1 className="text-ink text-[28px] md:text-[36px] font-bold tracking-tight2 leading-tight">
            현장 실측은 무료입니다
          </h1>
          <p className="mt-4 text-muted text-[15px] max-w-lg mx-auto">
            아래 정보를 남겨주시면 담당자가 확인 후 연락드립니다. 급하신
            경우 전화나 카카오톡으로 바로 문의해주세요.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-content py-16 md:py-20 grid md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h2 className="text-[14px] font-semibold text-ink mb-2">전화 상담</h2>
              <a href={siteConfig.phoneHref} className="text-[22px] font-bold text-primary">
                {siteConfig.phone}
              </a>
              <p className="text-[14px] text-muted mt-1">{siteConfig.businessHours}</p>
            </div>
            <div>
              <h2 className="text-[14px] font-semibold text-ink mb-2">카카오톡 상담</h2>
              <a href={siteConfig.kakaoUrl} className="text-[15px] text-ink underline">
                카카오톡 채널 바로가기
              </a>
            </div>
            <div>
              <h2 className="text-[14px] font-semibold text-ink mb-2">이메일</h2>
              <a href={`mailto:${siteConfig.email}`} className="text-[15px] text-ink underline">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <h2 className="text-[14px] font-semibold text-ink mb-2">주소</h2>
              <p className="text-[15px] text-muted">{siteConfig.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
