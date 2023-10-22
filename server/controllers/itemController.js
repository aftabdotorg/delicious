import Item from "../models/Item.js";

const fetchItems = async (req, res) => {
  try {
    const items = await Item.find({});
    return res.status(200).json(items);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export { fetchItems };
