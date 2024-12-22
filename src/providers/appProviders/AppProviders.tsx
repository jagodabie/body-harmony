"use client";

import React, { ReactNode } from "react";
import EmotionCacheProvider from "../emotionCacheProvider/EmotionCacheProvider";
import { ThemeContextProvider } from "../themeProvider/ThemeProvider";
import { ScreenSizeProvider } from "../screenSizeProvider/ScreenSizeProvider";

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <EmotionCacheProvider>
      <ScreenSizeProvider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </ScreenSizeProvider>
    </EmotionCacheProvider>
  );
}
