const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

let PORT;

process.env.STATUS == "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);

app.listen(PORT, () => {
  console.log(
    `Server in ${process.env.STATUS} mode, listening on port ${PORT}`
  );
});
