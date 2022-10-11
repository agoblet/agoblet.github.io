import * as React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import PageWidth from "./components/PageWidth";
import { ContactButtons } from "./components/ContactButtons";
import { Link as MUILink } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Content", path: "/content" },
  { name: "Privacy policy", path: "/privacy" },
];

export default function Footer() {
  return (
    <footer>
      <Paper sx={{ mt: 10, pt: 1, pb: 1 }}>
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
  const { pathname } = useLocation();

  return (
    <MUILink
      variant="overline"
      component={Link}
      to={to}
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
  );
}
