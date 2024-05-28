import DeepFocusCard from "./DeepFocusCard";

const DeepFocusData = [
  {
    id: 1,
    brand: "Picknicks",
    product: "Washable Room Shoes 4Color",
    price: 23310,
    percent: 37,
  },
  {
    id: 2,
    brand: "Picknicks",
    product: "Rux office shoes",
    price: 31752,
    percent: 41,
  },
  {
    id: 3,
    brand: "Picknicks",
    product: "스윗 드림 발매트",
    price: 22050,
    percent: 37,
  },
  {
    id: 1,
    brand: "WAGENSTEIGER",
    product: "[쇼핑하고위크]바겐슈타이거 스텐 케틀팟 2L",
    price: 17710,
    percent: 49,
  },
  {
    id: 2,
    brand: "WAGENSTEIGER",
    product: "[쇼핑하고위크]바겐슈타이거 스텐 멀티랙",
    price: 11480,
    percent: 52,
  },
  {
    id: 3,
    brand: "WAGENSTEIGER",
    product: "[쇼핑하고위크]바겐슈타이거 스텐 클라 배수구망+뚜껑",
    price: 11480,
    percent: 56,
  },
  {
    id: 1,
    brand: "LA TULIPE",
    product: "이안 순면 차렵이불세트(이불+베개커버) Q/K",
    price: 123900,
    percent: 38,
  },
  {
    id: 2,
    brand: "LA TULIPE",
    product: "체온조절 고밀도 면100% 밴딩패드 SS",
    price: 64680,
    percent: 33,
  },
  {
    id: 3,
    brand: "LA TULIPE",
    product: "체온조절 고밀도 면100% 밴딩패드 Q",
    price: 73080,
    percent: 33,
  },
];

const DeepFocus = () => {
  return (
    <div className="content">
      <h3 className="title">DEEP FOCUS</h3>
      <div className=" w-[1440px] flex">
        <div className="w-[480px] px-10">
          <div className="relative">
            <img
              className="pb-[30px]"
              src="https://image.hago.kr/mall/display/mmon-templates/v2/6/14/1135/pc_image_1.jpg?ut=20240523104515&SF=webp"
              alt=""
            />
            <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <p className="pb-2 text-[22px] font-semibold">Picknicks</p>
              <p className="text-base font-light">소풍날의 화사한 감성</p>
            </div>
          </div>
          {DeepFocusData.map(
            (v) =>
              v.brand === "Picknicks" && (
                <DeepFocusCard
                  key={v.id}
                  id={v.id}
                  brand={v.brand}
                  product={v.product}
                  price={v.price}
                  percent={v.percent}
                />
              )
          )}
        </div>
        <div className="w-[480px] px-10">
          <div className="relative">
            <img
              className="pb-[30px]"
              src="https://image.hago.kr/mall/display/mmon-templates/v2/6/14/640/pc_image_1.jpg?ut=20240523104515&SF=webp"
              alt=""
            />
            <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <p className="pb-2 text-[22px] font-semibold">WAGENSTEIGER</p>
              <p className="text-base font-light">가치가 가득 담긴</p>
            </div>
          </div>
          {DeepFocusData.map(
            (v) =>
              v.brand === "WAGENSTEIGER" && (
                <DeepFocusCard
                  key={v.id}
                  id={v.id}
                  brand={v.brand}
                  product={v.product}
                  price={v.price}
                  percent={v.percent}
                />
              )
          )}
        </div>
        <div className="w-[480px] px-10">
          <div className="relative">
            <img
              className="mb-[30px] bg-blend-darken bg-black bg-opacity-50"
              src="https://image.hago.kr/mall/display/mmon-templates/v2/6/14/1545/pc_image_1.jpg?ut=20240523104529&SF=webp"
              alt=""
            />
            <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <p className="pb-2 text-[22px] font-semibold">LA TULIPE</p>
              <p className="text-base font-light">포근하게 감싸주는</p>
            </div>
          </div>
          {DeepFocusData.map(
            (v) =>
              v.brand === "LA TULIPE" && (
                <DeepFocusCard
                  key={v.id}
                  id={v.id}
                  brand={v.brand}
                  product={v.product}
                  price={v.price}
                  percent={v.percent}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default DeepFocus;
