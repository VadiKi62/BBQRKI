"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0)",
      green: "rgba(0, 0, 0, 0.9)",
      fiolet: "rgba(0, 0, 0, 0.7)",
      red: "rgba(132, 129, 128)",
    },
    secondary: {
      main: "rgba(12, 129, 128)",
      dark: "rgba(255, 255, 255)",
      light: "rgba(24, 102, 106, 0.5)",
      beige: "#2f7578 ",
      background: "rgba(21,91,95,0.85)",
    },
    text: {
      light: "#ffffff",
      dark: "#ffffff",
      main: "#ffffff",
      red: "#ffffff",
      black: "rgba(0, 0, 0)",
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
