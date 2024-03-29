import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link as MUILink, SxProps } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import PageWidth from "./PageWidth";
import useBreakpoint from "../hooks/useBreakpoint";
import Link from "next/link";
import { useRouter } from "next/router";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Content", path: "/content" },
];
const title = "Axel Goblet";

export default function Header() {
  const menuControl = useMenuControl();
  const isLargeMenu = useBreakpoint("md");

  return (
    <AppBar position="relative" sx={{ mb: 10 }}>
      <PageWidth>
        <Toolbar disableGutters>
          {isLargeMenu ? (
            <MenuLarge menuControl={menuControl} />
          ) : (
            <MenuSmall menuControl={menuControl} />
          )}
        </Toolbar>
      </PageWidth>
    </AppBar>
  );
}

type MenuControl = {
  anchor: null | HTMLElement;
  close: () => void;
  setAnchor: (e: React.MouseEvent<HTMLElement>) => void;
};

function useMenuControl(): MenuControl {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  return {
    anchor: anchor,
    close: () => setAnchor(null),
    setAnchor: (e: React.MouseEvent<HTMLElement>) => setAnchor(e.currentTarget),
  };
}

type MenuProps = {
  menuControl: MenuControl;
};

function MenuSmall({ menuControl }: MenuProps) {
  const { pathname } = useRouter();

  return (
    <Box
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "absolute", left: 0 }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={menuControl.setAnchor}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={menuControl.anchor}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(menuControl.anchor)}
          onClose={menuControl.close}
        >
          {pages.map(({ name, path }, i) => (
            <Link href={path} key={i} legacyBehavior>
              <MenuItem onClick={menuControl.close}>
                <Typography
                  textAlign="center"
                  color={pathname === path ? "primary" : "inherit"}
                >
                  {name}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>
      <HeaderButton
        variant="h4"
        text={title}
        to="/"
        close={menuControl.close}
        sx={{ margin: "auto" }}
      />
    </Box>
  );
}

function MenuLarge({ menuControl }: MenuProps) {
  const { pathname } = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <HeaderButton
          variant="h4"
          to="/"
          text="Axel Goblet"
          close={menuControl.close}
          sx={{ height: "100%" }}
        />
      </Box>
      {pages.map(({ name, path }, i) => (
        <HeaderButton
          key={i}
          variant="h6"
          to={path}
          text={name}
          close={menuControl.close}
          color={pathname === path ? "primary" : "inherit"}
        />
      ))}
    </Box>
  );
}

type HeaderButtonProps = {
  variant: Variant;
  to: string;
  text: string;
  close: () => void;
  sx?: SxProps;
  color?: "inherit" | "primary";
};

function HeaderButton({
  variant,
  to,
  text,
  close,
  color = "inherit",
  sx = {},
}: HeaderButtonProps) {
  return (
    <Link href={to} legacyBehavior passHref>
      <MUILink
        variant={variant}
        underline="hover"
        onClick={close}
        color={color}
        sx={{ pr: 2, pl: 2, ...sx }}
      >
        {text}
      </MUILink>
    </Link>
  );
}
