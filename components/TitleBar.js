"use client";
import React from "react";
import Adsense from "@/components/Adsense";
import settings from "@/settings.json";

const TitleBar = ({ title, day, year }) => {
  return (
    <>
      <div className="overview">
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          className="overview__heading"
        />
        <div className="overview__socials">
        </div>
        <div className="overview__date">
          <div className="overview__date-day">{day}</div>
          <div className="overview__date-year">{year}</div>
        </div>
      </div>
      {settings.googleAdsenseId && settings.googleAdsenseId !== "" && <Adsense id="googleadsone" slot={settings.horizontalAd} /> }
    </>
  );
};

export default TitleBar;
