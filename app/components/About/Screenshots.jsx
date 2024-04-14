"use client";
import React, { useEffect } from "react";
//= Modules
import { Container, Grid, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const screenshots = [
  "/assets/pres/screens/1.png",
  "/assets/pres/screens/2.png",
  "/assets/pres/screens/3.png",
  "/assets/pres/screens/4.png",
  "/assets/pres/screens/5.png",
  "/assets/pres/screens/6.png",
  "/assets/pres/screens/7.png",
  "/assets/pres/screens/8.png",
  "/assets/pres/screens/9.png",
];

const swiperOptions = {
  modules: [Pagination],
  speed: 1000,
  spaceBetween: 30,
  loop: true,
  parallax: false,
  slidesPerView: 5,
  pagination: {
    type: "bullets",
    clickable: true,
    el: ".secreen-shots .swiper-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 5,
    },
  },
};

function Screenshots() {
  const { t } = useTranslation();
  useEffect(() => {
    let swiperContainer = document.querySelector(
      ".secreen-shots .swiper-container"
    );
    let swiperPagination = document.querySelector(
      ".secreen-shots .swiper-pagination"
    );
    if (swiperContainer) {
      swiperContainer.appendChild(swiperPagination);
    }
  }, []);

  return (
    <section className="secreen-shots section-padding">
      <Container>
        <Container>
          <Grid container justifyContent="start" mt={-5} mb={5}>
            <Grid item xs={12} md={8}>
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
                {t("pres.page4.1")}
              </Typography>
              <Typography
                variant="h4"
                align="start"
                color="primary.main"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
                className="color-font"
              >
                {t("pres.page4.2")}
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Grid container>
          <Container>
            <Grid item xs={12}>
              <Box sx={{ width: "100%" }}>
                <Swiper {...swiperOptions}>
                  {screenshots.map((screenshot, index) => (
                    <SwiperSlide key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={screenshot}
                          alt=""
                          width={200}
                          height={368}
                        />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
          </Container>
        </Grid>
      </Container>
    </section>
  );
}

export default Screenshots;
