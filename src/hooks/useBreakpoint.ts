import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export default function useBreakpoint(
  breakpoint: Breakpoint | number,
  up: boolean = true
): boolean {
  const theme = useTheme();
  const mediaQuery = up
    ? theme.breakpoints.up(breakpoint)
    : theme.breakpoints.down(breakpoint);
  return useMediaQuery(mediaQuery);
}
