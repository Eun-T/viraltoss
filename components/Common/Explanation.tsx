"use client";

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

const Explanation = (props: Props) => {
  return (
    <section className="w-full relative">
      <div className="bg-[#e3e3e3] py-[100px] l:py-[125px] text-center flex flex-col items-center justify-start">
        <div className="w-[92%] max-w-[1140px]">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <h2 className="text-[30px] s:text-[40px] m:text-[50px] font-[700] mb-[40px] s:mb-[60px] break-keep">
              &quot;바이럴토스&quot;를 선택해야 하는 이유
            </h2>
          </motion.div>
          <div className="w-fit text-start mx-auto">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <h3 className="inline-block text-[16px] s:text-[20px] m:text-[26px] l:text-[32px] bg-white p-[15px] m:p-[20px] rounded-[24px] mb-[25px] s:mb-[40px]">
                1. 비대면 <span className="text-red-500 mr-[5px]">NO!</span>{" "}
                대면 <span className="text-[#004aff] mr-[10px]">YES!</span>모든
                작업은 대면으로 진행합니다.
              </h3>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <h3 className="inline-block text-[16px] s:text-[20px] m:text-[26px] l:text-[32px] bg-white p-[15px] m:p-[20px] rounded-[24px] mb-[25px] s:mb-[40px]">
                2. <span className="text-green-500">문자</span> 또는{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-700">
                  채널톡
                </span>
                을 통해 언제든지 문의하실 수 있습니다.
              </h3>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <h3 className="inline-block text-[16px] s:text-[20px] m:text-[26px] l:text-[32px] bg-white p-[15px] m:p-[20px] rounded-[24px]">
                3. 소수정예로 이루어진 만큼{" "}
                <span className="text-purple-500">철저한!</span> 보안관리를 약속
                드립니다.
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explanation;
