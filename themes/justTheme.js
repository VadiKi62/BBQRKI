"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#d70c6a",
      green: "	#782135",
      fiolet: "#ffffff",
      red: "#56a5a1",
    },
    secondary: {
      main: "#782135",
      light: "#ffffff",
      beige: "#d70c6a",
      background:
        "-webkit-radial-gradient(top,rgba(1, 1, 1, 0.99),  rgba(255, 255, 255, 0.7))",
      complement: "rgba(86, 165, 161, 0.7)",
    },
    text: {
      light: "white",
      dark: "#a8f2ef",
      menutitle: "#d70c6a",
      main: "	#d70c6a",
      red: "	#7bece7",
      green: "	#a53170",
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
          border: "2px solid #004721",
          "&:hover": {
            backgroundColor: "#004721",
            color: "#fff",
          },
        },
      },
    },
  },

  typography: {
    fontFamily: ["B612 Mono", "monospace"].join(","),
    h1: {
      fontSize: "45px",
      fontFamily: ["Kufam", "sans - serif"].join(","),
      fontWeight: 800,
    },
    allVariants: {
      fontFamily: ["B612 Mono", "monospace"].join(","),
    },
  },
});
