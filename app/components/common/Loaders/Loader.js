"use client";
import { useEffect } from "react";
import loadingPace from "@common/loadingPace";

function LoadingScreen({ restData }) {
  useEffect(() => {
    setTimeout(() => {
      if (typeof Pace !== "undefined") loadingPace();
    }, 1500);
  });

  function toTurnstringintoSpansOfEachLetter(string) {
    return string
      .split("")
      .map((char, index) => <span key={index}>{char}</span>);
  }
  return (
    <div className="hideX">
      <div className="loading">
        {restData
          ? toTurnstringintoSpansOfEachLetter(restData?.name)
          : toTurnstringintoSpansOfEachLetter("loading")}
      </div>
      <div id="preloader"></div>
    </div>
  );
}

export default LoadingScreen;
