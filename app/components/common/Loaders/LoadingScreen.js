"use client";
import React from "react";
import Spinning from "./Spinning";
import Pulsating from "./Pulsating";
import Loading from "./Loading";
import Loader from "./Loader";

function LoadingScreen({ rest }) {
  if (rest.logoSrc || rest.name === "Gelissimo" || rest.name === "Genesis") {
    return <Pulsating logo={rest.logoSrc} />;
  }
  if (rest.animLogo) {
    return <Spinning logo={rest.animLogo} />;
  }

  return <Loader restData={rest} />;
}

export default LoadingScreen;
