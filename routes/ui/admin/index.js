const express = require("express");

const router = express.Router();

router.get("/product", (req, res) => {
  res.json("product");
});

module.exports = router;
