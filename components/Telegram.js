"use client";
const { default: Script } = require("next/script");
import settings from "@/settings.json";

const Telegram = () => {
  return (
    <>
      <Script
        async
        src="/js/chat.js"
        onLoad={() => {
          const { protocol, hostname } = document.location;
          const options = {
            telegram: settings.telegram.username,
            order: "telegram",
            call_to_action: settings.telegram.notice,
            button_color: "#004aad",
            position: "right",
            pre_filled_message: "Hello",
          };
          WhWidgetSendButton.init(hostname, protocol, options);
        }}
      ></Script>
    </>
  );
};

export default Telegram;
