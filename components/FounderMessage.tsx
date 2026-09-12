export default function FounderMessage() {
  return (
    <section className="bg-cloud">
      <div className="container-content py-16 md:py-20 text-center">
        <h2 className="text-[24px] md:text-[30px] font-bold text-ink tracking-tight2 mb-10">
          대표가 말하는
          <br className="md:hidden" /> 시공의 기준
        </h2>
        <div className="max-w-2xl mx-auto rounded-xl2 overflow-hidden shadow-soft bg-ink aspect-video relative flex items-center justify-center">
          <button
            type="button"
            aria-label="인터뷰 영상 재생"
            className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="#1F5FD1" />
            </svg>
          </button>
          <span className="absolute bottom-4 left-4 text-white/70 text-[13px]">
            대표 인터뷰 영상 (실제 영상 파일로 교체해주세요)
          </span>
        </div>
      </div>
    </section>
  );
}
