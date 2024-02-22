"use client";
import { Container, Grid, Typography, Fade } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import Link from "next/link";
//= Scripts
import cardMouseEffect from "@/common/cardMouseEffect";

// Styled component for the section
const Section = styled("section")({
  backgroundColor: "transparent",
  padding: "120px 0",
  overflow: "hidden",
});

// Styled component for the item
const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: "40px 20px",
  borderRadius: "10px",
  boxShadow: theme.palette.primary.main,
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0px 6px 15px #111627",
  },
}));

const Features = () => {
  useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);

  return (
    <Section className="feat">
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h6"
              align="center"
              sx={{
                mb: 2,
                fontSize: "22px",
                lineHeight: "1.5",
                marginBottom: "20px",
                letterSpacing: "5px",
              }}
            >
              Beach-Bar QR-CODE
            </Typography>
            <Typography
              variant="h3"
              align="center"
              color="primary.main"
              sx={{ fontWeight: 700 }}
              className="color-font"
            >
              Unique QR - CODE for each umbrella/table.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} className="items">
              <Fade
                in
                timeout={500}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Item className="item">
                  <span className="icon">{feature.icon}</span>
                  <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography>{feature.description}</Typography>
                  {/* <Link href={feature.link} className="more-stroke">
                    <span></span>
                  </Link> */}
                </Item>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const features = [
  {
    icon: <i className="ion-ios-monitor"></i>,
    title: "Call the waiter.",
    description:
      "Client can directly call waiter with only clicking one button.",
    link: "/about/about-dark",
  },
  {
    icon: <i className="ion-ios-bolt-outline"></i>,
    title: "Request the bill.",
    description:
      "Client can request bill doing just 2 actions - scanning code and pressing button.",
    link: "/about/about-dark",
  },
  {
    icon: <i className="ion-cube"></i>,
    title: "Repeat last drink.",
    description:
      "Client can instantly reorder the last drink, pressing one button.",
    link: "/about/about-dark",
  },
  {
    icon: <i className="ion-ios-color-wand"></i>,
    title: "Order shisha.",
    description:
      "You do not need to come to the customer first, then call the shisha guy. Waiters run fewer kilometers, clients wait less.",
    link: "/about/about-dark",
  },
];

export default Features;
