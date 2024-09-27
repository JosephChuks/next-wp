"use client";
import AdSlot from "./AdSlot";
import settings from "@/settings.json";
import Posts from "./Posts";

const RightSidebar = () => {
  return (
    <>
      {settings.googleAdsenseId && settings.googleAdsenseId !== "" &&
        <>
          <div className="right-sidebar__widget">
            <div className="right-sidebar__content">
              <div className="right-sidebar__title">Advertisement</div>
              {settings.googleAdsenseId && settings.googleAdsenseId !== "" && <AdSlot id="adsbygooglebannerone" slot={settings.adSlotThree} />}
            </div>
          </div>
        </>}
      <div className="right-sidebar__widget">
        <div className="right-sidebar__content">
          <div className="right-sidebar__title">Recommended</div>
          <Posts sidebar="sidebar" />
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
