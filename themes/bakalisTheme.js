"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "rgba(1, 31, 75, 1)",
      green: "	#6497b1",
      fiolet: "#005b96",
      red: "#6497b1",
    },
    secondary: {
      main: "rgba(1, 31, 75, 1)",
      light: "#Fde989",
      beige: "#e6eaee",
      background: "#002a54",
      background:
        "linear-gradient(36deg, rgba(1,31,75,0.7), rgba(3,57,108,0.7))",
      background1:
        "linear-gradient(136deg, rgba(1,31,75,0.7),  rgba(3,57,108,0.7))",
    },
    text: {
      light: "white",
      dark: "white",
      red: "white",
      main: "	#b3cde0",
      green: "#b3cde0",
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
    fontFamily: ["B612 Mono", "monospace"].join(","),
    h1: {
      fontSize: "40px",
      fontFamily: ["B612 Mono", "monospace"].join(","),
    },
    allVariants: {
      fontFamily: ["B612 Mono", "monospace"].join(","),
    },
  },
});
