"use client"

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

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    // bg-white
    <nav className={"w-full h-[60px] fixed top-0 bg-white z-10 " + (scrolled ? 'border-b-[rgba(0,27,55,0.1)] border-b-[1px]' : '')}>
      <div className="w-[92%] max-w-[1140px] mx-auto flex items-center justify-between h-full">
        <div>logo</div>
        <div className="h-full ">
          <ul className="flex gap-[10px] h-full">
            <li className="h-full px-[8px] flex items-center list-none">
              <a
                href="/"
                className="text-[#4e5968] font-[400] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#4e5968] hover:animate-[textShow_.5s_ease-in-out] bg-transparent text-[15px] text-center"
              >
                회사 소개
              </a>
            </li>
            <li className="h-full px-[8px] flex items-center list-none">
              <a
                href="/"
                className="text-[#4e5968] font-[400] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#4e5968] hover:animate-[textShow_.5s_ease-in-out] bg-transparent text-[15px] text-center"
              >
                고객센터
              </a>
            </li>
            <li className="h-full px-[8px] flex items-center list-none">
              <a
                href="/"
                className="text-[#4e5968] font-[400] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#4e5968] hover:animate-[textShow_.5s_ease-in-out] bg-transparent text-[15px] text-center"
              >
                자주 묻는 질문
              </a>
            </li>
            <li className="h-full px-[8px] flex items-center list-none">
              <a
                href="/"
                className="text-[#4e5968] font-[400] px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#4e5968] hover:animate-[textShow_.5s_ease-in-out] bg-transparent text-[15px] text-center"
              >
                채용
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
