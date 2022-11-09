import type { AppProps } from "next/app";
import * as React from "react";
import { Stack } from "@mui/material";
import GoogleAnalytics from "../components/GoogleAnalytics";
import MUITheme from "../components/MUITheme";
import Header from "../components/Header";
import PageWidth from "../components/PageWidth";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import useConsent from "../hooks/useConsent";

export default function App({ Component }: AppProps) {
  const consentHook = useConsent();

  return (
    <Stack minHeight="100vh">
      <GoogleAnalytics consentHook={consentHook} />
      <MUITheme>
        <Header />
        <main>
          <PageWidth>
            <Component>
              <CookieBanner
                consentHook={consentHook}
                position="relative"
                showWhenConfigured
              />
            </Component>
          </PageWidth>
        </main>
        <CookieBanner consentHook={consentHook} />
        <Footer />
      </MUITheme>
    </Stack>
  );
}
