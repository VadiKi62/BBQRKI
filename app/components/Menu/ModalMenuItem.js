/* eslint-disable react/no-array-index-key */
// Assuming you are using fetch to load the JSON file
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
  Grid,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const Image = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  overflow: "hidden",
  maxHeight: "700px",
  width: "405px",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  // Responsive styles based on screen size
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

const fetchProductDataById = (productId) => {
  const product = ModalItems.find((item) => item.id === productId);
  return product || null;
};

function ModalMenuItem({ productId, onClose }) {
  const [product, setProduct] = useState(null);
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchedproduct = fetchProductDataById(productId);
    setProduct(fetchedproduct);
  }, [productId]);

  const [imageLoading, setImageLoading] = useState(true);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev + 5) % 100);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <Dialog open={!!product} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        bgcolor="primary.main"
        color="primary.light"
        mb={2}
        variant={isSmallScreen ? "h6" : "h4"}
        component={isSmallScreen ? "h4" : "h2"}
        align="center"
      >
        {product ? product?.title : ""}
      </DialogTitle>
      <DialogContent>
        <Grid container sx={{ display: "flex", flexdirection: "column" }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              direction: "flex",
              textAlign: "center",
            }}
          >
            <Image
              src={product?.url}
              alt={product?.title}
              onLoad={handleImageLoad}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ pl: 2 }}>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
              }}
            >
              {product?.subTitle && (
                <StyledTypography variant="h6">
                  {product.subTitle}
                </StyledTypography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t("modal.close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalMenuItem;
