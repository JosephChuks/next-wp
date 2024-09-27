"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import settings from "@/settings.json";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      initializeGoogleAnalytics();
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "true", 365);
    setShowBanner(false);
    initializeGoogleAnalytics();
  };

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const initializeGoogleAnalytics = () => {
    if (typeof window !== "undefined" && !window.ga) {
      (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
          i[r] ||
          function () {
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        "script",
        "https://www.google-analytics.com/analytics.js",
        "ga"
      );
      ga("create", settings.googleAnalytics, "auto");
      ga("send", "pageview");
    }
  };

  if (!showBanner) return null;

  return (
    <div className="bannerStyle">
      <p>
        This website uses cookies to ensure you get the best experience on our
        website.
        <Link href="/privacy-policy" className="bannerLink">
          Learn more
        </Link>
      </p>{" "}
      <button
        id="acceptCookies"
        className="acceptCookies buttonStyle"
        onClick={handleAccept}
      >
        Accept
      </button>
    </div>
  );
};
export default CookieConsentBanner;
