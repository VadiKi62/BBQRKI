import React, { useState, useEffect } from "react";
import { calculateDistance, getRestCoords } from "@common/index";
import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";
// import Typography from "./common/Typography";

const BoxContainer = styled(Box)(({ theme }) => ({
  marginTop: "-75px",
  display: "flex",
  padding: 5,
  flexDirection: "row",
  justifyContent: "space-evenly",
  color: theme.palette.text.main,
  borderColor: theme.palette.primary.fiolet,
  borderBlockStyle: "groove",
  zIndex: "1999",
}));

const Span = styled("span")(({ theme }) => ({
  color: theme.palette.primary.fiolet,
  fontSize: "1rem",
}));

function Dev({ rest }) {
  const { mainSpot } = rest.radiuses;
  const { beachSpot1 } = rest.radiuses || null;
  const { beachSpot2 } = rest.radiuses || null;
  const mainSpotCoords = rest.coords.mainSpot;
  const bs1Coords = rest.coords?.beachSpot1;
  const bs2Coords = rest.coords?.beachSpot2;

  const [distanceToRest, setDistanceToRest] = useState({
    d: null,
    ac: null,
  });
  const [distanceToBS1, setDistanceToBS1] = useState({
    d: null,
    ac: null,
  });
  const [distanceToBS2, setDistanceToBS2] = useState({
    d: null,
    ac: null,
  });

  const options = {
    enableHighAccuracy: true,
  };

  const watchPosition = (options) => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(resolve, reject, options);
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  };

  const handlePositionSuccess = (
    successCallback,
    mainSpotCoords,
    setDistance,
    beachSpot
  ) => {
    console.log("successCallback", successCallback);
    const distanceToSpot = calculateDistance(
      mainSpotCoords,
      successCallback.coords
    );
    console.log(`Distance to ${beachSpot}: ${distanceToSpot}`);
    setDistance({
      ac: successCallback.coords.accuracy.toFixed(1),
      d: distanceToSpot.toFixed(1),
    });
  };

  const handlePositionError = (error) => {
    console.log("Geolocation error:", error);
  };

  watchPosition(options)
    .then((successCallback) => {
      handlePositionSuccess(
        successCallback,
        mainSpotCoords,
        setDistanceToRest,
        "main spot"
      );
      if (beachSpot1) {
        handlePositionSuccess(
          successCallback,
          bs1Coords,
          setDistanceToBS1,
          "beach spot 1"
        );
      }
      if (beachSpot2) {
        handlePositionSuccess(
          successCallback,
          bs2Coords,
          setDistanceToBS2,
          "beach spot 2"
        );
      }
    })
    .catch(handlePositionError);

  return (
    <>
      <BoxContainer>
        {" "}
        <h5>
          D1: <Span> {distanceToRest.d}</Span>
        </h5>
        <h5>
          R1: <Span> {mainSpot}</Span>{" "}
        </h5>
        {beachSpot1 && (
          <>
            <h5>
              D2: <Span>{distanceToBS1.d}</Span>
            </h5>
            <h5>
              R2: <Span>{beachSpot1}</Span>
            </h5>
          </>
        )}
      </BoxContainer>
      <BoxContainer>
        {beachSpot2 && (
          <>
            <h5>
              D3: <Span> {distanceToBS2.d}</Span>
            </h5>
            <h5>
              R3: <Span> {beachSpot2}</Span>
            </h5>
          </>
        )}
        <Divider color="primary.blue" />
        <h5>
          Acc: <Span>{distanceToRest.ac}</Span>
        </h5>
      </BoxContainer>
    </>
  );
}

export default Dev;
