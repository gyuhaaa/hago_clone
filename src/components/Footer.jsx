const Footer = () => {
  return (
    <footer className="content h-[289px]">
      <div className="w-[1360px] border-t-[1px] border-black">
        <div className="flex items-center justify-between h-[50px]">
          <div className="text-sm flex gap-8 font-medium">
            <div>회사소개</div>
            <div>고객센터</div>
            <div>공지사항</div>
            <div>입점 및 제휴문의</div>
          </div>
          <div className="text-[#767676] text-xs flex gap-4">
            <div>개인정보처리방침</div>
            <div>서비스이용약관</div>
            <div>청소년 보호정책</div>
            <div>사업자정보확인</div>
            <div>구매안전서비스 가입사실확인</div>
          </div>
        </div>
      </div>
      <div className="w-[1360px] flex justify-between pt-[21px]">
        <div className="pr-5">
          <p className="text-[12px] font-semibold">주식회사 하고하우스</p>
          <p className="text-[#767676] text-[12px] whitespace-pre-wrap">
            대표이사 : 홍정우
            <br />
            경기도 성남시 분당구 판교로 242 A동 703호 (삼평동, 판교 디지털센터)
            <br />
            사업자등록번호 : 820-88-00547
            <br />
            통신판매업 신고번호 : 제2023-성남분당A-0276호
            <br />
            개인정보관리책임자 : 전호선
          </p>
          <p className="mt-[6px] text-[#787878] text-[10px]">
            © HAGOHAUS Inc. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="mr-[85px]">
          <p className="text-[12px] pb-2 font-semibold">고객센터</p>
          <p className="text-[#767676] text-[12px] whitespace-pre-wrap">
            대표전화 : 1670-3212
            <br />
            운영시간 : AM 10:00 ~ PM 06:00 (월~금)
            <br />
            점심시간 : PM 12:30 ~ PM 13:30 (주말 및 공휴일 휴무)
            <br />
            이메일 : cs@hago.kr
          </p>
        </div>
        <div>
          <p className="text-[12px] pb-2 font-semibold">구매안전 서비스</p>
          <p className="mt-[6px] text-[#767676] text-[12px] whitespace-pre-wrap">
            고객님은 안전거래를 위해 현금등으로 결제 시 <br />
            저희쇼핑몰에 가입한 나이스페이 구매안전서비스를 이용 하실 수
            있습니다
            <br />
            <a
              className="leading-3 border-b-[1px] border-[#767676]"
              href="https://npg.nicepay.co.kr/issue/issueEscrow.do?CoNo=8208800547"
              target="_blank"
              title="새 창 열림"
            >
              서비스가입 사실 확인
            </a>
            <br />
            하고에서 판매되는 모든 상품은 주식회사 하고하우스 에서 책임을 지고
            있습니다
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
