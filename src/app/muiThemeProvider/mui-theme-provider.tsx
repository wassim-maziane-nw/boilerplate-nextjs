import React from "react";

import { muiTheme } from "./mui-theme";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";

type MuiThemeProviderProps = PropsWithChildren;

export const MuiThemeProvider = ({ children }: MuiThemeProviderProps): ReactNode => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
