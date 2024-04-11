import React from "react";
import { fetchRestByPath, fetchMenu, fetchWifi } from "@utils/actions";
import Feed from "@app/components/Feed";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import Loading from "@app/components/common/Loaders/LoadingScreen";

export const generateMetadata = async ({ params }) => {
  const { name } = params;

  const rest = await fetchRestByPath(name);
  let title = `${rest.name}`;
  if (rest.menu) {
    title = `${rest.name} with menu`;
  }

  return {
    title: { title },
    description: rest.slogan,
  };
};

async function RestPage({ params }) {
  unstable_noStore();
  const restData = await fetchRestByPath(params.name);
  let menuData = null;
  if (restData.menu) {
    menuData = await fetchMenu(restData._id);
  }

  return (
    <Suspense fallback={<Loading restData={restData} />}>
      <Feed rest={restData} menu={menuData} wifiData={wifiData}>
        {" "}
      </Feed>
    </Suspense>
  );
}

export default RestPage;
