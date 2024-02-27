"use client";
import React from "react";
import { styled, keyframes } from "@mui/system";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const AnimatedLogo = styled("img")({
  width: "100px",
  borderRadius: "50px",
  animation: `${spin} 3s infinite linear`,
  transition: "opacity 1s ease-in-out",
});

const LoadingSpinnerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "transparent",
});

function LoadingSpinner({ logo }) {
  return (
    <LoadingSpinnerContainer>
      <AnimatedLogo
        style={{
          zIndex: 999,
          borderRadius: "50%",
        }}
        src={logo}
        alt="logo"
      />
    </LoadingSpinnerContainer>
  );
}

export default LoadingSpinner;
