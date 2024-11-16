const bcrypt = require("bcryptjs");

const SALT = process.env.GEN_SALT;

const getEncryptedPassword = async (password) => {
  const salt = await bcrypt.genSalt(Number(SALT));
  return await bcrypt.hash(password, salt);
};

module.exports = { getEncryptedPassword };
