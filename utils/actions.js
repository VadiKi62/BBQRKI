export const getRestaurants = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/rests/all`;
  const data = await fetch(apiUrl, {
    cache: "no-store",
  });
  const rests = await data.json();
  return rests;
};

export const fetchRest = async (id) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/rests/${id}`;
  const data = await fetch(apiUrl);
  const restData = await data.json();
  return restData;
};
