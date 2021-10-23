const {
  getAllProducts,
  getProduct,
} = require("./../Conroller/productController");
const express = require("express");

const router = express.Router();

router.route("/").get(getAllProducts);

router.route("/:id").get(getProduct);

module.exports = router;
