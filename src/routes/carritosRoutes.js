const express = require("express");
const router = express.Router();
const carritosController = require("../controllers/carritosController");

router
  .post("/", carritosController.addCart)

  .delete("/:id", carritosController.deleteCart)

  .get("/:id/productos", carritosController.getAllProductsInCart)

  .post("/:id/productos", carritosController.addProduct)

  .delete("/:id/productos/:id_prod", carritosController.deleteProduct);

module.exports = router;
