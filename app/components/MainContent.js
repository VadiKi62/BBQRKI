"use client";
import React from "react";
import HeroLayout from "./Hero/HeroLayout";
import Menu from "./Menu/Menu";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";
import Loading from "@app/components/common/Loaders/LoadingScreen";
import { fetchMenu } from "@utils/actions";

function MainContent({ rest, menuData, wifiData }) {
  unstable_noStore();
  const isMenu = Boolean(rest.menu);

  // if (isMenu) {
  //   menuData = await fetchMenu(rest._id);
  // }
  return (
    // <div>
    <Suspense fallback={<Loading restData={rest} />}>
      <HeroLayout rest={rest} wifiData={wifiData} />
      {isMenu && <Menu menuData={menuData} />}
    </Suspense>
    // </div>
  );
}

export default MainContent;
