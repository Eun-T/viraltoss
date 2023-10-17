"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Outbox from "./Outbox";
import Outbox2 from "./Outbox2";
import Outbox3 from "./Outbox3";
import Outbox4 from "./Outbox4";
import Outbox5 from "./Outbox5";
import Image from "next/image";
import Plus from "./Plus";
import blog1 from '../../public/images/blog1.jpg'
import naver from '../../public/images/naver_power_link.png'
import sns from '../../public/images/social_media.png'
import youtuber1 from '../../public/images/youtuber123.png'
import popularity from '../../public/images/popularity.png'

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

const imageStyle = {
  objectFit: "contain",
  objectPosition: "center",
} as React.CSSProperties;

const Service = () => {
  const [outbox1, setOutbox1] = useState<boolean>(false);
  const [outbox2, setOutbox2] = useState<boolean>(false);
  const [outbox3, setOutbox3] = useState<boolean>(false);
  const [outbox4, setOutbox4] = useState<boolean>(false);
  const [outbox5, setOutbox5] = useState<boolean>(false);
  const [plus, setPlus] = useState<boolean>(false);

  return (
    <section
      className="w-full bg-[#f4f4f4] pt-[70px] pb-[70px] s:pb-[150px] relative"
      id="product"
    >
      <h2 className="text-center text-[35px] s:text-[50px] font-[700] mb-[60px]">
        All-in-one 서비스
      </h2>

      <Outbox isOpen={outbox1} setOpen={setOutbox1} />
      <Outbox2 isOpen={outbox2} setOpen={setOutbox2} />
      <Outbox3 isOpen={outbox3} setOpen={setOutbox3} />
      <Outbox4 isOpen={outbox4} setOpen={setOutbox4} />
      <Outbox5 isOpen={outbox5} setOpen={setOutbox5} />
      <div className="w-[96%] s:w-[92%] max-w-[1140px] mx-auto">
        <div className="mb-[50px] s:mb-[80px]">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <h3 className="text-center text-[20px] s:text-[30px] font-[700] mb-[35px] s:mb-[50px]">
              자영업자를 위한 패키지
            </h3>
            <div className="w-full rounded-[30px] flex gap-[50px] m:gap-[30px] justify-center flex-wrap">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  className="w-[300px] s:w-[360px] shadow-lg bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer relative"
                  onClick={(e) => {
                    setOutbox1(true);
                  }}
                >
                  <Plus />
                  <div className="w-full h-[160px] s:h-[220px] relative overflow-hidden">
                    <div className="w-full h-full opacity-25 absolute bg-black pointer-events-none z-10"></div>
                    <Image
                      alt="블로그."
                      src={blog1}
                      sizes="(max-width: 480px) 300px, 360px"
                      fill
                      style={imageStyle}
                    />
                  </div>
                  <div className="px-[15px] my-[15px] s:px-[20px] s:my-[20px]">
                    <h4 className="font-[700] mb-[5px] text-[15px] s:text-[20px]">
                      블로그
                    </h4>
                    <p className="text-[14px] s:text-[16px]">
                      바이럴 영역에서 경쟁이 치열해지고 있는 블로그 마케팅은
                      광고효과를 기대하기 어려워지고 있습니다. 그러나 우리는
                      타겟에 맞는 인플루언서를 선별하고, 고품질의 블로그
                      콘텐츠를 제작함으로써 고객님의 브랜드 메시지를 효과적으로
                      전달합니다. 이 과정을 통해 방문객들의 주목을 끄는 데
                      도움을 드립니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  className="w-[300px] s:w-[360px] shadow-lg bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer relative"
                  onClick={(e) => {
                    setOutbox2(true);
                  }}
                >
                  <Plus />
                  <div className="w-full h-[160px] s:h-[220px] relative overflow-hidden">
                    <div className="w-full h-full opacity-25 absolute bg-black pointer-events-none z-10"></div>
                    <Image
                      src={naver}
                      alt="네이버 파워 링크,스마트플레이스."
                      sizes="(max-width: 480px) 300px, 360px"
                      fill
                      style={imageStyle}
                    />
                  </div>
                  <div className="px-[15px] my-[15px] s:px-[20px] s:my-[20px]">
                    <h4 className="font-[700] mb-[5px] text-[15px] s:text-[20px]">
                      파워링크/스마트플레이스 등
                    </h4>
                    <p className="text-[14px] s:text-[16px]">
                      파워링크/스마트플레이스의 기본적인 설명과 세팅을
                      제공합니다. 무작정 비싼 키워드가 아닌 브랜드와 연관된
                      최상의 설정값 맞춰드립니다. 스마트플레이스의 경우 등록부터
                      광고까지 모든 작업을 전담하여 진행합니다.이외에도 네이버
                      쇼핑검색, 파워컨텐츠, 브랜드검색 등 다양한 업무를
                      처리합니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  className="w-[300px] s:w-[360px] shadow-lg bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer relative"
                  onClick={(e) => {
                    setOutbox3(true);
                  }}
                >
                  <Plus />
                  <div className="w-full h-[160px] s:h-[220px] relative overflow-hidden">
                    <div className="w-full h-full opacity-25 absolute bg-black pointer-events-none z-10"></div>
                    <Image
                      src={sns}
                      alt="SNS."
                      sizes="(max-width: 480px) 300px, 360px"
                      fill
                      style={imageStyle}
                    />
                    {/* Designed by BiZkettE1 / Freepik */}
                  </div>
                  <div className="px-[15px] my-[15px] s:px-[20px] s:my-[20px]">
                    <h4 className="font-[700] mb-[5px] text-[15px] s:text-[20px]">
                      SNS 마케팅
                    </h4>
                    <p className="text-[14px] s:text-[16px]">
                      SNS 페이지 광고의 핵심은 노출 수만을 추구하는 것이 아니라,
                      실제 구매/방문 가능성을 극대화하는 최상의 페이지에서
                      광고를 전개하는 것입니다. 협력 관계를 맺고 있는
                      파워페이지를 통해 잠재 고객만을 위한 맞춤 타겟팅이
                      가능합니다. SNS 자체광고를 위한 촬영 및 편집 등의 업무도
                      담당하고 있습니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <div className="">
            <h3 className="text-center text-[20px] s:text-[30px] font-[700] mb-[35px] s:mb-[50px]">
              유튜버를 위한 패키지
            </h3>

            <div className="w-full rounded-[30px] flex gap-[50px] m:gap-[30px] justify-center flex-wrap">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  className="w-[300px] s:w-[360px] shadow-lg bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer relative"
                  onClick={(e) => {
                    setOutbox4(true);
                  }}
                >
                  <Plus />
                  <div className="w-full h-[160px] s:h-[220px] relative overflow-hidden">
                    <div className="w-full h-full opacity-25 absolute bg-black pointer-events-none z-10"></div>
                    <Image
                      src={youtuber1}
                      alt="유튜브."
                      fill
                      sizes="(max-width: 480px) 300px, 360px"
                      style={imageStyle}
                    />
                  </div>
                  <div className="px-[15px] my-[15px] s:px-[20px] s:my-[20px]">
                    <h4 className="font-[700] mb-[5px] text-[15px] s:text-[20px]">
                      유튜브 컨설팅
                    </h4>
                    <p className="text-[14px] s:text-[16px]">
                      스포츠에도 전략이 있듯이 유튜브에도 &lsquo;성공하는
                      전략&rsquo;이 있습니다. 그러기 위해서는 최신 유튜브
                      알고리즘을 이해할 필요는 없습니다. SEO, CTR, APV와 같은
                      용어보다는 성공적인 채널 운영을 위한 트렌드와 비법을
                      공유합니다. 바이럴토스는 모든 클라이언트에게 우리만의
                      &lsquo;전략&rsquo;을 제공해 드립니다.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  className="w-[300px] s:w-[360px] shadow-lg bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer relative"
                  onClick={(e) => {
                    setOutbox5(true);
                  }}
                >
                  <Plus />
                  <div className="w-full h-[160px] s:h-[220px] relative overflow-hidden">
                    <div className="w-full h-full opacity-25 absolute bg-black pointer-events-none z-10"></div>
                    <Image
                      src={popularity}
                      alt="인기글."
                      fill
                      sizes="(max-width: 480px) 300px, 360px"
                      style={imageStyle}
                    />
                  </div>
                  <div className="px-[15px] my-[15px] s:px-[20px] s:my-[20px]">
                    <h4 className="font-[700] mb-[5px] text-[15px] s:text-[20px]">
                      인기글
                    </h4>
                    <p className="text-[14px] s:text-[16px]">
                      새로운 구독자를 확보하고 싶으신가요? 저희는 유튜브 영상을
                      캡처해서 흥미로운 짤을 만듭니다. 이 짤을 국내 다양한
                      온라인 커뮤니티에 게시하여 인기글 게시판에 노출시킴으로써
                      화제성을 확보합니다. 이 방법을 통해 시청자들의 관심을
                      유도하고 귀하의 채널을 성공적으로 성장시킬 수 있을
                      것입니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
