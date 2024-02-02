"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#cda45e",
      green: "#5ecda4",
      fiolet: "#a45ecd",
      red: "#aa3560",
    },
    secondary: {
      main: "#1a1814",
      light: "#302f2b",
      beige: "#F5EDE0",
      background: "rgba(239,239,242, 0.70)",
    },
    text: {
      light: "white",
      dark: "#1a1814",
      main: "#cda45e",
      red: "#aa3560",
      green: "#aee6d1",
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
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    h1: {
      fontSize: "65px",
      fontFamily: ["Mrs Saint Delafield", "cursive"].join(","),
    },
    allVariants: {
      fontFamily: ["B612 Mono", "monospace"].join(","),
    },
  },
});
