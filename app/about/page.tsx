import { siteConfig } from "@/lib/site-config";

const history = [
  { year: "2005", text: "OO시에서 개인 창호 시공소로 시작" },
  { year: "2012", text: "직영 시공팀 3개 팀 체제로 확장" },
  { year: "2019", text: "누적 시공 3,000건 돌파" },
  { year: "2024", text: `법인 전환, '${siteConfig.name}'으로 사명 변경` },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cloud">
        <div className="container-content py-16 md:py-20 text-center">
          <p className="text-primary text-[14px] font-bold mb-3">회사 소개</p>
          <h1 className="text-ink text-[28px] md:text-[36px] font-bold tracking-tight2 leading-tight max-w-xl mx-auto">
            눈에 보이지 않는 부분까지
            <br />
            책임지는 게 저희 일입니다
          </h1>
          <p className="mt-5 text-muted text-[15.5px] leading-7 max-w-lg mx-auto">
            창호는 마감재가 아니라 단열재입니다. {siteConfig.name}은 자재 등급을
            낮추지 않고, 실측한 기사가 직접 시공까지 마무리하는 원칙을
            지켜왔습니다.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-content py-16 md:py-20">
          <h2 className="text-[22px] md:text-[26px] font-bold text-ink tracking-tight2 mb-10 text-center">
            걸어온 길
          </h2>
          <div className="max-w-2xl mx-auto">
            {history.map((h) => (
              <div
                key={h.year}
                className="flex gap-6 py-5 border-t border-line last:border-b"
              >
                <div className="text-primary font-bold text-[16px] w-16 shrink-0">
                  {h.year}
                </div>
                <div className="text-ink text-[15px] leading-6">{h.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className="container-content py-16 md:py-20">
          <h2 className="text-[22px] md:text-[26px] font-bold text-ink tracking-tight2 mb-10 text-center">
            일하는 원칙
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { t: "직영 시공", d: "외주 없이 실측한 기사가 시공까지 맡아 책임 소재를 분명히 합니다." },
              { t: "정직한 자재", d: "견적서에 사용 자재의 등급과 두께를 명시해 사후에 바뀌지 않습니다." },
              { t: "사후 관리", d: "시공 후 하자가 발견되면 별도 비용 없이 재방문해 조치합니다." },
            ].map((p) => (
              <div key={p.t} className="bg-paper rounded-xl2 p-7 shadow-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <h3 className="text-[16.5px] font-bold text-ink mb-2">{p.t}</h3>
                <p className="text-[14px] text-muted leading-6">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
