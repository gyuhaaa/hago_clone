import PostItCard from "./PostItCard";

const PostItData = [
  {
    id: 1,
    brand: "DUNST",
    product: "MAXI FLARE SLEEVELESS DRESS IVORY_UDDR4B222IV",
    price: 179550,
    percent: 5,
    soldout: false,
  },
  {
    id: 2,
    brand: "DUNST",
    product: "COLLARED TWEED JACKET DEEP NAVY_UDJA4B221N3",
    price: 206100,
    percent: 10,
    soldout: false,
  },
  {
    id: 3,
    brand: "DUNST",
    product: "SUMMER COTTON CABLE KNIT NAVY STRIPE_UDSW4B225N2",
    price: 89100,
    percent: 10,
    soldout: false,
  },
  {
    id: 4,
    brand: "DUNST",
    product: "SUMMER COTTON CREW NECK KNIT SOFT PINK_UDSW4B232P1",
    price: 89100,
    percent: 10,
    soldout: false,
  },
  {
    id: 5,
    brand: "DUNST",
    product: "SHIRRING RIBBONED BLOUSE WHITE_UDBL4B221WT",
    price: 103550,
    percent: 5,
    soldout: false,
  },
  {
    id: 6,
    brand: "DUNST",
    product: "A-LINE MINI SKIRT WHITE_UDSK4B227WT",
    price: 94050,
    percent: 5,
    soldout: false,
  },
  {
    id: 7,
    brand: "DUNST",
    product: "UNISEX CUPID CAMPUS T-SHIRT BLACK_UDTS4B121BK",
    price: 44100,
    percent: 10,
    soldout: false,
  },
  {
    id: 8,
    brand: "DUNST",
    product: "CLASSIC HALF SLEEVE SHIRT BLUE STRIPE_UDSH4B225B2",
    price: 94050,
    percent: 5,
    soldout: false,
  },
  {
    id: 9,
    brand: "DUNST",
    product: "[6/3 예약배송] SUMMER SOFT CHINO SLACKS WHITE_UDPA4B222WT",
    price: 103550,
    percent: 5,
    soldout: false,
  },
];

const PostIt = () => {
  return (
    <div className="my-[100px] content">
      <h3 className="title">POST IT</h3>
      <div className="w-[1360px] flex">
        <div className="w-[270px]">
          <div className=" mb-12">
            <h3 className="pb-4 text-black text-[28px] font-bold">
              자유롭고 낭만 가득한 던스트의 여름
            </h3>
            <h5 className="text-base text-[#767676]">
              신상품 최대 10% 단독할인 & 티셔츠 증정 리뷰이벤트 진행 중
            </h5>
          </div>
          <button className="border border-solid-[0.7px] rounded-full h-[38px] px-[10px] mb-2 mr-1">
            #던스트
          </button>
          <button className="border border-solid-[0.7px] rounded-full h-[38px] px-[10px] mb-2 mr-1">
            #드파운드
          </button>
          <button className="border border-solid-[0.7px] rounded-full h-[38px] px-[10px] mb-2 mr-1">
            #마뗑킴
          </button>
        </div>
        <div className="w-[1090px] pl-[50px] flex overflow-x-scroll touch-manipulation">
          {PostItData.map((v) => (
            <PostItCard
              key={v.id}
              id={v.id}
              brand={v.brand}
              product={v.product}
              price={v.price}
              percent={v.percent}
              soldout={v.soldout}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostIt;
