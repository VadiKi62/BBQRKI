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
import Toolbar from "../About/Toolbar";
import MuiAppBar from "@mui/material/AppBar";

function AppAppBar({ setLanguage, language }) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 80);
  };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Image
          src="/logo_white1.png"
          alt="BBQ qr code ki"
          width={78}
          height={47}
          priority
        />
      </Toolbar>
      <Toolbar />
    </div>
  );
}

function AppBar(props) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export default AppAppBar;
