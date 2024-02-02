import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#000080",
      green: "	#00cc00",
      fiolet: "#0066cc",
      red: "	#cc0000",
    },
    secondary: {
      main: "#000026",
      light: "#0000cc",
      background: "rgba(239,239,242, 0.85)",
      beige: "#f5f5f5",
      white: "#FFFFFF",
      grey: "#f0f0f0",
      complement: "#ffd700",
      neutral: "#808080",
      neube: "#f5f5dc",
    },
    text: {
      light: "white",
      dark: "#000080",
      main: "#0000CC",
      red: "	#cc0000",
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
          color: "#000080",
          // border: (theme) => theme.palette.primary.red,
          "&:hover": {
            backgroundColor: "#000080",
            color: "white",
          },
        },
      },
    },
  },

  typography: {
    fontFamily: ["Arima", "serif"].join(","),
    h1: {
      fontSize: "50px",
      fontFamily: ["Arima", "serif"].join(","),
    },
    allVariants: {
      fontFamily: ["Fira Mono", "monospace"].join(","),
    },
  },
});
