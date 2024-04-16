"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#124559",
      green: "#598392",
      fiolet: "#a45ecd",
      red: "#598392",
    },
    secondary: {
      main: "#598392",
      light: "#aec3b0",
      beige: "#d70c6a",
      background:
        "-webkit-radial-gradient(top, rgba(89, 131, 146, 0.9),rgba(18, 69, 89, 0.9))",
      complement: "#d70c6a",
    },
    text: {
      light: "#eff6e0",
      dark: "#eff6e0",
      main: "#aa3560",
      red: "#aa3560",
      blue: "#d70c6a",
    },
  },

  typography: {
    fontFamily: ["Oxygen Mono", "monospace"].join(","),
    h1: {
      fontSize: "50px",
      fontFamily: ["B612 Mono", "monospace"].join(","),
    },
    allVariants: {
      fontFamily: ["B612 Mono", "monospace"].join(","),
    },
  },
});
