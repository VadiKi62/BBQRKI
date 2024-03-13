"use client";
import React from "react";
import Image from "next/image";
import { Container, Grid, Typography, Fade, Row } from "@mui/material";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Mousewheel } from "swiper";

const fullScreenData = [
  {
    id: 1,
    title: "Client ",
    sub: "Scan QR-code.",
    image: "/assets/pres/grid/1.png",
  },
  {
    id: 2,
    title: "Client ",
    sub: "Open app.",
    image: "/assets/pres/grid/2.png",
  },
  {
    id: 3,
    title: "Client ",
    sub: "Press Button.",
    image: "/assets/pres/grid/3.png",
  },
  {
    id: 4,
    title: "Waiter",
    sub: " Get it.",
    image: "/assets/pres/grid/4.png",
  },
  {
    id: 4,
    title: "Just ",
    sub: "it.",
    image: "/assets/pres/grid/5.png",
  },
];

const swiperOptions = {
  modules: [Navigation, Autoplay, Mousewheel],
  centeredSlides: true,
  slidesPerView: 3,
  autoPlay: true,
  spaceBetween: 0,
  //   loop: true,
  // navigation: {
  //   prevEl: ".swiper-button-prev",
  //   nextEl: ".swiper-button-next",
  // },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: -10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 0,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 4,
    },
  },
};

function Works3() {
  return (
    <div>
      {/* <Container className="slider showcase-grid"> */}
      <Container id="content-carousel-container-unq-1">
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
                textTransform: "uppercase",
              }}
            >
              How it looks
            </Typography>
            <Typography
              variant="h4"
              align="start"
              color="primary.main"
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
              className="color-font"
            >
              Client press the button - Waiter go it. Just as easy as it is.
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
                              width={280}
                              height={490}
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
