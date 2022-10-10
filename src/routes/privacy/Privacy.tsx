import * as React from "react";
import PageTitle from "../../components/PageTitle";
import PageWidth from "../../components/PageWidth";
import Page from "../../components/Page";
import Paragraph from "../../components/Paragraph";
import { Link } from "@mui/material";
import CookieBanner from "../../CookieBanner";

export default function Privacy() {
  return (
    <PageWidth>
      <Page>
        <PageTitle title="Privacy policy" />
        <Paragraph>
          I use Google Analytics to collect anonymized usage statistics for
          axelgoblet.com. I track which pages users visit. IP addresses are sent
          to Google Analytics, but are never stored and are anonymized as early
          as possible. More information on Google Analytics can be found in
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
      </Page>
    </PageWidth>
  );
}
