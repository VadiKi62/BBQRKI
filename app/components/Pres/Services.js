"use client";
import { Container, Grid, Typography, Fade } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
          <Grid item xs={12}>
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
              Details
            </Typography>
            <Typography
              variant="h4"
              align="start"
              color="primary.main"
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
              className="color-font"
            >
              Unique QR-code for each umbrella/table.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {features.map((feature, index) => (
            <div key={index}>
              <Grid item xs={12} md={3} key={index} className="items">
                <Fade
                  in
                  timeout={500}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Item className="item">
                    <Image
                      src="/favicon.png"
                      alt="logo_bbqr"
                      width={49}
                      height={45}
                      className="spinning-icon"
                    />
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
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const features = [
  {
    title: "Call the waiter.",
    description:
      "Client can directly call waiter with only clicking one button.",
  },
  {
    title: "Request the bill.",
    description:
      "Client can request bill doing just 2 actions - scanning code and pressing button.",
  },
  {
    title: "Get cash info upfront.",
    description:
      "Skip the back and forth: know if they're paying by card upfront. Less running around for the waiters!",
  },
  {
    title: "Repeat last drink.",
    description:
      "Client can instantly reorder the last drink, pressing one button.",
  },
  {
    title: "Order shisha.",
    description:
      "You do not need to come to the customer first, then call the shisha guy. Waiters run fewer kilometers, clients wait less.",
  },
  {
    title: "Get the client's language immediately ",
    description: "And send a waiter who speaks it like a pro! ",
  },
  {
    title: "No spam messages.",
    description:
      "Client could only call the waiter once they're inside the restaurant ",
  },
  {
    title: "Quick and effortless setup.",
    description:
      "No complex installation needed. Each waiter simply receives their unique QR code, leading them directly to the app. ",
  },
];

export default Features;
