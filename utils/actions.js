import { generateCategories } from "@utils/functions";

export const API_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_LOCAL_API_BASE_URL
    : process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchRestaurants = async () => {
  try {
    const apiUrl = `${API_URL}/api/rests/all`;

    const data = await fetch(apiUrl, {
      next: { revalidate: 60 },
    });
    if (!data.ok) {
      throw new Error("Failed to fetch restaurants");
    }
    const rests = await data.json();
    return rests;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchRest = async (id) => {
  try {
    const apiUrl = `${API_URL}/api/rests/${id}`;
    const data = await fetch(apiUrl, {
      next: { revalidate: 60 },
    });
    if (!data.ok) {
      throw new Error(`Failed to fetch restaurant with ID ${id}`);
    }
    const restData = await data.json();
    console.log("restData from ACTIONS", restData);
    return restData;
  } catch (error) {
    console.error(`Error fetching restaurant with ID ${id}:`, error);
    throw error;
  }
};

export const fetchRestByPath = async (path) => {
  try {
    const apiUrl = `${API_URL}/api/rests/findpathname/${path}`;
    const data = await fetch(apiUrl, {
      next: { revalidate: 60 },
    });
    if (!data.ok) {
      throw new Error(`Failed to fetch restaurant with pathname ${path}`);
    }
    const restData = await data.json();
    return restData;
  } catch (error) {
    console.error(`Error fetching restaurant with path ${path}:`, error);
    throw error;
  }
};

export const fetchMenu = async (restId) => {
  try {
    const apiUrl = `${API_URL}/api/menu/${restId}`;
    const data = await fetch(apiUrl);
    if (!data.ok) {
      throw new Error(`Failed to fetch menu of the rest with id ${restId}`);
    }
    const menuData = await data.json();
    return menuData;
  } catch (error) {
    console.error(`Error fetching restaurant with path ${path}:`, error);
    throw error;
  }
};
