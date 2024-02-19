import { createTheme } from "@mui/material/styles";

const genesisTheme = {
  palette: {
    primary: {
      // main: "#004660",
      green: "#57c1bc",
      main: "#a8bac1",
      fiolet: "#a45ecd",
      red: "#a0143f",
    },
    secondary: {
      grey: "#a8bac1",
      main: "#004660",
      light: "#eff2f4",
      background: "rgba(239,239,242,0.95)",
      backgroundDark: "rgba(202, 213, 217)",
      complement: "rgba(20,160,117)",
    },
    text: {
      light: "#eff2f4",
      dark: "#004660",
      main: "#a8bac1",
      red: "#a0143f",
      // red: "#AC254F",
      // red: "#AD2240",
      // red: "#B72947",
      blue: "#32abd0",
    },
  },

  typography: {
    // fontFamily: ["Oxygen Mono", "monospace"].join(","),
    fontFamily: ["Gruppo", "sans-serif"].join(","),
    h1: {
      fontSize: "49px",
      fontWeight: 1000,
      fontFamily: ["Gruppo", "sans-serif"].join(","),
    },
    allVariants: {
      // fontFamily: [ "B612 Mono", "monospace" ].join( "," ),
      fontFamily: ["Tenor Sans", "sans-serif"].join(","),
    },
    genesis: {
      logo: ["Gruppo", "sans-serif"].join(","),
      menu: ["Gruppo", "sans-serif"].join(","),
      buttons: ["Tenor Sans", "sans-serif"].join(","),
      others: ["Gruppo", "sans-serif"].join(","),
    },
  },
};

export default genesisTheme;
