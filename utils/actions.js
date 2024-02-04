import { Rest } from "@models/rest";
import { connectToDB } from "@utils/database";
import { unstable_noStore } from "next/cache";

export const API_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_LOCAL_API_BASE_URL
    : process.env.NEXT_PUBLIC_API_BASE_URL;

export const getRestaurants = async () => {
  const apiUrl = `${API_URL}/api/rests/all`;
  const data = await fetch(apiUrl, {
    cache: "no-store",
  });
  const rests = await data.json();
  return rests;
};

export const fetchRest = async (id) => {
  const apiUrl = `${API_URL}/api/rests/${id}`;
  const data = await fetch(apiUrl);
  const restData = await data.json();
  return restData;
};

export const getAll = async (request, { params }) => {
  "use server";
  unstable_noStore();
  try {
    await connectToDB();

    // Find all restaurants
    const restaurants = await Rest.find(
      {},
      { name: 1, pathName: 1, themeName: 1 }
    );

    if (!restaurants) {
      return new Response("Rest Not Found", { status: 404 });
    }

    return new Response(JSON.stringify(restaurants), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const getOne = async (name) => {
  "use server";
  unstable_noStore();

  try {
    await connectToDB();

    const rest = await Rest.findById(name);

    // const rest = await Rest.findOne({
    //   $or: [{ pathName: params.name }, { _id: params.name }, { shortname: params.name }],
    // });
    // const rest = await Rest.findOne({ shortname: params.name });

    if (!rest) {
      return "Rest Not Found", { status: 404 };
    }

    return JSON.stringify(rest), { status: 200 };
  } catch (error) {
    return "Internal Server Error", { status: 500 };
  }
};
