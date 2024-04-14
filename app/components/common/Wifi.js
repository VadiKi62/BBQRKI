"use client";
import React, { useState, useEffect } from "react";

export default function Wifi() {
  const [ssids, setSsids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/wifi")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.ssids) {
          setSsids(data.ssids);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Wi-Fi networks:", error);
        setError("Error fetching Wi-Fi networks. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ul>
        {ssids.map((ssid, index) => (
          <p key={index}>{ssid}</p>
        ))}
      </ul>
    </div>
  );
}
