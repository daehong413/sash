export type Inquiry = {
  address: string;
  size: string;
  scope: string;
  name: string;
  phone: string;
  message: string;
  confirmed: boolean;
};
export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;
export const sizes = [
  "20평 미만",
  "20평대",
  "30평대",
  "40평대",
  "50평 이상",
  "잘 모르겠어요",
];
export const scopes = [
  "외부창 전체",
  "일부 교체",
  "단열 · 이중창",
  "방범창 · 방충망",
];
export function validateInquiry(data: Inquiry, step: number): InquiryErrors {
  const errors: InquiryErrors = {};
  if (step === 0) {
    if (data.address.trim().length < 4)
      errors.address = "시공 지역과 주소를 4자 이상 입력해주세요.";
    if (!sizes.includes(data.size))
      errors.size = "우리 집 평형을 선택해주세요.";
    if (!scopes.includes(data.scope))
      errors.scope = "원하시는 시공 범위를 선택해주세요.";
  }
  if (step === 1) {
    if (!data.name.trim()) errors.name = "성함을 입력해주세요.";
    const digits = data.phone.replace(/\D/g, "");
    if (!/^[0-9+\s()-]+$/.test(data.phone) || !/^0\d{8,10}$/.test(digits))
      errors.phone = "0으로 시작하는 연락처 9~11자리를 입력해주세요.";
    if (!data.confirmed) errors.confirmed = "입력 정보 확인에 체크해주세요.";
  }
  return errors;
}
export function inquiryEmailBody(data: Inquiry) {
  return `창호 견적 상담을 문의합니다.\n\n주소: ${data.address.trim()}\n평형: ${data.size}\n시공 범위: ${data.scope}\n이름: ${data.name.trim()}\n연락처: ${data.phone}\n\n문의 내용:\n${data.message.trim() || "상담 시 안내 부탁드립니다."}`;
}
