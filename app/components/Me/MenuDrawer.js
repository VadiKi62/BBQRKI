import React from "react";

import { Drawer, Container } from "@mui/material";

import { Link } from "react-scroll";

const MenuDrawer = ({ open, toggleDrawer }) => {
  const handleClose = () => {
    toggleDrawer(open)();
  };
  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClick={toggleDrawer(false)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(11,6,3,0.4)",
            width: "150px",
          },
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 15,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div onClick={toggleDrawer(false)} style={{ marginBottom: 15 }}>
            <Link to="section-started" smooth={true} duration={500}>
              Home
            </Link>
          </div>
          <div onClick={toggleDrawer(false)} style={{ marginBottom: 15 }}>
            <Link to="section-about" smooth={true} duration={500}>
              Resume
            </Link>
          </div>
          <div onClick={toggleDrawer(false)} style={{ marginBottom: 15 }}>
            <Link to="section-contacts" smooth={true} duration={500}>
              Contact
            </Link>
          </div>
        </Container>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
