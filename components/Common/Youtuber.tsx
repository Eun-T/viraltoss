"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const cardVariants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

const cardVariants1 = {
  offscreen: {
    x: -500,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

const cardVariants2 = {
  offscreen: {
    x: 500,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

const imageStyle = {
  objectFit: "cover",
  objectPosition: "top",
} as React.CSSProperties;

const imageStyle1 = {
  objectFit: "cover",
  objectPosition: "center",
} as React.CSSProperties;

const Youtuber = (props: Props) => {
  return (
    <section className="w-full py-[100px] l:py-[125px]" id="service">
      <div className="w-[92%] max-w-[1140px] mx-auto">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <h2
            className={
              "text-[30px] s:text-[40px] l:text-[50px] font-[700] break-keep text-center mb-[60px] s:mb-[80px] l:mb-[100px]"
            }
          >
            다음과 같은 분을 모십니다
          </h2>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <div className="gap-[20px] m:gap-[30px] l:gap-[50px] flex flex-col l:flex-row justify-center items-center mb-[100px]">
            <div className="text-center w-fit s:w-[500px] s:min-w-[400px] l:order-2">
              <h5 className="text-[#3182F6] uppercase text-[14px]">
                restaurant
              </h5>
              <h3 className="text-[30px] m:text-[40px] font-[700] mb-[20px]  text-[#191f28]">
                카페/음식점
              </h3>
              <div className="text-center">
                <h4 className="text-[#6b7684] font-[500] text-[16px] m:text-[20px] w-[100%] s:w-[82%] s:ml-[80px] m:mx-auto l:ml-auto text-start">
                  &middot; 블로그,카페 등 바이럴마케팅을 원하시는 분<br />
                  &middot; 카페/음식점 홍보에 대한 전문 컨설턴트가 필요할 때
                  <br />
                  &middot; 최근 창업하셔서 마케팅에 대한 경험이 부족한 분
                </h4>
                {/* <h5 className="text-[#6b7684]">
                  &nbsp;&nbsp;(여행/디지털/게임 환영)
                </h5> */}
              </div>
            </div>
            <div className="w-[300px] h-[250px] s:w-[400px] s:h-[300px] m:w-[500px] m:h-[333px] rounded-[30px] overflow-hidden shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),_0_2px_16px_0_rgba(14,30,37,0.32)] opacity-[0.75] relative">
              <Image
                src={"/images/cafe.jpg"}
                alt="소규모 자영업자."
                fill
                sizes="(min-width: 480px) 400px, (min-width: 768px) 500px, 300px"
                style={imageStyle}
              />
            </div>
          </div>
        </motion.div>
        {/* Designed by Freepik */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <div className="gap-[20px] m:gap-[30px] l:gap-[50px] flex flex-col l:flex-row justify-center items-center mb-[100px]">
            <div className="text-center w-fit s:w-[500px] s:min-w-[400px]">
              <h5 className="text-[#3182F6] uppercase text-[14px]">Youtuber</h5>
              <h3 className="text-[30px] m:text-[40px] font-[700] mb-[20px] text-[#191f28]">
                유튜버
              </h3>
              <div className="text-center">
                <h4 className="text-[#6b7684] font-[500] text-[16px] m:text-[20px] w-[100%] s:w-[82%] s:ml-[80px] m:mx-auto l:ml-auto text-start">
                  &middot; 예산이 부족해 바이럴을 망설이시는 분<br />
                  &middot; 구독자 수가 정체돼서 고민하시는 분<br />
                  &middot; 간단하고 이해하기 쉬운 컨설팅을 원하시는 분
                </h4>
              </div>
            </div>
            <div className="w-[300px] h-[250px] s:w-[400px] s:h-[300px] m:w-[500px] m:h-[333px] rounded-[30px] overflow-hidden shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),_0_2px_16px_0_rgba(14,30,37,0.32)] opacity-[0.75] relative">
              <Image
                src={"/images/youtuber.jpg"}
                alt="유튜버."
                fill
                sizes="(min-width: 480px) 400px, (min-width: 768px) 500px, 300px"
                style={imageStyle}
              />
            </div>
          </div>
          {/* Designed by Freepik */}
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <div className="gap-[20px] m:gap-[30px] l:gap-[50px] flex flex-col l:flex-row justify-center items-center">
            <div className="text-center l:order-2 w-fit s:w-[500px] s:min-w-[400px]">
              <h5 className="text-[#3182F6] uppercase text-[14px]">
                enterprise
              </h5>
              <h3 className="text-[30px] m:text-[40px] font-[700] mb-[20px] text-[#191f28]">
                중소/중견기업
              </h3>
              <div className="text-start">
                <h4 className="text-[#6b7684] font-[500] text-[16px] m:text-[20px] w-[100%] s:w-[82%] s:ml-[80px] m:mx-auto l:ml-auto text-start break-keep">
                  &middot; 자사 제품의 홍보를 원하시는 분<br />
                  &middot; 종합적인 온라인 홍보를 위해 유튜브, 블로그 등을
                  <br />
                  &nbsp;&nbsp;활용할 때<br />
                  &middot; 신뢰성 높은 바이럴전문가와 직접 대면해서
                  <br />
                  &nbsp;&nbsp;마케팅에 대해 논의하고 싶을 때
                </h4>
              </div>
            </div>
            <div className="w-[300px] h-[250px] s:w-[400px] s:h-[300px] m:w-[500px] m:h-[333px] rounded-[30px] overflow-hidden shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),_0_2px_16px_0_rgba(14,30,37,0.32)] opacity-[0.75] relative">
              <Image
                src={"/images/enterprise.jpg"}
                alt="중소/중견기업."
                fill
                sizes="(min-width: 480px) 400px, (min-width: 768px) 500px, 300px"
                style={imageStyle}
              />
            </div>
          </div>
          {/* shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12)] */}
          {/* Designed by brgfx / Freepik */}
        </motion.div>
      </div>
    </section>
  );
};

export default Youtuber;
