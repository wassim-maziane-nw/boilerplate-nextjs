import type { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export const muiTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#404040",
    },
    background: {
      default: "#000000",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#404040",
    },
  },
  typography: {
    fontFamily: `"Neue Haas Grotesk Display Pro"`,
    h1: {
      fontWeight: 600,
      fontSize: "6rem",
      lineHeight: "6.25rem",
    },
    h2: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1rem",
    },
    body1: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },
});
