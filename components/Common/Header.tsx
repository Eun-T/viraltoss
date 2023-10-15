import React from "react";
import Head from "next/head";

type Props = {};


const Header = (props: Props) => {
  return (
    <Head>
      <title>바이럴토스</title>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#3182F6" />
      <meta name="msapplication-navbutton-color" content="#3182F6" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="application-name" content="바이럴토스" />
      <meta name="msapplication-tooltip" content="바이럴토스" />
      <meta id="meta_og_title" property="og:title" content="바이럴토스" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favi32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favi16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="canonical" href="https://www.viraltoss.com/" key="canonical" />
      <link rel="shortcut icon" type="image/ico" href="" />
      <meta name="title" content="바이럴토스" />
      <meta
        name="description"
        content="바이럴마케팅을 원하시나요? 카페,블로그,브랜드마케팅 그리고 컨설팅까지! 소규모 정예로 이루어진 전문가에게 맡기세요. 언제든지 연락만 주시면 바이럴토스는 고객님을 직접 찾아갑니다."
        key="desc"
      />

      <meta property="og:title" content="바이럴토스" />
      <meta property="og:site_name" content="바이럴토스" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="카페,블로그,브랜드마케팅,컨설팅의 바이럴마케팅 전문가. 소규모 정예로 이루어진 전문가에게 맡기세요"
      />
      <meta property="og:url" content="https://www.viraltoss.com" />
      <meta
        property="og:image"
        content="www.viraltoss.com/images/ogimage.png"
      />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="400" />
      <meta property="og:image:alt" content="바이럴토스" />

      <meta name="twitter:card" content="card" />
      <meta name="twitter:title" content="바이럴토스" />
      <meta
        name="twitter:description"
        content="카페,블로그,브랜드마케팅,컨설팅의 바이럴마케팅 전문가"
      />
      <meta
        name="twitter:image"
        content="www.viraltoss.com/images/ogimage.png"
      />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      <meta property="twitter:image:alt" content="바이럴토스" />
    </Head>
  );
};

export default Header;
