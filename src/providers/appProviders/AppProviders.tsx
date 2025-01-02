"use client";

import React, { ReactNode } from "react";
import { ThemeContextProvider } from "../themeProvider/ThemeProvider";
import { ScreenSizeProvider } from "../screenSizeProvider/ScreenSizeProvider";
import { CssBaseline } from "@mui/material";

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ScreenSizeProvider>
      <ThemeContextProvider>
        <CssBaseline />
        {children}
      </ThemeContextProvider>
    </ScreenSizeProvider>
  );
}
