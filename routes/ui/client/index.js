const express = require("express");

const router = express.Router();

const homeUIRoute = require("./home.ui");
const productUIRoute = require("./product.ui");
const productDetailRoute = require("./product-details.ui");

router.use("/product", productUIRoute);
router.use("/product_detail", productDetailRoute);
router.use("/home", homeUIRoute);

module.exports = router;
