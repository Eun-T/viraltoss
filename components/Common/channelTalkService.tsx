"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ChannelServiceTalk from "./channelService";
import channeltalk from "../../public/images/channeltalk.svg";

const CHANNEL_TALK_PLUGIN_KEY = "9d0c3958-78f9-49ef-a7c6-9f664841c19c";
// const REJECT_CHATROOM_ID = "63xcvvsdde32";

function ContractChannelTalk() {
  useEffect(() => {
    const ChannelService = new ChannelServiceTalk();

    ChannelService.boot({
      pluginKey: CHANNEL_TALK_PLUGIN_KEY,
      // hideChannelButtonOnBoot: true,
      // customLauncherSelector: "#custom-button-1",
      // openChatDirectlyAsPossible: true,
      // mobileMessengerMode: "iframe",
      zIndex: 300,
      hidePopup: false,
    });

    ChannelService.setPage("page");
    // channelTalk.openChat(REJECT_CHATROOM_ID);
    ChannelService.onHideMessenger(() => {
      //
    });
    return () => {
      ChannelService.shutdown();
    };
  }, []);

  return (
    <></>
  );
}

export default ContractChannelTalk;
