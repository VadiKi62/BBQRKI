import { Typography } from "@mui/material";

const GradientTypography = ({ text }) => {
  return (
    <Typography
      className="focus-in-contract-bck"
      component="span"
      sx={{
        background: (theme) =>
          `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.red}, ${theme.palette.primary.green})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textTransform: "uppercase",
      }}
    >
      {text}
    </Typography>
  );
};

export default GradientTypography;
