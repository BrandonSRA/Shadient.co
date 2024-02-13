import { createTheme } from "@mui/material";

export const GenerateTheme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#000",
    },
  },

  typography: {
    fontFamily: "open sans, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 2609,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(15, 15, 15, 0.4)",
        },
      },
    },
  },
});
