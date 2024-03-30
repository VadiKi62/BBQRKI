"use client";
import React from "react";
import { Container, Paper, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const StyledContainer = styled(Container)`
  margin-top: 4px;
`;

const StyledDiv = styled(Container)`
  text-align: center;
`;

const Header = ({ sliderRef }) => {
  const { i18n, t } = useTranslation();
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <StyledContainer>
        <Grid container justifyContent="center">
          <Grid item lg={10}>
            <StyledDiv>
              <Typography
                variant="h1"
                fontSize={{ xs: "2rem", sm: "3rem", md: "4rem" }}
              >
                <span className="color-font">{t("pres.page1.1")}</span>{" "}
                {t("pres.page1.1a")}{" "}
                <span className="color-font">{t("pres.page1.1b")}</span>
              </Typography>
            </StyledDiv>
          </Grid>
        </Grid>
      </StyledContainer>

      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Header;
