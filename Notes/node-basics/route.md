# Router

## Intial Configeration

```
const express = require("express");

const StudentRouter = express.Router();


module.exports = StudentRouter;
```

## Get Method

```
StudentRouter.get("/", (req, res) => {
  return res.send({
    message: "Student",
  });
});
```

## Post Method

## Put Method

## Delete Method
