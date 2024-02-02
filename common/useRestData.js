// import { useMainContext } from "@app/components/Context";

// export async function useRestData(id) {
//   let rest;
//   try {
//     rest = await fetchAndSetRest(id);
//   } catch (err) {
//     console.err(err);
//     alarm("wait, the restaurant has not been fetched from the Database yet");
//   }

//   return {
//     rest,
//   };
// }

export async function fetchAndSetRest(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`/api/rests/${id}`);
    const data = await response.json();
    console.log("rest from HOOK ", data);
    resolve(data);
  });
}
