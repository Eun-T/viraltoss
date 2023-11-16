import Image from "next/image";
import React from "react";
import telephone from "../../public/images/telephone.png";

const Telephone = () => {
  return (
    <div className="fixed bottom-[100px] hidden m:block right-[30px] w-[56px] h-[56px] z-[30] rounded-[50px] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.2),_0px_4px_6px_0px_rgba(0,0,0,0.1),_0px_8px_30px_0px_rgba(0,0,0,0.15)]">
      <a href="tel:010-5578-7956">
        <Image src={telephone} alt="통화 번트" className="w-full"/>
      </a>
    </div>
  );
};

export default Telephone;
