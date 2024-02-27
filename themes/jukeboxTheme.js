"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "rgba(92, 229, 221)",
      green: "rgba(43, 112, 107)",
      fiolet: "rgba(24, 102, 106)",
      red: "rgba(132, 129, 128)",
    },
    secondary: {
      main: "rgba(132, 129, 128)",
      dark: "rgba(33, 33, 31)",
      light: "rgba(24, 102, 106, 0.9)",
      beige: "rgba(217,233,230)",
      background: "rgba(132, 129, 128, 0.7)",
    },
    text: {
      light: "#ffffff",
      dark: "rgba(34, 34, 27)",
      main: "rgba(92, 229, 221)",
      red: "#ffffff",
      green: "rgba(92, 229, 221)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        heroButton: {
          fontSize: 45,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          display: "inline-block",
          padding: "10px 28px",
          margin: "0px 2px 0px 0px",
          borderRadius: "50px",
          transition: "0.3s",
          lineHeight: 1,
          color: "white",
          border: "2px solid #cda45e",
          "&:hover": {
            backgroundColor: "#cda45e",
            color: "#fff",
          },
        },
      },
    },
  },

  typography: {
    fontFamily: ["Petit Formal Script", "cursive"].join(","),
    h1: {
      fontSize: "45px",
      fontFamily: ["Source Code Pro", "monospace"].join(","),
    },
    allVariants: {
      fontFamily: ["Source Code Pro", "monospace"].join(","),
    },
  },
});
