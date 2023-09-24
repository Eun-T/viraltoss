import React from "react";
import KakaoTalkChannelButton from './Channel'

type Props = {};

const Friend = (props: Props) => {
  return (
    <section>
      <div className="w-full" id="question">
        <div className="w-[92%] max-w-[1140px] mx-auto py-[150px]">
          <div className="flex justify-center items-center gap-[20px]">
            <button className="bg-yellow-400 p-[20px] rounded-[10px]">
              카카오톡 추가하기
            </button>
            <KakaoTalkChannelButton channelPublicId="_xlqtdG" />
            <a href="tel:010-3981-4325" className="bg-[#1fc858] p-[20px] rounded-[10px] text-white">
              통화하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Friend;

//마케팅이 필요하신가요?
//카페,블로그부터 컨설팅까지