"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Icons";
const cases = [
  {
    image: "contact-lounge",
    tag: "거실",
    title: "넓은 거실, 단열과 채광을 함께",
    href: "/services#insulation",
  },
  {
    image: "contact-kitchen",
    tag: "주방",
    title: "환기를 생각한 주방 창호",
    href: "/services#replace",
  },
  {
    image: "contact-study",
    tag: "방",
    title: "오래 머무는 방의 편안한 창",
    href: "/services#insulation",
  },
  {
    image: "contact-balcony",
    tag: "베란다",
    title: "노후 베란다 창호 교체",
    href: "/services#replace",
  },
];
export default function ContactCases() {
  const [filter, setFilter] = useState("전체");
  const visible = cases.filter(
    (item) => filter === "전체" || item.tag === filter,
  );
  return (
    <section className="contact-cases contact-section" id="contact-cases">
      <div className="container-content">
        <div className="contact-section-heading">
          <h2>공간에 따라 살펴보는 창호 교체</h2>
          <p>우리 집과 비슷한 공간에서 필요한 시공을 확인해보세요.</p>
        </div>
        <div
          className="contact-case-filters"
          role="group"
          aria-label="공간별 예시 필터"
        >
          {["전체", "거실", "주방", "방", "베란다"].map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={filter === tag}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          {filter} 공간 예시 {visible.length}개
        </p>
        <div
          className={`contact-case-grid${filter !== "전체" ? " is-filtered" : ""}`}
        >
          {visible.map((item) => (
            <Link key={item.image} href={item.href}>
              <div className="contact-case-image">
                <Image
                  src={`/images/generated/${item.image}.png`}
                  alt={`${item.tag} 창호의 생성 이미지 예시`}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 1023px) 45vw, 320px"
                />
              </div>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>
                창호 구성 예시 <Arrow diagonal />
              </p>
            </Link>
          ))}
        </div>
        <p className="contact-image-note">
          실제 고객 후기가 아닌, 공간 이해를 돕기 위한 생성 이미지입니다.
        </p>
        <div className="contact-center-action">
          <Link href="/services" className="contact-blue-link">
            시공 서비스 더 보기 <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
