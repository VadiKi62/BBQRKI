"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#525042",
      green: "	#cccbc4",
      fiolet: "#d4ccc9",
      red: "#000",
    },
    secondary: {
      main: "#9c9b94",
      light: "#b2b1a9",
      beige: "rgba(255,251,247,1)",
      background: "rgba(255,251,247, 0.70)",
      complement: "#a49c94",
    },
    text: {
      light: "#fbfbf3",
      dark: "#5a594b",
      main: "#fbfbf3",
      red: "#fbfbf3",
      green: "#a49c94",
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
    fontFamily: [" Belleza", "sans-serif"].join(","),
    h1: {
      fontSize: "45px",
      fontFamily: [" Belleza", "sans-serif"].join(","),
    },
    allVariants: {
      fontFamily: ["Syncopate", "sans-serif"].join(","),
    },
  },
});
