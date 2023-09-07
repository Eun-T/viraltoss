"use client";

import React, { useEffect, useState } from "react";
import { RiArrowUpSFill } from "react-icons/ri";

type Props = {};

const UpArrow = (props: Props) => {
  const [arrowUp, setArrowUp] = useState<boolean>(false);

  const isArrowUp = () => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const a = () => {
      if (window.scrollY > 400) {
        setArrowUp(true);
      } else {
        setArrowUp(false);
      }
    };

    window.addEventListener("scroll", a);

    // 컴포넌트 언마운트 시 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("scroll", a);
    };
  });

  return (
    <div
      className={
        "fixed w-[48px] h-[48px] bg-white bottom-[50px] right-[50px] rounded-[100%] flex flex-col items-center justify-center text-[10px] shadow-[0_0_4px_4px_#d6d6d6] z-[100] cursor-pointer " +
        (arrowUp ? "block" : "hidden")
      }
      onClick={isArrowUp}
    >
      <RiArrowUpSFill size="25" />
      <span className="-translate-y-[6px]">TOP</span>
    </div>
  );
};

// box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.15) 0px 8px 30px;

export default UpArrow;
