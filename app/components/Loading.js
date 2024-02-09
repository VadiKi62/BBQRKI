import React from "react";
import Image from "next/image";

function Loading() {
  const logopath = `/images/logo.png`;
  return (
    <div className="loading-container">
      {" "}
      <Image
        src={logopath}
        alt="bb qr code ki"
        className="spinning-icon vibrate-1"
        width={130}
        height={130}
      />
    </div>
  );
}

export default Loading;
