const reviews = [
  {
    tag: "이중창 시공",
    date: "2026. 08. 12",
    author: "OO동 아파트",
    title: "겨울 웃풍 걱정 끝, 이중창 시공 후기",
    body: "겨울마다 웃풍 때문에 고민이었는데 이중창 시공 후 확실히 따뜻해졌어요. 실측부터 시공까지 하루 만에 끝나서 놀랐습니다.",
  },
  {
    tag: "샤시 교체",
    date: "2026. 07. 28",
    author: "OO동 주택",
    title: "노후 샤시 전체 교체, 만족스러운 마감",
    body: "20년 된 샤시를 전체 교체했는데 마감이 정말 깔끔했어요. 견적도 자재 등급까지 자세히 설명해주셔서 믿음이 갔습니다.",
  },
  {
    tag: "방범창",
    date: "2026. 06. 15",
    author: "OO동 빌라",
    title: "저층 세대 방범창 설치 후기",
    body: "1층이라 방범이 항상 걱정이었는데 화재 대피형 방범창으로 설치해주셔서 안심이 됩니다. 상담도 친절했어요.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper">
      <div className="container-content py-16 md:py-20">
        <h2 className="text-[24px] md:text-[30px] font-bold text-ink tracking-tight2 mb-10 text-center">
          고객님이 직접 남긴 이야기
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article key={r.title} className="rounded-xl2 border border-line overflow-hidden shadow-card">
              <div className="aspect-[4/3] bg-cloud flex items-center justify-center">
                <span className="text-[13px] text-muted">시공 사진</span>
              </div>
              <div className="p-6">
                <span className="inline-block rounded-pill bg-primary/10 text-primary text-[12.5px] font-semibold px-3 py-1 mb-3">
                  #{r.tag}
                </span>
                <h3 className="text-[16px] font-bold text-ink leading-6 mb-2">{r.title}</h3>
                <p className="text-[14px] text-muted leading-6">{r.body}</p>
                <p className="mt-4 text-[12.5px] text-muted/80">
                  {r.author} · {r.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
