import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="w-full relative bg-[#000] text-[#999da9]">
        <div className="w-[92%] justify-between flex max-w-[1140px] mx-auto py-[50px]">
          <ul className="flex flex-col gap-[8px] text-[12px]">
            <li>회사명 : 바이럴토스</li>
            <li>대표 : 김은태</li>
            <li>전화번호: 010-3981-4325</li>
            <li>이메일주소 : viraltoss@naver.com</li>
            <li>카톡아이디 : 바이럴토스</li>
          </ul>
          {/* <img src="/images/logo4.svg" alt="" className="w-[100px]" /> */}
          <Image src={"/images/바이럴토스 (3).svg"} alt="바이럴토스_로고" width={100} height={100}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
