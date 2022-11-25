import * as React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import PageWidth from "./PageWidth";
import { ContactButtons } from "./ContactButtons";
import { Link as MUILink } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Content", path: "/content" },
  { name: "Privacy policy", path: "/privacy" },
];

export default function Footer() {
  return (
    <footer style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <Paper sx={{ mt: 10, pt: 1, pb: 1, flexGrow: 1 }}>
        <PageWidth>
          <Stack direction="row" flexWrap="wrap">
            <Stack flexGrow="1">
              <Typography variant="subtitle2">Axel Goblet © 2021</Typography>
              <ContactButtons />
            </Stack>
            <Stack alignItems="end">
              {pages.map(({ name, path }) => (
                <FooterPageLink key={name} name={name} to={path} />
              ))}
            </Stack>
          </Stack>
        </PageWidth>
      </Paper>
    </footer>
  );
}

type FooterPageLinkProps = {
  name: string;
  to: string;
};

function FooterPageLink({ name, to }: FooterPageLinkProps) {
  const { pathname } = useRouter();

  return (
    <Link href={to} legacyBehavior passHref>
      <MUILink
        variant="overline"
        underline="hover"
        color={pathname === to ? "primary" : "inherit"}
        sx={{
          minWidth: "48px",
          pt: "9px",
          pb: "9px",
          mb: "8px",
          textAlign: "right",
        }}
      >
        {name}
      </MUILink>
    </Link>
  );
}
