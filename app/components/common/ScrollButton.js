import React from "react";
import { styled } from "@mui/material/styles";
import { Fab } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link, animateScroll as scroll } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";

const ScrollTop = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(1),
  right: theme.spacing(1),
}));

export default function ScrollButton({ onClick, menuOnly }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const handleScroll = () => {
    if (menuOnly) {
      // If an onClick callback is provided, call it
      scroll.scrollTo("menu", {
        smooth: "easeInOutQuart",
        offset: -50,
      });
    } else {
      // If no onClick callback is provided, scroll to the top
      scroll.scrollToTop({
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <ScrollTop
        onClick={handleScroll}
        color="primary"
        size="large"
        aria-label="scroll button"
      >
        <KeyboardArrowUpIcon />
      </ScrollTop>
    </Zoom>
  );
}
