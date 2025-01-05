import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Switch } from "@mui/material";

import { Theme } from "@/types";

type CustomSwitchProps = {
  theme: (typeof Theme)[keyof typeof Theme];
  toggleTheme: () => void;
};

export const CustomSwitch = ({ theme, toggleTheme }: CustomSwitchProps) => {
  return (
    <>
      <Switch
        checked={theme === Theme.DARK}
        disableRipple
        inputProps={{
          "aria-label": "enable dark mode",
        }}
        icon={
          <LightModeIcon
            sx={{
              fontSize: "0.9rem",
              margin: "4px 0 0",
              color: "#212f3c",
              width: "1.5rem",
            }}
          />
        }
        checkedIcon={
          <DarkModeIcon
            sx={{
              fontSize: "1rem",
              margin: "3px 0 0",
              color: "white",
            }}
          />
        }
        onChange={toggleTheme}
        sx={{
          "&.MuiSwitch-root": {
            height: "41px",
          },
          "& .MuiSwitch-track": {
            backgroundColor: "#eaecee",
            border: "1px solid #566573",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "transparent",
            border: "1px solid white",
          },
        }}
      />
    </>
  );
};
