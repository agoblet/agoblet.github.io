import { Box } from "@mui/material";
import * as React from "react";
import useGA from "../hooks/useGA";

type PageProps = {
  children: React.ReactNode;
};

export default function Page({ children }: PageProps) {
  useGA();
  return <Box mt={16}>{children}</Box>;
}
