"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#293752",
      green: "#185fad",
      fiolet: "#a4cff0",
      red: "#ad185f",
    },
    secondary: {
      main: "#a4cff0",
      light: "#2171b5",
      beige: "#aec3b0",
      background:
        "-webkit-radial-gradient(bottom, rgba(165,191,208, 0.85), rgba(187,187,187, 0.95),rgba(41,55,82, 0.85))",
      background1:
        "-webkit-radial-gradient(top, rgba(165,191,208, 0.85), rgba(187,187,187, 0.95),rgba(41,55,82, 0.85))",
      complement: "#aec3b0",
    },
    text: {
      light: "#a4cff0",
      dark: "#293752",
      main: "#185fad",
      red: "#ad185f",
      blue: "#2171b5",
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
