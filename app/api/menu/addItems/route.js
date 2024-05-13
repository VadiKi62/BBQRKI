import { Rest } from "@models/rest";
import { Menu } from "@models/menu";
import { connectToDB } from "@utils/database";
import { justItems, justItemsLANGS } from "@utils/initialMenus";

//function to add new Items in ENG
export const GET = async (req, res) => {
  // const { restId, itemsToAdd } = req.body;
  const restId = "66094de341b392ba037d29c5";
  const itemsToAdd = justItemsLANGS;

  console.log("HITTED THE ROUTE");

  try {
    await connectToDB();
    console.log("ROUTE IS CONNECTED TO DB");
    const existingMenu = await Menu.findOne({ restId });
    console.log("menu exists");
    if (!existingMenu || existingMenu.menu.length === 0) {
      return new Response(
        "This menu  in Eng is not found OR this Restaurant not found",
        {
          status: 404,
        }
      );
    }

    // Find the English menu
    const engMenu = existingMenu.menu.find((menu) => menu.langKey === "en");
    console.log("engMenu exist");
    if (!engMenu) {
      return new Response("English menu not found", { status: 404 });
    }

    let engItems = engMenu.items.map((item) => ({
      menuNumber: item.menuNumber,
      title: item.title,
      category: item.category,
      price: item.price,
      subCategory: item.subCategory,
      ingredients: item.ingredients,
      image: item.image,
    }));

    let idsAlreadyExist = [];

    // Check each itemToAdd whether it exists in engItems based on menuNumber
    itemsToAdd.forEach((addItem) => {
      const exists = engItems.some(
        (item) => item.menuNumber === addItem.menuNumber
      );
      if (exists) {
        idsAlreadyExist.push(addItem.menuNumber);
      } else {
        // If it doesn't exist, add the new item to engItems
        engItems.push(addItem);
      }
    });

    // Update the database if there are new items to add
    if (idsAlreadyExist.length !== itemsToAdd.length) {
      // Assume Menu is a Mongoose model with a method to update a document
      await Menu.updateOne(
        { restId: restId, "menu.langKey": "en" },
        { $set: { "menu.$.items": engItems } }
      );
    }

    // Build a response string based on whether items were already existing
    const stringToReturn =
      idsAlreadyExist.length === 0
        ? "Success"
        : `Success! But following IDs of items already exist: ${idsAlreadyExist.join(
            ", "
          )}.`;

    return new Response(JSON.stringify(stringToReturn), { status: 200 });
  } catch (error) {
    return new Response(`Internal Server Error: ${JSON.stringify(error)} `, {
      status: 500,
    });
  }
};
