import * as React from "react";
import PageTitle from "../../components/PageTitle";
import PageWidth from "../../components/PageWidth";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Page from "../../components/Page";

export default function NotFound() {
  return (
    <PageWidth>
      <Page>
        <PageTitle title="Page not found 😵" />
        <Box display="flex" justifyContent="center">
          <Button component={Link} to="/">
            to the civilized world
          </Button>
        </Box>
      </Page>
    </PageWidth>
  );
}
