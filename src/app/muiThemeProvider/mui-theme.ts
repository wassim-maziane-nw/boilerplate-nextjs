import type { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";

export const muiTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#404040",
    },
  },
});
