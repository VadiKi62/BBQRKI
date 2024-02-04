"use client";
import Image from "next/image";
import React from "react";

function error() {
  return (
    <div className="loading-container">
      <h3>Ooops! error...</h3>{" "}
      <Image
        src="/logo-white.png"
        alt="bb qr code ki"
        className="vibrate-1"
        width={130}
        height={130}
      />
    </div>
  );
}

export default error;
