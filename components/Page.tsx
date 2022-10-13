import { Box } from "@mui/material";
import * as React from "react";

type PageProps = {
  children: React.ReactNode;
};

export default function Page({ children }: PageProps) {
  return <Box mt={16}>{children}</Box>;
}
