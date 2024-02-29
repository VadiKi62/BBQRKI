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
import "swiper/css";

const fullScreenData = [
  {
    id: 1,
    title: { first: "More", second: "Orders" },
    image: "/assets/pres/cir/7.png",
    sub: "Design",
  },
  {
    id: 2,
    title: { first: "Less", second: "Rush" },
    image: "/assets/pres/cir/2.png",
    sub: "Design",
  },
  {
    id: 3,
    title: { first: "More", second: "Tips" },
    image: "/assets/pres/cir/3.png",
    sub: "Design",
  },
  {
    id: 4,
    title: { first: "Less", second: "Wait" },
    image: "/assets/pres/cir/4.png",
    sub: "Design",
  },
  {
    id: 5,
    title: { first: "Happy", second: "Clients" },
    image: "/assets/pres/cir/5.png",
    sub: "Design",
  },
  {
    id: 5,
    title: { first: "More", second: " Tips" },
    image: "/assets/pres/cir/6.png",
    sub: "Design",
  },
  {
    id: 5,
    title: { first: "More", second: "Clients" },
    image: "/assets/pres/cir/1.png",
    sub: "Design",
  },
];

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
          0.75 * swiper.width
        );
      }
    });
  },
};

function ShowcaseCircleSide() {
  useEffect(() => {
    removeSlashFromPagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  }, []);

  return (
    <Container className="slider circle-slide showcase-carus">
      <div id="content-carousel-container-unq-1" className="swiper-container">
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
                      <h1 data-swiper-parallax="-2000" style={textStyle}>
                        <div>{slide.title.first}</div>
                        <div style={{ marginLeft: "-1rem" }}>
                          {slide.title.second}
                        </div>
                      </h1>
                    </div>
                  </div>
                  <div className="copy-cap valign">
                    <div className="cap">
                      <h1 data-swiper-parallax="-1000" style={textStyle}>
                        {slide.title.first}
                        <div>{slide.title.second}</div>
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

const textStyle = {
  fontFamily: ["Josefin Sans", "sans-serif"].join(","),
  lineHeight: "60px",
  fontSize: "60px",
  textAlign: "center",
  "@media (max-width: 767px)": {
    fontSize: "50px",
    lineHeight: "40px",
    textAlign: "center",
  },
  "@media (min-width: 768px) and (max-width: 959px)": {
    fontSize: "60px",
    lineHeight: "48px",
    textAlign: "center",
  },
  "@media (min-width: 960px) and (max-width: 1279px)": {
    fontSize: "70px",
    lineHeight: "60px",
    textAlign: "center",
  },
  "@media (min-width: 1280px)": {
    fontSize: "135px",
    lineHeight: "120px",
    textAlign: "right",
  },
};
