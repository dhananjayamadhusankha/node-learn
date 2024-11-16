const mongoose = require("mongoose");

const URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@linkedinclone.tuw69ga.mongodb.net/jwt_db?retryWrites=true&w=majority&appName=linkedinClone`;

const connection = async () => {
  await mongoose
    .connect(URL)
    .then(() => {
      console.log("Connected to Mongoose..!");
    })
    .catch((e) => {
      console.error("Error connecting to Mongoose:\n", e);
    });
};

module.exports = connection;
