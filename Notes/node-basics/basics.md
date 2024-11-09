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
