import * as React from "react";
import { Divider, Typography } from "@mui/material";

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <React.Fragment>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          mb: 8,
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ mt: 8, mb: 8 }} />
    </React.Fragment>
  );
}
