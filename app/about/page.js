"use client";
import React from "react";
//= Page components
import Loader from "@app/components/common/Loaders/Loader";
// import Navbar from "@app/components/Common/Navbar";
import Header from "@app/components/Pres/Header";
import ShowcaseCircleSide from "@app/components/Pres/ShowcaseCircleSide";

import ShowCase from "@app/components/Pres/ShowCase";
import Navbar from "@app/components/Pres/NavBarPres";
import Screenshots from "@app/components/Pres/Screenshots";

import Services from "@app/components/Pres/Services";

import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import CallToAction from "@app/components/Pres/CallToAction";
import Footer from "@app/components/Pres/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import bbqrTheme from "@themes/bbqrTheme";

export default function HomeAbout() {
  unstable_noStore();
  const theme = createTheme(bbqrTheme);
  return (
    <Suspense>
      <ThemeProvider theme={theme}>
        {/* <Loader /> */}
        <Navbar />
        {/* <SliderHeader /> */}
        <div className="main-content">
          <Header />
          <ShowCase />
          <Services />
          <Screenshots />
          {/* <ShowcaseGrid /> */}
          <ShowcaseCircleSide />

          {/* <AboutUs /> */}
          {/* <Works />

      <MinimalArea2 />
      <FullTestimonials classText="pb-0" />
      <Team />
      <Blogs /> */}
          <CallToAction />
          <Footer />
        </div>
      </ThemeProvider>
    </Suspense>
  );
}
