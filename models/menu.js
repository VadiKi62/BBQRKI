import { Schema, model, models } from "mongoose";

const menuItemSchema = new Schema({
  id: { type: Number, required: true },
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
    of: [menuItemSchema],
    required: true,
  },
  rest: { type: Schema.Types.ObjectId, ref: "Rest", required: true },
});

const Menu = models.Menu || model("Menu", MenuSchema);

export { MenuSchema, Menu };
