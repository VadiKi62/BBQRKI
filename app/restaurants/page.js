import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@app/page.module.css";
import { getRestaurants } from "@utils/actions";

async function RestaurantsPage() {
  // const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/rests/all`;
  // const data = await fetch(apiUrl, {
  //   cache: "no-store",
  // });
  // const rests = await data.json();
  const rests = await getRestaurants();
  const menuRests = [
    { Argo: "http://dusha-roan.vercel.app/?zont=test" },
    { Arazo: "https://arazo.netlify.app/?zont=test" },
    { Pirates: "https://pirates-beach.netlify.app/?zont=test" },
  ];

  return (
    <>
      <div className="centered-container">
        <h1 className="custom-heading slide-in-blurred-top ">
          Apps with menus and buttons
        </h1>
      </div>
      <div className={styles.grid}>
        {menuRests.map((rest) => {
          const [restaurant, url] = Object.entries(rest)[0];
          return (
            <div
              key={restaurant}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Image
                src="/favicon.png"
                alt="bb qr code ki"
                className="spinning-icon bounce-in-left "
                width={39}
                height={39}
              />
              <a href={url} target="_blank" rel="noopener noreferrer">
                {restaurant}
              </a>
            </div>
          );
        })}
      </div>
      <div className="centered-container slide-in-blurred-top">
        <h1 className="custom-heading">Apps with BUTTONS only</h1>
      </div>
      <div className={styles.grid}>
        {rests.map((rest) => (
          <Link key={rest._id} href={`/restaurants/${rest.pathName}`}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/favicon.png"
                alt="bb qr code ki"
                className="spinning-icon bounce-in-left"
                width={39}
                height={39}
              />
              <h2>{rest.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default RestaurantsPage;
