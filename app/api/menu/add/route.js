import { Rest } from "@models/rest";
import { Menu } from "@models/menu";
import { menuArazo } from "@utils/initialMenus";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  console.log("Helo");
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
        ingredients: item.ingredients,
      })),
    }));

    const data = {
      menu: menuData,
      restId: menuArazo.restId,
    };

    console.log("data.restId:", data.restId);

    const isMenuForRestexist = await Menu.findOne({ restId: data.restId });
    if (isMenuForRestexist) {
      console.log("this menu seems to exist");
      return new Response("this menu exist", {
        status: 300,
      });
    }
    const createdMenu = new Menu(data);
    await createdMenu.save();

    return new Response("SUCCESSSSSS", { status: 200 });
  } catch (error) {
    return new Response(`Internal Server Error: ${JSON.stringify(error)} `, {
      status: 500,
    });
  }
};
