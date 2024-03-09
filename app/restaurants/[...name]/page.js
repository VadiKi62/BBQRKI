import React from "react";
import { fetchRestByPath } from "@utils/actions";
import Feed from "@app/components/Feed";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import Loading from "@app/components/common/Loaders/LoadingScreen";

export const generateMetadata = async ({ params }) => {
  const { name } = params;

  const rest = await fetchRestByPath(name);

  return {
    title: rest.name,
    description: rest.slogan,
  };
};

async function RestPage({ params }) {
  unstable_noStore();
  const restData = await fetchRestByPath(params.name);
  console.log("rest from page/rest", restData);

  return (
    <Suspense fallback={<Loading restData={restData} />}>
      <Feed rest={restData}> </Feed>
    </Suspense>
  );
}

export default RestPage;
