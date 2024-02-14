import { Box, Container, Grid, Typography, Button } from "@mui/material";

export default function BgImage({ slide }) {
  console.log("slide", slide.title);
  return (
    // <Box sx={{ position: "relative", minHeight: "100vh" }}>
    <Box
      sx={{
        backgroundImage: `url(${slide.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        position: "relative",
        "&:after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.44)",
          zIndex: 11,
        },
      }}
    >
      <Container sx={{ zIndex: 1000 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Box className="caption" sx={{ textAlign: "center", mt: 10 }}>
              <Typography
                variant="h1"
                sx={{ color: "white", textTransform: "uppercase" }}
              >
                {slide.title}
              </Typography>
              {slide.content && (
                <Typography variant="h4" sx={{ mt: 2 }}>
                  {slide?.content}
                </Typography>
              )}
              <Button
                variant="outlined"
                sx={{
                  p: 2,
                  mt: 3,
                  borderRadius: 20,
                  borderColor: "rgba( 226, 181, 67)",
                  color: "white",
                }}
              >
                Look More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    // </Box>
  );
}
