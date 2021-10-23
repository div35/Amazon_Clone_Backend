const { addOrder, getUserOrder } = require("./../Conroller/orderConroller");
const { protectRoute } = require("./../Conroller/userController");
const express = require("express");

const router = express.Router();

router.route("/placeOrder").post(protectRoute, addOrder);
router.route("/getAllOrders").get(protectRoute, getUserOrder);

module.exports = router;
