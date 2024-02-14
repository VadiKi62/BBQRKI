"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper";
import removeSlashFromPagination from "@common/removeSlashpagination";
import fadeWhenScroll from "@common/fadeWhenScroll";
import "swiper/swiper-bundle.min.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BgImage from "./Slider/BgImage";

const swiperOptions = {
  modules: [Parallax, Navigation, Pagination],
  speed: 1000,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  parallax: true,
  pagination: {
    type: "fraction",
    clickable: true,
    el: ".swiper-pagination",
  },
  onSwiper: (swiper) => {
    for (var i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].childNodes[0].setAttribute(
        "data-swiper-parallax",
        0.75 * swiper.width
      );
    }
  },
};

//= Static Data
const intro1Data = [
  {
    id: 1,
    title: "REVOLUTIONIZING THE BEACH BAR EXPERIENCE",
    content:
      "QR Codes for Beach Bars: Increasing Profits and Customer Satisfaction",
    image: "/assets/pres/1.jpg",
  },
  {
    id: 2,
    title:
      "QR Codes for Beach Bars: Increasing Profits and Customer Satisfaction",
    image: "/assets/pres/2.jpg",
  },
  {
    id: 3,
    title:
      "Imagine relaxing on the beach while receiving fast, seamless service without ever waving down a waiter",
    content: "",
    image: "/assets/pres/3.jpg",
  },
];

const IntroWithSlider2 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);
  useEffect(() => {
    removeSlashFromPagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  }, []);

  const fixedSlider = React.useRef();

  useEffect(() => {
    const MainContent = document.querySelector(".main-content");
    const slideHeight = fixedSlider.current.offsetHeight;
    MainContent.style.marginTop = slideHeight + "px";
  }, []);

  return (
    <header
      className="slider slider-prlx fixed-slider text-center"
      ref={fixedSlider}
    >
      <div className="swiper-container parallax-slider">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {intro1Data.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <BgImage slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="setone setwo">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <ChevronRightIcon />
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <ChevronLeftIcon />
          </div>
        </div>
        <div className="swiper-pagination top botm"></div>

        {/* <div className="social-icon">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div> */}
      </div>
    </header>
  );
};

export default IntroWithSlider2;
