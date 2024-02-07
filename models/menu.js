import { Schema, model, models } from "mongoose";
import { Rest } from "./rest";

const menuItemSchema = new Schema({
  menuNumber: { type: Number, required: true },
  image: { type: String },
  title: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String },
  ingredients: { type: String, required: true },
});

// Menu Schema
const MenuSchema = new Schema({
  items: {
    type: Map,
    of: [
      {
        langKey: { type: String, required: true }, // Key for the language
        items: [menuItemSchema], // Array of menu items
      },
    ],
  },
  rest: { type: Schema.Types.ObjectId, ref: "Rest", required: true },
});

const Menu = models.Menu || model("Menu", MenuSchema);

export { MenuSchema, Menu };
