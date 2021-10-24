const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "UserModel",
  },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  rating: { type: Number },
  numReviews: { type: String },
});

const ProductModel = mongoose.model("ProductModel", productSchema);

module.exports = ProductModel;
