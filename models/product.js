import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: false,
    },
    imgURL: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("products", Product);
