"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: 실제 운영 시에는 이 부분을 API 라우트나
    // 폼 전송 서비스(예: 이메일 전송 API) 호출로 교체하세요.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-white p-8 text-center">
        <p className="text-[17px] font-bold text-ink mb-2">문의가 접수되었습니다</p>
        <p className="text-[14.5px] text-muted">
          영업일 기준 1일 이내에 남겨주신 연락처로 안내드릴게요.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-[14px] font-semibold text-ink mb-1.5">
          이름
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-line bg-white px-4 py-3 text-[15px] text-ink focus-visible:outline-2 focus-visible:outline-primary"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-[14px] font-semibold text-ink mb-1.5">
          연락처
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="010-0000-0000"
          className="w-full border border-line bg-white px-4 py-3 text-[15px] text-ink focus-visible:outline-2 focus-visible:outline-primary"
        />
      </div>
      <div>
        <label htmlFor="region" className="block text-[14px] font-semibold text-ink mb-1.5">
          시공 희망 지역
        </label>
        <input
          id="region"
          name="region"
          type="text"
          placeholder="예: OO시 OO구"
          className="w-full border border-line bg-white px-4 py-3 text-[15px] text-ink focus-visible:outline-2 focus-visible:outline-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[14px] font-semibold text-ink mb-1.5">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="어떤 시공이 필요하신지, 세대 유형을 알려주시면 더 정확히 안내드려요."
          className="w-full border border-line bg-white px-4 py-3 text-[15px] text-ink focus-visible:outline-2 focus-visible:outline-primary"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-sm rounded-pill bg-primary px-6 py-3.5 text-[15px] font-bold text-white hover:bg-primary-dark transition-colors"
      >
        문의 남기기
      </button>
    </form>
  );
}
