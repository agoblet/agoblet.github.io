import { useEffect } from "react";
import ReactGA from "react-ga4";
import useConsent from "./useConsent";

ReactGA.initialize("G-N1RCLVWT44");
ReactGA.set({ anonymizeIp: true });

export default function useGA() {
  const { state } = useConsent();

  useEffect(() => {
    if (state.stored === "true") {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  });
}
