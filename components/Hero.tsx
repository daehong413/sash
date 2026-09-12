import Link from "next/link";

const services = [
  { title: "샤시 교체", href: "/services#replace", bg: "#EAF1FE", icon: "M4 4h16v16H4zM12 4v16M4 12h16" },
  { title: "이중창·단열 시공", href: "/services#insulation", bg: "#E6F9F6", icon: "M4 4h16v16H4zM4 9h16M4 15h16" },
  { title: "방범창·방충망", href: "/services#safety", bg: "#F1EEFE", icon: "M4 4h16v16H4zM4 4l16 16M20 4L4 20" },
];

function TileIcon({ path, color }: { path: string; color: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={path} stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-paper">
      <div className="container-content pt-16 pb-12 md:pt-24 md:pb-16 text-center">
        <p className="text-primary text-[15px] font-bold mb-4">창호 시공 20년, 믿을 수 있는 시공팀</p>
        <h1 className="text-ink text-[30px] md:text-[44px] font-bold leading-[1.35] tracking-tight2">
          우리는 지금도, 앞으로도
          <br />
          <span className="text-primary">‘기본을 지키는 시공팀’</span>로 남을게요
        </h1>

        <div className="mt-12 grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="group">
              <div
                className="aspect-square rounded-xl2 flex items-center justify-center shadow-card group-hover:shadow-soft transition-shadow"
                style={{ backgroundColor: s.bg }}
              >
                <TileIcon path={s.icon} color="#1F5FD1" />
              </div>
              <p className="mt-3 text-[14px] md:text-[15px] font-semibold text-ink">{s.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
