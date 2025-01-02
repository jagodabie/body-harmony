import { CustomSwitch } from "@/components/ui/CustomSwitch/CustomSwitch";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return <CustomSwitch theme={theme} toggleTheme={toggleTheme} />;
};
