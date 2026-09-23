"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "./Icons";
export default function FloatingConsult() {
  const pathname = usePathname();
  if (pathname === "/contact" || pathname.startsWith("/contact/")) return null;

  return (
    <Link href="/contact" className="floating-consult">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 11.5a8 8 0 0 1-8 8H5l-3 2v-10a9 9 0 0 1 18 0Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M7 11h8M7 15h5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span>창호 상담</span>
      <Arrow diagonal />
    </Link>
  );
}
