import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="26" height="26" rx="8" fill="#1F5FD1" />
      <path d="M9 15h12M15 9v12" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="container-content flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Mark />
          <span className="text-[19px] font-bold tracking-tight2 text-ink">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink/70 hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="hidden sm:inline text-[15px] font-bold text-primary"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-pill bg-primary px-5 py-2.5 text-[14px] font-bold text-white hover:bg-primary-dark transition-colors"
          >
            무료 견적 받기
          </Link>
        </div>
      </div>
    </header>
  );
}
