"use client"

import React from "react";
import { motion, MotionProps, Variants } from 'framer-motion';
import Image from "next/image";

type Props = {};

type MotionedDivProps = {
  children: React.ReactNode;
  className?: string;
} & MotionProps;

function MotionedDiv({ children, ...rest }: MotionedDivProps) {
  return <motion.div {...rest}>{children}</motion.div>;
}

const cardVariants: Variants = {
  offscreen: {
    x: -100
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Website = (props: Props) => {
  return (
    <section className="flex justify-end w-full bg--500 relative">
      <div className="w-[92%] flex flex-col max-w-[1140px] mx-auto bg--500 pt-[150px] pb-[105px]">
        <div>
          <h1 className="text-[30px] font-[700] text-[#21a394] opacity-70">두려움</h1>
          <h1 className="text-[50px] font-[700]">바이럴 마케팅,<br/>적합한 파트너를<br/>구하기 힘들어요.</h1>
        </div>
        <div className="flex relative items-start justify-between -z-[1]">
          <MotionedDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* <Image className="w-14 bg-white" src={logo} alt="logo" /> */}
            <Image className="w-[400px] bg-white" src={"/images/namo (6).png"} alt="namo" fill objectFit="cover" objectPosition="top"/>
            {/* <img src="/images/namo (6).png" alt="" className="w-full" /> */}
          </MotionedDiv>
            {/* <div className="w-[480px] translate-y-[150px]">
              <img src="/images/namo (6).png" alt="" className="w-full" />
            </div> */}

          <div className="w-[480px] -translate-y-[180px]">
            <img src="/images/namo (6).png" alt="" className="w-full" />
          </div>
        </div>
        <div className="w-[500px] leading-[1.6] self-end relative bottom-[100px]">
          <h1 className="text-[30px] font-[700] text-[#3182f6] opacity-70">의심</h1>
          <h1 className="text-[23px] font-[600]">진행한 바이럴 광고가 들키기라도 한다면?</h1>
          <h1 className="text-[23px] font-[600]">블로그,카페,유튜브 그리고 커뮤니티에서 들키지 않고 바이럴을 하고 싶지만 맞당한 업체를 고르기 힘들다면?</h1>
          <h1 className="text-[23px] font-[600]">일자별 소비와 수입까지 한 번에 볼 수 있어요.</h1>
        </div>
      </div>
    </section>
  );
};

//광고를 진행하려면<br/>예산이 많이 들고<br/>바이럴을 하려면<br/>맞당한 업체를 찾기 힘들고
export default Website;
