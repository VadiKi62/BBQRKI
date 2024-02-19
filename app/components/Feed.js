"use client";
import React from "react";
import "@styles/preloader.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MainContextProvider } from "./Context";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import ScrollButton from "./common/ScrollButton";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { returnTheme } from "@themes/themePicker";

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
