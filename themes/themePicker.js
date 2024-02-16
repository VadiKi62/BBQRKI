import { createTheme } from "@mui/material/styles";
import genesisTheme from "@themes/genesisTheme";
import corleoneTheme from "@themes/corleoneTheme";
import jukeboxTheme from "@themes/jukeboxTheme";
import gelissimoTheme from "@themes/gelissimoTheme";
import argoTheme from "@themes/argoTheme";
import belvedereTheme from "@themes/belvedereTheme";

export const returnTheme = (themeName) => {
  if (themeName === "themeBelvedere") return createTheme(belvedereTheme);
  if (themeName === "themeGenesis") return createTheme(genesisTheme);
  if (themeName === "corleoneTheme") return createTheme(corleoneTheme);
  if (themeName === "jukeboxTheme") return createTheme(jukeboxTheme);
  if (themeName === "gelissimoTheme") return createTheme(gelissimoTheme);
  return createTheme(argoTheme);
};
