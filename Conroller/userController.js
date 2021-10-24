const asyncHandle = require("express-async-handler");
const UserModel = require("./../Model/user_Schema");
const jwt = require("jsonwebtoken");

const tokenGenerator = (id) => {
  return jwt.sign({ id }, "divyaansh", {
    expiresIn: "5d",
  });
};

const protectRoute = asyncHandle(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, "divyaansh");
      req.user = await UserModel.findById(decode.id);
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized");
  }
});

const login = asyncHandle(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && (await user.passwordMatch(password))) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: tokenGenerator(user._id),
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const signup = asyncHandle(async (req, res) => {
  const { name, email, password } = req.body;
  const isUserExist = await UserModel.findOne({ email });
  if (isUserExist) {
    res.status(400);
    throw new Error("User Already Available");
  }

  const user = await UserModel.create({ name, email, password });
  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: tokenGenerator(user._id),
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("An Error Occured, Please Try Again Later");
  }
});

module.exports = { login, protectRoute, signup };
