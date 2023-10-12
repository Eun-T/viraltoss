import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Friend = (props: Props) => {
  return (
    <section>
      <div className="w-full" id="question">
        <div className="w-[92%] max-w-[1140px] mx-auto py-[125px]">
          <h2 className="text-[#191f28] text-[20px] s:text-[25px] m:text-[30px] l:text-[40px] font-[700] text-center mb-[40px] break-keep">
            고객님이 신뢰할 수 있는&nbsp;
            <em className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#efd74f] to-[#000300]">
              Best Partner
            </em>
            &nbsp;가 되겠습니다.
          </h2>
          <div className="flex flex-col s:flex-row justify-center items-center gap-[20px]">
            <Link
              href="http://pf.kakao.com/_xlqtdG/chat"
              className="flex items-center px-[55px] py-[15px] l:px-[65px] l:py-[20px] rounded-[50px] bg-[#fcd94a] text-[#000300]"
            >
              <Image
                src={"/images/talk_consulting.png"}
                alt="톡상담."
                width={30}
                height={30}
              />
              상담하기
            </Link>
            <Link
              href="tel:010-3981-4325"
              className="flex gap-[5px] items-center px-[55px] py-[15px] l:px-[65px] l:py-[20px] rounded-[50px] bg-[#2a2626] text-[#fff] border-[2px]"
            >
              <Image
                src={"/images/phone1.png"}
                alt="전화하기."
                width={24}
                height={24}
              />
              통화하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Friend;
