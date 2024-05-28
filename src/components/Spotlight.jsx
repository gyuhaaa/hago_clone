const Spotlight = () => {
  return (
    <div className="my-30 content">
      <h3 className="title">SPOTLIGHT</h3>
      <div className="w-[1360px] gap-5 flex items-center">
        <div>
          <img
            className="w-[440px]"
            src="https://image.hago.kr/mall/display/mmon-templates/v2/6/5/1323/pc_image_1.jpg?ut=20240524135802&SP=1"
            alt=""
          />
          <div className="pt-5">
            <p className="text-xl font-medium">엔오르</p>
            <p className="pt-2 text-base text-[#767676]">최대 10% 할인</p>
          </div>
        </div>
        <div>
          <img
            className="w-[440px]"
            src="https://image.hago.kr/mall/display/mmon-templates/v2/6/5/807/pc_image_1.jpg?ut=20240524135630&SP=1"
            alt=""
          />
          <div className="pt-5">
            <p className="text-xl font-medium">오스트카카</p>
            <p className="pt-2 text-base text-[#767676]">
              최대 10% 단독 할인+사은품 이벤트
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-[440px]"
            src="https://image.hago.kr/mall/display/mmon-templates/v2/6/5/1325/pc_image_1.jpg?ut=20240524101934&SP=1"
            alt=""
          />
          <div className="pt-5">
            <p className="text-xl font-medium">인사일런스 우먼</p>
            <p className="pt-2 text-base text-[#767676]">
              최대 20% 단독 할인+20% 쿠폰
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
