import React from "react";
import Spinning from "./Spinning";
import Pulsating from "./Pulsating";
import Loading from "./Loading";
import Loader from "./Loader";

function LoadingScreen({ rest }) {
  if (rest.logoSrc) {
    if (rest.name === "Gelissimo") {
      return <Pulsating logo={rest.logoSrc} />;
    } else {
      return <Spinning logo={rest.logoSrc} />;
    }
  }
  return <Loader restData={rest} />;
}

export default LoadingScreen;
