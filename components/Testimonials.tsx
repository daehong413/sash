import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import ScrollGallery from "./ScrollGallery";
import { Arrow } from "./Icons";
const items = [
  {
    tag: "단열 · 이중창",
    title: "찬 바람 대신, 온기가 머무는 집.",
    body: "웃풍과 결로가 고민이라면, 창틀과 유리 사양부터 살펴보세요.",
    href: "/services#insulation",
    image: "/images/generated/story-warmth.png",
    alt: "겨울 풍경을 마주한 따뜻한 침실의 이중창",
    position: "70% center",
  },
  {
    tag: "노후 샤시 교체",
    title: "익숙한 공간에 새로운 쾌적함을.",
    body: "뻑뻑한 움직임과 오래된 창틀, 우리 집에 맞는 교체 방법을 찾아보세요.",
    href: "/services#replace",
    image: "/images/generated/story-renovation.png",
    alt: "새 창호를 설치한 아파트의 긴 베란다",
    position: "center",
  },
  {
    tag: "방범창 · 방충망",
    title: "바람은 가볍게, 마음은 편안하게.",
    body: "환기와 안전을 함께 생각하는 우리 집 창문을 준비하세요.",
    href: "/services#safety",
    image: "/images/generated/story-screen.png",
    alt: "푸른 나무가 보이는 촘촘한 창문 방충망",
    position: "left center",
  },
];
export default function Testimonials() {
  return (
    <section className="section-space">
      <div className="container-content">
        <Reveal>
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">공간별 창호 선택</p>
              <h2 className="section-title">
                창이 바뀌면,
                <br />
                일상도 달라지니까.
              </h2>
            </div>
            <Link className="text-link" href="/services">
              시공 서비스 모두 보기
              <Arrow />
            </Link>
          </div>
          <ScrollGallery>
            {items.map((item) => (
              <Link className="editorial-card" key={item.href} href={item.href}>
                <div className="editorial-image">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 400px"
                    style={{ objectPosition: item.position }}
                  />
                  <span className="editorial-arrow">
                    <Arrow diagonal />
                  </span>
                </div>
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Link>
            ))}
          </ScrollGallery>
        </Reveal>
      </div>
    </section>
  );
}
