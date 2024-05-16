/* eslint-disable no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Stack, Toolbar, IconButton, Popover, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/system";
import MuiAppBar from "@mui/material/AppBar";
import { handleSendTech } from "@common/actionsTech";

const LanguageSwitcher = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text?.black || theme.palette.text?.light,
  display: "flex",
  alignItems: "center",
}));

const LanguagePopover = styled(Popover)(({ theme }) => ({
  width: "150px",
  fontFamily: theme.typography.fontFamily,
  marginRight: "16px",
}));

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

function AppAppBar() {
  useEffect(() => {
    handleSendTech("about");
  }, []);

  const [scrolled, setScrolled] = useState("false");

  const [languageAnchor, setLanguageAnchor] = useState(null);
  const { i18n } = useTranslation();

  const handleLanguageClose = () => {
    setLanguageAnchor(null);
  };

  const handleLanguageClick = (event) => {
    event.preventDefault();
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event);
    handleLanguageClose();
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

          <LanguageSwitcher
            // color={isGelissimo ? "secondary.dark" : "inherit"}
            onClick={handleLanguageClick}
          >
            <LanguageIcon />
          </LanguageSwitcher>
        </Toolbar>
      </TransparentAppBar>

      <LanguagePopover
        open={Boolean(languageAnchor)}
        anchorEl={languageAnchor}
        onClose={handleLanguageClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("el")}>Ελληνικά</MenuItem>
      </LanguagePopover>

      <Toolbar />
    </div>
  );
}

function AppBar(props) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export default AppAppBar;
