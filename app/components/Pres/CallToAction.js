import React from "react";
import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import Split from "@app/components/Common/Split";

function CallToAction() {
  return (
    <section
      className="call-action section-padding sub-bg bg-img"
      style={{ backgroundImage: `url("/patrn.svg")` }}
    >
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={9}>
            <Box sx={{ mb: { xs: 3, sm: 0 } }}>
              {" "}
              <Typography
                variant="h6"
                className="wow words chars splitting"
                data-splitting
              >
                Let us Talk
              </Typography>
              <Typography
                variant="h2"
                className="wow words chars splitting"
                data-splitting
              >
                about your <br />
                <a href={`mailto: {nataliakireewa@gmail.com}`}>
                  <Box
                    component="span"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      px: 1,
                      "&:hover": {
                        backgroundColor: "primary.green",
                      },
                    }}
                  >
                    Beach Bar New Experience
                  </Box>
                  .
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            sx={{ display: "flex", alignItems: "center" }}
          ></Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default CallToAction;
