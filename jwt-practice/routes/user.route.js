const express = require("express");
const { USerRegister } = require("../controller/user.controller");

const UserRouter = express.Router();

UserRouter.post("/register", USerRegister);

module.exports = UserRouter;
