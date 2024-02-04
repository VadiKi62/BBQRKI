import React from "react";
import Feed from "@app/components/Feed";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import Loading from "@app/components/Loading";
import { fetchRest } from "@utils/actions";

const RestPage = async () => {
  unstable_noStore();
  const restData = await fetchRest("65bbf5e5a3fd4816b80082a4");

  return (
    <Suspense fallback={<Loading />}>
      <Feed rest={restData} />
    </Suspense>
  );
};

export default RestPage;

// function extractRestaurantName(url) {
//   const start = "/restaurants/".length;
//   const end = url.indexOf("/", start);

//   return start !== -1 && end !== -1 ? url.substring(start, end) : null;
// }
