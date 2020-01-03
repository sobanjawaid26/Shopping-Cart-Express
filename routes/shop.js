const express = require("express");

const router = express.Router();

// use allows to add midldleware functions
router.use("/", (req, res, next) => {
  //   console.log("In the middleware");
  // next is used send to necxt middleware
  //   next();
  res.send("<h1>Hello From Express</h1>");
});

module.exports = router;
