import { createTheme } from "@mui/material/styles";

const commonStyles = {
  "--font-size": "1rem",
  "--font-weight-400": "400",
  "--font-weight-500": "500",
  "--font-weight-600": "600",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "space-between",
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

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
          ...commonStyles,
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
          ...commonStyles,
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
