import React from "react";
import Image from "next/image";
import Link from "next/link";

function loading() {
  return (
    <div className="loading-container">
      {" "}
      <Image
        src="/logo-white.png"
        alt="bb qr code ki"
        className="spinning-icon loop-spinning"
        width={70}
        height={50}
      />
      <Image
        src="/logo-white.png"
        alt="bb qr code ki"
        className="spinning-icon loop-spinning"
        width={70}
        height={50}
      />
      <Image
        src="/logo-white.png"
        alt="bb qr code ki"
        className="spinning-icon loop-spinning"
        width={70}
        height={50}
      />
    </div>
  );
}

export default loading;
