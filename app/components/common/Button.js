import React, { useEffect, useState } from "react";
import MuiButton from "@mui/material/Button";

export default function Button({
  label,
  onClick,
  bottom,
  isSticky = false,
  visibility = true,
  disabled = false,
  blinking = false,
}) {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    let intervalId;
    if (!disabled && blinking) {
      intervalId = setInterval(() => {
        setIsBlinking((prevIsBlinking) => !prevIsBlinking);
      }, 500);
    } else {
      setIsBlinking(true);
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [disabled, blinking]);

  return (
    visibility && (
      <MuiButton
        variant="contained"
        size="large"
        sx={{
          p: 2,
          marginTop: "0.5rem",
          fontSize: "1.25rem",
          lineHeight: "1.4rem",
          fontWeight: 500,
          // position: isSticky ? "sticky" : "fixed",
          // bottom: bottom,
          borderRadius: "15px",
          border: "0px solid white",
          marginBottom: 0.5,
          // maxWidth: "200px",
          minWidth: "45vh",
          maxWidth: "100vh",
          zIndex: 41001,
          color: "white",
          bgcolor: disabled
            ? "primary.green"
            : blinking && isBlinking
            ? "primary.red"
            : "primary.main",
          // opacity: disabled ? 0.7 : 1,
        }}
        fullWidth
        onClick={onClick}
      >
        {label}
      </MuiButton>
    )
  );
}
