import React from "react";
export function isLocationWithinRadius(lat1, lon1, lat2, lon2, radiusInMeters) {
  // Radius of the Earth in meters
  const earthRadius = 6371000;
  // Convert latitude and longitude from degrees to radians
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  // Calculate the distance using the Haversine formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance in meters
  const distance = earthRadius * c;

  // Check if the distance is within the specified radius
  return distance <= radiusInMeters;
}

export function findPreferredLanguage() {
  const preferredLanguages = navigator.languages;

  const appLanguages = ["el", "ru", "de"];

  let lastMatchedLanguage = null;

  for (const language of preferredLanguages) {
    const normalizedLanguage = language.toLowerCase();

    const matchedLanguage = appLanguages.find((appLanguage) =>
      normalizedLanguage.includes(appLanguage)
    );

    if (matchedLanguage) {
      lastMatchedLanguage = matchedLanguage;
    }
  }

  // If no match is found, return a default language (e.g., 'en' for English).
  return lastMatchedLanguage || "en";
}

export function getLongLanguageName(shortCode) {
  const languageMap = {
    en: "English",
    de: "Deutsch",
    ru: "Russian",
    el: "Ελληνικά",
    se: "Serbian",
    ua: "Ukrainian",
  };
  return languageMap[shortCode] || shortCode;
}

export function calculateDistance(coord1, coord2) {
  const { latitude: lat1, longitude: lon1 } = coord1;
  const { latitude: lat2, longitude: lon2 } = coord2;

  // Radius of the Earth in meters
  const R = 6371000;

  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in meters

  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export function useTimer({ expirationSeconds, onExpire }) {
  const [secondsLeft, setSecondsLeft] = React.useState(expirationSeconds);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
      if (secondsLeft === 0) {
        onExpire();
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft, onExpire]);

  return secondsLeft;
}

export async function getConnectedSSID() {
  try {
    // Try frontend API
    //   const conn =
    //     navigator.connection ||
    //     navigator.mozConnection ||
    //     navigator.webkitConnection;
    //   if (conn.ssid) return conn.ssid;

    // Fallback to getting from backend
    const res = await fetch(`/api/get-ssid`);
    console.log("res is :", res);
    const data = await res.json();
    console.log("data is ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const handleButtonSpecificLogic = (
  setButtonActive,
  setCountdown,
  countTimer,
  button
) => {
  const b = button === "Bill" ? "ButtonBill" : "WaiterButton";
  // Update button state
  setButtonActive(false);

  // Store start time in localStorage
  const startTime = Math.floor(new Date().getTime() / 1000);
  localStorage.setItem(`StartTime${button}`, startTime.toString());
  setCountdown(countTimer);
  localStorage.setItem(`is${b}Active`, JSON.stringify(false));
};

export const getRestCoords = (contacts) => {
  const { mainSpot, ...rest } = contacts.coords;
  return [mainSpot, rest];
};
