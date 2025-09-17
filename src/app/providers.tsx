"use client";

import React, { StrictMode } from "react";

import { TranslationProvider } from "~i18n";
import { StoreProvider } from "~store/provider";
import notistackRef from "~utils/notistackRef";
import { queryClient } from "~utils/queryClient";

import { MuiThemeProvider } from "./muiThemeProvider/mui-theme-provider";
import { RootStyleRegistry } from "./styleRegistry";

import { SnackbarProvider } from "notistack";
import { QueryClientProvider } from "react-query";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <RootStyleRegistry>
      <StrictMode>
        <StoreProvider>
          <TranslationProvider>
            <SnackbarProvider ref={notistackRef} maxSnack={2}>
              <QueryClientProvider client={queryClient}>
                <MuiThemeProvider>{children}</MuiThemeProvider>
              </QueryClientProvider>
            </SnackbarProvider>
          </TranslationProvider>
        </StoreProvider>
      </StrictMode>
    </RootStyleRegistry>
  );
};
