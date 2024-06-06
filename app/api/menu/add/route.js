import { Rest } from "@models/rest";
import { Menu } from "@models/menu";
import { generateCategories } from "@utils/functions";
import { initialMenu, justMenu, bloomMenuEn } from "@utils/initialMenus";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  try {
    await connectToDB();

    const menuData = bloomMenuEn.menu.map((menuItem) => ({
      langKey: menuItem.langKey,
      items: menuItem.items.map((item) => ({
        menuNumber: item?.id || item?.menuNumber,
        image: item.image,
        title: item.title,
        price: item.price,
        price1: item.price1,
        category: item.category,
        subCategory: item?.subCategory,
        ingredients: item.ingredients,
      })),
    }));

    const data = {
      menu: menuData,
      restId: "664bafcc5f663ca962e83bb9",
    };

    console.log("data.restId:", data.restId);

    const isRestExist = await Rest.findById(data.restId);
    if (!isRestExist) {
      console.log("this rest doesn't exist");
      return new Response("this rest doesn't exist", {
        status: 400,
      });
    }

    data.restName = isRestExist.name;

    const isMenuForRestexist = await Menu.findOne({ restId: data.restId });
    if (isMenuForRestexist) {
      console.log("this menu seems to exist");
      return new Response("this menu exists", {
        status: 300,
      });
    }
    console.log(data);
    const createdMenu = new Menu(data);
    console.log(createdMenu.menu[0].items[107]);
    isRestExist.menu = createdMenu._id;
    await createdMenu.save();
    await isRestExist.save();

    return new Response("SUCCESSSSSS", { status: 200 });
  } catch (error) {
    return new Response(`Internal Server Error: ${JSON.stringify(error)} `, {
      status: 500,
    });
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const menu = await Menu.findById("65d08cf6a4f11da6ca9efa1e").exec();
    if (!menu) {
      return new Response("menu wasn't found", { status: 404 });
    }

    const result = generateCategories(menu.menu);

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(`Internal Server Error: ${JSON.stringify(error)} `, {
      status: 500,
    });
  }
};
