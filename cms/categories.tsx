import * as React from "react";
import { ReactElement } from "react";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import CodeIcon from "@mui/icons-material/Code";

export type Category = {
  icon: ReactElement;
  label: string;
  slug: string;
  title: string;
};

export const categories = {
  articles: {
    icon: <HistoryEduIcon />,
    label: "Article",
    slug: "articles",
    title: "Articles",
  },
  talks: {
    icon: <MicExternalOnIcon />,
    label: "Talk",
    slug: "talks",
    title: "Talks",
  },
  code: {
    icon: <CodeIcon />,
    label: "Code",
    slug: "code",
    title: "Code",
  },
};
