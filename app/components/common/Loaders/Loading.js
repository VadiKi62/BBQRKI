"use client";
import React from "react";
import Image from "next/image";
import Container from "@mui/material/Container";

function Loading({ restData }) {
  console.log("restData", restData);
  const logopath = restData.logoSrc
    ? `${restData.logoSrc}`
    : `/assets/images/logo.png`;
  return (
    <Container className="loading-container" sx={{ zIndex: 1000 }}>
      <Image
        src={logopath}
        alt="bb qr code ki"
        className="tracking-in-contract"
        width={70}
        height={50}
      />
    </Container>
  );
}

export default Loading;
