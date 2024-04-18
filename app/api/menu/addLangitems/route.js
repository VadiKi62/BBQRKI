import { Rest } from "@models/rest";
import { Menu } from "@models/menu";
import { connectToDB } from "@utils/database";
import { justItemsToAdd } from "@utils/initialMenus";

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

export const GET = async (req, res) => {
  // const { restId, itemsToAdd } = req.body;
  const restId = "66094de341b392ba037d29c5";
  const itemsToAdd = justItemsToAdd;

  try {
    await connectToDB();
    const existingMenu = await Menu.findOne({ restId });
    if (!existingMenu || existingMenu.menu.length === 0) {
      return new Response(
        "This menu  in Eng is not found OR this Restaurant not found",
        {
          status: 404,
        }
      );
    }

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

    // Function to check langKeys in incoming items and if they already exist in existingMenu then delete them and substitute with new ones
    const checkAndUpdateLangKeys = () => {
      itemsToAdd.forEach(({ items, language }) => {
        const existingLanguageIndex = existingMenu.menu.findIndex(
          (item) => item.langKey === language
        );
        if (existingLanguageIndex !== -1) {
          // Language key already exists, delete and replace
          existingMenu.menu.splice(existingLanguageIndex, 1);
        }
      });
    };

    //function to check if in justItemsToAdd (that is array of objects), in each lang version there is the same items with menuNumber as in engItems, if so add them and if not then to add items from engItems
    const newItems = engItems;

    const newLanguageVersions = itemsToAdd.map(({ items, language }) => {
      return {
        langKey: language,
        items: newItems,
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
