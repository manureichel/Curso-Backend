const express = require("express");
const router = express.Router();
const carritosController = require("../controllers/carritosController");

router
  .post("/", carritosController.addNewCart)

  .delete("/:id", carritosController.deleteCart)

  .get("/:id/productos", carritosController.getProducts)

  .post("/:id/productos", carritosController.addProducts)

  .delete("/:id/productos/:id_prod", carritosController.deleteProduct);

module.exports = router;
