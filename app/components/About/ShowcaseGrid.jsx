"use client";
import React, { useEffect } from "react";
import Link from "next/link";
//= Modules
import { Container, Grid, Typography, Fade, Row } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Mousewheel } from "swiper";
//= Scripts
import removeSlashFromPagination from "@/common/removeSlashpagination";
import tooltipEffect from "@/common/tooltipEffect";

const fullScreenData = [
  {
    id: 1,
    title: { first: "Client", second: "Scan QR-code" },
    image: "/assets/pres/grid/1.png",
  },
  {
    id: 2,
    title: { first: "Client", second: "Open app" },
    image: "/assets/pres/grid/2.png",
  },
  {
    id: 3,
    title: { first: "Client", second: "Press button" },
    image: "/assets/pres/grid/3.png",
  },
  {
    id: 4,
    title: { first: "Waiter", second: "Get it" },
    image: "/assets/pres/grid/4.png",
  },
  {
    id: 4,
    title: { first: "Just", second: "it." },
    image: "/assets/pres/grid/5.png",
  },
];

const swiperOptions = {
  modules: [Autoplay, Navigation, Mousewheel],
  slidesPerView: 2,
  speed: 1000,
  mousewheel: true,
  autoplay: true,
  // loop: true,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    prevEl: ".txt-botm .swiper-button-prev",
    nextEl: ".txt-botm .swiper-button-next",
  },
};

function ShowcaseGrid() {
  useEffect(() => {
    tooltipEffect();
    removeSlashFromPagination();
    document.querySelector(".div-tooltip-tit").style.display = "block";
    document.querySelector(".div-tooltip-sub").style.display = "block";
  }, []);

  return (
    <Container className="slider showcase-grid">
      <div id="content-carousel-container-unq-1">
        <Grid container justifyContent="start" mt={5} mb={-10}>
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
              }}
            >
              How it looks like
            </Typography>
            <Typography
              variant="h5"
              align="start"
              color="primary.main"
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
              className="color-font"
            >
              Client press the button - Waiter go it. Just as easy as it is.
            </Typography>
          </Grid>
        </Grid>

        <Swiper {...swiperOptions}>
          {fullScreenData.map((slide) => (
            <SwiperSlide key={slide.image}>
              <div
                className="bg-img"
                style={{ backgroundImage: `url(${slide.image})` }}
                data-tooltip-tit={slide.title.first + " " + slide.title.second}
                data-tooltip-sub={slide.sub}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="txt-botm">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <div>
              <span>Next </span>
            </div>
            <div>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <div>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div>
              <span>Prev </span>
            </div>
          </div>

          <div className="swiper-pagination dots"></div>
        </div>
      </div>
    </Container>
  );
}

export default ShowcaseGrid;
