import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton, SxProps } from "@mui/material";

export function ContactButtons() {
  return (
    <React.Fragment>
      <ContactButton href="https://github.com/agoblet">
        <GitHubIcon />
      </ContactButton>
      <ContactButton href="https://www.linkedin.com/in/axel-goblet-5325327a">
        <LinkedInIcon />
      </ContactButton>
      <ContactButton href="mailto:a.goblet@hotmail.com">
        <EmailIcon />
      </ContactButton>
    </React.Fragment>
  );
}

type ContactButtonProps = {
  href: string;
  children: React.ReactNode;
  sx?: SxProps;
};

function ContactButton({ href, children, sx }: ContactButtonProps) {
  return (
    <IconButton size="large" href={href} color="inherit" sx={sx}>
      {children}
    </IconButton>
  );
}
