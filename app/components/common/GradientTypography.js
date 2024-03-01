import { Typography } from "@mui/material";

const GradientTypography = ({ text }) => {
  return (
    <Typography
      component="span"
      sx={{
        background: (theme) =>
          `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.primary.green}, ${theme.palette.text.dark})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textTransform: "uppercase",
        fontSize: "1.45rem",
      }}
      // className="text-flicker-in-glow"
    >
      {text}
    </Typography>
  );
};

export default GradientTypography;
