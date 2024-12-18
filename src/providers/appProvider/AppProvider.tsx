"use client";

import React, { ReactNode } from "react";
import EmotionCacheProvider from "../emotionCacheProvider/EmotionCacheProvider";
import { ThemeContextProvider } from "../themeProvider/ThemeProvider";

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <EmotionCacheProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </EmotionCacheProvider>
  );
}
