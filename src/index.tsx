import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";

const headingTypography = {
  fontFamily: "Moulpali, Roboto, sans-serif",
};

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#000000",
      },
      primary: {
        main: "#22b391",
      },
      secondary: {
        main: "#b6b6b6",
      },
    },
    typography: {
      h1: headingTypography,
      h2: headingTypography,
      h3: headingTypography,
      h4: headingTypography,
      h5: headingTypography,
      h6: headingTypography,
    },
  })
);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
