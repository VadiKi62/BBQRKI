import { Rest } from "@models/rest";
import { Menu } from "@models/menu";
import { connectToDB } from "@utils/database";
import {
  justItemsToAddSe,
  justItemsToAddDe,
  justItemsToAddEl,
  justItemsToAddRu,
  justItemsToAddRo,
} from "@utils/initialMenus";

export const GET = async (req, res) => {
  // const { restId, itemsToAdd } = req.body;
  const restId = "66094de341b392ba037d29c5";
  const itemsToAdd = justItemsToAddEl;

  try {
    await connectToDB();
    const existingMenu = await Menu.findOne({ restId });
    if (!existingMenu || existingMenu.menu.length === 0) {
      return new Response(
        "This menu  in Eng is not found OR this Restaurant not found. Please add first End variant of Menu and then the rest translations",
        {
          status: 404,
        }
      );
    }

    const engItems = existingMenu.menu
      .find((item) => item.langKey === "en")
      .items.map((item) => {
        const { menuNumber, title, category, price, subCategory, ingredients } =
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
      itemsToAdd.forEach(({ items, langKey }) => {
        const existingLanguageIndex = existingMenu.menu.findIndex(
          (item) => item.langKey === langKey
        );
        if (existingLanguageIndex !== -1) {
          // Language key already exists, delete its object from the array
          existingMenu.menu.splice(existingLanguageIndex, 1);
        }
      });
    };
    checkAndUpdateLangKeys();
    //function to check if in justItemsToAdd (that is array of objects), in each lang version there is the same items with menuNumber as in engItems, if so add them and if not then to add items from engItems
    // const newItems = engItems;

    let idsOfnotTranslated = [];
    const addNewItemsToLanguages = async () => {
      try {
        itemsToAdd.forEach(({ items, langKey }) => {
          const engIndex = existingMenu.menu.findIndex(
            (item) => item.langKey === "en"
          );

          const ifLangEntryExist = existingMenu.menu.find((langVersion) => {
            langVersion.langKey == langKey;
          });

          if (!ifLangEntryExist) {
            // Create a new language entry if it doesn't exist
            existingMenu.menu.push({ langKey: langKey, items: [] });
          }

          const languageIndex = existingMenu.menu.findIndex(
            (item) => item.langKey === langKey
          );
          console.log("langIndex", languageIndex);

          // Update or add items based on engItems
          items.forEach((newItem) => {
            // Check if the newItem id exists in existing Eng items based on menuNumber, if not - not add it
            const checkWithEngIds = existingMenu.menu[engIndex].items.find(
              (engItem) => engItem.menuNumber === newItem.menuNumber
            );
            if (checkWithEngIds) {
              // If the newItem doesn't exist, add it
              existingMenu.menu[languageIndex].items.push(newItem);
            }
          });

          // Check for missing items in new items and copy them from engItems
          engItems.forEach((engItem) => {
            const existingItemIndex = existingMenu.menu[
              languageIndex
            ].items.findIndex(
              (existingItem) => existingItem.menuNumber === engItem.menuNumber
            );
            if (existingItemIndex === -1) {
              // If the item from engItems doesn't exist, add it to new items
              existingMenu.menu[languageIndex].items.push(engItem);
              idsOfnotTranslated.push(engItem.menuNumber);
            }
          });
        });
        await existingMenu.save();
        console.log("Menu updated successfully in the database.");
      } catch (error) {
        console.error("Error updating menu in the database:", error);
      }
    };

    await addNewItemsToLanguages();

    const stringToReturn =
      idsOfnotTranslated.length < 1
        ? "Success"
        : `Success! But following IDs of items were not provided for translation, they are substituded with English variants :  ${idsOfnotTranslated}.`;

    return new Response(JSON.stringify(stringToReturn), { status: 200 });
  } catch (error) {
    return new Response(`Internal Server Error: ${JSON.stringify(error)} `, {
      status: 500,
    });
  }
};

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
