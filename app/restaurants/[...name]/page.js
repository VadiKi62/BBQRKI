import React from "react";
import { fetchRestByPath } from "@utils/actions";
import Feed from "@app/components/Feed";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import Loading from "@app/components/Loading";

export const generateMetadata = async ({ params }) => {
  const { name } = params;

  const rest = await fetchRestByPath(name);

  return {
    title: rest.name,
    description: rest.slogan,
  };
};

async function page({ params }) {
  unstable_noStore();
  const restData = await fetchRestByPath(params.name);

  console.log("this is from the NAME");
  return (
    <Suspense fallback={<Loading />}>
      <Feed rest={restData}> </Feed>
    </Suspense>
  );
}

export default page;
