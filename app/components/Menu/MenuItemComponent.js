import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";
import { Skeleton } from "@mui/material";
import { useMainContext } from "@app/components/MainContextProvider";

const StyledMenuItem = styled(Paper)(({ theme }) => ({
  // margin: theme.spacing(0, 0),
  padding: theme.spacing(1),
  zIndex: 22,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: theme.shadows[4],
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: theme.shadows[5],
  },
}));
const MenuImage = styled("img")(({ theme }) => ({
  width: "155px",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
  border: `3px solid ${theme.palette.secondary.background}`,
  transition: "transform 0.8s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const MenuContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  textWrap: "pretty",
  wordWrap: "normal",
}));

const MenuTitle = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  textAlign: "right",
  // background: theme.palette.secondary.main,
  fontFamily: theme.typography.fontFamily,
  position: "relative",
  zIndex: 1,
  fontWeight: 700,
  color: theme.palette.text.menutitle
    ? theme.palette.text.menutitle
    : theme.palette.text.dark,
  lineHeight: "24px",
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const MenuPrice = styled("span")(({ theme }) => ({
  // background: theme.palette.secondary.main,
  position: "relative",
  fontSize: "22px",
  zIndex: 1,
  padding: theme.spacing(2, 0),
  fontWeight: 600,
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.red,
  },
}));

const MenuIngredients = styled("div")(({ theme }) => ({
  fontStyle: "italic",
  textAlign: "right",
  marginLeft: theme.spacing(2),
  fontSize: "16px",
  color: `rgba(0, 0, 0, 0.7)`,
  marginTop: theme.spacing(1),
}));

function MenuItemComponent({ item, isSmallScreen, englishItem, restName }) {
  const defaultImageSrc = "/menu/photo.png";
  const { onlyMenuFromParams, setOnlyMenu } = useMainContext();
  const isBloom = restName === "Bloom";

  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledMenuItem>
      {imageLoading ? (
        <Skeleton
          variant="circular"
          width={150}
          height={150}
          sx={{ bgcolor: "secondary.complement" }}
        />
      ) : (
        <MenuImage src={englishItem.image} alt={englishItem.title} />
      )}

      <MenuContent sx={{ maxWidth: isSmallScreen ? "170px" : "auto" }}>
        <MenuIngredients>{item.menuNumber}</MenuIngredients>
        <MenuTitle>{item.title || englishItem.title}</MenuTitle>
        {onlyMenuFromParams == 2 && (
          <MenuPrice>€{englishItem.beachPrice || englishItem.price}</MenuPrice>
        )}
        {(onlyMenuFromParams == 1 || !onlyMenuFromParams) && (
          <MenuPrice>€{englishItem.price}</MenuPrice>
        )}
        {/* <MenuPrice>€{englishItem.price}</MenuPrice> */}
        <MenuIngredients>
          {item?.ingredients || englishItem?.ingredients}
        </MenuIngredients>
      </MenuContent>
    </StyledMenuItem>
  );
}

export default MenuItemComponent;
