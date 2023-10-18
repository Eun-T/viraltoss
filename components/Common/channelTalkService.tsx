"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ChannelServiceTalk from "./channelService";
import channeltalk from "../../public/images/channeltalk.svg";

const CHANNEL_TALK_PLUGIN_KEY = "9d0c3958-78f9-49ef-a7c6-9f664841c19c";
// const REJECT_CHATROOM_ID = "63xcvvsdde32";

const crypto = require("crypto");

const memberId = "lucas";
const secretKey =
  "b5f8c8064ce7c19f15d140eb49cf9540bb8f9f95674134510c9110fc0024c1ed";
const expectedHash =
  "99427c7bba36a6902c5fd6383f2fb0214d19b81023296b4bd6b9e024836afea2";

const hash = crypto
  .createHmac("sha256", Buffer.from(secretKey, "hex"))
  .update(memberId)
  .digest("hex");

function ContractChannelTalk() {
  useEffect(() => {
    const ChannelService = new ChannelServiceTalk();

    ChannelService.boot({
      pluginKey: CHANNEL_TALK_PLUGIN_KEY,
      memberId: memberId, // fill user's member id
      profile: {
        name: "USER_NAME", // fill user's name
        mobileNumber: "USER_MOBILE_NUMBER", // fill user's mobile number
        landlineNumber: "USER_LANDLINE_NUMBER", // fill user's landline number
        CUSTOM_VALUE_1: "VALUE_1", // custom property
        CUSTOM_VALUE_2: "VALUE_2", // custom property
      },
      // hideChannelButtonOnBoot: true,
      // customLauncherSelector: "#custom-button-1",
      // openChatDirectlyAsPossible: true,
      // mobileMessengerMode: "iframe",
      zIndex: 300,
      hidePopup: false,
      memberHash: hash
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

  return <></>;
}

export default ContractChannelTalk;
