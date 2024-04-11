"use client";
import React, { useState } from "react";
import { calculateDistance, getRestCoords } from "@common/index";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
// import Typography from "./common/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useMainContext } from "./MainContextProvider";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";

const BoxContainer = styled(Box)(({ theme }) => ({
  marginTop: "-5rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  color: theme.palette.text.main,
  // borderColor: theme.palette.text.dark,
  // borderBlockStyle: "groove",
  zIndex: "22",
}));

const StackContainer = styled(Stack)(({ theme }) => ({
  marginTop: "-4rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  color: "red",
  zIndex: "212",
}));

const Span = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: "1.4rem",
}));

const Text = styled("h4")(({ theme }) => ({
  color: theme.palette.secondary.light,
  // marginTop: "-0.5rem",
  // paddingTop: "-1rem",
  fontSize: "1rem",
}));

function Dev({ rest }) {
  unstable_noStore();
  const { radius } = useMainContext();
  const mainSpot = radius;
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

  const getCurrentPosition = (options) => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
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
    const distanceToSpot = calculateDistance(
      mainSpotCoords,
      successCallback.coords
    );
    setDistance({
      ac: Math.round(successCallback.coords.accuracy),
      d: Math.round(distanceToSpot),
    });
  };

  const handlePositionError = (error) => {
    console.log("Geolocation error:", error);
  };

  getCurrentPosition(options)
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

  function isWithinRadius(d, r, a) {
    // console.log("d>r+a", Number(d) > r + Number(a));
    if (Number(d) > r + Number(a)) return <ErrorIcon color="error" />;
    else return <CheckCircleIcon color="success" />;
  }

  return (
    <Suspense>
      <BoxContainer>
        {" "}
        <Text>
          D1: <Span> {distanceToRest.d}</Span>
        </Text>
        {isWithinRadius(distanceToRest.d, mainSpot, distanceToRest.ac)}
        <Text>
          R1: <Span> {mainSpot}</Span>{" "}
        </Text>
      </BoxContainer>
      {beachSpot1 && (
        <BoxContainer>
          <Text>
            D2: <Span>{distanceToBS1.d}</Span>
          </Text>
          {isWithinRadius(distanceToBS1.d, beachSpot1, distanceToRest.ac)}
          <Text>
            R2: <Span>{beachSpot1}</Span>
          </Text>
        </BoxContainer>
      )}
      {beachSpot2 && (
        <BoxContainer>
          <Text>
            D3: <Span> {distanceToBS2.d}</Span>
          </Text>
          {isWithinRadius(distanceToBS2.d, beachSpot2, distanceToRest.ac)}
          <Text>
            R3: <Span> {beachSpot2}</Span>
          </Text>
        </BoxContainer>
      )}
      <BoxContainer>
        <Text>
          Acc: <Span>{distanceToRest.ac}</Span>
        </Text>
      </BoxContainer>
      <StackContainer>
        <Text>LIST OF WIFIS : </Text>
        {/* {wifiData.map((wifi, i) => (
          <p key={i}>{wifi} </p>
        ))} */}
      </StackContainer>
    </Suspense>
  );
}

export default Dev;
