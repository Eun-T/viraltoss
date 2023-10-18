import Image from "next/image";
import React from "react";
import channeltalk from '../../public/images/channeltalk.svg'

type Props = {};

const channelTalkButton = (props: Props) => {
  return (
    <div id="custom-button-1" className="relative w-[40px] h-[40px] z-400">
      <Image src={channeltalk} alt="채널톡" fill/>
    </div>
  );
};

export default channelTalkButton;
