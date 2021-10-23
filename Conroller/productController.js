const asyncHandle = require("express-async-handler");
const ProductModel = require("./../Model/product_Schema");

const getAllProducts = asyncHandle(async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
});

const getProduct = asyncHandle(async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: "Product ID is Invalid!!!" });
});

module.exports = { getAllProducts, getProduct };
