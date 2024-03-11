"use client";
import React from "react";
import Spinning from "./Spinning";
import Pulsating from "./Pulsating";
import Loading from "./Loading";
import Loader from "./Loader";

function LoadingScreen({ rest }) {
  const { name, animLogo, logoSrc } = rest;

  if (name === "Jukebox") {
    return <Pulsating logo={animLogo} />;
  }

  if (animLogo) {
    return <Spinning logo={animLogo} />;
  }

  if (logoSrc || ["Gelissimo", "Genesis"].includes(name)) {
    return <Pulsating logo={logoSrc} />;
  }

  return <Loader restData={rest} />;
}

export default LoadingScreen;
