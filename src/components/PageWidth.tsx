import * as React from "react";
import { Container } from "@mui/material";

type PageProps = {
  children?: React.ReactNode;
};

export default function PageWidth({ children }: PageProps) {
  return <Container maxWidth="md">{children}</Container>;
}
