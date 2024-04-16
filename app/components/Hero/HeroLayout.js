"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";
import { Container, Stack, Typography } from "@mui/material";
import { unstable_noStore } from "next/cache";

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

import MenuButton from "./MenuButton";
import ModalPayment from "@app/components/common/ModalPayment";

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
  position: "relative",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-evenly",
}));

const TitleContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  zIndex: 99,
}));

const InfoContainer = styled(TitleContainer)({});

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 450,
  lineHeight: "2.2rem",
  color: theme.palette.text.dark,
  fontFamily: theme.typography.fontFamily,
  fontSize: "2.1rem",
  zIndex: 2,
}));

const HighlightedText = styled("span")(({ theme }) => ({
  fontWeight: 800,
  lineHeight: "2.5rem",
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.h1.fontSize,
  textTransform: "uppercase",
}));

const CallButtonWrapper = styled(Stack)(({ theme }) => ({
  marginTop: 5,
  zIndex: 12,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export default function HeroLayout({ rest }) {
  const { t } = useTranslation();

  let isOnlyMenu = false;
  if (!rest.app.buttonWaiter && !rest.app.buttonBill) isOnlyMenu = true;

  const isGenesis = rest.name === "Genesis";
  const isGelissimo = rest.name === "Gelissimo";
  const isJukebox = rest.name === "Jukebox";
  const {
    devel,
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
    handleCallShisha,
    hideModal,
    run,
    showScan,
    showInside,
    messageInside,
    menuOnly,
    isPaymentModalOpen,
    setPaymentModalOpen,
    onPaymentMethodSelect,
  } = useMainContext();

  const [isSticky, setIsSticky] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  // const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePaymentMethodSelect = (method) => {
    onPaymentMethodSelect(method);
    setPaymentModalOpen(false);
  };

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

  useEffect(() => {
    if (menuOnly || isOnlyMenu) {
      scroller.scrollTo("menu", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }
  });

  const renderHeader = () => {
    if (showLoading) {
      return <LoadingScreen rest={rest} />;
    }

    if (isOnlyMenu || menuOnly) return <MenuButton />;

    if (!showInitialHeader) {
      return (
        <InfoContainer>
          {showScan && (
            <ScanInfo
              t={t}
              isSmallScreen={isSmallScreen}
              rest={rest}
              isJukebox={isJukebox}
            />
          )}
          {showInside && (
            <InsideInfo
              isSmallScreen={isSmallScreen}
              messageInside={messageInside}
              rest={rest}
            />
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
          {rest.app?.buttonSisha && (
            <CallCustomButton
              showButton={true}
              onClick={() => handleCallWaiter(true)}
              label="Call Shisha"
            />
          )}
        </CallButtonWrapper>
      </>
    );
  };

  return (
    <HeroSection
      id="hero"
      sx={{ justifyContent: devel ? "space-around" : "space-evenly" }}
    >
      <Overlay />

      {isPaymentModalOpen && (
        <ModalPayment
          content={t("bill.payment")}
          onClose={() => setPaymentModalOpen(false)}
          loading={false}
          run={false}
          onPaymentMethodSelect={handlePaymentMethodSelect}
        />
      )}

      {!showLoading && !devel && (
        <TitleContainer
        // sx={{ mt: isSmallScreen && rest.slogans.length > 0 ? -5 : -4 }}
        >
          <HeroTitle>
            {t("hero.wellcome")}
            <HighlightedText
              sx={{
                color:
                  isGenesis || isGelissimo || isJukebox
                    ? "text.main"
                    : "text.red",
              }}
            >
              {" "}
              {rest?.name}
            </HighlightedText>
          </HeroTitle>
        </TitleContainer>
      )}

      <InfoContainer>{renderHeader()}</InfoContainer>

      {!showLoading && !devel && (
        <InfoContainer>
          {rest.slogans.length > 0 && <SloganRotator strings={rest.slogans} />}
          {rest.slogans.length < 1 && rest.slogan && !isSmallScreen && (
            <Slogan
              isSmallScreen={isSmallScreen}
              slogan={rest.slogan}
              rest={rest}
            />
          )}
          {rest.animLogo && !isSmallScreen && (
            <div
              style={{
                borderRadius: "50%",
                marginBottom: "-1.5rem",
                marginTop: "1rem",
              }}
            >
              <Image
                src={rest.animLogo}
                alt={altName}
                width={isSmallScreen ? 100 : 175}
                height={isSmallScreen ? 100 : 175}
              />
            </div>
          )}
        </InfoContainer>
      )}

      {devel && <Dev rest={rest} />}

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

const ScanInfo = ({ t, isSmallScreen, rest, isJukebox }) => {
  return (
    <TitleContainer>
      <Typography
        align="center"
        color="primary.main"
        sx={{
          fontSize: isSmallScreen ? "1.4rem" : "2.5rem",
          fontWeight: 900,
          lineHeight: isSmallScreen ? "1.4rem" : "2.5rem",
          zIndex: 111,
        }}
      >
        {t("hero.want")}
      </Typography>
      <Typography
        color="text.dark"
        align="center"
        sx={{
          fontSize: isSmallScreen ? "1.1rem" : "2.2rem",
          lineHeight: isSmallScreen ? "1.2rem" : "2.3rem",
          zIndex: 111,
        }}
      >
        {t("hero.scan")}
      </Typography>
    </TitleContainer>
  );
};

const InsideInfo = ({ isSmallScreen, messageInside, rest }) => {
  return (
    <TitleContainer>
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
    <TitleContainer>
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
