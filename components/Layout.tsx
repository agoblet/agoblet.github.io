import MUITheme from "./MUITheme";
import * as React from "react";
import { PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import CookieBanner from "./CookieBanner";
import Footer from "./Footer";
import Header from "./Header";
import PageWidth from "./PageWidth";
import useGA from "../hooks/useGA";

export default function Layout({ children }: PropsWithChildren) {
  useGA();

  return (
    <Stack minHeight="100vh">
      <MUITheme>
        <Header />
        <main>
          <PageWidth>{children}</PageWidth>
        </main>
        <CookieBanner />
        <Footer />
      </MUITheme>
    </Stack>
  );
}
