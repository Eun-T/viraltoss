import Image from "next/image";
import React from "react";

type Props = {};

const Youtuber = (props: Props) => {
  return (
    <section className="w-full pb-[150px] pt-[100px]">
      <div className="w-[92%] max-w-[1140px] mx-auto">
        <h1 className={"text-[40px] font-[700] text-center mb-[100px]"}>
          바이럴토스는 다음과 같은 분들을 모십니다
        </h1>

        <div className="gap-[50px] flex justify-center items-center mb-[100px]">
          <div className="text-center w-[500px] min-w-[400px] order-2">
            <h2 className="text-red-500 uppercase">Youtuber</h2>
            <h1 className="text-[40px] font-[700] mb-[20px]">소규모 자영업자</h1>
            <div className="text-center">
              <h1 className="text-[#6b7684] font-[500] text-[20px] w-[82%] ml-auto text-start">
                &middot; 예산이 부족해 바이럴을 망설이시는 분<br />
                &middot; 구독자 수가 정체돼서 고민하시는 분<br />
                &middot; 간단하고 이해하기 쉬운 컨설팅을 원하시는 분
              </h1>
              <h1 className="text-[#6b7684] font-[500]">
                &nbsp;&nbsp;(여행/디지털/게임 환영)
              </h1>
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
        {/* Designed by Freepik */}
        <div className="gap-[50px] flex justify-center items-center mb-[100px]">
          <div className="text-center w-[500px] min-w-[400px]">
            <h2 className="text-red-500 uppercase">Youtuber</h2>
            <h1 className="text-[40px] font-[700] mb-[20px]">유튜버</h1>
            <div className="text-center">
              <h1 className="text-[#6b7684] font-[500] text-[20px] w-[82%] ml-auto text-start">
                &middot; 예산이 부족해 바이럴을 망설이시는 분<br />
                &middot; 구독자 수가 정체돼서 고민하시는 분<br />
                &middot; 간단하고 이해하기 쉬운 컨설팅을 원하시는 분
              </h1>
              <h1 className="text-[#6b7684] font-[500]">
                &nbsp;&nbsp;(여행/디지털/게임 환영)
              </h1>
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

        <div className="gap-[50px] flex justify-center items-center">
          <div className="text-center order-2 w-[500px] min-w-[400px]">
            <h2 className="text-red-500 uppercase">enterprise</h2>
            <h1 className="text-[40px] font-[700] mb-[20px]">중소/중견기업</h1>
            <div className="text-start">
              <h1 className="text-[#6b7684] font-[500] text-[20px] w-[82%] ml-auto text-start">
                &middot; 자사 제품의 홍보를 원하시는 분<br />
                &middot; 바이럴 마케팅을 통해 광고의 흔적을<br/>&nbsp;&nbsp;남기고 싶으신 분
              </h1>
              <h1 className="text-[#6b7684] font-[500] text-center">
                &nbsp;&nbsp;(모니터/태블릿 같은 전자제품 환영)
              </h1>
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
      </div>
    </section>
  );
};

export default Youtuber;
