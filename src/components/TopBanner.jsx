const TopBanner = () => {
  return (
    <div className="bg-[#262626] flex justify-center items-center cursor-pointer">
      <h5 className="text-[#ff759e] text-2xl font-bold pr-[30px]">
        쇼핑 하고 위크! 인기 브랜드 30% 쿠폰
      </h5>
      <p className="text-white text-lg pr-5">상반기 최대 쇼핑 혜택</p>
      <img
        src="https://image.hago.kr/mall/display/mmon-templates/v2/6/19/2096/pc_image_1.jpg?ut=20240522183424"
        alt="top_banner"
      />
    </div>
  );
};

export default TopBanner;
