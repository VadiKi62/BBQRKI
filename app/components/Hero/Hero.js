import React from "react";
import { Element } from "react-scroll";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material/";
import Typography from "../common/Typography";
import { useTranslation } from "react-i18next";

const Icon = styled("img")(({ theme }) => ({
  width: "50px",
  bottom: 0,
  position: "relative",
  animation: "bounce 2s infinite",
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0)",
    },
    "40%": {
      transform: "translateY(-8px)",
    },
    "60%": {
      transform: "translateY(-5px)",
    },
  },
}));

export default function Hero({ zonti, name }) {
  const { t } = useTranslation();
  const isGenesis = name === "Genesis";
  const iconSRC = isGenesis
    ? "/assets/icons/down4.png"
    : "/assets/icons/down1.png";
  return (
    <Container
      sx={{
        display: "flex",
        minWidth: "100%",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Typography
        align="center"
        color="primary.main"
        sx={{ marginTop: "-0.9rem", fontSize: "1.3rem", fontWeight: 900 }}
      >
        {t("header.table")} {zonti}
      </Typography>
      <Typography
        color="text.dark"
        align="center"
        sx={{ fontSize: "1.2rem", lineHeight: "1.4rem" }}
      >
        {t("header.call")}
      </Typography>
      <Icon src={iconSRC} alt="icon_hand_down" />
    </Container>
  );
}
