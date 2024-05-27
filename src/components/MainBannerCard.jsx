const MainBannerCard = ({ id, contentId, ut, title, description }) => {
  const onClickNext = () => {
    sliderRef.current.slickNext();
    getCurrentPage();
  };

  const onClickPrev = () => {
    sliderRef.current.slickPrev();
    getCurrentPage();
  };

  return (
    <div className="relative h-[610px]">
      <div
        className={`flex flex-col justify-center items-center h-full text-center leading-tight`}
      >
        <p className="text-[44px] font-bold whitespace-pre-wrap">{title}</p>
        <p className="text-[18px] font-thin pt-5 whitespace-pre-wrap">
          {description}
        </p>
      </div>
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
      <img
        className="absolute top-0 -z-10 w-full h-full object-cover"
        src={`https://image.hago.kr/mall/display/mmon-templates/v2/6/1/${contentId}/pc_image_1.jpg?ut=${ut}&SF=webp`}
        alt={`배너${id}`}
      />
    </div>
  );
};

export default MainBannerCard;
