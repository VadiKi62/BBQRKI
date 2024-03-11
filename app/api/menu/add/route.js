import { Rest } from "@models/rest";
import { Menu } from "@models/menu";
import { generateCategories } from "@utils/functions";
import { menuArazo } from "@utils/initialMenus";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  try {
    await connectToDB();

    const menuData = menuArazo.menu.map((menuItem) => ({
      langKey: menuItem.langKey,
      items: menuItem.items.map((item) => ({
        menuNumber: item.id,
        image: item.image,
        title: item.title,
        price: item.price,
        category: item.category,
        subCategory: item?.subCategory,
        ingredients: item.ingredients,
      })),
    }));

    const data = {
      menu: menuData,
      restId: menuArazo.restId,
    };

    console.log("data.restId:", data.restId);

    const isRestExist = await Rest.findById(data.restId);
    if (!isRestExist) {
      console.log("this rest doesn't exist");
      return new Response("this menu doesn't exist", {
        status: 400,
      });
    }

    data.restName = isRestExist.name;

    const isMenuForRestexist = await Menu.findOne({ restId: data.restId });
    if (isMenuForRestexist) {
      console.log("this menu seems to exist");
      return new Response("this menu exist", {
        status: 300,
      });
    }
    const createdMenu = new Menu(data);
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
