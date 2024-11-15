const express = require("express");
require("dotenv").config();
const cors = require("cors");
const constant = require("./constants");

const app = express()

let PORT;
process.env.STATUS === "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);

app.listen(PORT, ()=>{  console.log(
    `Server in ${process.env.STATUS} mode, listening on port ${PORT}`
  )})