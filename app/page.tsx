"use client"

import Explanation from "@/components/Common/Explanation";
import Friend from "@/components/Common/Friend";
import Header from "@/components/Common/Header";
import Main from "@/components/Common/Main";
import Service from "@/components/Common/Service";
import Youtuber from "@/components/Common/Youtuber";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Header/Nav";
import { Metadata } from "next";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "바이럴토스",
//   description: "바이럴마케팅을 원하시나요? 카페,블로그,브랜드마케팅 그리고 컨설팅까지! 소규모 정예로 이루어진 전문가에게 맡기세요. 언제든지 연락만 주시면 바이럴토스는 고객님을 직접 찾아갑니다.",
//   icons: {
//     icon: "/favicon/favi32.png",
//   },
// };

export default function Home() {

  function setScreenHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenHeight();
    
    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener('resize', setScreenHeight);
    return () => window.removeEventListener('resize', setScreenHeight);
  }, []);
  
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <Main />
        <Service />
        <Youtuber />
        <Explanation />
        <Friend />
      </main>
      <Footer />
    </div>
  );
}
