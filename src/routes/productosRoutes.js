const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = require("../middlewares/authMiddleware");

router
  .get("/", productosController.getAllProducts)

  .get("/:id", productosController.getProductById)

  .post("/", authMiddleware, productosController.addProduct)

  .put("/:id", authMiddleware, productosController.updateProduct)

  .delete("/:id", authMiddleware, productosController.deleteProduct);

module.exports = router;
