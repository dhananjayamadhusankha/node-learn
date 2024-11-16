const express = require("express");
require("dotenv").config();
const cors = require("cors");
const constant = require("./constants");
const connection = require("./utils/connection");

const app = express();
app.use(express.json());
app.use(cors());

// import route files
const UserRouter = require("./routes/user.route");

// user route
app.use(constant.API.PREFIX.concat("/user"), UserRouter);

let PORT;
process.env.STATUS === "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);

app.listen(PORT, () => {
  console.log(
    `Server in ${process.env.STATUS} mode, listening on port ${PORT}`
  );
  connection();
});
