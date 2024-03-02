import React from "react";
import Image from "next/image";
import { styled } from "@mui/system";

const FooterContainer = styled("footer")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "transparent",
  color: "#fff",
  padding: "20px 0",
});

const Logo = styled("div")({
  marginRight: "20px",
});

const CopyRight = styled("div")({
  fontSize: "14px",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Logo>
        <Image src="/logo_white1.png" alt="logo" width={160} height={100} />
      </Logo>

      <CopyRight>
        <p>
          © 2023. Made with passion by <a href="/">Nataliaki</a>.
        </p>
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;
