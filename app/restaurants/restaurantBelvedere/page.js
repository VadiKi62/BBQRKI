import React from "react";
import Feed from "@app/components/Feed";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import Loading from "@app/components/Loading";
import { fetchRest } from "@utils/actions";
import { getOne } from "@lib/actions";

const RestPage = async () => {
  unstable_noStore();
  const restData = await fetchRest("65bbf57ca3fd4816b800829c");
  console.log("hthis is from page restaurant Belvedere", restData);

  return (
    <Suspense fallback={<Loading />}>
      <Feed rest={restData}> </Feed>
    </Suspense>
  );
};

export default RestPage;

// function extractRestaurantName(url) {
//   const start = "/restaurants/".length;
//   const end = url.indexOf("/", start);

//   return start !== -1 && end !== -1 ? url.substring(start, end) : null;
// }
