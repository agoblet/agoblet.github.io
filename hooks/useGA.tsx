import { useEffect } from "react";
import ReactGA from "react-ga4";
import useConsent from "./useConsent";

export default function useGA() {
  const { state } = useConsent();

  useEffect(() => {
    if (state.stored === "true") {
      ReactGA.initialize("G-N1RCLVWT44");
      ReactGA.set({ anonymizeIp: true });
      ReactGA.send({ hitType: "pageview" });
    }
  });
}
