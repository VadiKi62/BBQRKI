import React from "react";
import { Container, Grid, Typography, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  IoCloudDownloadOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { MdWeb } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

const StyledGridItem = styled(Grid)({
  height: 335,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  fontSize: "35px",
  zIndex: 224,
});

const Title = styled(Typography)({
  fontSize: "20px",
  fontWeight: 700,
  textTransform: "uppercase",
  color: "#ffffff",
  marginTop: 10,
});

const Description = styled(Typography)({
  fontSize: "17px",
  lineHeight: "21px",
  marginTop: 5,
  fontWeight: 500,
  color: "#ffffff",
});

const iconStyle = {
  color: "#e2b543",
  border: "0.3px solid #e2b543",
  borderRadius: "50%",
  width: 55,
  height: 55,
  margin: 5,
  padding: 15,
};

const items = [
  { index: "3", icon: <IoPhonePortraitOutline style={iconStyle} /> },
  { index: "4", icon: <MdWeb style={iconStyle} /> },
  { index: "5", icon: <BsQrCode style={iconStyle} /> },
  { index: "6", icon: <FaUmbrellaBeach style={iconStyle} /> },
];

const Progress = () => {
  const { t } = useTranslation();
  return (
    <section className="app-process">
      <Container>
        <Grid container justifyContent="start" mt={5} mb={5}>
          <Grid item lg={7} md={10}>
            <Typography
              variant="h6"
              align="start"
              sx={{
                mb: 2,
                fontSize: "22px",
                lineHeight: "1.5",
                marginBottom: "20px",
                letterSpacing: "5px",
                textTransform: "uppercase",
              }}
            >
              {t("pres.page6.1")}
            </Typography>
            <Typography
              variant="h4"
              align="left"
              color="primary.main"
              sx={{ fontWeight: 600, textTransform: "uppercase" }}
              className="color-font"
            >
              {t("pres.page6.2")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3}>
          {items.map(({ index, icon }) => (
            <Grid item key={index} lg={4}>
              <StyledGridItem className="item text-center">
                {icon}
                <Title variant="body">{t(`pres.page6.${index}`)}</Title>
                <span className="step-number">
                  {t("pres.page6.2a")} 0{index - 2}
                </span>
                <Description variant="body">
                  {t(`pres.page6.${index}a`)}
                </Description>
              </StyledGridItem>
            </Grid>
          ))}
          <StyledGridItem item lg={12}>
            <div className="item text-center">
              <GiReceiveMoney style={iconStyle} />
              <Title variant="body">{t("pres.page6.7")}</Title>
              <Description variant="body">{t("pres.page6.7a")}</Description>
            </div>
          </StyledGridItem>
        </Grid>
      </Container>
    </section>
  );
};

export default Progress;
