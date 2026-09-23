"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Icons";

export default function ScrollGallery({
  children,
}: {
  children: React.ReactNode;
}) {
  const gallery = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const element = gallery.current;
    if (!element) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      setEdges({
        start: element.scrollLeft <= 2,
        end:
          element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    const resize = new ResizeObserver(schedule);
    resize.observe(element);
    element.addEventListener("scroll", schedule, { passive: true });
    return () => {
      resize.disconnect();
      cancelAnimationFrame(frame);
      element.removeEventListener("scroll", schedule);
    };
  }, []);

  function move(direction: number) {
    const element = gallery.current;
    const first = element?.firstElementChild;
    if (!element || !first) return;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    element.scrollBy({
      left: direction * (first.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  return (
    <>
      <div ref={gallery} className="editorial-grid" id="service-gallery">
        {children}
      </div>
      <div className="gallery-controls">
        <span>옆으로 넘겨 더 살펴보세요</span>
        <button
          type="button"
          onClick={() => move(-1)}
          disabled={edges.start}
          aria-label="이전 서비스 보기"
          aria-controls="service-gallery"
        >
          <Arrow className="arrow-back" />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          disabled={edges.end}
          aria-label="다음 서비스 보기"
          aria-controls="service-gallery"
        >
          <Arrow />
        </button>
      </div>
    </>
  );
}
