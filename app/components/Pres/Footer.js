import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/system";
import { Grid, ButtonBase, Link as MuiLink, Typography } from "@mui/material";
import DefaultButton from "@app/components/common/DefaultButton";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { useTranslation } from "react-i18next";

const Section = styled("section")(({ theme }) => ({
  padding: theme.spacing(3, 5, 1, 5),
  borderTop: `1px solid ${theme.palette.secondary.grey}`,
  textAlign: "center",
  background: theme.palette.secondary.background,
  backdropFilter: "blur(50px)",
  color: theme.palette.text.dark,
}));

const FooterContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "transparent",
  color: "#fff",
  padding: "20px 0",
});

const Logo = styled("div")({
  margin: 20,
});

const CopyRight = styled("div")({
  fontSize: "14px",
  paddingTop: "1rem",
});
const ContactInfo = styled(Grid)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "1rem",
}));
const ContactIcon = styled("span")(({ theme }) => ({
  marginRight: theme.spacing(1),
  verticalAlign: "middle",
}));

const Footer = () => {
  const email = "nataliakireewa@gmail.com";
  const tel = "+38 068 100 3771";

  const { t } = useTranslation();

  return (
    <Section>
      <FooterContainer>
        <Logo>
          <Image src="/logo_white1.png" alt="logo" width={113} height={70} />{" "}
        </Logo>
        <ContactInfo container spacing={2}>
          <DefaultButton
            label={t("pres.footer.1")}
            relative={true}
            minWidth="100%"
            startIcon={<HistoryEduIcon />}
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          />
          <Grid item xs={12} sm={6}>
            <ContactIcon>
              <EmailIcon />
            </ContactIcon>
            <a style={{ fontSize: "1.3rem" }} href={`mailto:${email}`}>
              {email}
            </a>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContactIcon>
              <CallIcon />
            </ContactIcon>
            <a style={{ fontSize: "1.3rem" }} href={`tel:${tel}`}>
              {tel}
            </a>
          </Grid>
        </ContactInfo>

        <CopyRight>
          <p>
            © 2023. Made with passion by{" "}
            <a href="https://www.linkedin.com/in/natalia-kirejeva/">
              Nataliaki
            </a>
            .
          </p>
        </CopyRight>
      </FooterContainer>
    </Section>
  );
};

export default Footer;
