import React, { useEffect } from 'react'
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";

type Outbox = {
  isOpen: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// 3. 솔직하고 정직하게
// - 단점보다는 장점을 언급하는 것이 맞지만, 장점만 나열하면 글을 보러 들어온 이용자들은 광고라고 판단해서 뒤로 가기를 누릅니다. 장점과 단점을 섞어 

const Outbox2 = ({isOpen,setOpen}: Outbox) => {

  const imageStyle = {
    objectFit:'cover',
    objectPosition:'center',
  } as React.CSSProperties

  useEffect(() => {
    if (isOpen) {
      // 스크롤을 막음
      document.documentElement.style.overflowY = 'hidden';
    } else {
      // 스크롤을 다시 활성화
      document.documentElement.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return isOpen ? (
    <div className='fixed px-[20px] s:px-[30px] w-full h-full top-0 left-0 z-[100] flex justify-center items-center'>
      <div className='w-full h-full bg-black opacity-60 absolute' onClick={(e) => {
        setOpen(false)
      }}></div>
      <div className='bg-white overflow-y-scroll h-[400px] s:h-[555px] l:h-fit w-[768px] l:w-[1100px] relative z-10 rounded-[30px] px-[30px] py-[30px] flex l:flex-row flex-col' id='outbox'>
        <div className='absolute top-[33px] s:top-[25px] z-[300] right-[30px] cursor-pointer' onClick={() => {
          setOpen(false)
        }}>
          <TfiClose className='text-[25px] s:text-[33px] l:text-[40px]'/>
        </div>
        <div className='l:max-w-[60%]'>
          <div className='break-keep'>
            <h4 className='text-[22px] font-[700]'>파워링크/스마트플레이스</h4>
            <div className='w-full h-[1px] bg-black my-[7px]'></div>
            <h5 className='mb-[10px] l:mb-[5px]'>
              파워링크와 스마트플레이스는 네이버 마케팅에서 필수적인 구성 요소입니다.<br />
              엄청난 효과를 내기보다는 브랜드 이미지와 전문성을 강조할 수 있기에 선택이 아닌 필수가 되는거죠
              그렇다면 바이럴토스는 어떻게 업무를 진행할까요?
            </h5>
            <span className='font-[600] text-[18px]'>1. 마케팅 용어 설명</span>
            <h5 className='mb-[10px] l:mb-[7px]'>- 네이버 마케팅에서 사용되는 용어들인 <span className='text-blue-500'> CPC, 키워드, 입찰가 등</span>을 간단하고 이해하기 쉽게 설명해 드립니다.</h5>
            <span className='font-[600] text-[18px]'>2. 최적의 키워드를 사용</span>
            <h5 className='mb-[10px] l:mb-[7px]'>
              - 고객님의 음식점/회사를 홍보하기 위해서는 그 성격에 맞는 키워드를 적어야합니다.
              그렇지 않으면 파워링크의 경우 상당한 광고비용을 지불해야 되고 스마트플레이스의 경우에는 순위하락으로 이어집니다.&nbsp;
              <span className='text-green-600'>키워드 선택과 함께 이미지와 홍보 문구 등</span>을 조합하여 광고 효과를 극대화합니다. <br />
              또한 경쟁사의 중복/악성클릭에 대한 설명과 해결방안을 제공합니다.
            </h5>
            <span className='font-[600] text-[18px]'>3. 세팅 이후 대행사 없이 직접 운영하는 법</span>
            <h5 className=''>
              - 파워링크/스마트플레이스 전부 세팅하기 위해서 설정할 수 있는 기능들이 정말 많습니다.
              부적절한 설정은 각 기능들이 따로 놀게 되고 광고의 효율성이 타업체에 비해 떨어져서 매출 하락으로 이어지죠.
              <span className='text-red-500'>&nbsp;예를 들어 '여성의류'키워드 대신 '여성데일리룩코디'와 같은 검색 가능성이 낮은 키워드를 설정하면 손해만 보게 됩니다.</span>&nbsp;
              바이럴토스는 최소한의 비용으로 최대한의 효과를 얻을 수 있는 고객님에 맞는 세팅을 설정해주고 이전에 알지 못한 유용한 팁을 공유합니다.<br />
              마지막으로, 대행사를 통하지 않고 직접 운영하고 관리하는 방법에 대한 안내도 제공합니다.
            </h5>
            <span className='font-[600] text-[18px]'></span>
          </div>
        </div>
        <div className='hidden w-[40%] relative l:flex items-center'>
          <Image
            src={"/images/power_place.png"}
            alt="인기글."
            fill
            style={imageStyle}
          />
        </div>
      </div>  
    </div>
  ) : null
}

export default Outbox2


// 이런 문제들을 해결하기 위해서는 수년간의 축척된 노하우가 필요하기 마련입니다. - 만약 예산이 한정되어있다면, 가성비 좋은 키워드를 적어야합니다. cpc,입찰가

// 파워링크는 네이버 상단에 노출되는 광고상품이며 스마트플레이스는 업체를 홍보할 수 있는 서비스입니다.
// 일반적으로 음식점에서는 스마트플레이스를 기업의 경우 파워링크를 이용합니다.
// 하지만 알면 알수록 이 둘은 성격이 비슷한데요.

// 1. 지속적인 포스팅
// - 아무리 이웃과 조회수가 많더라도 지속적인 포스팅이 뒷받침되지 않으면 광고효과를 기대하기 어렵습니다.
// 2. 연관 단어
// - 네이버는 포스팅된 블로그 안에 적혀 있는 단어들을 직접 연결해서 높은 점수를 주게 됩니다. 예를 들어 카페
// 에 관련된 글을 올렸다면 아메리카노,라떼와 같은 단어들이 본문에 있어야만 점수를 얻고 상위 노출이 됩니다.

{/* sns는 어떻게 해서 마케팅 플랫폼으로 역할을 가질수 있을까요? 
- 해시태그를 이용한 홍보
- 간단하고 직관적인 이미지 노출
- 프로필 링크를 통해 단순하게 상품을 구입*/}

// 블로그를 활용해 제품이나 서비스를 홍보하는 마케팅 기법입니다.
// 장점으로는 소비자들간의 양방향 커뮤니케이션, 낮은비용 대비 고효과 등이 있습니다.

{/* <h3>네이버 파워링크/스마트플레이스란?</h3>
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
          </p> */}