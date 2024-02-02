import React from "react";
import Feed from "@app/components/Feed";

const RestPage = async () => {
  const r = "65aba169c9cc5d6dd5635e2c";
  const apiUrl = `http://localhost:3000/api/rests/${r}`;

  const data = await fetch(apiUrl);
  const restData = await data.json();

  return <Feed rest={restData} />;
};

export default RestPage;

// function extractRestaurantName(url) {
//   const start = "/restaurants/".length;
//   const end = url.indexOf("/", start);

//   return start !== -1 && end !== -1 ? url.substring(start, end) : null;
// }
