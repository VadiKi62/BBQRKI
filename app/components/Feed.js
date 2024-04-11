"use client";
import React from "react";
import "@styles/preloader.css";
import { ThemeProvider } from "@mui/material/styles";
import { MainContextProvider } from "./MainContextProvider";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import ScrollButton from "./common/ScrollButton";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { returnTheme } from "@themes/themePicker";

function Feed({ children, ...props }) {
  const { rest, menu, wifiData } = props;

  const theme = returnTheme(rest.themeName);
  const searchParams = useSearchParams();

  const r = searchParams.get("r") || rest?.radiuses?.mainSpot;
  // const r = searchParams.get("r") || 11111111;

  let umbrella = searchParams.get("zont") || null;
  const dev = searchParams.get("dev") || null;
  const menuOnly = searchParams.get("menuOnly") || null;

  if (dev && !umbrella) {
    umbrella = "test";
  }

  return (
    <ThemeProvider theme={theme}>
      <Suspense>
        <MainContextProvider
          rest={rest}
          umbrella={umbrella}
          r={r}
          dev={dev}
          menuOnly={menuOnly}
        >
          <Navbar rest={rest} />
          <MainContent rest={rest} menuData={menu} />
          {children}
          <Footer rest={rest} />
          <ScrollButton />
        </MainContextProvider>
      </Suspense>
    </ThemeProvider>
  );
}

export default Feed;
