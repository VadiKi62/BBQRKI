"use client";
import React from "react";
import { Container, Paper, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)`
  margin-top: 4px;
`;

const StyledDiv = styled(Container)`
  text-align: center;
`;

const ColorFont = styled(Typography)`
  color: "red";
`;

const Header = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <StyledContainer>
        <Grid container justifyContent="center">
          <Grid item lg={10}>
            <StyledDiv>
              <Typography variant="h1">
                <ColorFont>REVOLUTIONIZING</ColorFont> THE BEACH BAR{" "}
                <ColorFont>EXPERIENCE</ColorFont>.
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
