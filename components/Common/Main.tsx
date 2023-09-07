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

  return (
    <section className="w-full h-[100vh] relative">
      <div className="relative w-full">
        <div className="h-[10vh] bg-white"></div>
        <div className="w-full h-[90vh] overflow-visible relative">
          <Image src={"/images/ghfhgfhfg.png"} alt="asd" fill objectFit="cover" objectPosition="top"/>
        </div>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white from-0% via-white via-10% to-transparent to-100%">
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
          <div className="mt-[150px] flex flex-col items-center justify-start whitespace-pre-wrap">
            <h1 className="text-[60px] font-[700] text-center leading-normal">금융의 모든것<br/>토스에서 쉽고 간편하게</h1>
            {/* <div className="w-[100px]">카카오톡 친구채널</div> */}
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
