import Link from "next/link";

const details = [
  {
    id: "replace",
    title: "샤시 교체",
    desc: "노후된 알루미늄 창틀을 철거하고 단열 등급이 높은 시스템 샤시로 교체합니다. 벽체 손상을 최소화하는 시공 방식을 사용하며, 창틀 소재와 유리 사양을 선택할 수 있습니다.",
    points: ["기존 창틀 철거 및 폐기물 처리 포함", "시스템 창호 / 일반 창호 사양 선택 가능", "당일 시공 원칙 (대형 세대 제외)"],
  },
  {
    id: "insulation",
    title: "이중창 · 단열 시공",
    desc: "기존 창을 유지한 채 안쪽에 이중창을 추가하거나, 로이(Low-E) 복층유리로 교체해 겨울철 웃풍과 결로를 줄입니다. 소음이 심한 도로변 세대에도 효과적입니다.",
    points: ["로이 복층유리 / 삼중유리 옵션", "기존 창 철거 없이 시공 가능", "방음 성능 상담 후 자재 추천"],
  },
  {
    id: "safety",
    title: "방범창 · 방충망",
    desc: "저층 세대의 침입 방지를 위한 방범창과, 내구성이 강한 스텐 방충망을 제작 시공합니다. 화재 시 신속히 개방할 수 있는 안전 방범창도 취급합니다.",
    points: ["일반형 / 화재 대피용 방범창", "스텐리스 방충망 (변색·처짐 적음)", "베란다, 주방, 각 방 개별 시공 가능"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cloud">
        <div className="container-content py-16 md:py-20 text-center">
          <p className="text-primary text-[14px] font-bold mb-3">시공 서비스</p>
          <h1 className="text-ink text-[28px] md:text-[36px] font-bold tracking-tight2 leading-tight">
            필요한 만큼만, 정직하게 시공합니다
          </h1>
        </div>
      </section>

      {details.map((d, i) => (
        <section key={d.id} id={d.id} className={i % 2 === 0 ? "bg-paper" : "bg-cloud"}>
          <div className="container-content py-16 md:py-20 grid md:grid-cols-2 gap-10 items-start border-t border-line">
            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink tracking-tight2 mb-4">
                {d.title}
              </h2>
              <p className="text-[15px] leading-7 text-muted max-w-md">{d.desc}</p>
            </div>
            <ul className="space-y-3">
              {d.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-ink leading-6">
                  <span className="text-primary font-bold shrink-0">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-paper">
        <div className="container-content py-16 text-center border-t border-line">
          <h2 className="text-ink text-[22px] md:text-[26px] font-bold tracking-tight2">
            어떤 시공이 필요한지 고민되신다면
          </h2>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-pill bg-primary px-7 py-3.5 text-[15px] font-bold text-white hover:bg-primary-dark transition-colors"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>
    </>
  );
}
