import React, { useState, useEffect } from "react";
import { Typography, Container } from "@mui/material";
import GradientTypography from "./common/GradientTypography";

const SloganRotator = ({ strings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
    }, 1 * 60 * 100);

    return () => clearInterval(intervalId);
  }, [strings]);

  return (
    <Container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        zIndex: 1000,
      }}
     className="fade-in"
    >
      <GradientTypography text={strings[currentIndex]} />
    </Container>
  );
};

export default SloganRotator;
