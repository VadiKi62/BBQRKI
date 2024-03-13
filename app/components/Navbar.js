"use client";
import { useState, useRef, useEffect } from "react";
import { styled } from "@mui/system";
import { useMainContext } from "@app/components/MainContextProvider";
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
import { useTheme } from "@mui/material/styles";

const AppStyling = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: theme.typography.h1.fontFamily,
  zIndex: 996,
  position: "sticky",
  top: 0,
  minWidth: "100%",
}));

const Logo = styled(Typography)(({ theme }) => ({
  // marginBottom: "-5px",
  // marginTop: "-4px",

  marginLeft: "16px",
  lineHeight: "1.2rem",
  fontWeight: theme.typography.h1?.fontWeight || 400,
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
  color: theme.palette.text?.black || theme.palette.text?.light,
  display: "flex",
  alignItems: "center",
}));

const LanguagePopover = styled(Popover)(({ theme }) => ({
  width: "150px",
  fontFamily: theme.typography.fontFamily,
  marginRight: "16px",
}));

export default function App() {
  const headerRef = useRef(0);
  const { setLang, restData, isSmallScreen, setHeaderRef } = useMainContext();
  const [languageAnchor, setLanguageAnchor] = useState(null);
  const { i18n, t } = useTranslation();
  const isJukebox = restData.name === "Jukebox";
  const isGelissimo = restData.name === "Gelissimo";
  const isBelvedere = restData.name === "Belvedere";
  let width, h;
  const theme = useTheme();

  switch (restData.name) {
    case "Jukebox":
      width = 210;
      h = 75;
      break;
    case "Belvedere":
      width = 210;
      h = 55;
      break;
    case "Gelissimo":
      width = 90;
      h = 55;
      break;
    default: // Default values for other restaurants
      width = h = 90;
  }

  function determineBackgroundColor() {
    if (isJukebox) {
      return "black";
    } else if (isGelissimo) {
      return theme.palette.secondary.dark;
    }

    return theme.palette.primary.main;
  }

  const appMenu = Boolean(restData.menu);
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

  const [scrolled, setScrolled] = useState("false");

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
    <AppStyling
      ref={headerRef}
      style={{
        backgroundColor: determineBackgroundColor(),
        height: scrolled === "true" && appMenu ? "55px" : "57px",
      }}
    >
      <Container>
        {/* <Toolbar> */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          {restData.logoSrc && restData.name !== "Genesis" ? (
            <LogoImg
              src={restData.logoSrc}
              width={width}
              height={h}
              alt={`${restData.name} logo`}
              priority
            ></LogoImg>
          ) : (
            <Logo fontSize={scrolled ? "3rem" : "3.5rem"}>
              {restData?.name}
            </Logo>
          )}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* {appMenu && (
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
              )} */}
            <LanguageSwitcher
              // color={isGelissimo ? "secondary.dark" : "inherit"}
              onClick={handleLanguageClick}
            >
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
        {/* </Toolbar> */}
      </Container>
    </AppStyling>
  );
}
