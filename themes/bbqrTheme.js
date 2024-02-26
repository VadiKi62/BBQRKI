"use client";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "rgba(40, 150, 187)",
      green: "rgba(226, 181, 67)",
      fiolet: "rgba(17, 22, 39)",
      red: "rgba(226, 181, 67)",
    },
    secondary: {
      main: "rgba(226, 181, 67)",
      dark: "rgba(17, 22, 39)",
      light: "rgba(226, 181, 67, 0.9)",
      beige: "rgba(217,233,230)",
      background: "rgba(17, 22, 39, 0.4)",
    },
    text: {
      light: "#ffffff",
      dark: "rgba(17, 22, 39)",
      main: "rgba(40, 150, 187)",
      red: "#ffffff",
      green: "rgba(154 210 203)",
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
      fontSize: "45px",
      fontFamily: ["Hind Siliguri", "sans-serif"].join(","),
    },
    allVariants: {
      fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    },
  },
});
