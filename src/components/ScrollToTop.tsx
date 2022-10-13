import { useEffect } from "react";
import { useLocation } from "react-router";
import * as React from "react";

type ScrollToTopProps = {
  children: React.ReactNode;
};

export default function ScrollToTop({ children }: ScrollToTopProps) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}
