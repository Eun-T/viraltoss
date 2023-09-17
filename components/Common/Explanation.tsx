import React from "react";

type Props = {};

const Explanation = (props: Props) => {
  return (
    <section className="w-full relative">
      <div className="bg-[#fff] py-[100px] text-center flex flex-col items-center justify-start">
        <p className="text-[30px] font-[700] leading-[1.7] text-black">
          바이럴토스는 <span className="text-red-500">절대로</span> 비대면/유선상으로 일을 하지 않습니다.<br />
          모든 업무를 대면으로 진행합니다
        </p>
      </div>
    </section>
  );
};
// /text-[#191f28]
export default Explanation;
