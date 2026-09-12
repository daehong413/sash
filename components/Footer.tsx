import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-cloud text-muted border-t border-line">
      <div className="container-content py-14">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div>
            <div className="text-[18px] font-bold text-ink mb-3">{siteConfig.name}</div>
            <p className="text-[14px] leading-6 max-w-xs">
              {siteConfig.address}
              <br />
              {siteConfig.businessHours}
              <br />
              {siteConfig.regNumber}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="text-[13px] font-semibold text-ink mb-3">바로가기</div>
              <ul className="space-y-2 text-[14px]">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-ink transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-ink mb-3">연락처</div>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <a href={siteConfig.phoneHref} className="hover:text-ink transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-ink transition-colors">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-ink mb-3">SNS</div>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <a href={siteConfig.social.blog} className="hover:text-ink transition-colors">
                    블로그
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.instagram} className="hover:text-ink transition-colors">
                    인스타그램
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.youtube} className="hover:text-ink transition-colors">
                    유튜브
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line text-[12px]">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
