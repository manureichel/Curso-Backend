const { Contenedor } = require("./contenedor");

let mensajes;

(async () => {
  mensajes = new Contenedor("./mensajes.json");
})();

module.exports = { mensajes };
