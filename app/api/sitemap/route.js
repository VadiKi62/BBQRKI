import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

import fs from "fs";
import path from "path";

// export const GET = async (req, res) => {
//   const filePath = path.join(process.cwd(), "public", "sitemap.xml");

//   try {
//     const fileContents = fs.readFileSync(filePath, "utf8");
//     const response = new Response(fileContents, {
//       status: 200,
//       headers: { "Content-Type": "application/xml" },
//     });

//     return response;
//   } catch (error) {
//     console.error(error);
//     return new Response("Internal Server Error");
//   }
// };

export const GET = async (req, res) => {
  try {
    const hostname = "https://www.bbqr.site";
    const links = [
      { url: "/", changefreq: "daily", priority: 1 },
      { url: "/restaurants/corleone", changefreq: "monthly", priority: 0.7 },
      { url: "/restaurants/just", changefreq: "monthly", priority: 0.7 },
      { url: "/restaurants/bloom", changefreq: "monthly", priority: 0.7 },
    ];

    const stream = new SitemapStream({ hostname });

    const data = await streamToPromise(Readable.from(links).pipe(stream));

    const response = new Response(data, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error");
  }
};
