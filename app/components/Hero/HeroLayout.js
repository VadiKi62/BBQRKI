import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
import Typography from "../common/Typography";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import Hero from "./Hero";
import { CallWaiterButton, CallBillButton } from "../CallButtons";
import { useMainContext } from "../Context";
import ModalComponent from "../Modal";

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
  paddingTop: 50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  textAlign: "center",
  position: "relative",
  zIndex: 99,
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 450,
  // marginBottom: 5,
  // marginTop: 10,
  lineHeight: "57px",
  color: theme.palette.text.dark,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.h1.fontSize,
  zIndex: 2,
  // position: "relative",
}));

const HighlightedText = styled("span")(({ theme }) => ({
  color: theme.palette.text.red,
  fontWeight: 800,
  fontFamily: theme.typography.fontFamily,
  fontSize: 65,
}));

const CallButtonWrapper = styled("div")(({ theme, isSticky }) => ({
  position: "sticky",
  bottom: 0,
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

  const {
    lang,
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
  } = useMainContext();

  const bg = `url("/assets/images/${rest.name}/hero-bg.jpg") top center`;

  const [isSticky, setIsSticky] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY || window.pageYOffset;
  //     // Get the offset top of the callBillRef
  //     // const callBillOffsetTop = callBillRef.current.offsetTop;
  //     // // Check if the user has scrolled past the callBill button
  //     // console.log(callBillOffsetTop);
  //     const viewportHeight = window.innerHeight * 0.75;
  //     if (scrollY > viewportHeight) {
  //       setIsSticky(false);
  //     } else {
  //       setIsSticky(true);
  //     }
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <HeroSection id="hero" background={bg}>
      <Overlay />
      <TitleContainer>
        <HeroTitle>
          Wellcome to
          <HighlightedText> {rest?.name} Restaurant</HighlightedText>
        </HeroTitle>
      </TitleContainer>
      {modalVisible && (
        <ModalComponent
          loading={loadingModal}
          content={modalContent}
          onClose={hideModal}
          run={run}
        />
      )}
      <CallContainer>
        {showInitialHeader && (
          <>
            <Hero zonti={zont} isSmallScreen={isSmallScreen} />

            <CallButtonWrapper isSticky={isSticky}>
              <CallWaiterButton
                isSticky={isSticky}
                showCallWaiterButton={true}
                isWaiterButtonActive={isWaiterButtonActive}
                handleCallWaiter={handleCallWaiter}
              />
              <CallBillButton
                isSticky={isSticky}
                showCallWaiterButton={true}
                isButtonBillActive={isButtonBillActive}
                handleCallBill={handleCallBill}
              />
            </CallButtonWrapper>
          </>
        )}
      </CallContainer>
    </HeroSection>
  );
}
