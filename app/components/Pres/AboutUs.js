"use client";
import React, { useEffect } from "react";
import Link from "next/link";

//= Scripts
import { thumparallax, thumparallaxDown } from "@common/thumparallax";
//= Static Data
const AboutUs3date = {
  id: 1,
  image1: "/img/01.jpg",
  image2: "/img/02.jpg",
  exp: {
    nmb: 28,
    name: "Years Of Experience",
  },
  title: { first: "Unlimited Skills", second: "for Super Projects." },
  content: {
    first:
      "Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
    second:
      "We develop creative solutions for small and big brands alike, build authentic product identities and much more.",
  },
  smallTitle: "About Us",
};

const AboutUs3 = () => {
  useEffect(() => {
    setTimeout(() => {
      thumparallax();
      thumparallaxDown();
    }, 500);
  }, []);

  return (
    <section className="agency section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="imgsec md-mb50">
              <div className="row">
                <div className="col-md-6">
                  <div className="item">
                    <div
                      className="imgone big-bord wow fadeInDown"
                      data-wow-delay=".8s"
                    >
                      <img
                        className="thumparallax-down"
                        src={AboutUs3date.image1}
                        alt=""
                      />
                    </div>
                    <div className="exp">
                      <h2 className="nmb-font">{AboutUs3date.exp.nmb}</h2>
                      <h6>{AboutUs3date.exp.name}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <div
                      className="imgtwo big-bord wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <img
                        className="thumparallax"
                        src={AboutUs3date.image2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="content">
              <h4 className="wow words chars splitting" data-splitting>
                {AboutUs3date.title.first} <br /> {AboutUs3date.title.second}
              </h4>

              <p className="wow txt words chars splitting" data-splitting>
                {AboutUs3date.content.first} <br />
                {AboutUs3date.content.second}
              </p>

              <Link
                href={`/about/about-dark`}
                className="butn bord curve mt-40 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <span>{AboutUs3date.smallTitle}</span>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default AboutUs3;
