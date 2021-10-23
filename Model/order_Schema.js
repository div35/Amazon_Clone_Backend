const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "UserModel",
  },
  orderItems: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      Product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "ProductModel",
      },
    },
  ],
  address: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    code: { type: String, required: true },
    country: { type: String, required: true },
  },
  totalValue: {
    type: String,
    required: true
  },
  // payment: {
  //   id: { type: String },
  //   status: { type: String },
  // },
});

const OrderModel = mongoose.model("OrderModel", orderSchema);
module.exports = OrderModel;
