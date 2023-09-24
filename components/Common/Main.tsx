"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RiArrowDownSFill } from 'react-icons/ri';

type Props = {};

const Main = (props: Props) => {

  const [arrowDown,setArrowDown] = useState<boolean>(false)

  const isArrowDown = () => {
    window.scrollTo({top:780, behavior:'smooth'})
  }
  // 00aaff 199 213 230 1
  //bg-[rgba(199,213,230,1)]
  return (
    <section className="w-full h-[100vh] relative" id="home">
      <div className="relative w-full bg-white">
        <div className="h-[10vh] bg-white"></div>
        <div className="w-full h-[90vh] overflow-visible">
          <div className="h-full relative">
            <Image src={"/images/s4.png"} alt="viral_image" fill objectFit="contain" objectPosition="center"/>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white from-0% via-white via-10% to-transparent to-100%">
        </div>
        {/* <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white"></div> */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
          <div className="mt-[100px] flex flex-col items-center justify-start whitespace-pre-wrap">
            <h1 className="text-[60px] font-[700] text-center leading-normal">
              마케팅의 모든것
              <br/>
              토스에서 쉽고 간편하게
            </h1>
          </div>
          <button className="flex justify-center mb-[20px]" onClick={isArrowDown}>
            <div className="animate-[buttonShow_3s_ease-in-out_infinite]">
              <RiArrowDownSFill size="90" color="black"/>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

// text-[66px] font-[700] text-center leading-normal

export default Main;
