import Image from "next/image";
import React, { useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import community from '../../public/images/community3.png';

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

const Outbox5 = ({ isOpen, setOpen }: Outbox) => {
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
        className="w-full h-full bg-black opacity-60 absolute"
        onClick={(e) => {
          setOpen(false);
        }}
      ></div>
      <div
        className="bg-white overflow-y-scroll h-[400px] s:h-[480px] l:h-fit w-[768px] l:w-[1100px] relative z-10 rounded-[30px] px-[30px] py-[30px] flex l:flex-row flex-col"
        id="outbox"
      >
        <div
          className="absolute top-[34px] s:top-[25px] z-[300] right-[30px] cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        >
          <TfiClose size="40" />
        </div>
        <div className="l:max-w-[60%]">
          <div className="break-keep">
            <h4 className="text-[22px] font-[700]">인기글</h4>
            <div className="w-full h-[1px] bg-black my-[7px]"></div>
            <h5 className="mb-[7px]">
              요즘 떠오르는 핫한 아이템은 인기글 서비스입니다. 본인의 유튜브
              채널을 홍보하고 싶으신가요? 자사의 제품을 좀더 많은 네티즌에게
              광고하고 싶나요? 2020년 코로나로 인해 커뮤니티 이용자 수가
              폭발적으로 증가했는데요. MZ세대의 경우에는 무려 70%이상이
              커뮤니티를 이용합니다. 이럴때 일수록 공격적으로 마케팅 전략을
              가져야 홍보 효과가 배 이상 발생합니다. 그래서 바이럴토스는 다음과
              같은 방법으로 작업을 진행합니다.
            </h5>
            <span className="font-[600] text-[18px]">
              1. 고객님의 영상으로 네티즌들의 이목을 끌 수 있는 짤들을 만듭니다.
            </span>
            <h5 className="mb-[7px]">
              - 일단 협의를 통해 커뮤니티에 올릴 유튜브 영상을 선택합니다. 그
              이후에 영상을 한땀한땀 캡쳐하고 이어붙여 짤을 제작합니다.
            </h5>
            <span className="font-[600] text-[18px]">
              2. 이중에서 원하는 짤을 고객님이 직접 선택합니다.
            </span>
            <h5 className="mb-[7px]">
              - 충분한 논의 끝에 하나를 선정하시면 됩니다.
            </h5>
            <span className="font-[600] text-[18px]">
              3. 그것을 토스만의 노하우를 사용하여 인기글 게시판에 노출시킵니다.
            </span>
            <h5 className="mb-[7px]">
              - 숙련된 노하우로 인해 네티즌들의 부정적 여론이 형성되거나 신고
              누적으로 삭제될 가능성은 제로에 가깝습니다. 뿐만 아니라 오로지
              정상적이고 합법적인 방법으로 작업하기 때문에 걱정하실 필요는
              없습니다. 인기글 서비스를 이용하시면 커뮤니티에서 고객님의 영상을
              감상하고 구독자로 유입될 가능성이 상당히 높아집니다. 단 한번이라도
              인기글에 게시가 되면 다른 광고와 비교해도 수십배 높은 효과를 얻을
              수 있습니다.
            </h5>
          </div>
        </div>
        <div className="hidden w-[40%] relative l:flex items-center">
          <Image
            src={community}
            alt="커뮤니티."
            fill
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default Outbox5;
