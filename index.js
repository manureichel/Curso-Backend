/* >> Consigna:
Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.
*/

const express = require("express");
const app = express();
const { Contenedor } = require("./archivos.js");

let productos;

(async () => {
  productos = new Contenedor("./products.txt");
})();

app.get("/productos", async (req, res) => {
  let allProducts = await productos.getAll();
  res.json(allProducts);
});

app.get("/productoRandom", async (req, res) => {
  let random = Math.floor(Math.random() * productos.lastId) + 1;
  let randomProduct = await productos.getById(random);
  res.json(randomProduct);
});

app.listen(8080, () => {
  console.log("Servidor de Express activo");
});
