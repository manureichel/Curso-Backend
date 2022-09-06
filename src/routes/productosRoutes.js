const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

router
  .get("/", productosController.getAllProducts)

  .get("/:id", productosController.getProductById)

  .post("/", productosController.addProduct)

  .put("/:id", productosController.updateProduct)

  .delete("/:id", productosController.deleteProduct);

module.exports = router;
