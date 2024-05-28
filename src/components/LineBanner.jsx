import Slider from "react-slick";

const LineBanner = () => {
  return (
    <div className="mt-[100px] mb-[120px]">
      <div className="w-[1360px] h-[140px] mx-auto">
        <Slider
          fade={true}
          infinite={true}
          autoplay={true}
          autoplaySpeed={5000}
          speed={5000}
          arrows={false}
          dots={false}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <div className="relative">
            <img
              src="https://image.hago.kr/mall/display/mmon-templates/v2/6/6/238/pc_image_1.jpg?ut=20240524152844&SP=1"
              alt="LineBanner_1"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-44">
              <p className="text-[22px] font-semibold leading-5">
                쇼핑하고위크 #가방 특가
              </p>
              <p className="text-lg font-normal leading-[22px] pt-3">
                기간 한정 30% 쿠폰 혜택
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://image.hago.kr/mall/display/mmon-templates/v2/6/6/1119/pc_image_1.jpg?ut=20240419182158&SP=1"
              alt="LineBanner_2"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-44">
              <p className="text-white text-[22px] font-semibold leading-5">
                ~50%▼ 무조건 당첨! 랜덤 쿠폰
              </p>
              <p className="text-white text-lg font-normal leading-[22px] pt-3">
                지금 플친 추가 시 즉시 혜택
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LineBanner;
