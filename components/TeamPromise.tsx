"use client";
import { useRef, useState } from "react";
import { Arrow } from "./Icons";
import Image from "next/image";
const promises = [
  {
    label: "정확한 실측",
    title: (
      <>
        모든 창이 다르기에,
        <br />
        직접 보고 시작합니다.
      </>
    ),
    desc: "집의 방향과 구조, 기존 창틀의 상태까지. 현장을 살펴 우리 집에 꼭 필요한 시공을 제안합니다.",
    detail: "현장 확인 · 맞춤 상담 · 시공 범위 안내",
    word: "MEASURE",
    image: "/images/generated/measure.png",
    alt: "기존 창틀의 폭을 줄자로 실측하는 작업",
  },
  {
    label: "정직한 자재",
    title: (
      <>
        보이지 않는 사양도,
        <br />
        분명하게 안내합니다.
      </>
    ),
    desc: "창틀 소재부터 유리의 등급과 두께까지. 비교하고 선택할 수 있도록 견적에 사용 자재를 명확하게 담습니다.",
    detail: "자재 사양 · 유리 등급 · 투명한 견적",
    word: "MATERIAL",
    image: "/images/generated/materials.png",
    alt: "창틀 단면과 복층 유리 자재 샘플",
  },
  {
    label: "꼼꼼한 시공",
    title: (
      <>
        작은 틈 하나까지,
        <br />
        끝까지 살펴봅니다.
      </>
    ),
    desc: "수평과 수직을 맞추고, 틈새를 채우고, 마감을 확인합니다. 눈에 잘 띄지 않는 부분까지 기본을 지킵니다.",
    detail: "정밀 설치 · 틈새 마감 · 작동 점검",
    word: "DETAIL",
    image: "/images/generated/installation.png",
    alt: "창틀 가장자리에 실리콘을 꼼꼼하게 마감하는 작업",
  },
  {
    label: "책임 있는 관리",
    title: (
      <>
        창을 설치한 다음도,
        <br />
        우리의 일입니다.
      </>
    ),
    desc: "여닫는 움직임부터 사용 중 궁금한 점까지. 시공 후에도 편안하게 사용할 수 있도록 함께 살펴드립니다.",
    detail: "사용 안내 · 시공 확인 · 사후 상담",
    word: "CARE",
    image: "/images/generated/aftercare.png",
    alt: "창문 경첩과 하드웨어를 점검하는 작업",
  },
];
export default function TeamPromise() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  function select(index: number) {
    setActive((index + promises.length) % promises.length);
  }

  return (
    <section
      className="promise-section section-space"
      aria-label="시공 원칙 슬라이드"
    >
      <div className="container-content">
        <div className="section-heading">
          <p className="eyebrow">시공 전 확인하는 네 가지</p>
          <h2 className="section-title">
            좋은 시공을 위한
            <br />
            변하지 않는 네 가지 약속.
          </h2>
        </div>
        <div className="promise-tabs" role="tablist" aria-label="시공 원칙">
          {promises.map((item, i) => (
            <button
              key={item.label}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`promise-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={active === i}
              aria-controls={`promise-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(event) => {
                let next = i;
                if (event.key === "ArrowRight") next = (i + 1) % 4;
                else if (event.key === "ArrowLeft") next = (i + 3) % 4;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = 3;
                else return;
                event.preventDefault();
                select(next);
                tabs.current[next]?.focus();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div
        className="promise-viewport"
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse") {
            pointer.current = { x: event.clientX, y: event.clientY };
            event.currentTarget.setPointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={() => {
          pointer.current = null;
        }}
        onPointerUp={(event) => {
          const start = pointer.current;
          pointer.current = null;
          if (!start) return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy))
            select(active + (dx < 0 ? 1 : -1));
        }}
      >
        <div
          className="promise-track"
          style={{
            transform: `translateX(calc(-${active * 100}% - ${active * 24}px))`,
          }}
        >
          {promises.map((item, i) => (
            <div
              key={item.word}
              className={`promise-panel ${active === i ? "is-active" : ""}`}
              id={`promise-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`promise-tab-${i}`}
              aria-hidden={active !== i}
              tabIndex={active === i ? 0 : -1}
            >
              <div className="promise-art">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 500px"
                />
                <span className="promise-art-word">{item.label}</span>
              </div>
              <div className="promise-content">
                <span className="eyebrow">시공 원칙</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="promise-detail">
                  <span>{item.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls" aria-label="약속 슬라이드 제어">
        <button
          type="button"
          onClick={() => select(active - 1)}
          aria-label="이전 약속"
        >
          <Arrow className="arrow-back" />
        </button>
        <span className="carousel-page" aria-live="polite" aria-atomic="true">
          <strong>{active + 1}</strong>
          <span>/</span>
          {promises.length}
        </span>
        <button
          type="button"
          onClick={() => select(active + 1)}
          aria-label="다음 약속"
        >
          <Arrow />
        </button>
      </div>
    </section>
  );
}
