const steps = [
  { n: "01", title: "상담 신청", desc: "전화, 카카오톡, 견적 문의 폼 중 편한 방법으로 남겨주세요." },
  { n: "02", title: "현장 실측", desc: "담당 기사가 직접 방문해 창틀 상태와 치수를 확인합니다." },
  { n: "03", title: "견적 안내", desc: "실측 결과를 바탕으로 자재와 비용을 투명하게 안내합니다." },
  { n: "04", title: "시공 · A/S", desc: "당일 시공 원칙, 시공 후에도 하자 발생 시 책임지고 재방문합니다." },
];

export default function ProcessSteps() {
  return (
    <section className="bg-ink">
      <div className="container-content py-16 md:py-20">
        <h2 className="text-[26px] md:text-[30px] font-bold text-paper tracking-tight2 mb-10">
          시공은 이렇게 진행됩니다
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="text-brass text-[14px] font-bold mb-3">{s.n}</div>
              <h3 className="text-paper text-[17px] font-bold mb-2">{s.title}</h3>
              <p className="text-paper/60 text-[14px] leading-6">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
