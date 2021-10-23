const asyncHandle = require("express-async-handler");
const OrderModel = require("./../Model/order_Schema");

const addOrder = asyncHandle(async (req, res) => {
  const { cart, address, totalValue } = req.body;
  let User = req.user;
  let user = User._id;
  let orderItems = cart;
  const order = await OrderModel.create({
    user,
    orderItems,
    address,
    totalValue,
  });
  if (user) {
    res.status(201).json(order);
  } else {
    res.status(404);
    throw new Error("An Error Occured, Please Try Again Later");
  }
});

const getUserOrder = asyncHandle(async (req, res) => {
  const orders = await OrderModel.find({ user: req.user._id });
  res.json(orders);
});

module.exports = { addOrder, getUserOrder };
