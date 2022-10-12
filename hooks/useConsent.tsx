import { useReducer } from "react";

const GA_CONSENT_COOKIE_NAME = "ga_consent";

type ConsentHook = {
  state: ConsentState;
  toggle: () => void;
  accept: () => void;
  decline: () => void;
};

type ConsentState = {
  stored: string;
  switch: boolean;
  synced: boolean;
};

export default function useConsent(): ConsentHook {
  const stored = getCookie(GA_CONSENT_COOKIE_NAME);

  const [state, dispatch] = useReducer(
    (state: ConsentState, action: string) => {
      switch (action) {
        case "accept":
          document.cookie = `${GA_CONSENT_COOKIE_NAME}=${
            state.switch
          }; expires=${sixMonthsFromNowAsString()}; path=/;`;
          return {
            stored: state.switch.toString(),
            switch: state.switch,
            synced: true,
          };
        case "decline":
          document.cookie = `${GA_CONSENT_COOKIE_NAME}=false; expires=${sixMonthsFromNowAsString()}; path=/;`;
          return {
            stored: "false",
            switch: false,
            synced: true,
          };
        case "toggle":
          return {
            stored: state.stored,
            switch: !state.switch,
            synced: (!state.switch).toString() === state.stored,
          };
      }
      return state;
    },
    {
      stored: stored,
      switch: stored != "false",
      synced: stored != "",
    }
  );

  return {
    state: state,
    toggle: () => dispatch("toggle"),
    accept: () => dispatch("accept"),
    decline: () => dispatch("decline"),
  };
}

function getCookie(cname: string): string {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function sixMonthsFromNowAsString(): string {
  const d = new Date();
  d.setMonth(d.getMonth() + 6);
  return d.toUTCString();
}
