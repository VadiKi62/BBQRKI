import React from "react";
import { Container } from "@mui/material";
import GradientTypography from "./common/GradientTypography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax, Autoplay } from "swiper";
import "swiper/css";

const swiperOptions = {
  modules: [Parallax, Navigation, Autoplay],
  speed: 4000,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  parallax: true,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: true,
  spaceBetween: 800,
  onSwiper: (swiper) => {
    setTimeout(() => {
      for (var i = 0; i < swiper.slides?.length; i++) {
        console.log("!!!!!!!!!!!!swiper!!", swiper);
        swiper?.slides[i]?.childNodes[0]?.setAttribute(
          "data-swiper-parallax",
          6.99 * swiper.width
        );
      }
    });
  },
};

const SloganRotator = ({ strings, h = false }) => {
  return (
    <Container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        zIndex: 1000,
        mt: h ? -10 : 0,
      }}
    >
      <div className="swiper-container">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {strings.map((slogan, i) => (
            <SwiperSlide key={`slogan_${i}`} className="SwiperSlide">
              <GradientTypography text={slogan} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default SloganRotator;
