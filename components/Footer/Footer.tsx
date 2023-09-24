import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="w-full relative bg-[#241f1f] text-white">
        <div className="w-[92%] max-w-[1140px] mx-auto py-[50px]">
          <ul className="flex flex-col gap-[8px] text-[14px]">
            <li>회사명 : 바이럴토스</li>
            <li>대표 : 김은태</li>
            <li>전화번호: 010-3981-4325</li>
            <li>이메일주소 : viraltoss@naver.com</li>
            <li>카톡아이디 : viraltoss</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
