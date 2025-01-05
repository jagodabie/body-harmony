"use client";

import { CssBaseline } from "@mui/material";
import React, { ReactNode } from "react";

import { ThemeContextProvider } from "../themeProvider/ThemeProvider";

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      {children}
    </ThemeContextProvider>
  );
}
