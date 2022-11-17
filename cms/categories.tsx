import * as React from "react";
import { ReactElement } from "react";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import CodeIcon from "@mui/icons-material/Code";

export type Category = {
  icon: ReactElement;
  label: string;
  id: string;
};

export const categories = {
  article: {
    icon: <HistoryEduIcon />,
    label: "Article",
    id: "articles",
  },
  talk: {
    icon: <MicExternalOnIcon />,
    label: "Talk",
    id: "talks",
  },
  code: {
    icon: <CodeIcon />,
    label: "Code",
    id: "code",
  },
};
