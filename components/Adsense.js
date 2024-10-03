"use client";
import { useEffect, useRef } from "react";
import settings from "@/settings.json";

export default function Adsense({ slot, id }) {
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            hasRun.current = true;
        }
    }, []);

    return (
        <>
            <ins
                className="adsbygoogle"
                id={id}
                style={{ display: "block", textAlign: "center" }}
                data-ad-client={settings.googleAdsenseId}
                data-ad-slot={slot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </>
    );

}
