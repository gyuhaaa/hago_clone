import { TfiHeart } from "react-icons/tfi";

const DeepFocusCard = ({ id, brand, product, price, percent }) => {
  return (
    <div className="flex items-center w-[400px] mb-[10px]">
      <div className="relative w-[90px]">
        <img
          className="w-[90px] h-[129px] object-cover"
          src={`/images/${brand.toLowerCase()}_${id}.webp`}
          alt={`${brand.toLowerCase()}_${id}`}
        />
      </div>
      <div className="pr-[14px] pl-5 w-[309px]">
        <div>
          <div className="relative">
            <p className="font-bold text-[14px] my-[10px]">{brand}</p>
            <div className="absolute top-0 right-0">
              <TfiHeart className="w-[18px] h-[18px]] text-[#767676]" />
            </div>
          </div>
          <p className="h-9 text-[#767676] text-[14px] text-ellipsis overflow-hidden">
            {product}
          </p>
          <p className="mt-2">
            <span className="text-base font-bold mr-2">
              {price.toLocaleString()}
            </span>
            <span className="text-[15px] text-[#FF5C28]">{percent}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeepFocusCard;
