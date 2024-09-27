"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import settings from "@/settings.json";

export default function AdSlot({ slot, id }) {
    const adInitialized = useRef(false);
    const [isClient, setIsClient] = useState(false);
    const adContainerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
        const initializeAds = () => {
            if (
                !adInitialized.current &&
                typeof window !== "undefined" &&
                window.adsbygoogle &&
                adContainerRef.current &&
                adContainerRef.current.offsetWidth > 0
            ) {
                window.adsbygoogle.push({});
                adInitialized.current = true;
            }
        };

        const handleResize = () => {
            adInitialized.current = false;
            initializeAds();
        };
        window.addEventListener("resize", handleResize);
        initializeAds();
        return () => window.removeEventListener("resize", handleResize);
    }, [slot, id]);

    if (!isClient) return null;

    return (
        <>
            <Script
                id={`adsbygoogle-${id}`}
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></Script>
            <ins
                ref={adContainerRef}
                id={id}
                className="adsbygoogle"
                style={{ display: "block", width: "100%", height: "auto", minHeight: "250px" }}
                data-ad-client={settings.googleAdsenseId}
                data-ad-slot={slot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </>
    );
}
