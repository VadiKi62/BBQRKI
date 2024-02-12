import React from "react";
import Link from "next/link";
import Image from "next/image";

function notfound() {
  return (
    <div className="loading-container">
      <h3>oops! sorry, this page wasnot found </h3>

      <Image
        src="/logo-white.png"
        alt="bb qr code ki"
        className="vibrate-1"
        width={130}
        height={100}
      />
      <Link style={{ marginTop: 10 }} href="/">
        Come back home
      </Link>
    </div>
  );
}

export default notfound;
