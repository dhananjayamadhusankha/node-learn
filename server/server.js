const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

let PORT;

process.env.STATUS === "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);

const URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@linkedinclone.tuw69ga.mongodb.net/firstapp?retryWrites=true&w=majority&appName=linkedinClone`;

const connection = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("Connected to Mongoose..!");
    })
    .catch((e) => {
      console.error("Error connecting to Mongoose:\n", e);
    });
};

app.listen(PORT, () => {
  console.log(
    `Server in ${process.env.STATUS} mode, listening on port ${PORT}`
  );
  connection();
});
