import React from "react";
//= Components
import SectionLeft from "./SectionLeft";
import { Container, Grid, Typography, styled } from "@mui/material";
import SectionRight from "./SectionRight";

function Services() {
  return (
    <section className="serv-block section-padding">
      <Container>
        <SectionLeft />
      </Container>
      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </section>
  );
}

export default Services;
