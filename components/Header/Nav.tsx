import React from "react";

const Nav = () => {
  return (
    <nav className="w-full h-[60px] fixed top-0 bg-blue-500">
      <div className="w-[92%] max-w-[1140px] mx-auto flex items-center justify-between h-full">
        <div>logo</div>
        <div className="h-full ">
          <ul className="flex gap-[10px] h-full">
            <li className="h-full px-[8px] flex items-center list-none">
              <a
                href="/"
                className="px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#4e5968] hover:animate-[textShow_.5s_ease-in-out] bg-transparent text-[15px] text-center"
              >
                회사 소개
              </a>
            </li>
            <li className="h-full px-[8px] flex items-center list-none">
              <a
                href="/"
                className="px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#4e5968] hover:animate-[textShow_.5s_ease-in-out] bg-transparent text-[15px] text-center"
              >
                고객센터
              </a>
            </li>
            <li className="h-full px-[8px] flex items-center list-none">
              <a
                href="/"
                className="px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#4e5968] hover:animate-[textShow_.5s_ease-in-out] bg-transparent text-[15px] text-center"
              >
                자주 묻는 질문
              </a>
            </li>
            <li className="h-full px-[8px] flex items-center list-none">
              <a
                href="/"
                className="px-[10px] py-[12px] leading-[20px] block border-0 cursor-pointer no-underline hover:rounded-[8px] hover:bg-[#4e5968] hover:animate-[textShow_.5s_ease-in-out] bg-transparent text-[15px] text-center"
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
