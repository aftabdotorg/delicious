import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  orders: {
    type: [Schema.Types.Mixed],
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
