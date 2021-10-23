const express = require("express");
const dbConnect = require("./Model/config");
const app = express();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cors = require("cors");

dbConnect();

app.use(cors());

app.use(express.json());

app.use("/products", productRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log("Server Running on Port 8080");
});
