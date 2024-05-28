import { TfiHeart } from "react-icons/tfi";

const PostItCard = ({ id, brand, product, price, percent, soldout }) => {
  return (
    <div className="w-[195px] mr-4">
      <div className="relative">
        <img
          src={`/images/${brand.toLowerCase()}_${id}.jpg`}
          alt={`${brand.toLowerCase()}_${id}`}
        />
        {soldout && (
          <p className="absolute left-0 bottom-0 px-1.5 border border-[#ff4800] text-[#ff4800] text-[13px] leading-5">
            품절임박
          </p>
        )}
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="font-bold text-[14px]">{brand}</p>
        <div className="py-[10px] pl-[10px]">
          <TfiHeart className="w-4 h-4 text-[#767676]" />
        </div>
      </div>
      <p className="h-10 text-[#767676] text-[14px] text-ellipsis overflow-hidden">
        {product}
      </p>
      <p className="mt-4">
        <span className="text-base font-bold mr-2">
          {price.toLocaleString()}
        </span>
        <span className="text-[15px] text-[#FF5C28]">{percent}%</span>
      </p>
    </div>
  );
};

export default PostItCard;
