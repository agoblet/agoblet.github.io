import * as React from "react";
import PageTitle from "../components/PageTitle";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import PageHead from "../components/PageHead";

export default function NotFound() {
  return (
    <>
      <PageHead
        title="Axel Goblet | Machine learning engineer @ BigData Republic"
        description="Axel Goblet is a machine learning engineer and consultant at BigData Republic. Learn more about the projects he has done and check out his content."
      />
      <PageTitle title="Page not found 😵" />
      <Box display="flex" justifyContent="center">
        <Link href="/" legacyBehavior>
          <Button href="/">to the civilized world</Button>
        </Link>
      </Box>
    </>
  );
}
