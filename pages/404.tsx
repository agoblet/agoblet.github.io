import * as React from "react";
import PageTitle from "../components/PageTitle";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import PageHead from "../components/PageHead";

export default function NotFound() {
  return (
    <>
      <PageHead
        title="Axel Goblet | Senior MLOps Engineer @ TMNL"
        description="Axel Goblet is a senior MLOPS engineer at TMNL. Learn more about him and check out his content."
      />
      <PageTitle title="Page not found 😵" />
      <Box display="flex" justifyContent="center">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button>to the civilized world</Button>
        </Link>
      </Box>
    </>
  );
}
