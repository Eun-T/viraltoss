import React from "react";

type Props = {};

const Youtuber = (props: Props) => {
  return (
    <section className="w-full pb-[150px] pt-[100px]">
      <div className="w-[92%] max-w-[1140px] mx-auto  bg--500">
        <h1 className={"text-[40px] font-[700] text-center mb-[100px]"}>
          바이럴토스는 다음과 같은 분들을 모십니다
        </h1>
        <div className="gap-[150px] flex justify-center items-center mb-[100px]">
          <div className="text-center">
            <h2 className="text-red-500 uppercase">Youtuber</h2>
            <h1 className="text-[40px] font-[700] mb-[20px]">유튜버</h1>
            <div className="text-start">
              <h1 className="text-[#6b7684] font-[600]">
                &middot; 구독자 수가 적으신 분<br />
                &middot; 요근래 성장세가 줄어드신 분
              </h1>
              <h1 className="text-[#6b7684] font-[600]">
                (여행/디지털/공공기관 환영)
              </h1>
            </div>
          </div>
          <div className="w-[500px] rounded-[30px] overflow-hidden shadow-[8px_16px_16px_#616161] opacity-[0.75]">
            <img
              src="images/souvik-banerjee-8dOk8JVESxY-unsplash.jpg"
              alt="sad"
              className="w-full min-w-[400px]"
            />
          </div>
        </div>
        <div className="gap-[150px] flex justify-center items-center">
          <div className="text-center order-2">
            <h2 className="text-red-500 uppercase">enterprise</h2>
            <h1 className="text-[40px] font-[700] mb-[20px]">중소/중견기업</h1>
            <div className="text-start">
              <h1 className="text-[#6b7684] font-[600]">
                &middot; 자사 제품의 홍보를 원하시는 분<br />
                &middot; 바이럴 마케팅을 통해 광고의 흔적을<br/>&nbsp;&nbsp;남기고 싶으신 분
              </h1>
              <h1 className="text-[#6b7684] font-[600]">
                (모니터/태블릿 같은 전자제품 환영)
              </h1>
            </div>
          </div>
          <div className="w-[500px] rounded-[30px] overflow-hidden shadow-[8px_16px_16px_#616161] opacity-[0.75]">
            <img
              src="images/domenico-loia-hGV2TfOh0ns-unsplash.jpg"
              alt="sad"
              className="w-full min-w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtuber;
