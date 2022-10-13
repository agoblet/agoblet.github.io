import { createTheme, CssBaseline, responsiveFontSizes } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { PropsWithChildren } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/moulpali/400.css";
import * as React from "react";

const headingTypography = {
  fontFamily: "Moulpali, Roboto, sans-serif",
};

const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            subtitle1: "span",
            subtitle2: "span",
          },
        },
      },
    },
    palette: {
      mode: "dark",
      background: {
        default: "#000000",
      },
      primary: {
        main: "#22b391",
      },
      secondary: {
        main: "#b788fb",
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

export default function MUITheme({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
