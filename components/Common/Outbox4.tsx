import React, { useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import consulting from '../../public/images/youtube_consulting.png'

type Outbox = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const imageStyle = {
  objectFit: "contain",
  objectPosition: "center",
} as React.CSSProperties;
// 3. 솔직하고 정직하게
// - 단점보다는 장점을 언급하는 것이 맞지만, 장점만 나열하면 글을 보러 들어온 이용자들은 광고라고 판단해서 뒤로 가기를 누릅니다. 장점과 단점을 섞어

const Outbox4 = ({ isOpen, setOpen }: Outbox) => {
  useEffect(() => {
    if (isOpen) {
      // 스크롤을 막음
      document.documentElement.style.overflowY = "hidden";
    } else {
      // 스크롤을 다시 활성화
      document.documentElement.style.overflowY = "auto";
    }
  }, [isOpen]);

  return isOpen ? (
    <div className="fixed px-[20px] s:px-[30px] w-full h-full top-0 left-0 z-[100] flex justify-center items-center">
      <div
        className="w-full h-full bg-black opacity-50 absolute"
        onClick={(e) => {
          setOpen(false);
        }}
      ></div>
      <div
        className="bg-white overflow-y-scroll h-[400px] s:h-[555px] l:h-fit w-[768px] l:w-[1100px] relative z-10 rounded-[30px] px-[30px] py-[30px] flex l:flex-row flex-col"
        id="outbox"
      >
        <div
          className="absolute top-[34px] s:top-[25px] z-[300] right-[30px] cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        >
          <TfiClose className="text-[25px] s:text-[33px] l:text-[40px]" />
        </div>
        <div className="l:max-w-[60%]">
          <div className="break-keep">
            <h4 className="text-[22px] font-[700]">유튜브 컨설팅</h4>
            <div className="w-full h-[1px] bg-black my-[7px]"></div>
            <h5 className="mb-[10px] l:mb-[7px]">
              수백만원 짜리 컨설팅 강의를 듣고 계신가요? 유료 VOD 및 전자책을
              읽고 계신가요?
              <br />
              조회수와 구독자가 증가하지 않아 걱정하시거나 채널 운영에 어려움을
              겪고 있다면, 이는 잘못된 방향으로 가고 있다는 증거입니다. 그러나
              상황을 객관적으로 평가하는 것은 간단한 일이 아닙니다. 우리는
              이러한 분들을 위해 맞춤형 컨설팅으로 새로운 활기를 불어넣습니다.
              <br />그 방법은 다음과 같습니다.
            </h5>
            <span className="font-[200] text-[18px]">
              1. 객관적인 자료로 문제 해설
            </span>
            <h5 className="mb-[10px] l:mb-[7px]">
              - 어려운 용어를 피하고 차트와 데이터를 사용하여 기술적 분석을
              실시합니다.&nbsp;
              <span className="text-red-500">
                &lsquo;왜 구독자 수가 정체되었는지&rsquo; &lsquo;조회수가 낮은
                이유가 무엇인지&rsquo;
              </span>
              &nbsp;등을 제3자의 시각으로 바라보고 크리에이터에게 필요한 부분을
              설명드립니다. 물론 고객님께서 기분이 나쁠 수도 있고 자존심이 상할
              수도 있지만, 성공하기 위해서는 누군가의 따끔한 말 한마디가
              필요할때가 있습니다. 결코 쉬운일은 아니지만 사람들이 맞춤 컨설팅을
              찾는 이유랍니다.
            </h5>
            <span className="font-[200] text-[18px]">2. 새로운 수익 구조</span>
            <h5 className="mb-[10px] l:mb-[7px]">
              - 고객님의 채널을 면밀히 분석하여 광고 수익 외에도{" "}
              <span className="text-blue-400">새로운 비즈니스 모델</span>을
              찾아냅니다. 경제적인 안정감을 위해서는 다양한 수익 경로가
              필요합니다.
            </h5>
            <span className="font-[200] text-[18px]">
              3. 채널의 방향성을 잡아드립니다
            </span>
            <h5 className="">
              - 컨설팅의 핵심은 고객님에게 자신감을 불어넣어 도전할 수 있도록
              하는 것입니다. 따라서 유튜브의{" "}
              <span className="text-green-700">
                방향성을 위해서 채널 목적에 맞는 어떤 컨셉을 잡고
                나아가야하는지를 함께 의논하고 소통
              </span>
              하는 시간을 가지게 됩니다. 구독자 니즈를 충족시킬 다양한 아이템을
              가지고 있으니 언제든지 믿고 맡겨주시면 감사합니다.
            </h5>
          </div>
        </div>
        <div className="hidden w-[40%] relative l:flex items-center">

          <Image
            src={consulting}
            alt="유튜브컨설팅."
            fill
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default Outbox4;

const data = [
  "네이버 파워링크/스마트플레이스란?",
  "파워링크는 네이버 상단에 노출되는 광고상품이고 스마트플레이스란 업체를 효과적으로",
];

//ctr,컨설팅,알고리즘,수익구조
// 이런 문제들을 해결하기 위해서는 수년간의 축척된 노하우가 필요하기 마련입니다. - 만약 예산이 한정되어있다면, 가성비 좋은 키워드를 적어야합니다. cpc,입찰가

// 파워링크는 네이버 상단에 노출되는 광고상품이며 스마트플레이스는 업체를 홍보할 수 있는 서비스입니다.
// 일반적으로 음식점에서는 스마트플레이스를 기업의 경우 파워링크를 이용합니다.
// 하지만 알면 알수록 이 둘은 성격이 비슷한데요.

// 1. 지속적인 포스팅
// - 아무리 이웃과 조회수가 많더라도 지속적인 포스팅이 뒷받침되지 않으면 광고효과를 기대하기 어렵습니다.
// 2. 연관 단어
// - 네이버는 포스팅된 블로그 안에 적혀 있는 단어들을 직접 연결해서 높은 점수를 주게 됩니다. 예를 들어 카페
// 에 관련된 글을 올렸다면 아메리카노,라떼와 같은 단어들이 본문에 있어야만 점수를 얻고 상위 노출이 됩니다.

{
  /* sns는 어떻게 해서 마케팅 플랫폼으로 역할을 가질수 있을까요? 
- 해시태그를 이용한 홍보
- 간단하고 직관적인 이미지 노출
- 프로필 링크를 통해 단순하게 상품을 구입*/
}

// 블로그를 활용해 제품이나 서비스를 홍보하는 마케팅 기법입니다.
// 장점으로는 소비자들간의 양방향 커뮤니케이션, 낮은비용 대비 고효과 등이 있습니다.

{
  /* <h3>네이버 파워링크/스마트플레이스란?</h3>
          <p>
            파워링크는 네이버 상단에 노출되는 광고상품이며 스마트플레이스는 업체를 홍보할 수 있는 서비스입니다.
            일반적으로 음식점에서는 스마트플레이스를 기업의 경우 파워링크를 이용합니다.
            하지만 알면 알수록 이 둘은 성격이 비슷한데요.
            1. 최적의 키워드를 사용해라
            - 본인의 음식점/기업을 홍보하기 위해서는 그 성격에 맞는 키워드를 적어서 홍보해야합니다.
            하지만 최적의 키워드를 찾아내는데는 상당한 노하우가 필요합니다.
            그렇지 않으면 파워링크의 경우 상당한 광고비용을 지불해야 되고 스마트플레이스의 경우에는 순위하락으로 이어집니다
            2. 세팅은 전문가에 맡겨라
            - 사실 1번과 비슷한 내용인데요.
            파워링크/스마트플레이스 전부 세팅하기 위해서 설정할 수 있는 기능들이 정말 많습니다.
            문제는 인터넷 서칭을 통한 얉은 지식을 통해 설정값을 주게 된다면 각 기능들이 따로 놀게 됩니다.
            그러면 광고의 효율성이 타업체에 비해 떨어지게 되고 결국 매출 하락으로 이어지죠.

            이런 문제들을 해결하기 위해서는 수년간의 축척된 노하우가 필요하기 마련입니다.
            바이럴토스는 최저의 비용으로 최고의 효율을 내는 고객님에 맞는 세팅을 설정해주고 지금까지 알지 못했던
            꿀팁을 전수해 드립니다.
          </p>

          <h3>SNS 페이지란?</h3>
          <p>

            전세계에서 가장 많이 사용하는 마케팅 플랫폼은 다름아닌 인스타그램입니다.
            그 다음으로는 페이스북, X(트위터) 그리고 스레드 같은 sns 페이지인데요.
            그럼 바이럴토스는 sns를 어떻게 활용할까요?
            - 광고주님의 업종에 맞는 인플루언서를 소개  
            - 단순히 맡기는 것이 아닌 협력과 소통을 통해 언제든지 수정 가능 100프로 위임하는 것이 아님
            이제 sns 마케팅은 선택이 아닌 필수가 되었습니다. sns에 경험이 부족하여 홍보가 막막하시 분이나
            정확한 타겟을 위한 맞춤 타겟 광고 설정을 원하는 분들은 언제든지 신청해주세요.
            - 
          </p>

          <h3>유튜브 컨설팅</h3>
          <p>
            수백만짜리 컨설팅 강의를 듣고 싶은신가요? 유료 유튜브 강의 전자책을 받고 싶으신가요?
            만약 고객님이 유튜버가 처음이시라면 이 서비스를 신청하시면 안됩니다.
            하지만 유튜버임에도 불구하고 구독자 수가 적고 조회수가 낮으면 잘못된 길로 가고 있다는 증거이기에
            새로운 활력이 필요합니다. 
            하지만 상황을 객관적으로 바라본다는 것은 생각보다 힘들 일이죠.
            바이럴토스는 어려운 단어 없이 지표와 차트를 가지고 '구독자 수가 왜 정체되었는지'
            '조회수가 잘 안나오는 이유가 무엇인지' 등을 설명해드립니다.
            고객님의 채널을 면밀히 분석하여 광고 수익 뿐만 아니라 새로운 수익을 얻을 수 있는 여러가지 통로를
            알려드립니다. 게다가 유튜브의 방향성을 위해서 어떤 컨셉을 잡고 나아가야하는지를 함께 의논하고 소통하는 시간을 가지게 됩니다. 구독자 니즈를 충족시킬 다양한 아이템을 가지고 있으니 언제든지 믿고 맡겨주시면 감사합니다.
          </p>

          <h3>인기글</h3>
          <p>
            요즘 떠오르는 핫한 아이템은 인기글 서비스입니다.
            본인의 유튜브 채널을 홍보하고 싶으신가요?
            기업의 제품을 좀더 많은 네티즌에게 보여주고 싶나요?
            코로나로 인해 커뮤니티 이용자 수가 폭발적으로 증가했습니다.
            MZ세대의 경우에는 70%이상이 커뮤니티를 이용하는데요.
            이럴때 일수록 공격적으로 마케팅을 해야 시너지 효과가 발생합니다.
            그래서 바이럴토스는 다음과 같은 방법으로 작업을 진행합니다.
            1. 고객님의 영상으로 네티즌들의 이목을 끌 수 있는 짤(3개)들을 만듭니다.
            2. 이중에서 원하는 짤을 고객님이 직접 선택합니다. 
            2. 그 짤을 토스만의 노하우를 사용하여 인기글 게시판에 노출시킵니다.
            오로지 정상적이고 합법적인 방법으로 작업하기 때문에 걱정하실 필요는 없습니다.

            가장 염려하시는 부분은 "만약 바이럴"
          </p> */
}
