"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#002a54",
      green: "#7b8c71",
      fiolet: "#540054",
      red: " #f7ad46",
    },
    secondary: {
      main: "#041c34",
      light: "#Fde989",
      beige: "#e6eaee",
      background:
        "linear-gradient(to bottom, rgba(42,84,255,0.4),  rgba(253, 233, 137,0.3),#d8dee0)",
      background1:
        "linear-gradient(to top, rgba(42,84,255,0.4),  rgba(253, 233, 137,0.3),#d8dee0)",
    },
    text: {
      light: "white",
      dark: "#002a54",
      red: "#f7ad46",
      main: "#Fde989",
      green: "#b3bfcc",
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
      fontSize: "40px",
      fontFamily: ["B612 Mono", "monospace"].join(","),
    },
    allVariants: {
      fontFamily: ["B612 Mono", "monospace"].join(","),
    },
  },
});
