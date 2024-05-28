const MainBannerCard = ({ id, contentId, ut, title, description }) => {
  return (
    <div className="relative h-[610px]">
      <div className="flex flex-col justify-center items-center h-full text-center leading-tight">
        <p className="text-[44px] font-semibold whitespace-pre-wrap">{title}</p>
        <p className="text-[18px] font-light pt-5 whitespace-pre-wrap">
          {description}
        </p>
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
