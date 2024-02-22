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

const fullScreenData = [
  {
    id: 1,
    title: { first: "More", second: "Orders" },
    image: "/assets/pres/cir/1.png",
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
    title: { first: "Waiters run ", second: "fewer kilometers" },
    image: "/assets/pres/cir/3.png",
    sub: "Design",
  },
  {
    id: 4,
    title: { first: "Clients", second: "Wait less" },
    image: "/assets/pres/cir/4.png",
    sub: "Design",
  },
  {
    id: 5,
    title: { first: "Clients", second: "Order more" },
    image: "/assets/pres/cir/5.png",
    sub: "Design",
  },
  {
    id: 5,
    title: { first: "More", second: " Tips" },
    image: "/assets/pres/cir/6.png",
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
                      <h1 data-swiper-parallax="-2000">
                        <div className="stroke">{slide.title.first}</div>
                        <div>{slide.title.second}</div>
                      </h1>
                    </div>
                  </div>
                  <div className="copy-cap valign">
                    <div className="cap">
                      <h1 data-swiper-parallax="-1000">
                        <div className="stroke">{slide.title.first}</div>
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
