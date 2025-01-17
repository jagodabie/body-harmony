"use client";

import { CssBaseline } from "@mui/material";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

import store from "@/store/store";

import { ThemeContextProvider } from "../themeProvider/ThemeProvider";

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <CssBaseline />
        {children}
      </ThemeContextProvider>
    </Provider>
  );
}
