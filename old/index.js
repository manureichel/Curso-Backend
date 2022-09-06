const express = require("express");
const app = express();
const { Contenedor } = require("./archivos.js");

let productos;

(async () => {
  productos = new Contenedor("./products.txt");
})();

app.get("/", (req, res) => {
  res.send("Endpoints válidos: /productos y /productoRandom");
});

app.get("/productos", async (req, res) => {
  let allProducts = await productos.getAll();
  res.send(allProducts);
});

app.get("/productoRandom", async (req, res) => {
  let random = Math.floor(Math.random() * productos.lastId) + 1;
  let randomProduct = await productos.getById(random);
  res.send(randomProduct);
});

app.listen(8080, () => {
  console.log("Servidor de Express activo");
});
