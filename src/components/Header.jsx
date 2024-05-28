const Header = () => {
  return (
    <header className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="w-[1360px] pt-10 pb-[23px] flex justify-center justify-between">
          <img
            className="w-[98px]"
            src="https://image.hago.kr/dev/main/pc/pc_main_logo.svg"
            alt="hago_logo"
          />
          <div className="">
            <div className="flex justify-between border-b-[1px] border-black w-[380px] h-[38px]">
              <input type="text" className="border-none w-full" />
              <button>
                <img
                  className=""
                  src="https://image.hago.kr/dev/main/pc/pc_search.svg"
                  alt="search_icon"
                />
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="px-[13px]">
              <img
                className="h-[23px] w-full"
                src="https://image.hago.kr/dev/main/pc/login.svg"
                alt="login_icon"
              />
              <div className="text-[13px] mt-[10px]">로그인</div>
            </div>
            <div className="px-[13px]">
              <img
                className="h-[23px] w-full"
                src="https://image.hago.kr/dev/main/pc/mypage.svg"
                alt="mypage_icon"
              />
              <p className="text-[13px] mt-[10px]">마이페이지</p>
            </div>
            <div className="px-[13px]">
              <img
                className="h-[23px] w-full"
                src="https://image.hago.kr/dev/main/pc/cart.svg"
                alt="cart_icon"
              />
              <p className="text-[13px] mt-[10px]">장바구니</p>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex text-[14px]">
            <li className="py-5 pr-[11px]">HOME</li>
            <li className="py-5 px-[11px]">BEST</li>
            <li className="py-5 px-[11px]">APPAREL</li>
            <li className="py-5 px-[11px]">BAG</li>
            <li className="py-5 px-[11px]">SHOES</li>
            <li className="py-5 px-[11px]">ACC</li>
            <li className="py-5 px-[11px]">LIFE</li>
            <li className="py-5 px-[11px] text-[#FF0000]">LIVE</li>
            <li className="py-5 px-[11px]">|</li>
            <li className="py-5 px-[11px]">EVENT</li>
            <li className="py-5 pl-[11px]">BRAND</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
