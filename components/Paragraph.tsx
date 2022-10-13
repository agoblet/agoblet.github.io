import { Typography } from "@mui/material";
import * as React from "react";

type ParagraphProps = {
  children: React.ReactNode;
  gutterBottom?: boolean;
  center?: boolean;
};

export default function Paragraph({
  children,
  gutterBottom = true,
  center = true,
}: ParagraphProps) {
  return (
    <Typography
      mb={gutterBottom ? "1rem" : 0}
      maxWidth="60ch"
      ml={center ? "auto" : 0}
      mr={center ? "auto" : 0}
    >
      {children}
    </Typography>
  );
}
