"use client";
const { default: Script } = require("next/script");

const Translator = () => {
  return (
    <Script async charset="UTF-8" src="/js/translator.js" as="script"></Script>
  );
};

export default Translator;
