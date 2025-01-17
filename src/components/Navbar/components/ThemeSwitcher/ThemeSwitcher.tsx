"use client";

import { CustomSwitch } from "@/components/ui/CustomSwitch/CustomSwitch";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { toggleTheme } from "@/store/slices/appSlice";

export const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.app.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return <CustomSwitch theme={theme} toggleTheme={handleToggleTheme} />;
};
