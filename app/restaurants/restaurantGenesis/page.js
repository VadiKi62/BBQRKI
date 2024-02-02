import React from "react";
import Feed from "@app/components/Feed";

const RestPage = async () => {
  const r = "65bbf5faa3fd4816b80082ac";
  const apiUrl = `http://localhost:3000/api/rests/${r}`;

  const data = await fetch(apiUrl);
  const restData = await data.json();
  console.log("restData", restData);

  return <Feed rest={restData}> </Feed>;
};

export default RestPage;

// function extractRestaurantName(url) {
//   const start = "/restaurants/".length;
//   const end = url.indexOf("/", start);

//   return start !== -1 && end !== -1 ? url.substring(start, end) : null;
// }
