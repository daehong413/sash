import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingConsult from "@/components/FloatingConsult";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: "샤시 교체, 이중창 단열 시공, 방범창 제작까지 직영팀이 책임 시공합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingConsult />
      </body>
    </html>
  );
}
