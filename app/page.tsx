import Explanation from "@/components/Common/Explanation";
import Friend from "@/components/Common/Friend";
import Header from "@/components/Common/Header";
import Main from "@/components/Common/Main";
import Service from "@/components/Common/Service";
import Youtuber from "@/components/Common/Youtuber";
import ContractChannelTalk from "@/components/Common/channelTalkService";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Header/Nav";
import { Metadata } from "next";
import Head from "next/head";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "바이럴토스",
  description:
    "바이럴마케팅을 원하시나요? 카페,블로그,브랜드마케팅 그리고 컨설팅까지! 소규모 정예로 이루어진 전문가에게 맡기세요. 언제든지 연락만 주시면 바이럴토스는 고객님을 직접 찾아갑니다.",
  openGraph: {
    title: "바이럴토스",
    description:
      "카페,블로그,브랜드마케팅,컨설팅의 바이럴마케팅 전문가. 소규모 정예로 이루어진 전문가에게 맡기세요",
    url: "https://viraltoss.com",
    siteName: "바이럴토스",
    images: [
      {
        url: "https://viraltoss.com/images/ogimage.png",
        width: 800,
        height: 400,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "바이럴토스",
    description:
      "카페,블로그,브랜드마케팅,컨설팅의 바이럴마케팅 전문가. 소규모 정예로 이루어진 전문가에게 맡기세요",
    images: [
      {
        url: "https://viraltoss.com/public/images/ogimage.png",
        width: 1200,
        height: 630,
        alt: "바이럴토스",
      },
    ],
  },
  themeColor: "#3182F6",
  applicationName: "바이럴토스",
  appleWebApp: {
    statusBarStyle: "black-translucent",
  },
  category: "marketing",
  metadataBase: new URL("https://viraltoss.com"),
  icons: {
    icon: [
      { url: "/favicon/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
    ],
  }
}

export default function Home() {

  
  return (
    <div>
      <ContractChannelTalk />
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
