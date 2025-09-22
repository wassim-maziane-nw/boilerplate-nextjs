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
      secondaryHoverColor: string;
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
      secondaryHoverColor: string;
    };
  }
}

declare module "@mui/material/styles" {
  interface TypeText {
    silver: string;
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
      silver: "#A6A6A6",
    },
  },
  typography: {
    fontFamily: `"Neue Haas Grotesk Display Pro"`,
    h1: {
      fontWeight: 600,
      fontSize: "4rem",
      lineHeight: "6.25rem",
      textAlign: "center",
    },
    h2: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1rem",
    },
    body1: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    body2: {
      fontWeight: 700,
      fontSize: "0.75rem",
      lineHeight: "0.75rem",
    },
  },
  button: {
    borderStyle: "solid",
    borderWidth: "1.5px",
    borderRadius: "3.75rem",
    hoverColor: "#EB514E",
    secondaryHoverColor: "#595959",
    width: "8.625rem",
    height: "3.5rem",
  },
});
