"use client";
import React from "react";
import Spinning from "./Spinning";
import Pulsating from "./Pulsating";
import Loading from "./Loading";
import Loader from "./Loader";
import Image from "next/image";

function LoadingScreen({ rest }) {
  const { animLogo, logoSrc } = rest;

  if (animLogo) {
    return <Spinning logo={animLogo} />;
  }

  if (logoSrc) {
    return <Pulsating logo={logoSrc} />;
  }

  return <Loader restData={rest} />;
}

export default LoadingScreen;
