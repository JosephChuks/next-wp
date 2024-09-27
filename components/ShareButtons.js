"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";

const ShareButton = ({ title, url }) => {
  return (
    <>
      <div
        className="flex gap-3 justify-center pb-5"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <FacebookShareButton url={url} quote={title} hashtag={`#${title}`}>
          <FacebookIcon size={25} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title} hashtag={[`#${title}`]}>
          <TwitterIcon size={25} round />
        </TwitterShareButton>
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={25} round />
        </WhatsappShareButton>
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={25} round />
        </TelegramShareButton>
      </div>
    </>
  );
};

export default ShareButton;
