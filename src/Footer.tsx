import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import PageWidth from "./components/PageWidth";
import { ContactButtons } from "./components/ContactButtons";

export default function Footer() {
  return (
    <footer style={{ marginTop: "auto" }}>
      <Paper sx={{ mt: 10 }}>
        <PageWidth>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography variant="overline" flexGrow={1}>
              Axel Goblet © 2021
            </Typography>
            <ContactButtons />
          </Box>
        </PageWidth>
      </Paper>
    </footer>
  );
}
