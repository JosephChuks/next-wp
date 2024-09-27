"use client";
import Script from "next/script";
import settings from "@/settings.json";

function Adsense() {
  return (
    <>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="afterInteractive"
        id="adsbygoogle-init"
      ></Script>
      <Script
        id="ads-init"
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "${settings.googleAdsenseId}",
              enable_page_level_ads: true
            });
          `,
        }}
      ></Script>
    </>
  );
}
export default Adsense;
