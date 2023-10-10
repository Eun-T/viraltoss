"use client";

import { helvetica } from "@/app/layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const [isClick, setIsClick] = useState<boolean>(false);

  const isClose = () => {
    setIsClick(!isClick);
  };

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
    <header>
      <nav
        className={
          (scrolled ? "bg-[#f4f4f4] " : "bg-transparent") +
          " w-full fixed top-0 left-0 ease-in-out transition duration-75 z-[50] shadow-navbarr"
        }
      >
        <div className="w-[92%] max-w-[1140px] h-[72px] mx-auto flex items-center justify-between">
          {/* 로고 */}
          <div
            className={
              "text-[22px] font-[700] flex items-center  bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 " +
              helvetica.className
            }
          >
            <img
              src={
                scrolled
                  ? "/images/바이럴토스 (4).svg"
                  : "/images/바이럴토스 (3).svg"
              }
              alt=""
              className="w-[100px]"
            />
          </div>

          {/* 진짜 navbar */}
          <div className="hidden m:block">
            <div className=" \h-full flex items-center">
              <ul className="flex gap-[10px] h-full">
                <li className="h-full px-[8px] flex items-center list-none">
                  <Link
                    href="#home"
                    passHref
                    className={
                      (scrolled ? "text-[#3b3f4b]" : "text-white") +
                      " font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:text-[#3182F6] bg-transparent text-center"
                    }
                  >
                    홈
                  </Link>
                </li>
                <li className="h-full px-[8px] flex items-center list-none">
                  <Link
                    href="#product"
                    className={
                      (scrolled ? "text-[#3b3f4b]" : "text-white") +
                      " font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:text-[#3182F6]  bg-transparent  text-center"
                    }
                  >
                    마케팅 상품
                  </Link>
                </li>
                <li className="h-full px-[8px] flex items-center list-none">
                  <Link
                    href="#service"
                    className={
                      (scrolled ? "text-[#3b3f4b]" : "text-white") +
                      " font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:text-[#3182F6]  bg-transparent  text-center"
                    }
                  >
                    서비스 대상
                  </Link>
                </li>
                <li className="h-full px-[8px] flex items-center list-none">
                  <Link
                    href="#question"
                    className={
                      (scrolled ? "text-[#3b3f4b]" : "text-white") +
                      " font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:text-[#3182F6] bg-transparent  text-center"
                    }
                  >
                    문의하기
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 모바일 navbar */}
          <div className="m:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center"
              onClick={isClose}
            >
              {isClick ? (
                <div className="z-10">
                  <IoCloseOutline size="30" color="black" />
                </div>
              ) : (
                <div className="z-10">
                  <GiHamburgerMenu
                    size="30"
                    color={scrolled ? "black" : "white"}
                  />
                </div>
              )}
            </button>
          </div>
        </div>
        {isClick && (
          <div className="m:hidden w-[250px] h-[100vh] bg-white absolute top-0 right-0">
            <div className="p-[10px] pt-[20px]">
              <ul className="flex-col gap-[10px] h-full">
                <li className="h-full px-[8px] flex items-center list-none">
                  <Link
                    onClick={isClose}
                    href="#home"
                    passHref
                    className={
                      "text-[#3b3f4b] font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline text-center"
                    }
                  >
                    홈
                  </Link>
                </li>
                <li className="h-full px-[8px] flex items-center list-none">
                  <Link
                    onClick={isClose}
                    href="#product"
                    className={
                      "text-[#3b3f4b] font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] text-center"
                    }
                  >
                    마케팅 상품
                  </Link>
                </li>
                <li className="h-full px-[8px] flex items-center list-none">
                  <Link
                    onClick={isClose}
                    href="#service"
                    className={
                      "text-[#3b3f4b] font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] text-center"
                    }
                  >
                    서비스 대상
                  </Link>
                </li>
                <li className="h-full px-[8px] flex items-center list-none">
                  <Link
                    onClick={isClose}
                    href="#question"
                    className={
                      "text-[#3b3f4b] font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline text-center"
                    }
                  >
                    문의하기
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;

{
  /* <div>
<GiHamburgerMenu size="30" color="white"/>
</div> */
}
// linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))
//           bg-gradient-to-r from-slate-900 to-slate-700
//           bg-gradient-to-r from-gray-700 via-gray-900 to-black
//           bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r
//           bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900
//(scrolled ? "border-b-[rgba(0,27,55,0.1)] border-b-[1px]" : "")
