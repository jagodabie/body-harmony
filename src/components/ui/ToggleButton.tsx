"use client";
import { styled, Switch } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { Theme } from "@/types";

// export const StyledDarkModeIcon = styled(DarkMode)`
//   &.MuiSvgIcon-root {
//     font-size: 1em;
//     margin: 2px 0 0;
//   }
// `;

// export const StyledLightModeIcon = styled(LightMode)`
//   &.MuiSvgIcon-root {
//     font-size: 0.85em;
//     margin: 3px 0 0 4px;
//   }
// `;
const label = { inputProps: { "aria-label": "Size switch demo" } };

export const ToggleButton = () => {
  const { toggleTheme, theme } = useTheme();
  console.log("theme", theme);

  if (!theme) {
    return <p>Błąd: Brak motywu</p>;
  }
  return (
    <>
      <p onClick={toggleTheme}>{`${Theme.DARK} jaki jest aktualny ${theme}`}</p>
      {/* <Switch {...label} defaultChecked /> */}
    </>
  );
};
