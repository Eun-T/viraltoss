"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RiArrowDownSFill } from "react-icons/ri";
import { helvetica } from "@/app/layout";

type Props = {};

const Main = (props: Props) => {
  const [arrowDown, setArrowDown] = useState<boolean>(false);

  const isArrowDown = () => {
    window.scrollTo({ top: 780, behavior: "smooth" });
  };
  // 00aaff 199 213 230 1
  //bg-[rgba(199,213,230,1)]
  return (
    <section className="w-full h-[100vh] relative" id="home">
      <div className="relative w-full bg-white">
        <div className="h-[10vh] bg-white"></div>
        <div className="w-full z-30 h-[80vh] overflow-visible">
          <div className="h-full relative">
            <Image
              src={"/images/s6.png"}
              alt="viral_image"
              fill
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white from-0% via-white via-10% to-transparent to-100%"></div>
        {/* <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white"></div> */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
          <div className="mt-[160px] flex flex-col items-center justify-start whitespace-pre-wrap">
            <h1 className="text-[30px] font-[700] text-center leading-normal s:text-[50px] m:text-[70px] l:text-[90px]">
              바이럴 마케팅의 모든것
              {/* 토스에서 쉽고 간편하게 */}
              <em className="block text-[15px] font-[300] s:text-[25px] l:text-[40px] s:text-[35px]">
                카페,블로그부터 브랜드마케팅까지
              </em>
            </h1>
          </div>
        </div>
        <button
          className="absolute left-[50%] -translate-x-[50%]"
          onClick={isArrowDown}
        >
          <div className="animate-[buttonShow_3s_ease-in-out_infinite]">
            <RiArrowDownSFill size="90" color="black" />
          </div>
        </button>
      </div>
    </section>
  );
};

// text-[66px] font-[700] text-center leading-normal

export default Main;
