const User = require("../models/user.model");

const save = async (obj) => {
  return await obj.save();
};

module.exports = { save };
