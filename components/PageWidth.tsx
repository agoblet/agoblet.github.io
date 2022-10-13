import * as React from "react";
import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

export default function PageWidth({ children }: PropsWithChildren) {
  return (
    <Container maxWidth="md" sx={{ flexGrow: 1 }}>
      {children}
    </Container>
  );
}
