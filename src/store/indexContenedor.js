const { Contenedor } = require("./contenedor");

const { ContenedorDB } = require("./contenedorDB");
const { tableCreator } = require("./db/tableCreator");

const { configMariaDb, configSQlite3 } = require("./db/dbConfig");

const { productSchema } = require("./db/productSchema");
const tableNameProducts = "products";

const { messageSchema } = require("./db/messageSchema");
const tableNameMessages = "messages";

let mensajes;

(async () => {
  //mensajes = new Contenedor("./mensajes.json");

  tableCreator(configMariaDb, "products", productSchema);
  productos = new ContenedorDB(configMariaDb, tableNameProducts);

  tableCreator(configSQlite3, "messages", messageSchema);
  mensajes = new ContenedorDB(configSQlite3, tableNameMessages);
})();

module.exports = { productos, mensajes };
