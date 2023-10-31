"use client";

import { helvetica } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import v4 from '../../public/images/바이럴토스 (4).svg'
import v3 from '../../public/images/바이럴토스 (3).svg'
import logowhite from '../../public/images/logo-white.svg'
import logoblack from '../../public/images/logo-black.svg'

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
  //bg-[#f4f4f4]
  return (
    <header>
      <nav
        className={
          (scrolled ? "bg-[#f4f4f4] " : "bg-transparent") +
          " w-full fixed top-0 left-0 ease-in-out transition duration-75 z-[50] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1),_0px_4px_6px_0px_rgba(54,79,199,0.08)]"
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
            <a href="/">
              <Image
                src={
                  scrolled
                    ? logoblack
                    : logowhite
                }
                width={150}
                height={0}
                style={{ width: "180px", height: "auto" }}
                alt={"바이럴토스"}
              />
            </a>
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
                      " font-[700] text-[18px] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:text-[#3182F6] bg-transparent text-center"
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
