import { Rest } from "@models/rest";
import { connectToDB } from "@utils/database";
import { clearPreviewData } from "next/dist/server/api-utils";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    console.log("params!!!", params);

    const rest = await Rest.findOne({ pathName: params.pathname });

    if (!rest) {
      return new Response("Rest Not Found", { status: 404 });
    }

    return new Response(JSON.stringify(rest), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
