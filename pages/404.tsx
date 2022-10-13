import * as React from "react";
import PageTitle from "../components/PageTitle";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | Axel Goblet</title>
        <meta property="og:title" content="404 | Axel Goblet" />
      </Head>
      <PageTitle title="Page not found 😵" />
      <Box display="flex" justifyContent="center">
        <Link href="/">
          <Button href="/">to the civilized world</Button>
        </Link>
      </Box>
    </>
  );
}
