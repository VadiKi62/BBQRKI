"use client";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import genesisTheme from "@themes/genesisTheme";
import arazoTheme from "@themes/arazoTheme";
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
  console.log("1!!!", themeName);
  if (themeName === "themeBelvedere") return createTheme(belvedereTheme);
  if (themeName === "themeGenesis") return createTheme(genesisTheme);
  return createTheme(argoTheme);
};

function Feed({ children, ...props }) {
  console.log(props);
  const rest = props.rest;

  console.log("1!!!", rest.themeName);

  const theme = returnTheme(rest.themeName);
  const searchParams = useSearchParams();
  const umbrella = searchParams.get("zont") || 7;
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
