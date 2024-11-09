# Node JS basics

## import express

```
const express = require("express");

const app = express();
```

## import dotenv

```
const dotenv = require("dotenv");
dotenv.config();
```

## Intialized Port

```
let PORT;

process.env.STATUS === "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);
```

## MongoDB Connection

```
const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("Connected to Mongoose..!");
    })
    .catch((e) => {
      console.log("Error connecting to Mongoose.." + e);
    });
};

```
