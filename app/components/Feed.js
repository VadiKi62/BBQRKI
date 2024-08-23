"use client";
import React, { useEffect, memo } from "react";
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
import { handleSendTech, handleSendBloom } from "@common/actionsTech";

function Feed({ children, ...props }) {
  const { rest, menu } = props;

  useEffect(() => {
    handleSendTech(`restauranst/${rest.name}`);
    if (rest.name == "Bloom") {
      handleSendBloom();
    }
  }, [rest.name]);

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
          <ScrollButton menuOnly={menuOnly} />
        </MainContextProvider>
      </Suspense>
    </ThemeProvider>
  );
}

export default Feed;
