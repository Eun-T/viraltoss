import React from "react";

type Props = {};

const Explanation = (props: Props) => {
  return (
    <section className="w-full relative">
      <div className="bg-[#e3e3e3] py-[100px] text-center flex flex-col items-center justify-start break-keep">
        <div className="w-[92%] max-w-[1140px]">
          <h1 className="text-[50px] font-[700] mb-[60px]">
            "바이럴토스를 선택해야 하는 이유"
          </h1>
          <div className="text-start pl-[80px]">
            {/* <h3 className="text-[32px] text-[#]">
              1. 비대면 <span className="text-red-500 mr-[5px]">NO!</span> 대면{" "}
              <span className="text-blue-500 mr-[10px]">YES!</span>모든 작업은
              대면으로 진행합니다
            </h3>
            <h5 className="text-[14] mb-[30px]">
              (고객님이 원하실때만 유선상으로 작업을 실행합니다)
            </h5> */}
            <span className="inline-block text-[32px] bg-white p-[20px] rounded-[30px] mb-[40px]">
              1. 비대면 <span className="text-red-500 mr-[5px]">NO!</span> 대면{" "}
              <span className="text-blue-500 mr-[10px]">YES!</span>모든 작업은
              대면으로 진행합니다.
            </span>
            <span className="inline-block text-[32px] bg-white p-[20px] rounded-[30px] mb-[40px]">
              2. 문의하기에 시간을 낭비하지 마세요. 언제든지 수신가능합니다 !
            </span>
            <span className="inline-block text-[32px] bg-white p-[20px] rounded-[30px]">
              3. 소수정예로 이루어진 만큼 철저한 보안관리를 약속 드립니다.
            </span>
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
