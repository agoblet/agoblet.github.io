import * as React from "react";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
import { Link } from "@mui/material";
import CookieBanner from "../components/CookieBanner";
import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy policy | Axel Goblet</title>
        <meta property="og:title" content="Privacy policy | Axel Goblet" />
      </Head>
      <PageTitle title="Privacy policy" />
      <Paragraph>
        I use Google Analytics to collect anonymized usage statistics for
        axelgoblet.com. I track which pages users visit. IP addresses are sent
        to Google Analytics, but are never stored and are anonymized as early as
        possible. More information on Google Analytics can be found in
        Google&apos;s{" "}
        <Link
          href="https://www.google.com/policies/privacy/partners/"
          aria-label="Read Google's privacy statement"
        >
          privacy statement
        </Link>
        . You can adjust your preferences below.
      </Paragraph>
      <CookieBanner position="relative" showWhenConfigured />
    </>
  );
}
