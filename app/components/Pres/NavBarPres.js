/* eslint-disable no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/system";
import Toolbar from "./Toolbar";
import MuiAppBar from "@mui/material/AppBar";

const TransparentAppBar = styled(AppBar)(({ theme, scrolled }) => {
  const getHeight = () => (scrolled == "true" ? "65px" : "65px");

  const getBackgroundColor = () =>
    scrolled == "true" ? "transparent" : "transparent";

  const getFontSize = () => (scrolled == "true" ? "1rem" : "1.1rem");

  return {
    transition: theme?.transitions.create(["height", "background-color"], {
      duration: theme?.transitions.duration.standard,
      easing: theme?.transitions.easing.easeInOut,
    }),
    willChange: "height, background-color",
    height: getHeight(),
    backgroundColor: getBackgroundColor(),
    boxShadow: scrolled ? theme?.shadows[2] : "none",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    fontSize: getFontSize(),
  };
});

function AppAppBar({ setLanguage, language }) {
  const [scrolled, setScrolled] = useState("false");

  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n } = useTranslation();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event);
    i18n.changeLanguage(event);
    handleClose();
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled((scrollPosition > 80).toString());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <TransparentAppBar scrolled={scrolled}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <a href="/">
            <Image
              src="/logo_white1.png"
              alt="BBQ qr code ki"
              width={78}
              height={47}
              priority
            />
          </a>
        </Toolbar>
      </TransparentAppBar>
      <Toolbar />
    </div>
  );
}

function AppBar(props) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export default AppAppBar;
