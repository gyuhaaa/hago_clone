import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import MainBannerCard from "./MainBannerCard";

const MainBannerData = [
  {
    id: 1,
    contentId: 2236,
    ut: "20240524181741",
    title: "",
    description: "",
  },
  {
    id: 2,
    contentId: 2261,
    ut: "20240524181741",
    title: "플리즈프로젝트\n쇼핑하고위크",
    description: "30% 쿠폰 & 단독특가\n상반기 최대 쇼핑 혜택",
  },
  //   {
  //     id: 3,
  //     contentId: 2246,
  //     ut: "20240524182054",
  //     title: "틸아이다이",
  //     description: "24SUMMER 2차 단독 10% 할인",
  //   },
  //   {
  //     id: 4,
  //     contentId: 2231,
  //     ut: "20240524181741",
  //     title: "던스트 라이브 다시보기",
  //     description: "이어지는 라이브 혜택 신상품 ~10% 할인&최대 50% 단독 할인",
  //   },
  //   {
  //     id: 5,
  //     contentId: 2247,
  //     ut: "20240524181741",
  //     title: "에이치에프엠",
  //     description: "24summer 1차 발매 22% 쿠폰 혜택",
  //   },
  //   {
  //     id: 6,
  //     contentId: 2248,
  //     ut: "20240524181741",
  //     title: "오스트카카",
  //     description: "24SUMMER 오픈 최대 10% 단독 할인+사은품 증정 이벤트",
  //   },
  //   {
  //     id: 7,
  //     contentId: 2249,
  //     ut: "20240524181741",
  //     title: "BEST SUMMER PANTS",
  //     description: "72H 한정 최대 70% 할인 + 22% 쿠폰",
  //   },
];

const MainBanner = () => {
  const [page, setPage] = useState(0);

  const sliderRef = useRef();

  const getCurrentPage = () => {
    setPage(sliderRef.current.innerSlider.state.currentSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentPage();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Slider
        ref={sliderRef}
        fade={true}
        autoplay={true}
        autoplaySpeed={5000}
        arrows={false}
      >
        {MainBannerData.map((v) => (
          <MainBannerCard
            key={v.id}
            imgUrl={v.imgUrl}
            contentId={v.contentId}
            ut={v.ut}
            title={v.title}
            description={v.description}
          />
        ))}
      </Slider>
      <div className="absolute flex pt-[10px] left-1/2 -translate-x-1/2">
        <div className="text-xs flex">
          <div className="pr-4">{page + 1}</div>
          <div>
            <ol className="h-[2px]">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </div>
          <div className="pl-4">{MainBannerData.length}</div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
