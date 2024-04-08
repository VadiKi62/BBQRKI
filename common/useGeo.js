"use client";
import { cloneElement, useEffect, useState } from "react";
import { calculateDistance, getRestCoords } from "./index";
import workingTimeChecker from "./workingTimeChecker";

export default function useGeo(r, restaurant, zont, isHighSeason) {
  const [currentPosition, setCurrentPosition] = useState({
    accuracy: null,
    distanceToRest: null,
  });

  console.log("isHighSeason", isHighSeason);
  console.log(restaurant.datesBeachSpot);
  const { startTime, endTime } = restaurant?.workingTimeBeachSpots;

  const isWorkingTimeForBeach = workingTimeChecker(startTime, endTime);

  const [isGeolocationAvailable, setIsGeolocationAvailable] = useState(false);
  const [radius, setRadius] = useState(r || restaurant?.radiuses?.restSpot);
  const updateGeolocation = () => {
    if (!restaurant.useGeo) {
      setIsGeolocationAvailable(true);
      setCurrentPosition({ accuracy: 11, distanceToRest: 1 });
    }

    const [mainSpot, rest] = getRestCoords(restaurant);

    const options = {
      enableHighAccuracy: true,
    };

    new Promise((resolve, reject) => {
      navigator.geolocation.watchPosition(resolve, reject, options);
    })
      .then((successCallback) => {
        if (
          Object.keys(rest).length === 0 ||
          !isHighSeason ||
          !isWorkingTimeForBeach
        ) {
          // If rest is empty, calculate distance for restSpot only
          const distanceToRest = calculateDistance(
            mainSpot,
            successCallback.coords
          );

          setCurrentPosition({
            accuracy:
              successCallback.coords.accuracy > 50
                ? 33
                : successCallback.coords.accuracy,
            distanceToRest: distanceToRest,
          });
        } else {
          // If rest is not empty, calculate distance for each spot
          const distances = Object.entries(rest).map(([key, spot]) => {
            const distance = calculateDistance(spot, successCallback.coords);
            return { key, distance };
          });

          // Find the spot with the minimal distance
          const minDistanceSpot = distances.reduce(
            (min, curr) => (curr.distance < min.distance ? curr : min),
            distances[0]
          );

          setCurrentPosition({
            accuracy:
              successCallback.coords.accuracy > 50
                ? 33
                : successCallback.coords.accuracy,
            distanceToRest: minDistanceSpot.distance,
          });

          setRadius(restaurant.radiuses[minDistanceSpot.key]);
        }

        setIsGeolocationAvailable(true);
      })
      .catch((error) => {
        console.log("Geolocation error:", error);
        setIsGeolocationAvailable(false);
      });
  };

  useEffect(() => {
    if (zont) {
      // Fetch geolocation on mount or when zont changes
      updateGeolocation();
    }
    // eslint-disable-next-line
  }, [zont]);

  return {
    currentPosition,
    isGeolocationAvailable,
    updateGeolocation,
    radius,
    setRadius,
  };
}
