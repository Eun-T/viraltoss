"use client"

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

const   Explanation = (props: Props) => {
  return (
    <section className="w-full relative">
      {/* e3e3e3 */}
      <div className="bg-[#e3e3e3] py-[100px] l:py-[125px] text-center flex flex-col items-center justify-start">
        <div className="w-[92%] max-w-[1140px]">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <h2 className="text-[30px] s:text-[40px] m:text-[50px] font-[700] mb-[40px] s:mb-[60px] break-keep">
              "바이럴토스"를 선택해야 하는 이유
            </h2>
          </motion.div>
          <div className="w-fit text-start mx-auto">
            {/* <h3 className="text-[32px] text-[#]">
              1. 비대면 <span className="text-red-500 mr-[5px]">NO!</span> 대면{" "}
              <span className="text-blue-500 mr-[10px]">YES!</span>모든 작업은
              대면으로 진행합니다
            </h3>
            <h5 className="text-[14] mb-[30px]">
              (고객님이 원하실때만 유선상으로 작업을 실행합니다)
            </h5> */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <h3 className="inline-block text-[16px] s:text-[20px] m:text-[26px] l:text-[32px] bg-white p-[15px] m:p-[20px] rounded-[24px] mb-[25px] s:mb-[40px]">
                1. 비대면 <span className="text-red-500 mr-[5px]">NO!</span> 대면{" "}
                <span className="text-[#004aff] mr-[10px]">YES!</span>모든 작업은
                대면으로 진행합니다.
              </h3>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <h3 className="inline-block text-[16px] s:text-[20px] m:text-[26px] l:text-[32px] bg-white p-[15px] m:p-[20px] rounded-[24px] mb-[25px] s:mb-[40px]">
                2. <span className="text-green-500">문자</span> 또는 <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-700">카카오톡</span>을 통해 언제든지 문의하실 수 있습니다.
                {/* 2. 문의하기에 시간을 낭비하지 마세요. 언제든지 수신가능합니다 ! */}
              </h3>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true }}
            >
            <h3 className="inline-block text-[16px] s:text-[20px] m:text-[26px] l:text-[32px] bg-white p-[15px] m:p-[20px] rounded-[24px]">
              3. 소수정예로 이루어진 만큼 <span className="text-purple-500">철저한!</span> 보안관리를 약속 드립니다.
            </h3>
            </motion.div>
            
            {/* <h3 className="text-[32px] mb-[30px]">
              3. 다년간 축적된 바이럴 경험. 본능적인 감각과 눈썰미는 절대
              실망시켜드리지 않을 겁니다
            </h3> */}
          </div>
        </div>
      </div>
    </section>
  );
};
// /text-[#191f28] (철저한 보안관리를 약속 드립니다) 소수정예로 이루어진 만큼 철저한 보안관리를 약속 드립니다
export default Explanation;
