import React, { useState, useEffect } from "react";
import Image from "next/image";
import { styled } from "@mui/system";
import { Container, Stack } from "@mui/material";
import Typography from "../common/Typography";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import LoadingScreen from "@app/components/common/Loaders/LoadingScreen";
import Hero from "./Hero";
import { CallWaiterButton, CallBillButton } from "../common/CallButtons";
import { useMainContext } from "../MainContextProvider";
import ModalComponent from "../common/Modal";
import SloganRotator from "../Slogans";
import Dev from "../Dev";

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
  justifyContent: "space-evenly",
}));

const TitleContainer = styled(Container)(({ theme }) => ({
  // paddingTop: -50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  textAlign: "center",
  position: "relative",
  zIndex: 99,
}));

const HeroTitle = styled("div")(({ theme }) => ({
  fontWeight: 450,
  // marginBottom: 5,
  // marginTop: 10,
  lineHeight: "2.9rem",
  color: theme.palette.text.dark,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.h1.fontSize,
  zIndex: 2,
  // position: "relative",
}));

const HighlightedText = styled("span")(({ theme }) => ({
  // color: theme.palette.text.red,
  fontWeight: 800,
  lineHeight: "2.9rem",
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
  align-items: center;
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
    restData,
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
  }, []);

  const renderHeader = () => {
    if (showLoading) {
      return <LoadingScreen rest={restData} />;
    }

    if (!showInitialHeader) {
      const altName = `${restData.name} logo gif`;
      const isBelvedere = restData.name === "Belvedere";

      if (restData.slogans) {
        return <SloganRotator strings={restData.slogans} />;
      } else if (restData.name === "Genesis") {
        return (
          <>
            <SloganRotator strings={restData.slogans} />
            {[1, 2, 3].map((el) => (
              <Image
                key={el}
                src={`/assets/images/Genesis/${el}.gif`}
                alt="genesis"
                width={200}
                height={200}
              />
            ))}
          </>
        );
      } else {
        return (
          <Image
            src={restData.animLogo ? restData.animLogo : "/bb.png"}
            alt={altName}
            width={268}
            height={isBelvedere ? 268 : 190}
          />
        );
      }
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
        <TitleContainer sx={{ mt: isSmallScreen ? -10 : 0, mb: 0 }}>
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
