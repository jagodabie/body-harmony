"use client";

import React, { ReactNode } from "react";
import { ThemeContextProvider } from "../themeProvider/ThemeProvider";
import { CssBaseline } from "@mui/material";

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
