"use client";

import React, { useEffect } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { helvetica, jalnan } from "@/app/layout";

type Props = {};

const Main = (props: Props) => {

  const isArrowDown = () => {
    window.scrollTo({ top: 780, behavior: "smooth" });
  };

  return (
    <section className="w-full relative" id="home">
      <div className="relative v-[100vh] w-full">
        {/* Image by Racool_studio*/}
        <div className="w-full h-[100vh]">
          <div className="relative w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="relative w-full h-full object-cover brightness-[.7]"
            >
              <source src={"/movies/배경화면.mp4"} />
              배경화면 비디오
            </video>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <div className="flex flex-col items-center justify-start whitespace-pre-wrap">
            <h1 className="text-[30px] font-[700] text-center leading-normal s:text-[50px] m:text-[70px] l:text-[90px]">
              바이럴 마케팅의 모든 것
              <em className="not-italic block text-[15px] font-[300] s:text-[25px] l:text-[40px]">
                <span className={"text-[#be6b4a] " + jalnan.className}>
                  카페
                </span>
                ,
                <span
                  className={
                    "bg-clip-text text-transparent bg-gradient-to-b from-[#00C73C] to-[#fff] text-[#00C73C] " +
                    jalnan.className
                  }
                >
                  블로그
                </span>
                부터{" "}
                <span
                  className={
                    "bg-clip-text text-transparent bg-gradient-to-b from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] " +
                    jalnan.className
                  }
                >
                  브랜드마케팅
                </span>
                까지
              </em>
            </h1>
          </div>
        </div>
        <button
          className="absolute bottom-[50px] left-[50%] -translate-x-[50%]"
          onClick={isArrowDown}
        >
          <div className="animate-[buttonShow_3s_ease-in-out_infinite] text-white">
            <RiArrowDownSFill size="90" color="white" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Main;
