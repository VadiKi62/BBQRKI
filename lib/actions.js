import { Rest } from "@models/rest";
import { connectToDB } from "@utils/database";
import { unstable_noStore } from "next/cache";

export const getOne = async (name) => {
  // "use server";

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
