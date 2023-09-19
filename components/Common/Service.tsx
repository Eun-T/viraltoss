import React from "react";
import Outbox from "./Outbox";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Outbox2 from "./Outbox2";
import Outbox3 from "./Outbox3";
import Outbox4 from "./Outbox4";
import Outbox5 from "./Outbox5";

type Props = {};

const Service = (props: Props) => {
  return (
    <section className="w-full bg-[#f4f4f4] pt-[70px] pb-[150px] relative">
      <p className="text-center text-[50px] font-[700] mb-[80px]">All-in-one 서비스</p>
      {/* <Outbox /> */}
      {/* <Outbox2 /> */}
      {/* <Outbox3 /> */}
      {/* <Outbox4 /> */}
      {/* <Outbox5 /> */}
      <div className="w-[92%] max-w-[1140px] mx-auto">
        <div className="mb-[80px]">
          <p className="text-center text-[30px] font-[700] mb-[50px]">
            자영업자를 위한 패키지
          </p>
          <div className="w-full bg--500 rounded-[30px] flex gap-[30px] justify-center flex-wrap">
            <div className="w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer relative">
              <div className="absolute w-full h-full hover:bg-black hover:opacity-50 z-20 duration-500">
                <div className="absolute text-white opacity-0 hover:opacity-100 pointer-events-auto top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <AiOutlinePlusCircle />
                </div>
              </div>
              <div className="w-full h-[220px] relative overflow-hidden">
                <div className="w-full h-full opacity-25 absolute bg-black pointer-events-none z-10"></div>
                <img
                  src="images/blog1.jpg"
                  alt=""
                  className="w-full h-full object-contain object-center hover:scale-110 duration-500"
                />
              </div>
              <div className="px-[20px] my-[20px]">
                <h1 className="font-[700] mb-[5px] text-[20px]">블로그</h1>
                <p>
                  바이럴 영역의 활발한 경쟁 속에서 블로그 마케팅은 경쟁이 점점
                  치열해지고 있습니다. 따라서 광고효과를 기대하기 어려워지고
                  있지만 타겟에 맞는 인플루언서를 매칭하여 양질의 블로그
                  컨텐츠를 제작해 드립니다.
                </p>
                {/* <p>바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해 드립니다.</p> */}
              </div>
              {/* <Outbox /> */}
            </div>
            <div className="w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer">
              <div className="w-full h-[220px] relative">
                <div className="w-full h-full opacity-25 absolute bg-black"></div>
                <img
                  src="images/naver_power_link.png"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="px-[20px] my-[20px]">
                <h1 className="font-[700] mb-[5px] text-[20px]">
                  파워링크/네이버 플레이스
                </h1>
                <p>
                  네이퍼 파워링크의 기본적인 설명과 세팅 방법을 설정해드립니다.
                  무조건 비싼 키워드가 아닌 메인/세부키워드 등 최적의 세팅값을
                  맞춰드립니다. 또한 어떻게 하면 스마트 플레이스 순위를 높일 수
                  있는지 팁과 노하우를 설명하는 시간을 가집니다.
                </p>
              </div>
            </div>
            <div className="w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer">
              <div className="w-full h-[220px] relative">
                <div className="w-full h-full opacity-25 absolute bg-black"></div>
                <img
                  src="images/social_media.png"
                  alt=""
                  className="w-full h-full object-contain object-center"
                />
                {/* Designed by BiZkettE1 / Freepik */}
              </div>
              <div className="px-[20px] my-[20px]">
                <h1 className="font-[700] mb-[5px] text-[20px]">SNS 페이지</h1>
                <p>
                  SNS 페이지 광고의 핵심은 노출 수만을 추구하는 것이 아니라,
                  실제 구매/방문 가능성을 극대화할 수 있는 최상의 페이지에서
                  광고를 전개하는 것입니다. 협력 관계를 맺고 있는 수백여개의
                  파워페이지를 통해 잠재 고객만을 위한 맞춤 타겟팅이 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-[80px]">
          <p className="text-center text-[30px] font-[700] mb-[50px]">
            유튜버를 위한 통합 서비스
          </p>
          <div className="w-full bg--500 rounded-[30px] flex gap-[30px] justify-center flex-wrap">
            <div className="w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer">
              <div className="w-full h-[220px] relative overflow-hidden">
                <div className="w-full h-full opacity-25 absolute bg-black pointer-events-none z-10"></div>
                <img
                  src="images/youtuber123.png"
                  alt=""
                  className="w-full h-full object-cover object-top hover:scale-110 duration-500"
                />
              </div>
              <div className="px-[20px] my-[20px]">
                <h1 className="font-[700] mb-[5px] text-[20px]">
                  유튜브 컨설팅
                </h1>
                <p>
                  스포츠에도 전략이 있듯이 유튜브에도 '성공하는 전략'이
                  있습니다. 바이럴토스는 모든 클라이언트에게 우리만의 '전략'을
                  제공해 드립니다.
                </p>
                {/* <p>바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해 드립니다.</p> */}
              </div>
            </div>
            <div className="w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer">
              <div className="w-full h-[220px] relative">
                <div className="w-full h-full opacity-25 absolute bg-black"></div>
                <img
                  src="images/popularity.png"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="px-[20px] my-[20px]">
                <h1 className="font-[700] mb-[5px] text-[20px]">인기글</h1>
                <p>
                  유튜브 영상을 캡쳐해서 하나의 스토리를 만들어 드립니다. 이를
                  국내 다양한 온라인 커뮤니티에 게시하여 화제성을 확보하고
                  인기글 게시판에 노출시킵니다.
                </p>
              </div>
            </div>
            <div className="w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer">
              <div className="w-full h-[220px] relative">
                <div className="w-full h-full opacity-25 absolute bg-black"></div>
                <img
                  src="images/consult.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="px-[20px] my-[20px]">
                <h1>컨설팅</h1>
                <p>
                  스포츠에도 전략이 있듯이 유튜브에도 '성공하는 전략'이
                  있습니다.
                </p>
                <p>
                  바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해
                  드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-[30px] font-[700] mb-[50px]">
            기업을 위한 통합 서비스
          </p>
          <div className="w-full bg--500 rounded-[30px] flex gap-[30px] justify-center flex-wrap">
            <div className="w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer">
              <div className="w-full h-[220px] relative">
                <div className="w-full h-full opacity-25 absolute bg-black"></div>
                <h2 className="text-[10px] absolute right-0 [writing-mode:vertical-lr] top-[10%]">
                  Designed by stories / Freepik
                </h2>
                <img
                  src="images/blog2.png"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="px-[20px] my-[20px]">
                <h1 className="font-[700] mb-[5px] text-[20px]">블로그</h1>
                <p>
                  스포츠에도 전략이 있듯이 유튜브에도 '성공하는 전략'이
                  있습니다. 바이럴토스는 모든 클라이언트에게 우리만의 '블로그
                  전략'을 제공해 드립니다.
                </p>
                {/* <p>바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해 드립니다.</p> */}
              </div>
            </div>
            <div className="w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer">
              <div className="w-full h-[220px] relative">
                <div className="w-full h-full opacity-25 absolute bg-black"></div>
                <h2 className="text-[10px] absolute right-0 [writing-mode:vertical-lr] top-[10%]">
                  Designed by Freepik
                </h2>
                <img
                  src="images/youtube12.jpg"
                  alt=""
                  className="w-full h-full object-contain object-top"
                />
              </div>
              <div className="px-[20px] my-[20px]">
                <h1 className="font-[700] mb-[5px] text-[20px]">유튜브</h1>
                <p>
                  유튜브 영상을 캡쳐해서 하나의 스토리를 만들어 드립니다. 이를
                  국내 다양한 온라인 커뮤니티에 게시하여 화제성을 확보하고
                  인기글 게시판에 노출시킵니다.
                </p>
              </div>
            </div>
            <div className="w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer">
              <div className="w-full h-[220px] relative">
                <div className="w-full h-full opacity-25 absolute bg-black"></div>
                <h2 className="text-[10px] absolute right-0 [writing-mode:vertical-lr] top-[10%]">
                  Designed by studiogstock / Freepik
                </h2>
                <img
                  src="images/community2.png"
                  alt=""
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="px-[20px] my-[20px]">
                <h1 className="font-[700] mb-[5px] text-[20px]">커뮤니티</h1>
                <p>
                  스포츠에도 전략이 있듯이 유튜브에도 '성공하는 전략'이
                  있습니다.
                </p>
                <p>
                  바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해
                  드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
