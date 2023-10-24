import Order from "../models/Order.js";

const createOrder = async (req, res) => {
  const { email, order_data } = req.body;

  let newOrder = await Order.create({
    email,
    orders: order_data,
  });

  return res.json(newOrder);
};

export { createOrder };
