import { Rest } from "@models/rest";
import { Menu } from "@models/menu";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  // const { restId, languages } = req.body;
  const restId = "66094de341b392ba037d29c5";
  const languages = ["es"];
  try {
    await connectToDB();

    const existingMenu = await Menu.findOne({ restId });
    // const existingRest = await Rest.findById({ _id: restId });
    if (!existingMenu || existingMenu.menu.length === 0) {
      return new Response(
        "This menu  in Eng is not found OR this Restaurant not found",
        {
          status: 404,
        }
      );
    }

    console.log(existingMenu);

    const engItems = existingMenu.menu
      .find((item) => item.langKey === "en")
      .items.map((item) => {
        const { menuNumber, title, price, category, subCategory, ingredients } =
          item;
        return {
          menuNumber,
          title,
          category,
          subCategory,
          ingredients,
        };
      });
    const newLanguageVersions = languages.map((language) => {
      return {
        langKey: language,
        items: engItems,
      };
    });
    await Menu.findByIdAndUpdate(existingMenu._id, {
      $push: { menu: { $each: newLanguageVersions } },
    });

    return new Response(JSON.stringify(newLanguageVersions), { status: 200 });
  } catch (error) {
    return new Response(`Internal Server Error: ${JSON.stringify(error)} `, {
      status: 500,
    });
  }
};
