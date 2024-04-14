"use client";
import React from "react";
import Image from "next/image";
import { Container, Grid, Typography, Fade, Row } from "@mui/material";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Mousewheel } from "swiper";
import { useTranslation } from "react-i18next";

const swiperOptions = {
  modules: [Navigation, Autoplay, Mousewheel],
  centeredSlides: true,
  slidesPerView: 4,
  autoPlay: true,
  spaceBetween: 0,
  //   loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 4,
    },
  },
};

function Works3() {
  const { i18n, t } = useTranslation();

  const fullScreenData = [
    {
      id: 1,
      title: t("pres.page2.3"),
      sub: t("pres.page2.3a"),
      image: "/assets/pres/grid/1.png",
    },
    {
      id: 2,
      title: t("pres.page2.3"),
      sub: t("pres.page2.4a"),
      image: "/assets/pres/grid/2.png",
    },
    {
      id: 3,
      title: t("pres.page2.6"),
      sub: t("pres.page2.6a"),
      image: "/assets/pres/grid/3.png",
    },
    {
      id: 4,
      title: t("pres.page2.7"),
      sub: t("pres.page2.7a"),
      image: "/assets/pres/grid/4.png",
    },
    {
      id: 4,
      title: t("pres.page2.8"),
      sub: t("pres.page2.8a"),
      image: "/assets/pres/grid/5.png",
    },
    {
      id: 5,
      title: t("pres.page2.9"),
      sub: t("pres.page2.9a"),
      image: "/assets/pres/grid/6.png",
    },
  ];
  return (
    <div>
      {/* <Container className="slider showcase-grid"> */}
      <Container id="content-carousel-container-unq-1">
        <Grid container justifyContent="start" mt={5} mb={-10}>
          <Grid item xs={12} md={8}>
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
              {t("pres.page2.1")}
            </Typography>
            <Typography
              variant="h4"
              align="left"
              color="primary.main"
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
              className="color-font"
            >
              {t("pres.page2.2")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* </Container> */}

      <div className="work-carousel2 metro section-padding">
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <div className="swiper-container">
                <Swiper className="swiper-wrapper" {...swiperOptions}>
                  {fullScreenData.map((slide) => (
                    <SwiperSlide key={slide.image}>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <div className="wow cimgio" data-delay="500"></div>
                            <Image
                              src={slide.image}
                              alt=""
                              width={240}
                              height={455}
                            />
                          </span>
                        </div>
                        <div className="cont">
                          <h6>{slide.title}</h6>
                          <h4>{slide.sub}</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Works3;
