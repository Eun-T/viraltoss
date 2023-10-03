"use client";

import { helvetica } from "@/app/layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  // 스크롤 이벤트 리스너를 추가합니다.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={"w-full fixed top-0 left-0 bg-white z-[50] shadow-navbarr"}
    >
      {/*  +
        (scrolled ? "border-b-[rgba(0,27,55,0.1)] border-b-[1px]" : "") */}
      <div className="w-[92%] max-w-[1140px] h-[72px] mx-auto flex items-center justify-between">
        <div
          className={
            "text-[22px] font-[700] flex items-center  bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 " +
            helvetica.className
          }
        >
          {/* 
          linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))
          bg-gradient-to-r from-slate-900 to-slate-700
          bg-gradient-to-r from-gray-700 via-gray-900 to-black
          bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r
          bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900
          */}
          <img src="/images/logo4.svg" alt="" className="w-[100px]" />
          {/* ViralToss */}
        </div>
        <div className="h-full ">
          <ul className="flex gap-[10px] h-full">
            <li className="h-full px-[8px] flex items-center list-none">
              <Link
                href="#home"
                passHref
                className="text-[#3b3f4b] font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#f0f0f0]  bg-transparent  text-center"
              >
                홈
              </Link>
            </li>
            <li className="h-full px-[8px] flex items-center list-none">
              <Link
                href="#product"
                className="text-[#3b3f4b] font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#f0f0f0] bg-transparent  text-center"
              >
                마케팅 상품
              </Link>
            </li>
            <li className="h-full px-[8px] flex items-center list-none">
              <Link
                href="#service"
                className="text-[#3b3f4b] font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#f0f0f0]  bg-transparent  text-center"
              >
                서비스 대상
              </Link>
            </li>
            <li className="h-full px-[8px] flex items-center list-none">
              <Link
                href="#question"
                className="text-[#3b3f4b] font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#f0f0f0]  bg-transparent  text-center"
              >
                문의하기
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
