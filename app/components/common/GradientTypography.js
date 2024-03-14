import { Typography } from "@mui/material";

const GradientTypography = ({ text, ...props }) => {
  return (
    <Typography
      component="span"
      sx={{
        background: (theme) =>
          `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.primary.green}, ${theme.palette.text.dark})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textTransform: "uppercase",
        fontSize: "1.25rem",
        lineHeight: "1.35rem",
        fontFamily: (theme) => `${theme.typography.fontFamily}`,
      }}
      {...props}
      // className="text-flicker-in-glow"
    >
      {text}
    </Typography>
  );
};

export default GradientTypography;
