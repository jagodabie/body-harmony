import React, { ReactNode, useState, useContext } from "react";
import { lightTheme, darkTheme } from "@/lib/themes";
import { ThemeProvider } from "@mui/material";

import { Theme } from "@/types/index";

type ThemeContextType = {
  theme: (typeof Theme)[keyof typeof Theme];
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] =
    useState<(typeof Theme)[keyof typeof Theme]>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
