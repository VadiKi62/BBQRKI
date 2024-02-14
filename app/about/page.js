"use client";
import React from "react";
//= Page components
import Loading from "@app/components/common/Loader";
// import Navbar from "@app/components/Common/Navbar";
import Header from "@app/components/Pres/Header";
import Navbar from "@app/components/Pres/NavBarPres";
import SliderHeader from "@app/components/Pres/SliderHeader";
import AboutUs from "@app/components/Pres/AboutUs";
// import Works from "@app/components/Works/Works3";
// import Services from "@app/components/Services/Services3";
// import MinimalArea2 from "@app/components/Others/MinimalArea2";
// import FullTestimonials from "@app/components/Testimonials/FullTestimonials";
// import Team from "@app/components/Team/Team1";
// import Blogs from "@app/components/Blogs/Blogs4";
import CallToAction from "@app/components/Pres/CallToAction";
import Footer from "@app/components/Pres/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import bbqrTheme from "@themes/bbqrTheme";

export default function Home() {
  const theme = createTheme(bbqrTheme);
  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <Navbar />
      <SliderHeader />
      <div className="main-content">
        {/* <AboutUs /> */}
        {/* <Works />
      <Services />
      <MinimalArea2 />
      <FullTestimonials classText="pb-0" />
      <Team />
      <Blogs /> */}
        <CallToAction />
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}
