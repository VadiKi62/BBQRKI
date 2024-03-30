"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#058743",
      green: "	#00d062",
      fiolet: "#009c4a",
      red: "#004721",
    },
    secondary: {
      main: "#004d24",
      light: "#302f2b",
      beige: "#F5EDE0",
      background: "rgba(239,239,242, 0.70)",
      complement: "#004d24",
    },
    text: {
      light: "white",
      dark: "#004d24",
      main: "#e5faef",
      red: "#ffffff",
      green: "#d4197c",
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
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    h1: {
      fontSize: "45px",
      fontFamily: ["B612 Mono", "monospace"].join(","),
    },
    allVariants: {
      fontFamily: ["B612 Mono", "monospace"].join(","),
    },
  },
});
