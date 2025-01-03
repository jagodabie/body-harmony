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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "--background-default": "#ffffff",
          "--background-paper": "#f5f5f5",
          "--text-primary": "#17202a",
          "--primary-main": "#0070f3",
          "--box-shadow": "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        },
      },
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "--background-default": "#17202a",
          "--background-paper": "#121212",
          "--text-primary": "#ffffff",
          "--primary-main": "#79b8ff",
          "--box-shadow": "0 0 10px 0 rgba(236, 221, 221, 0.1)",
        },
      },
    },
  },
});
