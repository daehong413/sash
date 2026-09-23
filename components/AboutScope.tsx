"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Icons";
const scopes = [
  {
    title: "주거 창호",
    view: "overview",
    highlights: [
      "M312 663 L1151 663 L1145 782 L314 782 Z",
      "M285 118 L308 118 L274 321 L253 301 Z",
    ],
    subtitle: "집 전체의 창을 살피는 교체",
    description:
      "오래된 창틀의 상태와 공간별 사용 방식을 확인하고, 집 전체에 맞는 교체 범위를 정합니다.",
    href: "/services#replace",
  },
  {
    title: "단열 개선",
    view: "glazing",
    highlights: [
      "M444 671 L550 671 L550 764 L445 764 Z",
      "M565 671 L741 671 L739 764 L567 764 Z",
      "M764 671 L939 671 L935 764 L765 764 Z",
      "M959 671 L1136 671 L1131 764 L956 764 Z",
    ],
    subtitle: "온기가 빠져나가는 곳부터",
    description:
      "외부와 맞닿은 창의 유리 구성과 창틀 사양을 검토해 단열 개선에 필요한 조건을 살펴봅니다.",
    href: "/services#insulation",
  },
  {
    title: "부분 시공",
    view: "room",
    highlights: ["M285 118 L308 118 L274 321 L253 301 Z"],
    subtitle: "필요한 공간만 알맞게",
    description:
      "방이나 거실처럼 불편한 공간을 중심으로, 기존 창틀과 주변 마감을 고려해 교체를 상담합니다.",
    href: "/services#replace",
  },
  {
    title: "생활 편의",
    view: "balcony",
    highlights: ["M325 671 L429 671 L433 765 L331 765 Z"],
    subtitle: "환기와 안전을 위한 선택",
    description:
      "방충망과 방범창 등 창을 사용하는 일상에 필요한 시공을 공간의 용도에 맞춰 안내합니다.",
    href: "/services#safety",
  },
];
export default function AboutScope() {
  const [active, setActive] = useState(0);
  const scope = scopes[active];
  return (
    <div className="about-scope-interactive">
      <div className="about-scope-choices">
        <div role="group" aria-label="시공 범위 선택">
          {scopes.map((item, i) => (
            <button
              type="button"
              key={item.title}
              aria-pressed={active === i}
              aria-controls="about-scope-description about-scope-image"
              onClick={() => setActive(i)}
            >
              {item.title}
              <span aria-hidden="true">{active === i ? "−" : "+"}</span>
            </button>
          ))}
        </div>
        <div
          id="about-scope-description"
          className="about-scope-description"
          aria-live="polite"
        >
          <h3>{scope.subtitle}</h3>
          <p>{scope.description}</p>
          <Link href={scope.href}>
            관련 시공 알아보기 <Arrow />
          </Link>
        </div>
      </div>
      <figure className="about-plan">
        <div
          id="about-scope-image"
          className="about-plan-image"
          data-view={scope.view}
        >
          <div className="about-plan-scene">
            <Image
              src="/images/generated/apartment-cutaway-interactive.png"
              alt="침실 창, 전면 복층 창호와 왼쪽 방충망을 구분해 볼 수 있는 아파트 단면 모형"
              fill
              sizes="(max-width:767px) 100vw, 720px"
            />
            <svg
              className="about-plan-highlight"
              viewBox="0 0 1448 1086"
              aria-hidden="true"
              focusable="false"
            >
              {scopes.map((item) => (
                <g
                  key={item.view}
                  className={scope.view === item.view ? "is-active" : ""}
                >
                  {item.highlights.map((path) => (
                    <path
                      key={path}
                      d={path}
                      pathLength="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </g>
              ))}
            </svg>
          </div>
        </div>
        <figcaption>
          <strong>{scope.title}</strong>
          <span>주거 공간과 창호 배치를 보여주는 생성 이미지</span>
        </figcaption>
      </figure>
    </div>
  );
}
