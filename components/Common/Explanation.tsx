import React from "react";

type Props = {};

const Explanation = (props: Props) => {
  return (
    <section className="w-full relative">
      <div className="bg-[#f4f4f4] py-[100px] text-center flex flex-col items-center justify-start">
        <p className="text-[30px] font-[700] text=[#191f28] leading-[1.7]">
          내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.<br/>이제껏 경험
          못 했던 쉽고 편리한 금융 서비스,<br/> 토스와 함께라면 당신의 일상이
          새로워질 거예요.
        </p>
      </div>
    </section>
  );
};

export default Explanation;
