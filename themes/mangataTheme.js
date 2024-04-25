"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#221111",
      green: "	#ffe894",
      fiolet: "#a4cff0",
      red: "	#CCB09A",
    },
    secondary: {
      main: "#232220",
      light: "	#dfd7cf",
      beige: "#D1BDA5",
      background:
        "-webkit-radial-gradient(bottom, rgba(34,51,59, 0.85), rgba(34,51,59, 0.95),rgba(255,232,148, 0.9))",
      background1:
        "-webkit-radial-gradient(top, rgba(34,51,59, 0.85), rgba(34,51,59, 0.95),rgba(255,232,148,0.9))",
      complement: "#22333b",
    },
    text: {
      light: "#CCB09A",
      dark: "#dfd7cf",
      main: "#ffe894",
      red: "#CCB09A",
      blue: "#5e503f",
    },
  },

  typography: {
    fontFamily: ["Darker Grotesque", "sans-serif"].join(","),
    h1: {
      fontSize: "50px",
      fontFamily: ["Darker Grotesque", "sans-serif"].join(","),
    },
    allVariants: {
      fontFamily: ["Darker Grotesque", "sans-serif"].join(","),
    },
  },
});
