// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Cellid() {
//   // Initialize variables
//   const searchParams = {
//     ssid: "COSMOTE-125469", // Replace with the SSID of the WiFi network you're searching for
//     pageSize: 100, // Adjust as needed
//     // Add any other search parameters as needed
//   };
//   const searchUrl = "https://api.wigle.net/search";
//   const headers = {
//     Authorization:
//       'Basic QUlENjNkMjM3ZjNlZGJiZjlmMTE3NDA3NzVkNzVhNmRjMDQ6OTVhMTlmZGFiYzQ2OTFlMjk4OGU3NzcxZDUwOTYyZDM="',
//   };

//   let ddd = "";
//   // Function to perform search and extract wifiNetworkId
//   async function performSearchAndGetNetworkId() {
//     try {
//       const response = await fetch(
//         searchUrl + "?" + new URLSearchParams(searchParams),
//         {
//           headers: headers,
//         }
//       );
//       const data = await response.json();

//       // Extract wifiNetworkId from the search results
//       const wifiNetworkId = data.results[0].wifiNetworkId; // Assuming you want the first result
//       console.log("wifiNetworkId:", wifiNetworkId);
//       ddd = wifiNetworkId;

//       // Now you can use wifiNetworkId to make further requests for detailed information
//       // For example:
//       // const detailedInfoUrl = `https://api.wigle.net/network/${wifiNetworkId}`;
//       // const detailedInfoResponse = await fetch(detailedInfoUrl, { headers: headers });
//       // const detailedInfoData = await detailedInfoResponse.json();
//       // console.log('Detailed Info:', detailedInfoData);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   // Execute the function
//   performSearchAndGetNetworkId();
//   return <>{ddd}</>;
// }

// // export default function Cellid() {
// //   const [d, setData] = useState();
// //   // Initialize variables
// //   const wifiNetworkId = "coffeeisland"; // Replace with the actual network ID
// //   const url = `https://api.wigle.net/network/${wifiNetworkId}`;
// //   const headers = {
// //     Authorization:
// //       "Basic QUlENjNkMjM3ZjNlZGJiZjlmMTE3NDA3NzVkNzVhNmRjMDQ6OTVhMTlmZGFiYzQ2OTFlMjk4OGU3NzcxZDUwOTYyZDM=",
// //   };

// //   // Function to make request
// //   async function getRequest() {
// //     try {
// //       const response = await fetch(url, {
// //         headers: headers,
// //       });

// //       // Check response status
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       const data = await response.json();
// //       processResponse(data);
// //     } catch (error) {
// //       console.error("Error:", error.message);
// //     }
// //   }

// //   // Function to process response
// //   function processResponse(data) {
// //     // Your processing logic here
// //     console.log(data);
// //     setData(data);
// //   }

// //   // Execute the request
// //   getRequest();

// //   return <>{d}</>;
// // }

// // export default function Cellid() {
// //   const [result, setResult] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   //   useEffect(() => {
// //   //     fetch("/api/wifi")
// //   //       .then((response) => {
// //   //         if (!response.ok) {
// //   //           throw new Error("Network response was not ok");
// //   //         }
// //   //         return response.json();
// //   //       })
// //   //       .then((data) => {
// //   //         if (data.ssids) {
// //   //           setSsids(data.ssids);
// //   //         }
// //   //         setLoading(false);
// //   //       })
// //   //       .catch((error) => {
// //   //         console.error("Error fetching Wi-Fi networks:", error);
// //   //         setError("Error fetching Wi-Fi networks. Please try again later.");
// //   //         setLoading(false);
// //   //       });
// //   //   }, []);

// //   //   if (loading) {
// //   //     return <p>Loading...</p>;
// //   //   }

// //   //   if (error) {
// //   //     return <p>{error}</p>;
// //   //   }

// //   const MCC = 202;
// //   const MNC = 5;
// //   const LAC1 = 4019;
// //   const CID1 = 420867;
// //   const LAC2 = 4019;
// //   const CID2 = 420866;
// //   const LAC3 = 20410; // LAC for the third tower
// //   const CID3 = 54774; // CID for the third tower
// //   const API_KEY = "pk.0f095fadff82f14b642f29abe9ea823d";
// //   const RANGE = 1000; // Range in meters

// //   // Construct the API request URL
// //   const url = `https://ap1.unwiredlabs.com/v2/process.php?key=${API_KEY}&mcc=${MCC}&mnc=${MNC}&cells=${LAC1},${CID1}|${LAC2},${CID2}|${LAC3},${CID3}&range=${RANGE}`;

// //   console.log(url);

// //   axios
// //     .get(url)
// //     .then((response) => {
// //       console.log(response.data);
// //     })
// //     .catch((error) => {
// //       console.error("Error fetching tower information:", error);
// //     });
// //   // Send the API request
// //   //   axios
// //   //     .get(url)
// //   //     .then((response) => {
// //   //       console.log(response);
// //   //       const towers = response.data.cells;
// //   //       const deviceLatitude = 40.309524536133; // Device latitude
// //   //       const deviceLongitude = 23.062362670898; // Device longitude

// //   //       // Check if the device is within the range of any towers
// //   //       const isWithinRange = towers.some((tower) => {
// //   //         const towerLatitude = tower.lat;
// //   //         const towerLongitude = tower.lon;
// //   //         const distance = calculateDistance(
// //   //           deviceLatitude,
// //   //           deviceLongitude,
// //   //           towerLatitude,
// //   //           towerLongitude
// //   //         );
// //   //         return distance <= RANGE;
// //   //       });

// //   //       if (isWithinRange) {
// //   //         setLoading(false);
// //   //         setResult(
// //   //           "Device is located within the range of the specified towers."
// //   //         );
// //   //         console.log(
// //   //           "Device is located within the range of the specified towers."
// //   //         );
// //   //       } else {
// //   //         setLoading(false);
// //   //         setResult(
// //   //           "Device is not located within the range of the specified towers."
// //   //         );
// //   //         console.log(
// //   //           "Device is not located within the range of the specified towers."
// //   //         );
// //   //       }
// //   //     })
// //   //     .catch((error) => {
// //   //       console.error("Error fetching tower information:", error);
// //   //     });

// //   //   Function to calculate distance between two points (Haversine formula)
// //   function calculateDistance(lat1, lon1, lat2, lon2) {
// //     const R = 6371e3; // Earth's radius in meters
// //     const φ1 = (lat1 * Math.PI) / 180;
// //     const φ2 = (lat2 * Math.PI) / 180;
// //     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
// //     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

// //     const a =
// //       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
// //       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
// //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

// //     const distance = R * c;
// //     return distance;
// //   }

// //   return (
// //     <div>
// //       {/* {ssids.map((ssid, index) => (
// //         <p key={index}>{ssid}</p>
// //       ))} */}
// //       {result}
// //     </div>
// //   );
// // }
