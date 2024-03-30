"use client";
import React, { useEffect } from "react";
import { Container, Grid, Typography, Fade, Row } from "@mui/material";
import Link from "next/link";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax, Autoplay } from "swiper";
//= Scripts
import removeSlashFromPagination from "@/common/removeSlashpagination";
import fadeWhenScroll from "@/common/fadeWhenScroll";
import { useTranslation } from "react-i18next";
import "swiper/css";

const swiperOptions = {
  modules: [Parallax, Navigation, Pagination, Autoplay],
  speed: 1000,
  mousewheel: true,
  parallax: true,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: true,
  spaceBetween: 500,
  breakpoints: {
    0: {
      spaceBetween: 0,
    },
    640: {
      spaceBetween: 0,
    },
    768: {
      spaceBetween: 30,
    },
    1024: {
      spaceBetween: 500,
    },
  },
  onSwiper: (swiper) => {
    setTimeout(() => {
      for (var i = 0; i < swiper.slides?.length; i++) {
        swiper?.slides[i]?.childNodes[0]?.setAttribute(
          "data-swiper-parallax",
          0.85 * swiper.width
        );
      }
    });
  },
};

function ShowcaseCircleSide() {
  const { t } = useTranslation();

  useEffect(() => {
    removeSlashFromPagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  }, []);

  const fullScreenData = [
    {
      id: 1,
      title: { first: t("pres.page5.3"), second: t("pres.page5.3a") },
      image: "/assets/pres/cir/7.png",
    },
    {
      id: 2,
      title: { first: t("pres.page5.4"), second: t("pres.page5.4a") },
      image: "/assets/pres/cir/2.png",
    },
    {
      id: 3,
      title: { first: t("pres.page5.5"), second: t("pres.page5.5a") },
      image: "/assets/pres/cir/3.png",
    },
    {
      id: 4,
      title: { first: t("pres.page5.6"), second: t("pres.page5.6a") },
      image: "/assets/pres/cir/4.png",
    },
    {
      id: 5,
      title: { first: t("pres.page5.7"), second: t("pres.page5.7a") },
      image: "/assets/pres/cir/6.png",
    },
  ];

  return (
    <Container className="slider circle-slide showcase-carus">
      <div id="content-carousel-container-unq-1" className="swiper-container">
        <Grid container justifyContent="flex-start" mt={5} mb={-10}>
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
              {t("pres.page5.1")}
            </Typography>
            <Typography
              variant="h4"
              align="start"
              color="primary.main"
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
              className="color-font"
            >
              {t("pres.page5.2")}
            </Typography>
          </Grid>
        </Grid>

        <Swiper {...swiperOptions} className="swiper-wrapper">
          {fullScreenData.map((slide) => (
            <SwiperSlide key={slide.id} className="SwiperSlide">
              <div className="full-width">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="2"
                >
                  <div className="caption ontop valign">
                    <div className="o-hidden">
                      <h1 data-swiper-parallax="-2000">
                        {/* <Link> */}
                        <div className="stroke">{slide.title.first}</div>
                        <div>{slide.title.second}</div>
                        {/* </Link> */}
                      </h1>
                    </div>
                  </div>
                  <div className="copy-cap valign">
                    <div className="cap">
                      <h1 data-swiper-parallax="-2000">
                        {/* <Link> */}
                        <div className="stroke">{slide.title.first}</div>
                        <div>{slide.title.second}</div>
                        {/* </Link> */}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}

export default ShowcaseCircleSide;
