import React from "react";
import { Container, Grid, Typography, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineQrcode } from "react-icons/ai";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";

const StyledGridItem = styled(Grid)({
  minHeight: "100%",
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
  marginTop: 5,
  fontWeight: 500,
  color: "#ffffff",
});

const iconStyle = {
  color: "#e2b543",
  border: "0.3px solid #e2b543",
  borderRadius: "50%",
  width: 55,
  minWidth: 55,
  height: 55,
  minHeight: 55,
  margin: 5,
  padding: 15,
};

const items = [
  { index: "3", icon: <IoPhonePortraitOutline style={iconStyle} /> },
  { index: "4", icon: <CgWebsite style={iconStyle} /> },
  { index: "5", icon: <AiOutlineQrcode style={iconStyle} /> },
  { index: "6", icon: <LiaUmbrellaBeachSolid style={iconStyle} /> },
];


const Progress = () => {
  const { t } = useTranslation();
  return (
    <section className="app-process">
      <Container>
        <Grid container justifyContent="start" mt={2} mb={2}>
          <Grid item lg={7} md={10}>
            <Typography
              variant="h6"
              align="left"
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
            <Grid item key={index} lg={3}>
              <StyledGridItem className="item text-center">
                {icon}
                <Title variant="body">{t(`pres.page6.${index}`)}</Title>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    mb: 4,
                    mt: 3,
                  }}
                  color="primary.red"
                >
                  {t("pres.page6.2a")} 0{index - 2}
                </Typography>
                <Description variant="h5">
                  {t(`pres.page6.${index}a`)}
                </Description>
              </StyledGridItem>
            </Grid>
          ))}
          <StyledGridItem item lg={12} width={"100hv"}>
            <div className="item text-center">
              <GiReceiveMoney style={iconStyle} />
              <Title variant="body" sx={{ mb: 5 }}>
                {t("pres.page6.7")}
              </Title>
              <Description variant="h5">{t("pres.page6.7a")}</Description>
            </div>
          </StyledGridItem>
        </Grid>
      </Container>
    </section>
  );
};

export default Progress;
