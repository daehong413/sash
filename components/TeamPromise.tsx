const team = [
  {
    name: "김성진",
    role: "대표",
    quote: "창호는 마감재가 아니라 단열재입니다.",
    body: "언제나 기본을 지켜야 오래 신뢰받을 수 있다는 마음으로 시공하겠습니다.",
  },
  {
    name: "박현우",
    role: "시공팀장",
    quote: "결과가 만족스럽지 않다면 의미가 없습니다.",
    body: "실측한 사람이 끝까지 책임지는 시공으로 결과를 보여드리겠습니다.",
  },
  {
    name: "이지훈",
    role: "수도권 담당",
    quote: "한 번의 시공으로 끝나는 인연이 아니길 바랍니다.",
    body: "다음에도 다시 찾고 싶은 시공팀이 되도록 노력하겠습니다.",
  },
  {
    name: "정민수",
    role: "A/S 담당",
    quote: "고객은 과정보다 결과를 기억합니다.",
    body: "맡겨주신 만큼 만족스러운 결과로 보답하겠습니다.",
  },
];

function Avatar({ name }: { name: string }) {
  return (
    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[16px]">
      {name.slice(0, 1)}
    </div>
  );
}

export default function TeamPromise() {
  return (
    <section className="bg-paper">
      <div className="container-content py-16 md:py-20">
        <h2 className="text-[24px] md:text-[30px] font-bold text-ink tracking-tight2 mb-10 text-center">
          고객님께 전하는 약속
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl2 border border-line p-7 flex gap-5">
              <Avatar name={m.name} />
              <div>
                <p className="text-[13.5px] text-muted mb-1">
                  {m.role} · {m.name}
                </p>
                <p className="text-[15.5px] font-bold text-ink leading-6">{m.quote}</p>
                <p className="mt-1.5 text-[14px] text-muted leading-6">{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
