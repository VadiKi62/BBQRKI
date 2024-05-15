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
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";

const Image = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  overflow: "hidden",
  maxHeight: "700px",
  width: "405px",
}));

const Price = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",
  },
  color: theme.palette.primary.red,
  "&::after": {
    content: '"€"',
  },
  margin: 1,
}));

const Ingredients = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  // whiteSpace: "normal",
  // marginLeft: theme.spacing(2),
  marginTop: 25,
  fontSize: "1.2rem",
  transition: "transform 0.3s",
  textAlign: "right",
  "&:hover": {
    color: theme.palette.primary.red,
  },
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    marginTop: 5,
  },
}));

function ModalMenuItem({ menu, item, onClose, englishItem }) {
  const handleDialogContentClick = (event) => {
    // Stops the click event from propagating up to other elements
    event.stopPropagation();
    onClose();
  };

  const [menuItem, setmenuItem] = useState(item);

  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [imageLoading, setImageLoading] = useState(true);

  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setShowProgress(false);
  };

  return (
    <Dialog open={!!menuItem} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        bgcolor="primary.main"
        color="text.light"
        mb={2}
        variant={isSmallScreen ? "h6" : "h4"}
        component={isSmallScreen ? "h4" : "h2"}
        align="center"
      >
        {menuItem.menuNumber} {menuItem ? menuItem?.title : ""}
      </DialogTitle>
      <DialogContent onClick={handleDialogContentClick}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              position: "relative",
              textAlign: "center",
            }}
          >
            {showProgress ? (
              <CircularProgress sx={{ padding: 10 }} />
            ) : (
              <Image
                src={englishItem?.image}
                alt={englishItem?.title}
                onLoad={handleImageLoad}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6} sx={{ py: 1, pl: 1 }}>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                justifyContent: "flex-start",
              }}
            >
              <Price variant="h5">{englishItem.price}</Price>
              {englishItem?.per && (
                <Ingredients> for {englishItem.per}</Ingredients>
              )}
              {englishItem?.weight && (
                <Ingredients>
                  {" "}
                  {englishItem.weight} {returnMesurements(englishItem.category)}
                </Ingredients>
              )}
              {menuItem?.ingredients && (
                <Ingredients>{menuItem.ingredients}</Ingredients>
              )}
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 1 }}>
            {/* // If this items is only for restaurant, show this message in Modal window
          {!englishItem.beachMenu && (
            <Stack
              direction={"row"}
              justifyContent="space-evenly"
              alignItems="center"
              spacing={1}
            >
              <SmsFailedIcon />
              <Typography variant="body1" color="primary.red">
                We are serving this item only inside of the restaurant.
              </Typography>
            </Stack>
          )} */}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          <CloseIcon />
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalMenuItem;
