"use client";
import React from "react";

type Props = {};

declare global {
  interface Window {
    Kakao: any;
  }
}

const Talk = (props: Props) => {
  window.kakaoAsyncInit = function () {
    Kakao.Channel.createChatButton({
      container: "#kakao-talk-channel-chat-button",
    });
  };

  (function (a, b, c) {
    var js,
      fjs = a.getElementsByTagName(b)[0];
    if (a.getElementById(c)) return;
    js = a.createElement(b);
    js.id = c;
    js.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.channel.min.js";
    js.integrity =
      "sha384-bg2pMhokxyx1zeEM2ol2hJtBagKMjRIZDVI/KITe+j2U5K+Or6HPY1lWDWY8ubEN";
    js.crossOrigin = "anonymous";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "kakao-js-sdk");

  return (
    <div className="w-[200px] h-[100px] bg-red-500 fixed bottom-[50px] z-[200]">
      <div
        id="kakao-talk-channel-chat-button"
        data-channel-public-id="_xlqtdG"
      ></div>
    </div>
  );
};

export default Talk;
