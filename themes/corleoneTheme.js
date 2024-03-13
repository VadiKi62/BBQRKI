"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#0598ce",
      green: "#113768",
      fiolet: "#113768",
      red: "#001a33",
    },
    secondary: {
      main: "#555555",
      light: "#b4e0f0",
      beige: "rgba(85,85,85)",
      background: "rgba(85,85,85, 0.60)",
    },
    text: {
      light: "white",
      dark: "white",
      main: "#113768",
      red: "#ffffff",
      green: "#555555",
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
    fontFamily: ["IBM Plex Serif", "serif"].join(","),
    h1: {
      fontSize: "45px",
      fontFamily: ["Playfair Display", "serif"].join(","),
    },
    allVariants: {
      fontFamily: ["IBM Plex Serif", "serif"].join(","),
    },
  },
});
