"use client";
import React from "react";
import "@styles/preloader.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import genesisTheme from "@themes/genesisTheme";
import corleoneTheme from "@themes/corleoneTheme";
import jukeboxTheme from "@themes/jukeboxTheme";
import gelissimoTheme from "@themes/gelissimoTheme";
import argoTheme from "@themes/argoTheme";
import belvedereTheme from "@themes/belvedereTheme";
import { MainContextProvider } from "./Context";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import ScrollButton from "./common/ScrollButton";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const returnTheme = (themeName) => {
  if (themeName === "themeBelvedere") return createTheme(belvedereTheme);
  if (themeName === "themeGenesis") return createTheme(genesisTheme);
  if (themeName === "corleoneTheme") return createTheme(corleoneTheme);
  if (themeName === "jukeboxTheme") return createTheme(jukeboxTheme);
  if (themeName === "gelissimoTheme") return createTheme(gelissimoTheme);
  return createTheme(argoTheme);
};

function Feed({ children, ...props }) {
  const rest = props.rest;

  const theme = returnTheme(rest.themeName);
  const searchParams = useSearchParams();
  const umbrella = searchParams.get("zont") || "test";
  const r = searchParams.get("r");

  return (
    <ThemeProvider theme={theme}>
      <Suspense>
        <MainContextProvider rest={rest} umbrella={umbrella} r={r}>
          <Navbar rest={rest} />
          <MainContent rest={rest} />
          {children} <Footer rest={rest} />
          <ScrollButton />
        </MainContextProvider>
      </Suspense>
    </ThemeProvider>
  );
}

export default Feed;
