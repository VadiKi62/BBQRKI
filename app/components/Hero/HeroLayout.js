"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import { Container, Stack, Typography } from "@mui/material";

import LoadingScreen from "@app/components/common/Loaders/LoadingScreen";
import Hero from "./Hero";
import {
  CallWaiterButton,
  CallBillButton,
  CallCustomButton,
} from "../common/CallButtons";
import { useMainContext } from "../MainContextProvider";
import ModalComponent from "../common/Modal";
import SloganRotator from "../Slogans";
import Dev from "../Dev";
import LogoGallery from "../common/LogoGallery";

const Overlay = styled("div")(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: theme.palette.secondary.background,
}));

const HeroSection = styled("section")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  // position: "relative",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
}));

const TitleContainer = styled(Container)(({ theme }) => ({
  // paddingTop: -50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  alignContent: "center",
  textAlign: "center",
  // position: "relative",
  zIndex: 99,
}));

const InfoContainer = styled(Container)(({ theme }) => ({
  // marginTop: "-10rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  alignContent: "center",
  textAlign: "center",
  // position: "relative",
  zIndex: 99,
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 450,
  // marginBottom: 5,
  // marginTop: 10,
  lineHeight: "2.2rem",
  color: theme.palette.text.dark,
  fontFamily: theme.typography.fontFamily,
  fontSize: "2.1rem",
  zIndex: 2,
  // position: "relative",
}));

const HighlightedText = styled("span")(({ theme }) => ({
  // color: theme.palette.text.red,
  fontWeight: 800,
  lineHeight: "2.4rem",
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.h1.fontSize,
  textTransform: "uppercase",
}));

const CallButtonWrapper = styled(Stack)(({ theme }) => ({
  marginTop: 5,
  zIndex: 12,
  display: "flex",
  flexDirection: "column",
  justifyItems: "flex-end",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  alignItems: "center",
}));

const CallContainer = styled("div")`
  z-index: 111;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
`;

export default function HeroLayout({ rest }) {
  const { t } = useTranslation();

  const isGenesis = rest.name === "Genesis";
  const isGelissimo = rest.name === "Gelissimo";
  const isJukebox = rest.name === "Jukebox";
  const {
    lang,
    devel,
    currentPosition,
    isSmallScreen,
    showInitialHeader,
    zont,
    loadingModal,
    modalVisible,
    modalContent,
    isWaiterButtonActive,
    isButtonBillActive,
    handleCallWaiter,
    handleCallBill,
    hideModal,
    run,
    showCallWaiterButton,
    headerRef,
    showScan,
    showInside,
    messageInside,
  } = useMainContext();

  const [isSticky, setIsSticky] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const viewportHeight = window.innerHeight * 0.75;
      if (scrollY > viewportHeight && rest.menu) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rest.menu]);
  const altName = `${rest.name} logo gif`;

  const renderHeader = () => {
    if (showLoading) {
      return <LoadingScreen rest={rest} />;
    }

    if (!showInitialHeader) {
      return (
        <InfoContainer>
          {showScan && (
            <ScanInfo
              t={t}
              isSmallScreen={isSmallScreen}
              rest={rest}
              isGenesis={isGenesis}
            />
          )}
          {showInside && (
            <InsideInfo
              isSmallScreen={isSmallScreen}
              messageInside={messageInside}
              rest={rest}
            />
          )}
          {rest.slogans.length > 0 && <SloganRotator strings={rest.slogans} />}
          {rest.slogans.length < 1 && rest.slogan && (
            <Slogan
              isSmallScreen={isSmallScreen}
              slogan={rest.slogan}
              rest={rest}
            />
          )}
          {rest.animLogo && (
            <div style={{ borderRadius: "50%", marginBottom: "-1.5rem" }}>
              <Image
                src={rest.animLogo}
                alt={altName}
                width={135}
                height={135}
              />
            </div>
          )}
        </InfoContainer>
      );
    }

    return (
      <>
        <Hero zonti={zont} name={rest.name} />
        <CallButtonWrapper
          sx={{
            mt: isSmallScreen ? 2 : 0,
            position: isSticky ? "sticky" : "fixed",
            bottom: isSticky ? "0px" : "-70px",
          }}
        >
          <CallWaiterButton
            showCallWaiterButton={true}
            isWaiterButtonActive={isWaiterButtonActive}
            handleCallWaiter={handleCallWaiter}
          />
          <CallBillButton
            showCallWaiterButton={true}
            isButtonBillActive={isButtonBillActive}
            handleCallBill={handleCallBill}
          />
        </CallButtonWrapper>
      </>
    );
  };

  return (
    <HeroSection id="hero">
      {devel && <Dev rest={rest} />}
      <Overlay />

      {!showLoading && !devel && (
        <TitleContainer
          sx={{ mt: isSmallScreen && rest.slogans.length > 0 ? -6 : -4 }}
        >
          <HeroTitle>
            {t("hero.wellcome")}
            <HighlightedText
              sx={{
                color:
                  isGenesis || isGelissimo || isJukebox
                    ? "text.main"
                    : "primary.red",
              }}
            >
              {" "}
              {rest?.name}
            </HighlightedText>
          </HeroTitle>
        </TitleContainer>
      )}

      <CallContainer>{renderHeader()}</CallContainer>

      {modalVisible && (
        <ModalComponent
          loading={loadingModal}
          content={modalContent}
          onClose={hideModal}
          run={run}
        />
      )}
    </HeroSection>
  );
}

const ScanInfo = ({ t, isSmallScreen, rest, isGenesis }) => {
  const responsiveStyles = () => {
    let returnValues = { mb: 0, mt: -4 };
    if (isSmallScreen && rest.slogans.length > 0) returnValues.mb = 3;
    returnValues.mt = -2;

    if (isSmallScreen) returnValues.mb = 15;
    returnValues.mt = -6;

    return returnValues;
  };
  return (
    <TitleContainer
      sx={{
        mb: responsiveStyles().mb,
        mt: responsiveStyles().mt,
      }}
    >
      <>
        <Typography
          align="center"
          color="primary.main"
          sx={{
            fontSize: isSmallScreen ? "1.2rem" : "2rem",
            fontWeight: 900,
            lineHeight: isSmallScreen ? "1.2rem" : "2rem",
            zIndex: 111,
          }}
        >
          {t("hero.want")}
        </Typography>
        <Typography
          color="text.dark"
          align="center"
          sx={{
            fontSize: isSmallScreen ? "1.3rem" : "2.2rem",
            lineHeight: isSmallScreen ? "1.3rem" : "2.3rem",
            zIndex: 111,
          }}
        >
          {t("hero.scan")}
        </Typography>
      </>
    </TitleContainer>
  );
};

const InsideInfo = ({ isSmallScreen, messageInside, rest }) => {
  return (
    <TitleContainer
      sx={{
        mb: isSmallScreen && rest.slogans.length > 0 ? 3 : 15,
        mt: isSmallScreen && rest.slogans.length > 0 ? -4 : -6,
      }}
    >
      <Typography
        color="text.dark"
        align="center"
        sx={{
          fontSize: isSmallScreen ? "1.3rem" : "1.6rem",
          lineHeight: isSmallScreen ? "1.3rem" : "1.6rem",
          zIndex: 111,
        }}
      >
        {messageInside}
      </Typography>
    </TitleContainer>
  );
};

const Slogan = ({ isSmallScreen, slogan, rest }) => {
  return (
    <TitleContainer
      sx={{
        mb: isSmallScreen && rest.slogans.length > 0 ? 3 : 2,
        mt: isSmallScreen && rest.slogans.length > 0 ? -4 : -10,
      }}
    >
      <Typography
        color="text.dark"
        align="center"
        sx={{
          fontSize: isSmallScreen ? "1.3rem" : "1.6rem",
          lineHeight: isSmallScreen ? "1.3rem" : "1.6rem",
          zIndex: 111,
        }}
      >
        {slogan}
      </Typography>
    </TitleContainer>
  );
};
