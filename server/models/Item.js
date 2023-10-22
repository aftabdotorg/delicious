import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
  CategoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  options: {
    type: [Schema.Types.Mixed],
  },
  description: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
