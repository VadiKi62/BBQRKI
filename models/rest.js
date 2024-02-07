import { Schema, model, models } from "mongoose";
import { MenuSchema } from "./menu";

const RestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  slogan: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  coords: {
    type: {
      mainSpot: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
      },
      beachSpot1: {
        latitude: { type: Number },
        longitude: { type: Number },
      },
      beachSpot2: {
        latitude: { type: Number },
        longitude: { type: Number },
      },
    },
  },
  radiuses: {
    type: {
      mainSpot: { type: Number, required: true },
      beachSpot1: { type: Number },
      beachSpot2: { type: Number },
    },
    required: true,
  },
  datesBeachSpot: {
    type: {
      start: { type: Date },
      end: { type: Date },
    },
  },
  menu: {
    type: MenuSchema,
  },
  backendEndpoints: {
    type: { waiter: { type: String }, bill: { type: String } },
    required: true,
  },
  chat_id: { type: String, required: true },
  pathName: { type: String, required: true },
  themeName: { type: String, required: true },
  app: {
    type: {
      about: { type: Boolean, default: false },
      buttonWaiter: { type: Boolean, default: true },
      buttonBill: { type: Boolean, default: true },
      buttonSisha: { type: Boolean, default: false },
      numberOfTables: {
        inside: { type: Number },
        outside: { type: Number },
      },
    },
  },
});

const Rest = models.Rest || model("Rest", RestSchema);

export { RestSchema, Rest };
