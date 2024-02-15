import React from "react";
import Spinning from "./Spinning";
import Loading from "./Loading";
import Loader from "./Loader";

function LoadingScreen({ rest }) {
  if (rest.logoSrc) return <Spinning logo={rest.logoSrc} />;
  return <Loader restdata={rest} />;
}

export default LoadingScreen;
