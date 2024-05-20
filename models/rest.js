import { Schema, model, models } from "mongoose";
import { MenuSchema } from "./menu";

const TableChatSchema = new Schema({
  tableFrom: {
    type: Number,
    required: true,
  },
  tableTill: {
    type: Number,
    required: true,
  },
  chatId: {
    type: String,
    required: true,
  },
});

const RestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  waiterTableMap: { type: [TableChatSchema], default: null },
  slogans: [{ type: String }],
  logoSrc: { type: String, default: null },
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
        latitude: { type: Number, default: null },
        longitude: { type: Number, default: null },
      },
      beachSpot2: {
        latitude: { type: Number, default: null },
        longitude: { type: Number, default: null },
      },
    },
  },
  radiuses: {
    type: {
      mainSpot: { type: Number, required: true, default: 12 },
      beachSpot1: { type: Number, default: null },
      beachSpot2: { type: Number, default: null },
    },
    required: true,
  },
  datesBeachSpot: {
    type: {
      start: { type: Date },
      end: { type: Date },
    },
  },
  workingTimeBeachSpots: {
    type: {
      startTime: {
        type: String,
        required: true,
        default: "10:00",
        validate: {
          validator: function (value) {
            // Validate the time format (HH:mm)
            const pattern = /^([01]?\d|2[0-3]):([0-5]?\d)$/;
            if (!pattern.test(value)) {
              return false;
            }

            const [hours, minutes] = value.split(":").map(Number);
            return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
          },
          message: (props) =>
            `${props.value} is not a valid time format (HH:mm)!`,
        },
      },
      endTime: {
        type: String,
        required: true,
        default: "21:00",
        validate: {
          validator: function (value) {
            // Validate the time format (HH:mm)
            const pattern = /^([01]?\d|2[0-3]):([0-5]?\d)$/;
            if (!pattern.test(value)) {
              return false;
            }

            const [hours, minutes] = value.split(":").map(Number);
            return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
          },
          message: (props) =>
            `${props.value} is not a valid time format (HH:mm)!`,
        },
      },
    },
  },
  menu: { type: Schema.Types.ObjectId, ref: "Menu", default: null },
  backendEndpoints: {
    type: {
      waiter: { type: String },
      bill: { type: String },
      shisha: { type: String, default: null },
    },
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
        inside: { type: Number, default: 10 },
        outside: { type: Number, default: 20 },
      },
    },
  },
  useGeo: { type: Boolean, default: true },
});

const Rest = models.Rest || model("Rest", RestSchema);

export { RestSchema, Rest };
