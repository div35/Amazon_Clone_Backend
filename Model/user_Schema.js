const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: String, required: true, default: false },
});

userSchema.methods.passwordMatch = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;
