const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
constant

dotenv.config();
const app = express();
app.use(cors());

// handle json request()
app.use(express.json());

let PORT;
process.env.STATUS === "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "First App API",
      version: "1.0.0",
      description: "API documentation for the First App",
    },
  },
  apis: ["./route/*.js"], // Path to your route files to load annotations
};

// Import routes
const StudentRouter = require("./route/student.route");
const constant = require("./constants");

// Use routes
app.use("/api/v1/student", StudentRouter);

mongoose.set("strictQuery", true);

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

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(
    `Server in ${process.env.STATUS} mode, listening on port ${PORT}`
  );
  connection();
});
