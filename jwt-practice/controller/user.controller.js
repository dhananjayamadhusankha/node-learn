const helperUtils = require("../utils/helper.util");
const UserService = require("../service/user.service");
const User = require("../models/user.model");
const NotFoundError = require("../error/error.class/NotFoundError");

const USerRegister = async (req, res) => {
  const newUser = new User(req.body);
  throw new NotFoundError("not found")
  console.log(newUser);
};

module.exports = { USerRegister };
