import React from "react";
import Image from "next/image";

type Props = {};

const Sections = (props: Props) => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="w-full">
        <div className="w-auto h-[100vh]">
          <Image src={"/images/okladka_viral1.png"} alt="asd" width={500} height={500}></Image>
          {/* <img className="w-full h-full object-cover object-center" src="/images/okladka_viral1.png" alt="" /> */}
        </div>
        <div>흰색 그라디언트</div>
        <div>
          <div>
            <div>금융의 모든것</div>
            <div>화살표</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
