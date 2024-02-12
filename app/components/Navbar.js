"use client";
import { useState, useRef, useEffect } from "react";
import { styled } from "@mui/system";
import { useMainContext } from "@app/components/Context";
import {
  AppBar,
  Button,
  Typography,
  Stack,
  Toolbar,
  Container,
  IconButton,
  Popover,
  MenuItem,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderStyling = styled(AppBar)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  fontFamily: theme.typography.h1.fontFamily,
  zIndex: 996,
  position: "sticky",
  top: 0,
  minWidth: "100%",
  minHeight: "100%",
}));

const Logo = styled(Typography)(({ theme }) => ({
  marginBottom: "-5px",
  marginTop: "-4px",
  marginLeft: "-16px",
  // fontWeight: 1000,
  display: "flex",
  fontFamily: theme.typography.h1.fontFamily,
  color: theme.palette.text.red,
}));

const LogoImg = styled(Image)(({ theme }) => ({
  marginBottom: "-5px",
  marginTop: "-4px",
  marginLeft: "-16px",
  display: "flex",
}));

const AboutButton = styled(ScrollLink)(({ theme, lang }) => ({
  fontSize: lang === "en" ? "17px" : "13px",
  padding: 0,
  color: theme.palette.text.light,
  fontFamily: theme.typography.allVariants.fontFamily,
  fontWeight: 700,
  cursor: "pointer",
  display: "flex",
  "&:hover": {
    fontSize: "22px",
    fontWeight: 900,
  },
}));

const LanguageSwitcher = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.light,
  display: "flex",
  alignItems: "center",
}));

const LanguagePopover = styled(Popover)(({ theme }) => ({
  width: "150px",
  fontFamily: theme.typography.fontFamily,
}));

export default function Header() {
  const headerRef = useRef();
  const { setLang, restData, isSmallScreen } = useMainContext();
  const [languageAnchor, setLanguageAnchor] = useState(null);
  const { i18n, t } = useTranslation();
  const isJukebox = restData.name === "Jukebox";
  // const distanceToRest = Math.round(currentPosition?.distanceToRest);
  // const { accuracy } = currentPosition;

  const appMenu = false;
  const lang = i18n.language;
  //   const router = useRouter();

  const handleLanguageClick = (event) => {
    event.preventDefault();
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchor(null);
  };

  const handleLanguageSelect = (selectedLanguage) => {
    setLang(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    handleLanguageClose();
  };

  const scrollToTopFunc = () => {
    scroll.scrollToTop({
      smooth: true,
    });
  };

  return (
    <HeaderStyling
      ref={headerRef}
      sx={{ backgroundColor: isJukebox ? "secondary.dark" : "primary.main" }}
    >
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            {restData.logoSrc ? (
              <LogoImg
                src={restData.logoSrc}
                width={167}
                height={56}
                alt={`${restData.name} logo`}
                priority
              ></LogoImg>
            ) : (
              <Logo
                fontSize={isSmallScreen ? "h1.fontSize" : 65}
                component="h1"
              >
                {restData?.name}
              </Logo>
            )}
            <Stack direction="row" spacing={2} alignItems="center">
              {appMenu && (
                <AboutButton
                  lang={lang}
                  to="menu"
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-headerRef?.current?.offsetTop}
                  // onClick={(e) => {
                  //   router.push("/");
                  // }}
                >
                  {t("menu.Menu")}
                </AboutButton>
              )}
              <LanguageSwitcher color="inherit" onClick={handleLanguageClick}>
                <LanguageIcon />
              </LanguageSwitcher>
            </Stack>
          </Stack>
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
            <MenuItem onClick={() => handleLanguageSelect("en")}>
              English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("el")}>
              Ελληνικά
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("ru")}>
              Русский
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("de")}>
              {" "}
              Deutsch
            </MenuItem>
          </LanguagePopover>
        </Toolbar>
      </Container>
    </HeaderStyling>
  );
}
