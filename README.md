# 호용샤시 (임시 브랜드명) — Next.js 홈페이지

샤시(창호) 시공 업체용 홈페이지입니다. React + Next.js 14 (App Router) + TypeScript + Tailwind CSS로 만들었습니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속

배포용 빌드:
```bash
npm run build
npm start
```
Vercel, Netlify 등에 그대로 배포 가능합니다.

## 가장 먼저 할 일: 회사 정보 입력

**`lib/site-config.ts`** 파일 하나만 수정하면 사이트 전체(로고 옆 상호명, 전화번호, 주소, SNS 링크 등)에 반영됩니다.
회사명이 아직 정해지지 않아 "호용샤시"로 임시로 넣어두었으니 실제 상호로 바꿔주세요.

```ts
export const siteConfig = {
  name: "호용샤시",          // 실제 상호명
  phone: "1544-0000",       // 실제 전화번호
  phoneHref: "tel:15440000",
  kakaoUrl: "...",          // 카카오톡 채널 URL
  address: "...",           // 실제 주소
  ...
};
```

## 페이지 구성

- `/` — 메인 (히어로, 서비스 소개, 시공 절차, 실적, 후기, CTA)
- `/about` — 회사 소개 (연혁, 일하는 원칙)
- `/services` — 시공 서비스 상세 (샤시 교체 / 이중창 단열 / 방범창)
- `/contact` — 견적 문의 폼 + 연락처

## 다음으로 채워 넣으면 좋은 것들

- `app/about/page.tsx`의 연혁(history) — 실제 창업 연도와 이력으로 교체
- `components/Testimonials.tsx` — 실제 고객 후기로 교체
- 시공 사진: `public/` 폴더에 이미지를 넣고 각 컴포넌트의 일러스트(SVG) 자리에 `next/image`로 교체
- `components/ContactForm.tsx`의 `handleSubmit` — 실제로 문의가 이메일/DB로 전송되도록 API 라우트 연결 (현재는 화면에 "접수됨" 메시지만 표시)

## 디자인 톤

- 배경: 따뜻한 오프화이트(#F7F5F1) / 딥 네이비(#1B2430) 투톤
- 포인트 컬러: 황동색(#B08D57, 창틀 금속 느낌), 유리를 연상시키는 스카이블루(#7CA8C4)
- 폰트: Pretendard (한글 가독성이 좋은 무료 웹폰트, CDN으로 불러옴)
