import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Switch,
  Typography,
  FormControlLabel,
} from "@mui/material";
import PageWidth from "./PageWidth";
import Paragraph from "./Paragraph";
import { Property } from "csstype";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import { ConsentHook } from "../hooks/useConsent";

type CookieBannerProps = {
  position?: Property.Position;
  showWhenConfigured?: boolean;
  consentHook: ConsentHook;
};

export default function CookieBanner({
  consentHook,
  position = "fixed",
  showWhenConfigured = false,
}: CookieBannerProps) {
  const { state, toggle, accept, decline } = consentHook;

  return showWhenConfigured || state.stored === "" ? (
    <Card
      sx={{
        backgroundColor: "primary",
        position: position,
        bottom: 0,
        width: "100%",
      }}
    >
      <PageWidth>
        <CardContent>
          <Typography variant="h4" component="span">
            This website uses cookies
          </Typography>
          <Paragraph center={false}>
            Can I collect anonymized usage statistics to improve axelgoblet.com?
          </Paragraph>
          <CookieSwitch disabled name="Necessary" />
          <CookieSwitch
            name="Google Analytics"
            checked={state.switch}
            toggle={toggle}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="error"
            sx={{ flexGrow: 1, margin: 1 }}
            onClick={decline}
          >
            Decline all
          </Button>
          {state.synced ? (
            <Button
              sx={{ flexGrow: 1, margin: 1 }}
              color="success"
              startIcon={<CheckCircleOutlineOutlined />}
            >
              Preferences saved
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              sx={{ flexGrow: 1, margin: 1 }}
              onClick={accept}
            >
              Accept selected
            </Button>
          )}
        </CardActions>
      </PageWidth>
    </Card>
  ) : null;
}

type CookieSwitchProps = {
  name: string;
  disabled?: boolean;
  checked?: boolean;
  toggle?: () => void;
};

function CookieSwitch({
  name,
  disabled,
  checked = true,
  toggle = () => {},
}: CookieSwitchProps) {
  return (
    <FormControlLabel
      value="gaConsent"
      control={
        <Switch disabled={disabled} checked={checked} onChange={toggle} />
      }
      label={name}
      labelPlacement="end"
      sx={{ minHeight: "48px", mt: 1 }}
    />
  );
}
