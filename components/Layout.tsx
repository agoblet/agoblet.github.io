import Header from "./Header";
import PageWidth from "./PageWidth";
import MUITheme from "./MUITheme";
import * as React from "react";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import { Stack } from "@mui/material";
import CookieBanner from "./CookieBanner";
import useGA from "../hooks/useGA";

export default function Layout({ children }: PropsWithChildren) {
  useGA();

  return (
    <Stack minHeight="100vh">
      <MUITheme>
        <Header />
        <PageWidth>{children}</PageWidth>
        <CookieBanner />
        <Footer />
      </MUITheme>
    </Stack>
  );
}
