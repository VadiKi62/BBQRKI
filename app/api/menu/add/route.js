import { Rest } from "@models/rest";
import { Menu } from "@models/menu";
import { menuArazo } from "@utils/initialMenus";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

// export const POST = async (request) => {
//   try {
//     await connectToDB();

//     const restaurantId = "65c250c08e563cf4e96da60b";
//     const lang = "en";
//     const menuItems = menuArazo[lang];

//     const mappedMenuItems = menuItems.reduce((acc, item) => {
//       acc[item.id] = [item];
//       return acc;
//     }, {});

//     const createdMenu = await Menu.create({
//       items: mappedMenuItems,
//       rest: restaurantId,
//     });
//     // Retrieve the restaurant
//     const restaurant = await Rest.findById(restaurantId);

//     // Update the restaurant's menu field with the new menu ID
//     restaurant.menu = createdMenu;

//     // Save the updated restaurant document
//     await restaurant.save();

//     return NextResponse.json(
//       { message: "Menu items added successfully", menu: createdMenu },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error adding menu items:", error);
//     return NextResponse.json(
//       { message: `Internal Server Error : ${error}` },
//       { status: 500 }
//     );
//   }
// };
