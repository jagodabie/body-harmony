import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#17202a",
    },
    primary: {
      main: "#0070f3",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#17202a",
      paper: "#121212",
    },
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#79b8ff",
    },
  },
});
