"use client";

import { useEffect, useRef } from "react";
import { countAtProgress, referenceMotion } from "@/lib/motion";

export default function CountUp({
  value,
  decimals = 0,
  unit = "",
}: {
  value: number;
  decimals?: number;
  unit?: string;
}) {
  const node = useRef<HTMLSpanElement>(null);
  const format = (number: number) =>
    number.toLocaleString("ko-KR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  const finalText = format(value);

  useEffect(() => {
    const element = node.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    let frame = 0;
    let started: number | undefined;
    const render = (number: number) => {
      element.textContent = number.toLocaleString("ko-KR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    };
    const tick = (time: number) => {
      started ??= time;
      const progress = (time - started) / referenceMotion.countDurationMs;
      render(countAtProgress(value, progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          frame = requestAnimationFrame(tick);
        }
      },
      { threshold: referenceMotion.countVisibility },
    );
    render(0);
    observer.observe(element);
    const finish = () => {
      if (preference.matches || document.hidden) {
        observer.disconnect();
        cancelAnimationFrame(frame);
        render(value);
      }
    };
    preference.addEventListener("change", finish);
    document.addEventListener("visibilitychange", finish);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", finish);
      document.removeEventListener("visibilitychange", finish);
      render(value);
    };
  }, [value, decimals]);

  return (
    <span className="count-up">
      <span className="sr-only">
        {finalText}
        {unit}
      </span>
      <span aria-hidden="true">
        <span ref={node}>{finalText}</span>
        <span className="count-unit">{unit}</span>
      </span>
    </span>
  );
}
