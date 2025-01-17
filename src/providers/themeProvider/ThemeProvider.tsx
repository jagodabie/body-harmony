"use client";

import { ThemeProvider } from "@mui/material";

import { useAppSelector } from "@/hooks/useAppDispatch";
import { darkTheme, lightTheme } from "@/lib/themes";
import { RootState } from "@/store/store";

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useAppSelector((state: RootState) => state.app.theme);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}
