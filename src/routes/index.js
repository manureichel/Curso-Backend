const express = require("express");
const router = express.Router();

const productosService = require("../services/productosService");

router.get("/", (req, res) => {
  res.render("index", {});
});

router.get("/productos", (req, res) => {
  products = productosService.getAllProducts();
  res.render("products", {
    title: "Ver Productos",
    products,
    listExists: products.length > 0,
  });
});

module.exports = router;
