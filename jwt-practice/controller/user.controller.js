const helperUtils = require("../utils/helper.util");
const UserService = require("../service/user.service");
const User = require("../models/user.model");

const USerRegister = async (req, res) => {
  const newUser = new User(req.body);
  console.log(newUser);
};

module.exports = { USerRegister };
