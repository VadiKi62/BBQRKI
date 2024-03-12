"use client";
import React from "react";
import Spinning from "./Spinning";
import Pulsating from "./Pulsating";
import Loading from "./Loading";
import Loader from "./Loader";
import Image from "next/image";

function LoadingScreen({ rest }) {
  const { name, animLogo, logoSrc } = rest;

  if (["Jukebox", "Genesis"].includes(name)) {
    return (
      <div style={{ borderRadius: "50%" }}>
        <Image src={animLogo} alt={`${name}`} width={150} height={150} />
      </div>
    );
  }

  if (animLogo) {
    return <Spinning logo={animLogo} />;
  }

  if (logoSrc || ["Gelissimo"].includes(name)) {
    return <Pulsating logo={logoSrc} />;
  }

  return <Loader restData={rest} />;
}

export default LoadingScreen;
