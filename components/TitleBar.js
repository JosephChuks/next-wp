"use client";
import React from "react";
import AdSlot from "@/components/AdSlot";
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
      {settings.googleAdsenseId && settings.googleAdsenseId !== "" && <AdSlot id="adsbygooglebannerone" slot={settings.adSlotOne} /> }
    </>
  );
};

export default TitleBar;
