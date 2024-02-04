import React from "react";
import Feed from "@app/components/Feed";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import Loading from "@app/components/Loading";
import { fetchRest } from "@utils/actions";

const RestPage = async ({ params }) => {
  unstable_noStore();
  const restData = await fetchRest("65bbf5faa3fd4816b80082ac");

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
