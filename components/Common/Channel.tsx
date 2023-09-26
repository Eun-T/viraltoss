"use client";

import { useEffect } from "react";
import Image from "next/image";

declare global {
  interface Window {
    Kakao: any;
  }
}

const addKakaoTalkChannelButton = () => {

  const addKakaoChannel = () => {
    // if (window.Kakao) {
    //   //카카오 스크립트가 로드된 경우
    //   const kakao = window.Kakao;

    //   //인증이 안되어있는 경우 인증한다.
    //   if (!kakao.isInitialized()) {
    //     kakao.init("sha384-bg2pMhokxyx1zeEM2ol2hJtBagKMjRIZDVI/KITe+j2U5K+Or6HPY1lWDWY8ubEN"); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    //   }
    // }

    window.Kakao.Channel.addChannel({
      channelPublicId: '_xlqtdG', //카카오 채널 ID
    });
  }; 

  window.kakaoAsyncInit = function () {
  };
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.channel.min.js";
    js.integrity =
      "sha384-bg2pMhokxyx1zeEM2ol2hJtBagKMjRIZDVI/KITe+j2U5K+Or6HPY1lWDWY8ubEN";
    js.crossOrigin = "anonymous";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "kakao-js-sdk");

  return (
    <>
      <div id="kakao-talk-channel-add-button" onClick={addKakaoChannel} className="fixed bottom-[40px] right-[40px] z-[200] cursor-pointer">
        <Image
          src={"/images/kakao.png"}
          alt="youtube"
          objectFit="contain"
          width={90}
          height={90}
          className="rounded-[50px]"
        />
      </div>
    </>
  );
};

export default addKakaoTalkChannelButton;

// window.kakaoAsyncInit = function() {
//   Kakao.Channel.createAddChannelButton({
//     container: '#kakao-talk-channel-add-button',
//   });
// };

// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.channel.min.js';
//   js.integrity = 'sha384-bg2pMhokxyx1zeEM2ol2hJtBagKMjRIZDVI/KITe+j2U5K+Or6HPY1lWDWY8ubEN';
//   js.crossOrigin = 'anonymous';
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, 'script', 'kakao-js-sdk');

// const addKakaoTalkChannelButton = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.async = true;
//     script.src =
//       "https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.channel.min.js";
//     script.integrity =
//       "sha384-bg2pMhokxyx1zeEM2ol2hJtBagKMjRIZDVI/KITe+j2U5K+Or6HPY1lWDWY8ubEN";
//     script.crossOrigin = "anonymous";

//     script.onload = () => {
//       window.kakaoAsyncInit = () => {
//         Kakao.Channel.createAddChannelButton({
//           container: "#kakao-talk-channel-add-button",
//         });
//       };
//     };

//     // 초기화 스크립트를 로드한 후 카카오 SDK를 초기화합니다.
//     window.Kakao.init("YOUR_KAKAO_APP_KEY");

//     document.body.appendChild(script);

//     // 컴포넌트가 언마운트될 때 스크립트를 제거합니다.
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

// "use client";
// import React, { useEffect, useRef } from 'react';

// const KakaoTalkChannelButton = ({ channelPublicId }: { channelPublicId: string }) => {
//   const scriptRef = useRef<HTMLScriptElement | null>(null);

//   useEffect(() => {
//     const loadKakaoScript = () => {
//       // 이미 스크립트가 로드되었는지 확인
//       if (scriptRef.current) {
//         return;
//       }

//       // 카카오 SDK 스크립트를 동적으로 추가합니다.
//       const script = document.createElement('script');
//       script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.channel.min.js';
//       script.async = true;

//       // 스크립트 로드가 완료되면 Kakao SDK를 초기화하고 카카오 채널 추가 버튼을 생성합니다.
//       script.onload = () => {
//         window.Kakao.init(process.env.NEXT_PUBLIC_INIT_ID);
//         window.Kakao.Channel.createAddChannelButton({
//           container: '#kakao-talk-channel-add-button',
//           channelPublicId: channelPublicId,
//           size: 'large',
//           supportMultipleDensities: true,
//         });
//       };

//       // useRef로 스크립트 요소를 저장
//       scriptRef.current = script;

//       // 스크립트를 동적으로 추가합니다.
//       if (document.body) {
//         document.body.appendChild(script);
//       }
//     };

//     // 컴포넌트 마운트 시 스크립트를 로드합니다.
//     loadKakaoScript();

//     return () => {
//       // 컴포넌트 언마운트 시 스크립트 요소를 삭제하지 않음
//     };
//   }, [channelPublicId]);

//   return (
//     <div>
//       {/* 카카오톡 채널 추가 버튼이 표시될 위치입니다. */}
//       <div
//         id="kakao-talk-channel-add-button"
//         data-size="large"
//         data-support-multiple-densities="true"
//       ></div>
//     </div>
//   );
// };

// export default KakaoTalkChannelButton;
