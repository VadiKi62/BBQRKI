import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

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
  justifyContent: "flex-start",
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
  padding: theme.spacing(2, 2),
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

function MenuItemComponent({ item, isSmallScreen, menu }) {
  const englishItem = menu
    .find((langObj) => langObj.langKey === "en")
    ?.items.find((menuItem) => menuItem.menuNumber === item.menuNumber);

  const defaultImageSrc = "/menu/photo.png";
  return (
    <StyledMenuItem>
      <MenuImage
        src={englishItem.image || defaultImageSrc}
        alt={item.title || englishItem.title}
      />
      <MenuContent sx={{ maxWidth: isSmallScreen ? "85px" : "auto" }}>
        <MenuIngredients>{item.menuNumber}</MenuIngredients>
        <MenuTitle>{item.title || englishItem.title}</MenuTitle>
        <MenuPrice>€{englishItem.price}</MenuPrice>
        <MenuIngredients>
          {item?.ingredients || englishItem?.ingredients}
        </MenuIngredients>
      </MenuContent>
    </StyledMenuItem>
  );
}

export default MenuItemComponent;
