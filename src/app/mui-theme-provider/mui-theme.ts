import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    button: {
      borderStyle: string;
      borderWidth: string;
      borderRadius: string;
      width: string;
      height: string;
      hoverColor: string;
    };
  }
  interface ThemeOptions {
    button: {
      borderStyle: string;
      borderWidth: string;
      borderRadius: string;
      width: string;
      height: string;
      hoverColor: string;
    };
  }
}

export const muiTheme = createTheme({
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
  button: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "3.75rem",
    hoverColor: "#EB514E",
    width: "8.625rem",
    height: "3.5rem",
  },
});
