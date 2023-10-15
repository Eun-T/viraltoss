import React from "react";
import Head from "next/head";
import { Metadata } from "next";

const Header = () => {
  return (
    <>
      <Head>
        <title>바이럴토스</title>     
        <meta property="og:title" content="바이럴토스"></meta>
        <meta property="og:site_name" content="바이럴토스"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:description"
          content='카페,블로그,브랜드마케팅,컨설팅의 바이럴마케팅 전문가. 소규모 정예로 이루어진 전문가에게 맡기세요'
        ></meta>
        <meta property="og:url" content="https://viraltoss.com"></meta>
        <meta
          property="og:image"
          content="https://viraltoss.com/images/ogimage.png"
        ></meta>
        <meta property="og:locale" content="ko_KR"></meta>
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:image:width" content="800"></meta>
        <meta property="og:image:height" content="400"></meta>
        <meta property="og:image:alt" content="바이럴토스"></meta>

        <meta name="twitter:card" content="card"></meta>
        <meta name="twitter:title" content="바이럴토스"></meta>
        <meta
          name="twitter:description"
          content="카페,블로그,브랜드마케팅,컨설팅의 바이럴마케팅 전문가"
        ></meta>
        <meta
          name="twitter:image"
          content="https://viraltoss.com/images/ogimage.png"
        ></meta>
        <meta name="twitter:image:type" content="image/png"></meta>
        <meta name="twitter:image:width" content="1200"></meta>
        <meta name="twitter:image:height" content="630"></meta>
        <meta property="twitter:image:alt" content="바이럴토스"></meta>
      </Head>
    </>
  );
};

export default Header;
