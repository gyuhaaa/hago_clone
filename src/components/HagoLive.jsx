// import Slider from "react-slick";

const HagoLive = () => {
  return (
    <div className="content">
      <h3 className="title">HAGO LIVE</h3>
      <div className="w-[1360px] h-[440px] flex content-center">
        <div className="relative">
          <img
            className="w-[440px] h-[440px]"
            src="https://image.hago.kr/mall/display/mmon-templates/v2/6/18/626/pc_image_1.jpg?ut=20240524190022&SP=1"
            alt=""
          />
          <div className="absolute top-0 text-white w-full h-full flex flex-col justify-between items-center">
            <div className="pt-5 text-lg font-semibold">
              05/27 (월) 오후 7:00
            </div>
            <p className="pb-[33px] text-2xl font-bold">
              장마 대비 레인부츠 모음
            </p>
          </div>
          <button className="absolute top-0 right-0 w-[45px] h-[52px]">
            <img
              className="w-1/2 h-1/2"
              src="https://image.hago.kr/dev/main/icon%20_bell_w.png"
              alt=""
            />
          </button>
        </div>
        <div className="pl-[27px] flex items-center">
          {/* <Slider
            dots={true}
            arrows={false}
            infinite={true}
            slidesToShow={4}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
          > */}
          <div className="pl-5">
            <p className="text-base pb-[10px] font-medium">05.28 TUE</p>
            <img
              className="w-[203px] h-[276px]"
              src="https://image.hago.kr/mall/display/mmon-templates/v2/6/18/1704/pc_image_1.jpg?ut=20240524190022&SF=webp"
              alt=""
            />
            <div>
              <p className="text-base pt-[10px] font-bold">AND YOU</p>
              <p className="text-sm text-[#767676] pt-[5px]">
                오후 7:00시 방송 예정
              </p>
            </div>
          </div>
          <div className="pl-5">
            <p className="text-base pb-[10px] font-medium">05.29 WED</p>
            <img
              className="w-[203px] h-[276px]"
              src="https://image.hago.kr/mall/display/mmon-templates/v2/6/18/1705/pc_image_1.jpg?ut=20240524190022&SF=webp"
              alt=""
            />
            <div>
              <p className="text-base pt-[10px] font-bold">OSOI</p>
              <p className="text-sm text-[#767676] pt-[5px]">
                오후 7:00시 방송 예정
              </p>
            </div>
          </div>
          <div className="pl-5">
            <p className="text-base pb-[10px] font-medium">05.30 THU</p>
            <img
              className="w-[203px] h-[276px]"
              src="https://image.hago.kr/mall/display/mmon-templates/v2/6/18/1653/pc_image_1.jpg?ut=20240524190022&SF=webp"
              alt=""
            />
            <div>
              <p className="text-base pt-[10px] font-bold">SCULPTOR</p>
              <p className="text-sm text-[#767676] pt-[5px]">
                오후 7:00시 방송 예정
              </p>
            </div>
          </div>
          <div className="pl-5">
            <p className="text-base pb-[10px] font-medium">06.03 MON</p>
            <img
              className="w-[203px] h-[276px]"
              src="https://image.hago.kr/mall/display/mmon-templates/v2/6/18/1620/pc_image_1.jpg?ut=20240524190022&SF=webp"
              alt=""
            />
            <div>
              <p className="text-base pt-[10px] font-bold">SIENNE</p>
              <p className="text-sm text-[#767676] pt-[5px]">
                오후 7:00시 방송 예정
              </p>
            </div>
          </div>
          {/* <div className="pl-5">
            <p className="text-base pb-[10px] font-medium">06.04 TUE</p>
            <img
              className="w-[203px] h-[276px]"
              src="https://image.hago.kr/mall/display/mmon-templates/v2/6/18/1361/pc_image_1.jpg?ut=20240524190022&SF=webp"
              alt=""
            />
            <div>
              <p className="text-base pt-[10px] font-bold">TILL I DIE</p>
              <p className="text-sm text-[#767676] pt-[5px]">
                오후 7:00시 방송 예정
              </p>
            </div>
          </div> */}
          {/* </Slider> */}
        </div>
      </div>
      <div className="h-[300px]"></div>
    </div>
  );
};

export default HagoLive;
