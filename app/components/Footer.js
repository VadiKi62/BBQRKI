"use client";

import React, { useState } from "react";
import { Grid, ButtonBase, Link as MuiLink, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Slogans from "./Slogans";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import DefaultButton from "@app/components/common/DefaultButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import Image from "next/image";
import { Link as NextLInk } from "next/link";
import { useRouter } from "next/navigation";

const Section = styled("section")(({ theme }) => ({
  padding: theme.spacing(3, 5, 1, 5),
  borderTop: `1px solid ${theme.palette.secondary.grey}`,
  textAlign: "center",
  background: theme.palette.secondary.background1
    ? theme.palette.secondary.background1
    : theme.palette.secondary.background,
  backdropFilter: "blur(50px)",
  color: theme.palette.text.dark,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  lineHeight: "2rem",
  fontSize: "2.9rem",
  marginBottom: theme.spacing(2),
}));

const Slogan = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "1.8rem",
  lineHeight: "1.8rem",
  marginBottom: theme.spacing(2),
}));

const FooterContainer = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  fontFamily: theme.typography.fontFamily,
}));

const SocialLinks = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const ContactInfo = styled(Grid)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "1rem",
}));

const ContactIcon = styled("span")(({ theme }) => ({
  marginRight: theme.spacing(1),
  verticalAlign: "middle",
}));

const CopyrightInfo = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: "1rem",
  opacity: 0.8,
}));

function Footer({ rest }) {
  // const { contacts } = useMyContext();
  const { name, slogan, tel, email, address, coords } = rest;
  const loc = coords.mainSpot;
  const router = useRouter();

  const handleClick = () => {
    const destinationURL = `https://www.google.com/maps/dir/?api=1&destination=${loc.latitude},${loc.longitude}`;
    router.push(destinationURL);
  };

  return (
    <Section>
      <FooterContainer>
        <SectionTitle variant="h3">{name}</SectionTitle>
        {rest.slogans ? (
          <Slogans strings={rest.slogans} />
        ) : (
          <Slogan>{slogan}</Slogan>
        )}
        <SocialLinks>
          <MuiLink href="#" color="inherit" target="_blank">
            <FacebookIcon fontSize="large" />
          </MuiLink>
          <MuiLink href="#" color="inherit" target="_blank">
            <TwitterIcon fontSize="large" />
          </MuiLink>
          <MuiLink href="#" color="inherit" target="_blank">
            <InstagramIcon fontSize="large" />
          </MuiLink>
          <MuiLink href="#" color="inherit" target="_blank">
            <LinkedInIcon fontSize="large" />
          </MuiLink>
          <MuiLink href="#" color="inherit" target="_blank">
            <GitHubIcon fontSize="large" />
          </MuiLink>
        </SocialLinks>
        <ContactInfo container spacing={2}>
          <DefaultButton
            onClick={handleClick}
            label="Get Directions"
            relative={true}
            minWidth="100%"
            startIcon={<DirectionsIcon />}
            target="_blank"
            rel="noopener noreferrer"
          />
          <Grid item xs={12} md={4}>
            <ContactIcon>
              <LocationOnIcon />
            </ContactIcon>
            {address}
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactIcon>
              <EmailIcon />
            </ContactIcon>
            <a style={{ fontSize: "1.3rem" }} href={`mailto:${email}`}>
              {email}
            </a>
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactIcon>
              <CallIcon />
            </ContactIcon>
            <a style={{ fontSize: "1.3rem" }} href={`tel:${tel}`}>
              {tel}
            </a>
          </Grid>
        </ContactInfo>
        <CopyrightInfo>{/* <Copyright /> */}</CopyrightInfo>
        <Image
          src="/logo.gif"
          alt="gif-bbqr-code-nataliaki"
          width={80}
          height={80}
        />
      </FooterContainer>
    </Section>
  );
}

export default Footer;
