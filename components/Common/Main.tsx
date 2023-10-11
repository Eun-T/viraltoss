"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RiArrowDownSFill } from "react-icons/ri";
import { helvetica, jalnan } from "@/app/layout";
import ChannelTalk from "./ChannelTalk";

type Props = {};

const Main = (props: Props) => {
  const [arrowDown, setArrowDown] = useState<boolean>(false);

  const isArrowDown = () => {
    window.scrollTo({ top: 780, behavior: "smooth" });
  };

  useEffect(() => {
    const CT = new ChannelTalk();
    //주의! 여기서 CT.loadScript()를 선언하면 ChannelIO script included twice. 오류 발생합니다!
    CT.boot({ pluginKey: "플러그인 Key" });

  	//for unmount
    return () => {
      CT.shutdown();
    };
  }, []);

  // 00aaff 199 213 230 1
  //bg-[rgba(199,213,230,1)]
  return (
    <section className="w-full relative" id="home">
      <div className="relative h-[100vh] w-full">
        {/* <div className="h-[10vh] bg-white"></div> */}
        {/* Image by Racool_studio*/}
        <div className="w-full h-[100vh]">
          <div className="relative w-full h-full">
            {/* <Image
              src={"/images/using.jpg"}
              alt="viral_image"
              fill
              objectFit="cover"
              objectPosition="center"
            /> */}
            <video
              autoPlay
              muted
              loop
              className="relative w-full h-full object-cover brightness-[.7]"
            >
              <source src={"/movies/star.mp4"} />
            </video>
          </div>
        </div>
        {/* <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white from-0% via-white via-10% to-transparent to-100%"></div> */}
        {/* <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white"></div> */}
        {/* text-[#00C73C] bg-clip-text text-transparent bg-gradient-to-b from-[#00C73C] to-[#84442A]  */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <div className="flex flex-col items-center justify-start whitespace-pre-wrap">
            <h1 className="text-[30px] font-[700] text-center leading-normal s:text-[50px] m:text-[70px] l:text-[90px]">
              바이럴 마케팅의 모든 것
              <em className="not-italic block text-[15px] font-[300] s:text-[25px] l:text-[40px]">
                <span
                  className={
                    "text-[#be6b4a] " +
                    jalnan.className
                  }
                >
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

// text-[66px] font-[700] text-center leading-normal

export default Main;
