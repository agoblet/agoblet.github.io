import Script from "next/script";
import * as React from "react";
import { ConsentHook } from "../hooks/useConsent";
import { useEffect } from "react";

const TRACKING_ID = "G-N1RCLVWT44";

type GoogleAnalyticsProps = { consentHook: ConsentHook };

export default function GoogleAnalytics({ consentHook }: GoogleAnalyticsProps) {
  useEffect(() => {
    (window as any)[`ga-disable-${TRACKING_ID}`] =
      consentHook.state.stored !== "true";
  });

  return consentHook.state.stored === "true" ? (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${TRACKING_ID}');
        `}
      </Script>
    </>
  ) : null;
}
