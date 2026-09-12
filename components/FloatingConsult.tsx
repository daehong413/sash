import { siteConfig } from "@/lib/site-config";

export default function FloatingConsult() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
      <a
        href={siteConfig.phoneHref}
        className="flex items-center gap-2 rounded-pill bg-primary text-white px-4 py-3 text-[14px] font-bold shadow-soft hover:bg-primary-dark transition-colors"
        aria-label="전화 상담"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8c1.2 2.4 3.2 4.3 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C10.7 20.4 3.6 13.3 3.6 4.4c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"
            fill="currentColor"
          />
        </svg>
        전화상담
      </a>
      <a
        href={siteConfig.kakaoUrl}
        className="flex items-center gap-2 rounded-pill bg-[#F7E14D] text-ink px-4 py-3 text-[14px] font-bold shadow-soft hover:brightness-95 transition-all"
        aria-label="카카오톡 상담"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3C6.5 3 2 6.4 2 10.6c0 2.7 1.8 5 4.6 6.4-.2.7-.7 2.6-.8 3-.1.4.2.4.3.3.2-.1 2.7-1.8 3.8-2.5.7.1 1.4.2 2.1.2 5.5 0 10-3.4 10-7.4S17.5 3 12 3z"
            fill="currentColor"
          />
        </svg>
        카톡상담
      </a>
    </div>
  );
}
