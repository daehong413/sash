const stats = [
  { value: "96.4%", label: "고객 만족도", icon: "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z", color: "#1F5FD1" },
  { value: "4,200+", label: "누적 시공 건수", icon: "M4 4h16v16H4zM4 9h16M9 4v16", color: "#00C2A8" },
  { value: "100%", label: "직영 시공팀 운영", icon: "M12 2a5 5 0 015 5c0 3-5 11-5 11S7 10 7 7a5 5 0 015-5z", color: "#7C6FEF" },
];

export default function Stats() {
  return (
    <section className="bg-cloud">
      <div className="container-content py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper rounded-xl2 p-7 flex items-center gap-5 shadow-card">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${s.color}1A` }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d={s.icon} stroke={s.color} strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-[24px] font-bold text-ink tracking-tight2">{s.value}</div>
                <div className="text-[13.5px] text-muted mt-0.5">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
