"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const cardVariants = {
  offscreen: {
    y: 150,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5
    }
  }
};

const cardVariants1 = {
  offscreen: {
    x: -500,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5
    }
  }
};

const cardVariants2 = {
  offscreen: {
    x: 500,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5
    }
  }
};

const Youtuber = (props: Props) => {
  return (
    <section className="w-full pb-[150px] pt-[100px]" id="service">
      <div className="w-[92%] max-w-[1140px] mx-auto">

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <h2 className={"text-[40px] font-[700] text-center mb-[100px]"}>
              다음과 같은 분을 모십니다
          </h2>
        </motion.div>
        
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants1}
          viewport={{ once: true }}
        >
          <div className="gap-[50px] flex justify-center items-center mb-[100px]">
            <div className="text-center w-[500px] min-w-[400px] order-2">
              <h5 className="text-red-500 uppercase">Youtuber</h5>
              <h3 className="text-[40px] font-[700] mb-[20px]">소규모 자영업자</h3>
              <div className="text-center">
                <h4 className="text-[#6b7684] font-[500] text-[20px] w-[82%] ml-auto text-start">
                  &middot; 예산이 부족해 바이럴을 망설이시는 분<br />
                  &middot; 구독자 수가 정체돼서 고민하시는 분<br />
                  &middot; 간단하고 이해하기 쉬운 컨설팅을 원하시는 분
                </h4>
                <h5 className="text-[#6b7684] font-[500]">
                  &nbsp;&nbsp;(여행/디지털/게임 환영)
                </h5>
              </div>
            </div>
            <div className="w-[500px] h-[333px] rounded-[30px] overflow-hidden shadow-[8px_16px_16px_#616161] opacity-[0.75] relative">
              {/* <img
                src="images/souvik-banerjee-8dOk8JVESxY-unsplash.jpg"
                alt="sad"
                className="w-full min-w-[400px]"
              /> */}
              <Image src={"/images/cafe.jpg"} alt="youtube" fill objectFit="cover" objectPosition="top"/>
            </div>
          </div>
        </motion.div>
        {/* Designed by Freepik */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants2}
          viewport={{ once: true }}
        >
          <div className="gap-[50px] flex justify-center items-center mb-[100px]">
            <div className="text-center w-[500px] min-w-[400px]">
              <h5 className="text-red-500 uppercase">Youtuber</h5>
              <h3 className="text-[40px] font-[700] mb-[20px]">유튜버</h3>
              <div className="text-center">
                <h4 className="text-[#6b7684] font-[500] text-[20px] w-[82%] ml-auto text-start">
                  &middot; 예산이 부족해 바이럴을 망설이시는 분<br />
                  &middot; 구독자 수가 정체돼서 고민하시는 분<br />
                  &middot; 간단하고 이해하기 쉬운 컨설팅을 원하시는 분
                </h4>
                <h5 className="text-[#6b7684] font-[500]">
                  &nbsp;&nbsp;(여행/디지털/게임 환영)
                </h5>
              </div>
            </div>
            <div className="w-[500px] h-[333px] rounded-[30px] overflow-hidden shadow-[8px_16px_16px_#616161] opacity-[0.75] relative">
              {/* <img
                src="images/souvik-banerjee-8dOk8JVESxY-unsplash.jpg"
                alt="sad"
                className="w-full min-w-[400px]"
              /> */}
              <Image src={"/images/youtuber.jpg"} alt="youtube" fill objectFit="cover" objectPosition="top"/>
            </div>
          </div>
          {/* Designed by Freepik */}
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants1}
          viewport={{ once: true }}
        >
          <div className="gap-[50px] flex justify-center items-center">
            <div className="text-center order-2 w-[500px] min-w-[400px]">
              <h5 className="text-red-500 uppercase">enterprise</h5>
              <h3 className="text-[40px] font-[700] mb-[20px]">중소/중견기업</h3>
              <div className="text-start">
                <h4 className="text-[#6b7684] font-[500] text-[20px] w-[82%] ml-auto text-start">
                  &middot; 자사 제품의 홍보를 원하시는 분<br />
                  &middot; 바이럴 마케팅을 통해 광고의 흔적을<br/>&nbsp;&nbsp;남기고 싶으신 분
                </h4>
                <h5 className="text-[#6b7684] font-[500] text-center">
                  &nbsp;&nbsp;(모니터/태블릿 같은 전자제품 환영)
                </h5>
              </div>
            </div>
            <div className="w-[500px] h-[333px] rounded-[30px] overflow-hidden shadow-[8px_16px_16px_#616161] opacity-[0.75] relative">
              {/* <img
                src="images/domenico-loia-hGV2TfOh0ns-unsplash.jpg"
                alt="sad"
                className="w-full min-w-[400px]"
              /> */}
              <Image src={"/images/enterprise.jpg"} alt="youtube" fill objectFit="cover" objectPosition="center"/>
            </div>
          </div>
          {/* Designed by brgfx / Freepik */}
        </motion.div>
      </div>
    </section>
  );
};

export default Youtuber;
