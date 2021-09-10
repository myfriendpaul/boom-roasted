import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
