import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import MainBannerCard from "./MainBannerCard";

const MainBannerData = [
  {
    id: 1,
    contentId: 2278,
    ut: "20240527205053",
    title: "레인부츠\nLIVE REPLAY",
    description: "최대 43% 단독 할인 + 18% 쿠폰",
  },
  {
    id: 2,
    contentId: 2260,
    ut: "20240524230820",
    title: "",
    description: "",
  },
  {
    id: 3,
    contentId: 2261,
    ut: "20240524181741",
    title: "플리즈프로젝트\n쇼핑하고위크",
    description: "30% 쿠폰 & 단독특가\n상반기 최대 쇼핑 혜택",
  },
  {
    id: 4,
    contentId: 2262,
    ut: "20240527172750",
    title: "에이치에프엠\n쇼핑하고위크",
    description: "30% 쿠폰 & 단독특가\n상반기 최대 쇼핑 혜택",
  },
  {
    id: 5,
    contentId: 2263,
    ut: "20240527172750",
    title: "시야쥬\n쇼핑하고위크",
    description: "30% 쿠폰 & 단독특가\n상반기 최대 쇼핑 혜택",
  },
  {
    id: 6,
    contentId: 2264,
    ut: "20240527172750",
    title: "보카바카\n쇼핑하고위크",
    description: "30% 쿠폰 & 단독특가\n상반기 최대 쇼핑 혜택",
  },
  {
    id: 7,
    contentId: 2266,
    ut: "20240527172750",
    title: "린넨의 모든 것",
    description: "최대 67% 할인",
  },
  {
    id: 8,
    contentId: 2268,
    ut: "20240527172750",
    title: "마리떼\n쇼핑하고위크",
    description: "최대 20% 단독 할인 + 30% 쿠폰",
  },
  {
    id: 9,
    contentId: 2269,
    ut: "20240527172750",
    title: "버뮬라\n쇼핑하고위크",
    description: "최대 30% 단독 할인 + 30% 쿠폰",
  },
  {
    id: 10,
    contentId: 2270,
    ut: "20240527172750",
    title: "비뮤즈맨션",
    description: "72시간 깜짝 특가\n최대 70% 단독 할인",
  },
  {
    id: 11,
    contentId: 2271,
    ut: "20240527172750",
    title: "루시르주",
    description: "24HS 발매/n10% 단독 할인",
  },
];

const MainBanner = () => {
  const [page, setPage] = useState(0);

  const sliderRef = useRef();

  const onClickNext = () => {
    sliderRef.current.slickNext();
    getCurrentPage();
  };

  const onClickPrev = () => {
    sliderRef.current.slickPrev();
    getCurrentPage();
  };

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
        dots={true}
        infinite={true}
        autoplay={true}
        autoplaySpeed={5000}
        arrows={false}
        // appendDots={<div className="h-[2px] px-0"></div>}
      >
        {MainBannerData.map((v) => (
          <MainBannerCard
            key={v.id}
            contentId={v.contentId}
            ut={v.ut}
            title={v.title}
            description={v.description}
          />
        ))}
      </Slider>
      <div className="absolute top-1/2 px-10 w-full flex justify-between">
        <button onClick={onClickPrev}>
          <img
            className="h-16"
            src="https://image.hago.kr/dev/main/pc/main_left.svg"
          />
        </button>
        <button onClick={onClickNext}>
          <img
            className="h-16"
            src="https://image.hago.kr/dev/main/pc/main_right.svg"
          />
        </button>
      </div>
      <div className="absolute flex pt-[10px] left-1/2 -translate-x-1/2">
        <div className="text-xs flex">
          <div className="pr-4">{page + 1}</div>
          <div className="w-[270px]">
            {/* <ol className="h-[2px] w-full">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol> */}
          </div>
          <div className="pl-4">{MainBannerData.length}</div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
