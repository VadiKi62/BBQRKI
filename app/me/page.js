"use client";
import React, { useEffect } from "react";
import { CodingSkills } from "@app/components/Me/Skills";
import Image from "next/image";
import Layout from "@app/components/Me/layout/Layout";
import TypingAnimation from "@app/components/Me/TypingAnimation";
import { BiSolidMoviePlay } from "react-icons/bi";
import { GiYarn } from "react-icons/gi";
import { SiYourtraveldottv } from "react-icons/si";

import { createSkillsDot, dotResize } from "@app/components/Me/utils";

export default function Me() {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Layout>
      <header className="header">
        <div className="head-top">
          {/* menu button */}
          <a href="#" className="menu-btn">
            <span />
          </a>
          {/* logo */}
          <div className="logo hover-masks-logo">
            <a
              href="/Nataliaki_CV.pdf"
              download="Nataliaki_CV.pdf"
              className="mask-lnk"
            >
              <span className="mask-lnk">
                Natalia <strong>Ki/Bu</strong>
              </span>
              <span className="mask-lnk mask-lnk-hover">
                Download <strong>CV</strong>
              </span>
            </a>
          </div>
          {/* top menu */}
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <a href="#section-started">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-about">Resume</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-contacts">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Wrapper */}
      <div className="wrapper">
        {/* Section Started */}
        <div className="section started" id="section-started">
          {/* background */}
          <div
            className="video-bg jarallax"
            style={{ backgroundImage: "url(/assets/pres/started_image.png)" }}
          ></div>
          {/* started content */}
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <h1 className="h-title">
                  Hello, I’m <strong>Nataliaki</strong>, Back-End and <br />
                  Front-end Developer Based in Europe.
                </h1>
                <TypingAnimation extraClassName={"typed-subtitle"} />
                <span className="typed-subtitle" />
              </div>
            </div>
          </div>
          {/* mosue button */}
          {/* <a href="#" className="mouse_btn" style={{ display: "none" }}>
            <span className="icon fas fa-chevron-down" />
          </a> */}
        </div>
        {/* Section About */}
        <div className="section about" id="section-about">
          {/* title */}
          <div className="title">
            <div className="title_inner">About</div>
          </div>
          <div className="content content-box">
            {/* image */}
            <div className="image">
              <Image
                src="/assets/pres/resume.webp"
                alt=""
                width={140}
                height={140}
              />
            </div>
            {/* desc */}
            <div className="desc">
              <p>
                {
                  "Hello! I'm Nataliaki, a web developer from Europe who transitioned to IT from video production management. A quick learner, I'm now focused on Full Stack Development. I'd love to discuss the unique opportunities this affords."
                }
              </p>
              <div className="info-list">
                <ul>
                  <li>
                    <strong>Age:</strong> 36
                  </li>
                  <li>
                    <strong>Residence:</strong> Ukraine
                  </li>
                  <li>
                    <strong>Freelance:</strong> Available
                  </li>
                  {/* <li>
                    <strong>Address:</strong> 
                  </li> */}
                  <li>
                    <strong>Phone:</strong> +38 068 100 3771
                  </li>
                  <li>
                    <strong>E-mail:</strong> nataliakireewa@gmail.com
                  </li>
                </ul>
              </div>
              <div className="bts">
                <a
                  className="btn hover-animated"
                  href="/Nataliaki_CV.pdf"
                  download="Nataliaki_CV.pdf"
                >
                  <span className="circle" />
                  <span className="lnk">Download CV</span>
                </a>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>

        {/* Section Resume */}
        <div className="section resume" id="section-history">
          <div className="content">
            <div className="cols">
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Experience</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box active">
                    <div className="date">2023 - Present</div>
                    <div className="name">Web-Developer - Freelance</div>
                    <div className="text">
                      Collaborate with creative and development teams on the
                      execution of ideas.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2012 - 2020</div>
                    <div className="name">
                      Video Production Producer - EuroMedia
                    </div>
                    <div className="text">
                      Oversees the entire video production process, from
                      conceptualization to final delivery, for both commercial
                      and digital advertising projects.
                      <ul>
                        <li>
                          Collaborated with clients, creative directors, and
                          production teams to develop engaging video content
                          that aligns with brand objectives and digital
                          marketing strategies.
                        </li>
                        <li>
                          Managed the pre-production, production, and
                          post-production phases, ensuring efficient
                          coordination, adherence to schedules, and the delivery
                          of high-quality video assets.
                        </li>
                        <li>
                          Demonstrated strong project management skills,
                          effective communication, and the ability to lead
                          cross-functional teams in a dynamic, creative
                          environment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Education</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box">
                    <div className="date">2023 - 2023</div>
                    <div className="name">
                      Harvard University CS50: Introduction to Computer Science
                    </div>
                    <div className="text">
                      Course included abstraction, algorithms, data structures,
                      encapsulation, resource management, security, software
                      engineering, and web development. Languages include C,
                      Python, SQL, and JavaScript.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2022 - 2023</div>
                    <div className="name">Parcity CodeAcademy - USA</div>
                    <div className="text">
                      Coursework - Javascript, Node, React, Redux, MongoDB, Git.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2004 - 2009</div>
                    <div className="name">
                      Kyiv National Economical University
                    </div>
                    <div className="text">Masted Degree in Economics.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Languages Skills */}
        <div className="section skills" id="section-skills-lang">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Languages Skills</div>
            </div>
            {/* skills items */}
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }}>
                      <span className="percent">85%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Ukrainian</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "100%" }}>
                      <span className="percent">100%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Russian</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "100%" }}>
                      <span className="percent">100%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Spanish</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "35%" }}>
                      <span className="percent">40%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Greek</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "20%" }}>
                      <span className="percent">20%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section Coding Skills */}
        <CodingSkills />

        {/* Section Interests */}
        <div className="section service" id="section-interests">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Interests</div>
            </div>
            {/* interests items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <BiSolidMoviePlay />
                  </div>
                  <div className="name">Movies</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <GiYarn />
                  </div>
                  <div className="name">Knitting</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <SiYourtraveldottv />
                  </div>
                  <div className="name">Travel</div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="clear" />
        {/* Works */}
        {/* <div className="section works" id="section-portfolio">
          <div className="content">
            <div className="title">
              <div className="title_inner">Portfolio</div>
            </div>
            <ItemIsotope />
            <div className="clear" />
          </div>
        </div> */}
        {/* Section Contacts Info */}
        <div className="section contacts" id="section-contacts">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Contacts</div>
            </div>
            {/* contacts items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-phone" />
                  </div>
                  <div className="name">Phone</div>
                  <div className="text">+ (380) 68 100 37 71</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="name">Email</div>
                  <div className="text">
                    <a href="mailto:steve-pearson@gmail.com">
                      nataliakireewa@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="name">Address</div>
                  <div className="text">{"This really doesn't matter"}</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-user-tie" />
                  </div>
                  <div className="name">Freelance Available</div>
                  <div className="text">I am available for Freelance hire</div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Form */}
        {/* <div className="section contacts" id="section-contacts-form">
          <div className="content"> */}
        {/* title */}
        {/* <div className="title">
              <div className="title_inner">Hire Me</div>
            </div> */}
        {/* form */}
        {/* <div className="contact_form content-box">
              <form id="cform" method="post">
                <div className="group-val">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="group-val">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="group-val ct-gr">
                  <textarea
                    name="message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="group-bts">
                  <button type="submit" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">Send Message</span>
                  </button>
                </div>
              </form>
              <div className="alert-success">
                <p>Thanks, your message is sent successfully.</p>
              </div>
            </div>
          </div> */}
        {/* <div className="clear" />
        </div> */}
        {/* Section Started */}
        {/* <div className="section started section-title" id="section-map"> */}
        {/* background */}
        {/* <div className="video-bg">
            <div className="map" id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
        </div> */}
      </div>
    </Layout>
  );
}
