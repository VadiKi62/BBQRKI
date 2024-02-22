import React from "react";
import { styled, keyframes } from "@mui/system";

const pulsate = keyframes`
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const AnimatedLogo = styled("img")({
  width: "100px",
  borderRadius: "50px",
  animation: `${pulsate} 1s infinite alternate`,
});

function Pulsating({ logo }) {
  return (
    <AnimatedLogo style={{ transform: `scale(0.5)` }} src={logo} alt="logo" />
  );
}

export default Pulsating;
