"use client";

import { useRef, useState } from "react";

type Address = {
  roadAddress: string;
  jibunAddress: string;
  buildingName: string;
};
type PostcodeConstructor = new (options: {
  oncomplete: (address: Address) => void;
  width: string;
  height: string;
}) => { embed: (container: HTMLElement) => void };
declare global {
  interface Window {
    kakao?: { Postcode: PostcodeConstructor };
  }
}
let postcodeLoader: Promise<void> | undefined;
function loadPostcode() {
  if (window.kakao?.Postcode) return Promise.resolve();
  if (!postcodeLoader)
    postcodeLoader = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      const timeout = window.setTimeout(() => {
        script.remove();
        reject(new Error("timeout"));
      }, 10000);
      script.src =
        "https://t1.kakaocdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.onload = () => {
        clearTimeout(timeout);
        if (window.kakao?.Postcode) resolve();
        else reject(new Error("unavailable"));
      };
      script.onerror = () => {
        clearTimeout(timeout);
        script.remove();
        reject(new Error("unavailable"));
      };
      document.head.appendChild(script);
    }).catch((error) => {
      postcodeLoader = undefined;
      throw error;
    });
  return postcodeLoader;
}

export default function AddressSearch({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const embed = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  async function open() {
    dialog.current?.showModal();
    setStatus("loading");
    try {
      await loadPostcode();
      if (!dialog.current?.open || !embed.current || !window.kakao?.Postcode)
        return;
      embed.current.replaceChildren();
      new window.kakao.Postcode({
        width: "100%",
        height: "100%",
        oncomplete: (data) => {
          onSelect(
            [data.roadAddress || data.jibunAddress, data.buildingName]
              .filter(Boolean)
              .join(" "),
          );
          dialog.current?.close();
        },
      }).embed(embed.current);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }
  return (
    <>
      <button
        ref={trigger}
        className="address-search-button"
        type="button"
        onClick={open}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="10.5"
            cy="10.5"
            r="6.5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="m16 16 5 5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
        주소 검색
      </button>
      <dialog
        ref={dialog}
        className="address-dialog"
        aria-label="주소 검색"
        onClose={() => trigger.current?.focus()}
      >
        <div className="address-dialog-head">
          <button
            type="button"
            aria-label="주소 검색 닫기"
            onClick={() => dialog.current?.close()}
          >
            ×
          </button>
        </div>
        <p className="address-provider">
          도로명, 건물명 또는 지번으로 검색하세요. · Kakao 우편번호 서비스
        </p>
        {status === "loading" && (
          <p role="status" className="address-status">
            주소 검색을 불러오고 있습니다.
          </p>
        )}
        {status === "error" && (
          <div role="alert" className="address-status">
            <p>
              주소 검색을 불러오지 못했어요.
              <br />
              검색창을 닫고 주소를 직접 입력해주세요.
            </p>
            <button type="button" onClick={() => dialog.current?.close()}>
              직접 입력하기
            </button>
          </div>
        )}
        <div
          ref={embed}
          className="address-embed"
          hidden={status !== "ready"}
        />
      </dialog>
    </>
  );
}
